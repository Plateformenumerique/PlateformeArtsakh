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
        Nous ne collectons aucune donnée personnelle via des cookies ou d'autres technologies de suivi. Notre application ne stocke ni n'utilise de cookies.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Hébergement</h2>
      <p className="mb-4">
        Notre application est hébergée sur <strong>Hostinger</strong>, un fournisseur d'hébergement fiable et sécurisé. Pour plus d'informations sur leurs pratiques de confidentialité, veuillez consulter leur site web.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Liens</h2>
      <p className="mb-4">
        Tout lien avec le site de <strong>PLATEFORME NUMERIQUE en soutien aux déplacés artsakhiotes</strong> ou utilisant le logo de la plateforme ne pourra se faire qu’après accord écrit de la plateforme. Les sites qui pourraient avoir un lien hypertexte avec ce site ne sont pas sous le contrôle de la plateforme. Par conséquent, la plateforme ne saurait être responsable de leur contenu. Les risques liés à l’utilisation de ces sites n’incombent qu’à leur utilisateur qui doit se conformer à leurs conditions d’utilisation.
      </p>
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
        <li>
          Par email : <a href="mailto:secretariat@soutien-artsakh.eu" className="text-blue-500 underline">secretariat@soutien-artsakh.eu</a>
        </li>
        <li>Par téléphone : +123456789</li>
      </ul>
    </div>
  );
};

export default PrivatePolicy;