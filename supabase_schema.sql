-- =================================================================
-- SCHEMA DÉFINITIF POUR HEALTHMIND (PostgreSQL 13+)
-- Combine la structure détaillée de l'utilisateur avec les meilleures pratiques
-- de sécurité et de performance.
-- =================================================================

-- -----------------------------------------------------------------
-- FONCTION TRIGGER pour mettre à jour le champ `updated_at`
-- -----------------------------------------------------------------
-- Cette fonction sera appelée automatiquement avant chaque mise à jour de ligne.
CREATE OR REPLACE FUNCTION public.handle_updated_at() 
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =================================================================
-- Table: entries
-- =================================================================
CREATE TABLE public.entries (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type = ANY (ARRAY['text', 'audio', 'image', 'journal', 'note'])),
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  mood INT CHECK (mood >= -10 AND mood <= 10),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index et Trigger pour `entries`
CREATE INDEX ON public.entries(user_id);
CREATE TRIGGER on_entries_update
  BEFORE UPDATE ON public.entries
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Sécurité RLS pour `entries`
ALTER TABLE public.entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent gérer leurs propres entrées" 
ON public.entries FOR ALL USING (auth.uid() = user_id);

-- =================================================================
-- Table: progress
-- =================================================================
CREATE TABLE public.progress (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  metric TEXT NOT NULL CHECK (metric = ANY (ARRAY['poids', 'humeur', 'sommeil', 'energie', 'stress', 'motivation', 'sante_mentale', 'condition_physique'])),
  value FLOAT8 NOT NULL,
  unit TEXT CHECK (unit = ANY (ARRAY['kg', 'points', 'heures', 'niveau', 'pourcentage'])),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index et Trigger pour `progress`
CREATE INDEX ON public.progress(user_id);
CREATE TRIGGER on_progress_update
  BEFORE UPDATE ON public.progress
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Sécurité RLS pour `progress`
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent gérer leur propre progression" 
ON public.progress FOR ALL USING (auth.uid() = user_id);

-- =================================================================
-- REALTIME : Active la diffusion en temps réel pour les tables.
-- =================================================================
ALTER PUBLICATION supabase_realtime ADD TABLE public.entries, public.progress;