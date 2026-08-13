export const nav = [
  { href: "/home", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/partners", label: "Nos partenaires" },
];

export const kpis = [
  { val: "42", label: "logements confiés" },
  { val: "+28 %", label: "de revenus la première année" },
  { val: "18 min", label: "de délai de réponse moyen" },
];

export const etapes = [
  {
    num: "01",
    titre: "Contact",
    texte: "Vingt minutes au téléphone pour comprendre votre bien et vos attentes.",
  },
  {
    num: "02",
    titre: "Visite du logement",
    texte: "Audit sur place, conseils et estimation chiffrée de vos revenus.",
  },
  {
    num: "03",
    titre: "Mise en ligne",
    texte: "Shooting, annonces, tarifs, calendriers : nous faisons tout.",
  },
  {
    num: "04",
    titre: "Gestion complète",
    texte: "Rapport et versement de vos revenus chaque mois. Rien d'autre à faire.",
  },
];

export const services = [
  {
    num: "I",
    titre: "Gestion des voyageurs",
    texte: "Sélection, échanges avant séjour, assistance 7 j/7.",
    long: "Nous filtrons chaque demande, répondons à toutes les questions avant l'arrivée et restons joignables pendant le séjour. Les avis sont rédigés et suivis par nos soins.",
    img: "/images/svc-voyageurs.png",
  },
  {
    num: "II",
    titre: "Check-in / Check-out",
    texte: "Accueil en personne ou accès autonome, état des lieux photographié.",
    long: "Accueil physique jusqu'à 23 h, ou accès sécurisé selon votre bien. État des lieux photographié à chaque arrivée et départ, archivé et partagé avec vous.",
    img: "/images/svc-checkin.png",
  },
  {
    num: "III",
    titre: "Ménage",
    texte: "Équipes salariées, protocole de 48 points, contrôle systématique.",
    long: "Ménage professionnel selon un protocole exclusif à chaque bien. Contrôle qualité avec photos avant chaque arrivée. Jamais de sous-traitance non maitrisée.",
    img: "/images/svc-menage.png",
  },
  {
    num: "IV",
    titre: "Blanchisserie",
    texte: "Linge fourni, deux jeux par lit, pressing professionnel.",
    long: "Un linge impeccable, traité selon des standards hôteliers, pour garantir confort, fraîcheur et élégance à chaque voyageur.",
    img: "/images/svc-blanchisserie.png",
  },
  {
    num: "V",
    titre: "Gestion des annonces",
    texte: "Airbnb et Booking synchronisés, tarifs révisés chaque semaine.",
    long: "Une annonce pensée pour séduire, optimisée pour performer et pour maximiser votre taux de réservation.",
    img: "/images/svc-annonces.png",
  },
  {
    num: "VI",
    titre: "Réassort",
    texte: "Produits d'accueil, café et consommables suivis en continu.",
    long: "Suivi des stocks et réapprovisionnement des produits d'accueil, de l'épicerie de base et des consommables, refacturés au coût réel.",
    img: "/images/svc-reassort.png",
  },
  {
    num: "VII",
    titre: "Coordination des litiges",
    texte: "Artisans mobilisés sous 48 h, interventions validées avec vous.",
    long: "Coordination des réparations et gestion des litiges avec un suivi réactif et une communication transparente.",
    img: "/images/svc-reparations.png",
  },
];

export const formules = [
  {
    nom: "Confort",
    prix: "20 %",
    inclus: [
      "Annonces et tarification, voyageurs 7 j/7",
      "Ménage entre chaque séjour",
      "Linge fourni et blanchi",
      "Accueil en personne",
      "Réassort des consommables",
      "Rapport mensuel de revenus",
    ],
  },
  {
    nom: "Signature",
    prix: "25 %",
    inclus: [
      "Tout Confort",
      "Annonces et tarification",
      "Voyageurs 7 j/7",
      "Interlocuteur dédié joignable",
      "Coordination des travaux",
      "Entretien extérieur et jardin",
      "Conciergerie sur mesure",
    ],
  },
];

export const options = [
  { nom: "Shooting photo professionnel", prix: "390 €" },
  { nom: "Ménage grand format (plus de 150 m²)", prix: "145 €" },
  { nom: "Accueil de nuit après 23 h", prix: "60 €" },
  { nom: "Ouverture et fermeture saisonnière", prix: "250 €" },
  { nom: "Entretien du jardin", prix: "110 € / mois" },
  { nom: "Déneigement des accès", prix: "sur demande" },
];

export const valeurs = [
  {
    titre: "Discrétion",
    texte: "Votre bien, vos revenus et vos voyageurs ne sortent jamais de notre cadre de confidentialité.",
  },
  {
    titre: "Exigence",
    texte: "Équipes salariées, protocoles écrits, contrôles photographiques à chaque passage.",
  },
  {
    titre: "Limite",
    texte: "Nombre de mandats plafonné pour préserver le niveau de service promis.",
  },
];

export const champs = [
  { name: "nom", label: "Prénom et nom", ph: "Hélène Marchand" },
  { name: "email", label: "E-mail", ph: "helene.marchand@mail.com" },
  { name: "telephone", label: "Téléphone", ph: "+33 6 12 34 56 78" },
  { name: "commune", label: "Commune du logement", ph: "Saint-Gervais-les-Bains" },
];
