// app/page.tsx

'use client'; // Indique que ce composant est un Client Component dans Next.js 13+

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Pour la redirection après connexion
import { supabase } from '../supabaseClient'; // Importe le client Supabase

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Erreur de connexion : ${error.message}`);
    } else {
      setMessage('Connexion réussie ! Redirection...');
      router.push('/dashboard'); // Redirige vers le tableau de bord
    }
    setLoading(false);
  };

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Erreur d'inscription : ${error.message}`);
    } else {
      setMessage('Inscription réussie ! Veuillez vérifier votre email pour confirmer votre compte.');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">HealthMind</h1>
        <p className="text-center text-gray-400">Connectez-vous pour commencer</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-400 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 text-gray-200 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-bold text-gray-400 block">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 text-gray-200 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4" style={{ color: message.includes('Erreur') ? 'red' : 'green' }}>
            {message}
          </p>
        )}

        <p className="text-sm text-center text-gray-400">
          Pas encore de compte ?{" "}
          <a href="#" onClick={handleSignUp} className="font-bold text-blue-500 hover:underline">
            S&apos;inscrire
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
