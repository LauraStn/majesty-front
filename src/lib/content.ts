export const nav = [
  { href: "/home", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/pricing", label: "Tarifs" },
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
    detail: "Réponse moyenne : 18 minutes",
    img: "/images/svc-voyageurs.png",
  },
  {
    num: "II",
    titre: "Check-in / Check-out",
    texte: "Accueil en personne ou accès autonome, état des lieux photographié.",
    long: "Accueil physique jusqu'à 23 h, ou accès sécurisé selon votre bien. État des lieux photographié à chaque arrivée et départ, archivé et partagé avec vous.",
    detail: "Accueil jusqu'à 23 h",
    img: "/images/svc-checkin.png",
  },
  {
    num: "III",
    titre: "Ménage",
    texte: "Équipes salariées, protocole de 48 points, contrôle systématique.",
    long: "Ménage réalisé par nos équipes salariées selon un protocole écrit de 48 points, avec contrôle photographique avant chaque nouvelle arrivée. Jamais sous-traité à l'aveugle.",
    detail: "Protocole 48 points",
    img: "/images/svc-menage.png",
  },
  {
    num: "IV",
    titre: "Blanchisserie",
    texte: "Linge fourni, deux jeux par lit, pressing professionnel.",
    long: "Draps en coton lavé et serviettes épaisses fournis, deux jeux par lit en rotation, traitement en blanchisserie professionnelle, remplacement dès les premiers signes d'usure.",
    detail: "Linge inclus et renouvelé",
    img: "/images/svc-blanchisserie.png",
  },
  {
    num: "V",
    titre: "Gestion des annonces",
    texte: "Airbnb et Booking synchronisés, tarifs révisés chaque semaine.",
    long: "Rédaction et optimisation des annonces, direction du shooting, synchronisation des calendriers et révision hebdomadaire des tarifs selon la saison et les événements locaux.",
    detail: "Airbnb · Booking · direct",
    img: "/images/svc-annonces.png",
  },
  {
    num: "VI",
    titre: "Réassort",
    texte: "Produits d'accueil, café et consommables suivis en continu.",
    long: "Suivi des stocks et réapprovisionnement des produits d'accueil, de l'épicerie de base et des consommables, refacturés au coût réel.",
    detail: "Refacturation au coût réel",
    img: "/images/svc-reassort.png",
  },
  {
    num: "VII",
    titre: "Coordination des réparations",
    texte: "Artisans mobilisés sous 48 h, interventions validées avec vous.",
    long: "Réseau d'artisans locaux mobilisable sous 48 h. Nous obtenons les devis, vous validez au-delà d'un seuil convenu, nous coordonnons et contrôlons le travail rendu.",
    detail: "Intervention sous 48 h",
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
