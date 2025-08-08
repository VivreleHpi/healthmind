// src/app/page.tsx

import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">HealthMind</h1>
        <p className="text-center text-gray-400">Connectez-vous pour commencer</p>
        
        <form className="space-y-6">
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
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
          >
            Se connecter
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          Pas encore de compte ?{" "}
          <a href="#" className="font-bold text-blue-500 hover:underline">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;