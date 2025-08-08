# HealthMind — Agent vocal intelligent pour le bien-être

## Introduction

HealthMind est une plateforme web interactive qui aide les utilisateurs à suivre leur bien-être mental et physique. Grâce à l’intelligence artificielle, elle permet :

*   d’envoyer des notes vocales, images ou commentaires
*   de recevoir des réponses personnalisées (texte ou audio)
*   de suivre leur progression via des graphiques dynamiques
*   le tout avec une authentification sécurisée par email

## Stack technique

| Composant      | Outil                                |
| -------------- | ------------------------------------ |
| Hébergement    | Render (backend) + Vercel (frontend) |
| Backend API    | Python (FastAPI)                     |
| Auth & DB      | Supabase                             |
| NLP            | GPT-OSS-120B via Hugging Face        |
| STT            | Whisper (auto-hébergé)               |
| TTS            | gTTS (Google Text-to-Speech)         |
| Image analysis | LogMeal API (gratuit)                |
| Frontend       | React / Next.js                      |
| Graphiques     | Recharts / Chart.js                  |
| CI/CD          | GitHub                               |

## Fonctionnalités

*   🔐 Authentification par email (Supabase)
*   🎤 Reconnaissance vocale (Whisper)
*   🧠 Réponse intelligente (GPT-OSS-120B)
*   🗣️ Synthèse vocale (gTTS)
*   🖼️ Analyse d’image (LogMeal)
*   📊 Suivi graphique des progrès (poids, humeur, nutrition)
*   🗂️ Historique des interactions

## Structure du projet

```
healthmind/
├── backend/
│   ├── main.py
│   ├── routes/
│   │   ├── transcribe.py
│   │   ├── analyze.py
│   │   ├── speak.py
│   │   └── progress.py
│   └── requirements.txt
├── frontend/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   └── login.tsx
│   ├── components/
│   │   ├── AudioRecorder.tsx
│   │   ├── ImageUploader.tsx
│   │   ├── ProgressChart.tsx
│   └── supabaseClient.ts
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
```

## Installation

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/ton-utilisateur/healthmind.git
    cd healthmind
    ```

2.  **Configurer Supabase**
    *   Crée un projet Supabase
    *   Active l’authentification par email
    *   Crée les tables `users`, `entries`, `progress`
    *   Copie les clés dans `.env` du frontend et backend

3.  **Déployer le backend sur Render**
    *   Crée un service web Python
    *   Ajoute les variables d’environnement :
        *   `SUPABASE_URL`
        *   `SUPABASE_KEY`
        *   `HF_API_KEY`

4.  **Déployer le frontend sur Vercel**
    *   Connecte ton repo GitHub
    *   Ajoute les variables d’environnement Supabase

## Exemple d’utilisation

1.  L’utilisateur se connecte avec son email
2.  Il envoie une note vocale ou une image
3.  Le backend transcrit l’audio, analyse le contenu
4.  Il reçoit une réponse écrite ou vocale
5.  Sa progression est enregistrée et affichée en graphique

## Suivi de progression

*   **Poids** (auto-déclaré ou estimé via image)
*   **Humeur** (détectée via NLP)
*   **Fréquence des interactions**
*   **Calories estimées**

## Ressources

*   [GPT-OSS-120B sur Hugging Face](https://huggingface.co/ciara/gpt-oss-120b-instruct)
*   [Whisper GitHub](https://github.com/openai/whisper)
*   [Supabase Docs](https://supabase.com/docs)
*   [gTTS GitHub](https://github.com/pndurette/gTTS)
*   [LogMeal API](https://logmeal.es/api/)
