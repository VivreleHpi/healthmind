// healthmind/frontend/app/dashboard/layout.tsx
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

// Initialize Supabase client (ensure these are loaded from environment variables in a real app)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/'); // Redirect to login if not authenticated
  }

  const handleLogout = async () => {
    'use server';
    await supabase.auth.signOut();
    redirect('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          HealthMind
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                Tableau de Bord
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-gray-700">
                Profil
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
                Paramètres
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <p className="text-sm">Connecté en tant que: {user.email}</p>
          <form action={handleLogout}>
            <button type="submit" className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Déconnexion
            </button>
          </form>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Tableau de Bord</h1>
          {/* User info or other header elements can go here */}
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
