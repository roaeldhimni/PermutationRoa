const gradesLimites = [
    {
        "nom": "PA",
        "key": "grade_1"
    },
    {
        "nom": "PH",
        "key": "grade_2"
    },
    {
        "nom": "PES",
        "key": "grade_3"
    },
    {
        "nom": "Technicien",
        "key": "grade_4"
    },
    {
        "nom": "Administrateur",
        "key": "grade_5"
    },
    {
        "nom": "PESQ",
        "key": "grade_6"
    },
    {
        "nom": "Ingenieur",
        "key": "grade_7"
    }
]
const villesLimites = [
  {"nom":"Toutes les villes"},
    { "nom": "Agadir", "key": 1 },
    { "nom": "Al Hoceima", "key": 2 },
    { "nom": "Assilah", "key": 3 },
    { "nom": "Azemmour", "key": 4 },
    { "nom": "Azrou", "key": 5 },
    { "nom": "Beni Mellal", "key": 6 },
    { "nom": "Benslimane", "key": 7 },
    { "nom": "Berkane", "key": 8 },
    { "nom": "Berrechid", "key": 9 },
    { "nom": "Boujdour", "key": 10 },
    { "nom": "Boulemane", "key": 11 },
    { "nom": "Casablanca", "key": 12 },
    { "nom": "Chefchaouen", "key": 13 },
    { "nom": "Dakhla", "key": 14 },
    { "nom": "El Hajeb", "key": 15 },
    { "nom": "El Jadida", "key": 16 },
    { "nom": "El Kelaa des Sraghna", "key": 17 },
    { "nom": "Errachidia", "key": 18 },
    { "nom": "Es-Semara", "key": 19 },
    { "nom": "Essaouira", "key": 20 },
    { "nom": "Figuig", "key": 21 },
    { "nom": "Fès", "key": 22 },
    { "nom": "Guelmim", "key": 23 },
    { "nom": "Ifrane", "key": 24 },
    { "nom": "Khemisset", "key": 25 },
    { "nom": "Khenifra", "key": 26 },
    { "nom": "Khouribga", "key": 27 },
    { "nom": "Kénitra", "key": 28 },
    { "nom": "Larache", "key": 29 },
    { "nom": "Laâyoune", "key": 30 },
    { "nom": "Meknès", "key": 31 },
    { "nom": "Mohammédia", "key": 32 },
    { "nom": "Nador", "key": 33 },
    { "nom": "Ouarzazate", "key": 34 },
    { "nom": "Ouazzane", "key": 35 },
    { "nom": "Oujda", "key": 36 },
    { "nom": "Rabat", "key": 37 },
    { "nom": "Safi", "key": 38 },
    { "nom": "Salé", "key": 39 },
    { "nom": "Sefrou", "key": 40 },
    { "nom": "Sidi Bennour", "key": 41 },
    { "nom": "Sidi Kacem", "key": 42 },
    { "nom": "Tan-Tan", "key": 43 },
    { "nom": "Tanger", "key": 44 },
    { "nom": "Taourirt", "key": 45 },
    { "nom": "Taroudant", "key": 46 },
    { "nom": "Taza", "key": 47 },
    { "nom": "Tiznit", "key": 48 },
    { "nom": "Témara", "key": 49 },
    { "nom": "Tétouan", "key": 50 }
]
const specialitesLimites = [
  { "nom": "Tous le spécialité" },
  
    {
      "nom": "Amazighe",
      "key": 1
    },
    {
      "nom": "Anglais",
      "key": 2
    },
    {
      "nom": "Anthropologie",
      "key": 3
    },
    {
      "nom": "Archéologie",
      "key": 4
    },
    {
      "nom": "Arts visuels",
      "key": 5
    },
    {
      "nom": "Bibliothéconomie et sciences de l'information",
      "key": 6
    },
    {
      "nom": "Biochimie",
      "key": 7
    },
    {
      "nom": "Biologie",
      "key": 8
    },
    {
      "nom": "Biologie et biotechnologie agroalimentaire",
      "key": 9
    },
    {
      "nom": "Chimie",
      "key": 10
    },
    {
      "nom": "Chimie Physique",
      "key": 11
    },
    {
      "nom": "Chimie minérale",
      "key": 12
    },
    {
      "nom": "Criminologie",
      "key": 13
    },
    {
      "nom": "Design graphique",
      "key": 14
    },
    {
      "nom": "Design industriel",
      "key": 15
    },
    {
      "nom": "Didactique des SVT",
      "key": 16
    },
    {
      "nom": "Droit",
      "key": 17
    },
    {
      "nom": "Droit français",
      "key": 18
    },
    {
      "nom": "Droit privé Droit publique",
      "key": 19
    },
    {
      "nom": "Espagnol",
      "key": 20
    },
    {
      "nom": "Finance",
      "key": 21
    },
    {
      "nom": "Gestion des affaires internationales",
      "key": 22
    },
    {
      "nom": "Génie Chimique",
      "key": 23
    },
    {
      "nom": "Génie Civil",
      "key": 24
    },
    {
      "nom": "Génie Mécanique",
      "key": 25
    },
    {
      "nom": "Génie de procédés",
      "key": 26
    },
    {
      "nom": "Génie industriel et maintenance",
      "key": 27
    },
    {
      "nom": "Génie Électrique",
      "key": 28
    },
    {
      "nom": "Géographie",
      "key": 29
    },
    {
      "nom": "Géologie",
      "key": 30
    },
    {
      "nom": "Géomatique et Hydrologie",
      "key": 31
    },
    {
      "nom": "Géophysique",
      "key": 32
    },
    {
      "nom": "Histoire",
      "key": 33
    },
    {
      "nom": "Informatique",
      "key": 34
    },
    {
      "nom": "Ingénierie aérospatiale",
      "key": 35
    },
    {
      "nom": "Journalisme",
      "key": 36
    },
    {
      "nom": "Langues et Littératures",
      "key": 37
    },
    {
      "nom": "Linguistique arabe",
      "key": 38
    },
    {
      "nom": "Logistique",
      "key": 39
    },
    {
      "nom": "Mathématiques",
      "key": 40
    },
    {
      "nom": "Musique",
      "key": 41
    },
    {
      "nom": "Médecine",
      "key": 42
    },
    {
      "nom": "Patrimoine",
      "key": 43
    },
    {
      "nom": "Philosophie",
      "key": 44
    },
    {
      "nom": "Physiologie animale",
      "key": 45
    },
    {
      "nom": "Physiologie végétale",
      "key": 46
    },
    {
      "nom": "Physique",
      "key": 47
    },
    {
      "nom": "Physique médicale",
      "key": 48
    },
    {
      "nom": "Psychologie",
      "key": 49
    },
    {
      "nom": "Relations publiques",
      "key": 50
    },
    {
      "nom": "Science de Gestion",
      "key": 51
    },
    {
      "nom": "Science de la nutrition",
      "key": 52
    },
    {
      "nom": "Sciences Politiques",
      "key": 53
    },
    {
      "nom": "Sciences de l'environnement",
      "key": 54
    },
    {
      "nom": "Sciences de la communication",
      "key": 55
    },
    {
      "nom": "Sciences Économiques",
      "key": 56
    },
    {
      "nom": "Sociologie",
      "key": 57
    },
    {
      "nom": "Statistiques et probabilités",
      "key": 58
    },
    {
      "nom": "Théâtre",
      "key": 59
    },
    {
      "nom": "Traduction et interprétation",
      "key": 60
    },
    {
      "nom": "Travail social",
      "key": 61
    },
    {
      "nom": "Télécommunication",
      "key": 62
    },
    {
      "nom": "biotechnologie agroalimentaire",
      "key": 63
    },
    {
      "nom": "Éducation",
      "key": 64
    },
    {
      "nom": "Électronique, Instrumentation et Énergétique",
      "key": 65
    },
    {
      "nom": "Électronique, électrotechnique et automatique",
      "key": 66
    },
    {
      "nom": "Études autochtones",
      "key": 67
    },
    {
      "nom": "Études de développement",
      "key": 68
    },
    {
      "nom": "Études de genre",
      "key": 69
    },
    {
      "nom": "Études religieuses",
      "key": 70
    }
  ];
  export {gradesLimites, villesLimites, specialitesLimites};