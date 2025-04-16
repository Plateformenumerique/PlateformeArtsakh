import React from 'react';

const PrivatePolicy = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
      <p className="mb-4">
        Votre vie privée est importante pour nous. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et comment nous les protégeons.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Informations que nous collectons</h2>
      <p className="mb-4">
        Nous collectons différents types d'informations pour diverses raisons afin de vous fournir et d'améliorer notre service.
      </p>
      <h3 className="text-xl font-medium mb-2">Types de données collectées</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Cookies obligatoires du navigateur</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Protection des données</h2>
      <p className="mb-4">
        La sécurité de vos données est importante pour nous, mais n'oubliez pas qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sécurisée à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Modifications de cette politique de confidentialité</h2>
      <p className="mb-4">
        Nous pouvons mettre à jour notre politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
      </p>
      <p className="mb-4">
        Nous vous conseillons de consulter cette politique de confidentialité périodiquement pour tout changement. Les modifications apportées à cette politique de confidentialité sont effectives lorsqu'elles sont publiées sur cette page.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Nous contacter</h2>
      <p className="mb-4">
        Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Par email : secretariat@soutien-artsakh.eu</li>
        <li>Par téléphone : +123456789</li>
      </ul>
    </div>
  );
};

export default PrivatePolicy;