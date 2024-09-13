import React from "react";

const Mentions = () => {
  return (
    <>
      <section className="relative bg-green text-yellow min-h-screen w-full py-16 px-8 flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-5xl sm:text-8xl font-bold mb-4" style={{ fontFamily: "dm-display" }}>
      Mentions
    </h1>
    <h1 className="text-5xl sm:text-8xl font-bold" style={{ fontFamily: "dm-display" }}>
      Légales
    </h1>
  </div>
</section>
<section className="px-8 py-16 md:px-32 md:py-32 text-[#1C471F]">
  <div className="space-y-8 text-left">
    <div>
      <h2 className="text-2xl font-bold mb-2">1. Éditeur du site</h2>
      <p className="text-justify">
        Le site internet versel.bookish.com est édité par :
        <br />
        - Raison sociale : Bookish
        <br />
        - Adresse du siège social : 47 BD de Pésaro, 92000 Nanterre
        <br />
        - Numéro SIRET : DEF45214RFR
        <br />
        - Numéro de téléphone : +33633333333
        <br />
        - Adresse e-mail : contact@bookish.fr
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">2. Hébergement</h2>
      <p className="text-justify">
        Le site est hébergé par :
        <br />
        - Nom de l’hébergeur : Versel
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">3. Propriété intellectuelle</h2>
      <p className="text-justify">
        L'ensemble des éléments présents sur le Site (textes, graphismes, images, logos, icônes, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Bookish.
        <br />
        <br />
        Toute utilisation non autorisée du Site ou de l'un quelconque de ses éléments sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">4. Protection des données personnelles</h2>
      <p className="text-justify">
        Conformément à la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD), vous disposez de droits relatifs à vos données personnelles collectées via le Site. Vous pouvez consulter notre <a href="#" className="text-blue-500">Politique de Confidentialité</a> pour plus de détails.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">5. Responsabilité</h2>
      <p className="text-justify">
        Bookish s'efforce de fournir des informations exactes et à jour sur le Site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou la mise à jour des informations présentes sur le Site.
        <br />
        <br />
        Bookish ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du Site, de l'impossibilité d'accéder au Site ou des éventuelles erreurs ou omissions dans le contenu du Site.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">6. Liens hypertextes</h2>
      <p className="text-justify">
        Le Site peut contenir des liens vers des sites externes. Bookish ne saurait être tenu responsable du contenu de ces sites tiers ni des dommages ou pertes résultant de leur utilisation.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">7. Droit applicable et juridiction</h2>
      <p className="text-justify">
        Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">8. Contact</h2>
      <p className="text-justify">
        Pour toute question relative aux présentes mentions légales ou au fonctionnement du Site, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:contact@bookish.fr" className="text-blue-500">contact@bookish.fr</a>
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default Mentions;
