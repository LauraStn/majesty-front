export const nav = [
  { href: "/home", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/pricing", label: "Tarifs" },
  // { href: "/partners", label: "Nos partenaires" },
  // { href: "/recommendations", label: "Nos recommandations" },
  { href: "/properties", label: "Nos biens" },
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
    nom: "Standard",
    prix: "20 %",
    inclus: [
      "La rédaction de l'annonce",
      "Réponse 7 j/7",
      "Gestion des réservations",
      "Accueil et disponibilité pour les voyageurs",
      "États des lieux",
      "Blanchisserie",
      "Rapports mensuels des revenus",
    ],
  },
  {
    nom: "Confort",
    prix: "25 %",
    inclus: [
      "Tout le Standard",
      "Frais de mise en place du logement",
      "Coordination des travaux et de la maintenance",
      "Entretien extérieur et jardin",
      "Home staging",
    ],
  },
  {
    nom: "Premium",
    prix: "30 %",
    inclus: [
      "Tout le Confort",
      "Literie et blanchisserie hôtelière",
      "Photos professionnelles",
      "Traiteur (panier d'accueil, brunch, cuisinier sur place, etc.)",
    ],
  },
];

export const options = [
  { nom: "Rédaction d'annonce", prix: "À partir de 60 € / annonce" },
  { nom: "Rapport mensuel des revenus", prix: "150 €" },
  { nom: "Conseils en aménagement (home staging)", prix: "Devis à partir de 50 €" },
  { nom: "Photos professionnelles", prix: "Devis à effectuer selon le bien" },
  { nom: "Literie et blanchisserie", prix: "Devis selon besoin" },
  { nom: "Traiteur", prix: "Devis selon prestations" },
  { nom: "Mise en place du logement", prix: "129 €" },
  { nom: "Home sitting", prix: "Abonnement par mois à convenir selon besoin" },
];

export const biens = [
  {
    nom: "Chalet Alpina",
    lieu: "Chamonix-Mont-Blanc",
    type: "Chalet",
    chambres: 4,
    voyageurs: 8,
    tags: ["Vue Mont-Blanc", "Sauna", "Cheminée"],
    texte:
      "Chalet en bois et pierre au pied des pistes, vue directe sur le massif du Mont-Blanc.",
    imgExt: "/images/properties/chalet-alpina-ext.jpg",
    imgInt: "/images/properties/chalet-alpina-int.jpg",
  },
  {
    nom: "Chalet Cristal",
    lieu: "Megève",
    type: "Chalet",
    chambres: 3,
    voyageurs: 6,
    tags: ["Ski aux pieds", "Terrasse plein sud", "Fondue sur demande"],
    texte:
      "Ambiance montagnarde raffinée à deux pas du centre de Megève, ski aux pieds l'hiver.",
    imgExt: "/images/properties/chalet-cristal-ext.jpg",
    imgInt: "/images/properties/chalet-cristal-int.jpg",
  },
  {
    nom: "Villa Léman",
    lieu: "Cologny, Genève",
    type: "Villa",
    chambres: 5,
    voyageurs: 10,
    tags: ["Bord du lac", "Piscine", "Jardin clos"],
    texte:
      "Villa contemporaine les pieds dans l'eau, jardin arboré et accès privé au lac Léman.",
    imgExt: "/images/properties/villa-leman-ext.jpg",
    imgInt: "/images/properties/villa-leman-int.jpg",
  },
  {
    nom: "Villa Panorama",
    lieu: "Saint-Gervais-les-Bains",
    type: "Villa",
    chambres: 4,
    voyageurs: 8,
    tags: ["Jacuzzi extérieur", "Vue vallée", "Home cinéma"],
    texte:
      "Vue dégagée sur la vallée, jacuzzi extérieur chauffé toute l'année et grand séjour lumineux.",
    imgExt: "/images/properties/villa-panorama-ext.jpg",
    imgInt: "/images/properties/villa-panorama-int.jpg",
  },
  {
    nom: "Appartement du Lac",
    lieu: "Annecy",
    type: "Appartement",
    chambres: 2,
    voyageurs: 4,
    tags: ["Vue lac d'Annecy", "Balcon", "Proche vieille ville"],
    texte:
      "Appartement lumineux à deux pas des rives du lac, balcon filant et vue dégagée.",
    imgExt: "/images/properties/appt-lac-ext.jpg",
    imgInt: "/images/properties/appt-lac-int.jpg",
  },
  {
    nom: "Appartement Vieille Ville",
    lieu: "Annecy",
    type: "Appartement",
    chambres: 1,
    voyageurs: 2,
    tags: ["Vieille ville", "Poutres apparentes", "Canaux à pied"],
    texte:
      "Pied-à-terre de charme au cœur de la vieille ville, entre canaux et façades colorées.",
    imgExt: "/images/properties/appt-vieilleville-ext.jpg",
    imgInt: "/images/properties/appt-vieilleville-int.jpg",
  },
  {
    nom: "Chalet Étoile",
    lieu: "Évian-les-Bains",
    type: "Chalet",
    chambres: 4,
    voyageurs: 8,
    tags: ["Vue sur le lac Léman", "Jardin arboré", "Accès plage privée"],
    texte:
      "Chalet traditionnel posé face au lac, jardin arboré et vue imprenable sur les sommets.",
    imgExt: "/images/properties/chalet-etoile-ext.jpg",
    imgInt: "/images/properties/chalet-etoile-int.jpg",
  },
  {
    nom: "Appartement Ouchy",
    lieu: "Lausanne",
    type: "Appartement",
    chambres: 2,
    voyageurs: 4,
    tags: ["Vue lac Léman", "Balcon", "Proche embarcadère"],
    texte:
      "Appartement contemporain à deux pas du port d'Ouchy, balcon face au lac.",
    imgExt: "/images/properties/appt-ouchy-ext.jpg",
    imgInt: "/images/properties/appt-ouchy-int.jpg",
  },
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
