// healthmind/frontend/app/dashboard/page.tsx

const DashboardPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Aperçu Général</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Statistique Clé 1</h3>
          <p className="text-gray-700">Donnée importante ici.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Statistique Clé 2</h3>
          <p className="text-gray-700">Autre donnée importante.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">Statistique Clé 3</h3>
          <p className="text-gray-700">Encore une donnée.</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Activités Récentes</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Activité 1 : Quelque chose s'est passé.</li>
          <li className="mb-2">Une autre action a été enregistrée.</li>
          <li>Dernière mise à jour.</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
