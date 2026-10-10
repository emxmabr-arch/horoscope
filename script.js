
const SIGN = "pisces";
const API_URL =
  `https://sigastra.com/api/v1/daily?lang=fr&sign=${SIGN}&full=1`;

const tarotCards = [
  {
    number: "0",
    name: "Le Mat",
    keywords: "Liberté · Départ · Spontanéité",
    message: "Tu n'as pas besoin de connaître tout le chemin pour faire le premier pas. Une curiosité nouvelle pourrait t'ouvrir une porte inattendue.",
    title: "Oser l'inconnu"
  },
  {
    number: "I",
    name: "Le Bateleur",
    keywords: "Création · Initiative · Potentiel",
    message: "Tu possèdes déjà davantage de ressources que tu ne le crois. Aujourd'hui, essaie de transformer une idée qui te traverse en un premier geste concret.",
    title: "Tout commence quelque part"
  },
  {
    number: "II",
    name: "La Papesse",
    keywords: "Intuition · Silence · Mystère",
    message: "Toutes les réponses ne demandent pas à être trouvées immédiatement. Accorde-toi un moment de silence et observe ce que ton intuition essaie de te raconter.",
    title: "Écouter ce qui se devine"
  },
  {
    number: "III",
    name: "L'Impératrice",
    keywords: "Imagination · Abondance · Éclosion",
    message: "Une idée a besoin d'espace pour grandir. Nourris ta créativité sans lui demander d'être parfaite dès sa naissance.",
    title: "Laisser fleurir les idées"
  },
  {
    number: "IV",
    name: "L'Empereur",
    keywords: "Structure · Ancrage · Limites",
    message: "Donner une forme à tes envies ne les rend pas moins libres. Un peu de structure pourrait aujourd'hui t'aider à préserver ce qui compte vraiment.",
    title: "Construire un refuge"
  },
  {
    number: "V",
    name: "Le Pape",
    keywords: "Transmission · Valeurs · Partage",
    message: "Une rencontre, une lecture ou une conversation peut déplacer ton regard. Reste curieuse, tout en gardant le droit de tracer ton propre chemin.",
    title: "Apprendre autrement"
  },
  {
    number: "VI",
    name: "L'Amoureux",
    keywords: "Choix · Lien · Accord",
    message: "Tes choix prennent leur sens lorsqu'ils se rapprochent de tes valeurs. Demande-toi ce que tu désires vraiment, au-delà des attentes extérieures.",
    title: "Choisir en accord avec soi"
  },
  {
    number: "VII",
    name: "Le Chariot",
    keywords: "Élan · Direction · Mouvement",
    message: "Tu peux avancer sans avoir tout résolu. Choisis une direction pour aujourd'hui, même modeste, et laisse le mouvement t'apprendre la suite.",
    title: "Trouver son mouvement"
  },
  {
    number: "VIII",
    name: "La Justice",
    keywords: "Clarté · Équilibre · Lucidité",
    message: "Prends le temps de distinguer les faits, les peurs et les envies. La clarté ne demande pas de te juger, mais de regarder les choses avec honnêteté.",
    title: "Voir avec justesse"
  },
  {
    number: "IX",
    name: "L'Hermite",
    keywords: "Retrait · Sagesse · Recherche",
    message: "Tu as le droit de ralentir et de garder un peu d'espace pour toi. Certaines réponses apparaissent quand on cesse de les poursuivre.",
    title: "La lumière intérieure"
  },
  {
    number: "X",
    name: "La Roue de Fortune",
    keywords: "Cycle · Changement · Possibilité",
    message: "Tout ne reste pas immobile, même lorsque tu as cette impression. Accueille les changements sans exiger de comprendre immédiatement où ils te conduisent.",
    title: "Suivre les cycles"
  },
  {
    number: "XI",
    name: "La Force",
    keywords: "Courage · Douceur · Maîtrise",
    message: "La force n'est pas toujours spectaculaire. Elle peut prendre la forme d'une limite posée calmement, d'un repos assumé ou d'un effort patient.",
    title: "La puissance de la douceur"
  },
  {
    number: "XII",
    name: "Le Pendu",
    keywords: "Pause · Regard neuf · Lâcher-prise",
    message: "Et si tu regardais cette situation sous un autre angle ? Une pause n'est pas forcément un recul : elle peut rendre visibles des possibilités oubliées.",
    title: "Changer de perspective"
  },
  {
    number: "XIII",
    name: "L'Arcane sans nom",
    keywords: "Transformation · Fin · Renouveau",
    message: "Laisser partir une habitude ou une ancienne version de soi peut libérer de la place. Tu n'as pas besoin de tout conserver pour honorer ce que tu as vécu.",
    title: "Faire de la place"
  },
  {
    number: "XIV",
    name: "Tempérance",
    keywords: "Harmonie · Patience · Circulation",
    message: "Cherche le mélange qui te fait du bien plutôt que l'équilibre parfait. Les petits ajustements peuvent parfois transformer davantage que les grands bouleversements.",
    title: "Trouver son propre rythme"
  },
  {
    number: "XV",
    name: "Le Diable",
    keywords: "Désir · Attachement · Lucidité",
    message: "Observe ce qui t'attire, te retient ou te fait oublier tes besoins. Comprendre un attachement ne signifie pas devoir le condamner.",
    title: "Regarder ses chaînes"
  },
  {
    number: "XVI",
    name: "La Maison Dieu",
    keywords: "Révélation · Rupture · Libération",
    message: "Quand une certitude vacille, cela peut faire peur. Mais ce qui s'effondre n'est pas toujours ce qui te soutenait réellement.",
    title: "Ouvrir les fenêtres"
  },
  {
    number: "XVII",
    name: "L'Étoile",
    keywords: "Espoir · Intuition · Renouveau",
    message: "Laisse une place à ce qui cherche doucement à éclore. Un geste sincère, une idée fragile ou un instant de calme peut suffire à rallumer une petite lumière.",
    title: "Se laisser guider par l'espoir"
  },
  {
    number: "XVIII",
    name: "La Lune",
    keywords: "Rêve · Sensibilité · Imaginaire",
    message: "Ton imagination peut éclairer des choses que la logique ne saisit pas encore, mais elle peut aussi amplifier les inquiétudes. Accueille tes ressentis sans les confondre avec des certitudes.",
    title: "Traverser les songes"
  },
  {
    number: "XIX",
    name: "Le Soleil",
    keywords: "Joie · Vitalité · Partage",
    message: "Autorise-toi à apprécier ce qui est lumineux sans attendre que tout soit parfait. Une joie simple mérite aussi toute ton attention.",
    title: "Habiter la lumière"
  },
  {
    number: "XX",
    name: "Le Jugement",
    keywords: "Éveil · Appel · Renouveau",
    message: "Quelque chose en toi demande peut-être à être entendu autrement. Écoute ce qui revient avec insistance et demande-toi quelle place tu souhaites lui donner.",
    title: "Entendre son appel"
  },
  {
    number: "XXI",
    name: "Le Monde",
    keywords: "Accomplissement · Ouverture · Unité",
    message: "Prends un instant pour reconnaître le chemin parcouru. Même les étapes inachevées font partie de l'ensemble que tu es en train de construire.",
    title: "Rassembler les morceaux"
  }
];

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined && value !== null && value !== "") {
    element.textContent = String(value);
  }
}

function formatDate(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

// Profil astrologique utilisé pour personnaliser le rituel du Grimoire.
// Seuls les signes sont conservés ici : aucune date ou heure de naissance.
const NATAL_PROFILE = {
  sun: "Poissons",
  ascendant: "Cancer",
  descendant: "Capricorne",
  moon: "Scorpion"
};

function getDailyTarot(date) {
  // Le profil sert de graine : le résultat est stable pour un même jour,
  // mais diffère du tirage générique partagé par tous les visiteurs.
  const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const profileKey = `${NATAL_PROFILE.sun}-${NATAL_PROFILE.ascendant}-${NATAL_PROFILE.descendant}-${NATAL_PROFILE.moon}`;
  const seed = `${dateKey}|${profileKey}|grimoire-astral`;
  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  return tarotCards[hash % tarotCards.length];
}

function getPersonalTarotReflection(card) {
  const reflections = [
    "Avec ton Soleil en Poissons et ta Lune en Scorpion, laisse cette carte ouvrir un espace à ton intuition, tout en prenant le temps de distinguer tes ressentis de tes certitudes.",
    "Ton ascendant Cancer invite à accueillir ce que cette carte réveille en toi avec douceur ; ton descendant Capricorne rappelle qu'un petit geste concret peut donner une forme à cette prise de conscience.",
    "Entre la sensibilité des Poissons et l'intensité du Scorpion, cette carte peut devenir un miroir de ce qui cherche à évoluer. Tu peux avancer à ton rythme, sans devoir tout comprendre aujourd'hui.",
    "Ton axe Cancer–Capricorne évoque l'équilibre entre protection et engagement. Demande-toi comment préserver ton espace intérieur tout en donnant une place réelle à ce qui compte pour toi."
  ];

  const index = tarotCards.indexOf(card) % reflections.length;
  return reflections[index];
}

function renderTarot(date) {
  const card = getDailyTarot(date);

  setText("tarot-number", card.number);
  setText("tarot-name", card.name);
  setTarotIllustration(card);
  setText("tarot-keywords", card.keywords);
  setText(
    "tarot-message",
    `${getPersonalTarotReflection(card)} ${card.message}`
  );
  setText("tarot-reading-title", card.title);
}

function getMoonPhase(date) {
  // Approximation astronomique à partir d'une lunaison moyenne.
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14);
  const synodicMonth = 29.530588853;
  const current = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    12
  );

  const days = (current - knownNewMoon) / 86400000;
  const age = ((days % synodicMonth) + synodicMonth) % synodicMonth;
  const fraction = age / synodicMonth;

  if (fraction < 0.035 || fraction >= 0.965) {
    return {
      emoji: "●",
      name: "Nouvelle Lune",
      description: "Un nouveau cycle commence. C'est une belle occasion symbolique de poser une intention et de laisser mûrir les projets."
    };
  }

  if (fraction < 0.22) {
    return {
      emoji: "☽",
      name: "Premier croissant",
      description: "La lumière revient peu à peu. Laisse tes idées prendre forme, à leur rythme, sans chercher à tout précipiter."
    };
  }

  if (fraction < 0.28) {
    return {
      emoji: "◐",
      name: "Premier quartier",
      description: "Le cycle avance et invite à passer de l'intention à l'action. Un petit pas concret peut suffire."
    };
  }

  if (fraction < 0.47) {
    return {
      emoji: "🌔",
      name: "Lune gibbeuse croissante",
      description: "La lumière gagne du terrain. Observe ce qui grandit et ajuste tes projets avant leur prochaine étape."
    };
  }

  if (fraction < 0.53) {
    return {
      emoji: "○",
      name: "Pleine Lune",
      description: "La Lune est presque entièrement éclairée. Prends le temps de regarder ce qui devient plus visible en toi et autour de toi."
    };
  }

  if (fraction < 0.72) {
    return {
      emoji: "🌖",
      name: "Lune gibbeuse décroissante",
      description: "Le cycle commence à se retirer. Tu peux faire le point, intégrer ce que tu as appris et relâcher la pression."
    };
  }

  if (fraction < 0.78) {
    return {
      emoji: "◑",
      name: "Dernier quartier",
      description: "C'est un moment propice, symboliquement, au tri et au recentrage. Garde ce qui te nourrit, laisse le reste respirer."
    };
  }

  return {
    emoji: "☾",
    name: "Dernier croissant",
    description: "La lumière s'amenuise avant un nouveau cycle. Accorde-toi du repos et de l'espace pour écouter ce qui compte."
  };
}

function renderMoon(date) {
  const moon = getMoonPhase(date);

  setText("moon-emoji", moon.emoji);
  setText("moon-name", moon.name);
  setText("moon-description", moon.description);
}

function addCanonicalLink(url) {
  if (!url) return;

  try {
    const parsed = new URL(url);

    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return;
    }

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = parsed.href;
  } catch (error) {
    console.warn("Lien canonique ignoré :", error);
  }
}

function renderApiCredit(url) {
  const container = document.getElementById("api-credit");
  if (!container) return;

  const link = document.createElement("a");
  link.href = url || "https://sigastra.com/";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Horoscope fourni par Sigastra";

  container.replaceChildren(link);

  if (url) {
    addCanonicalLink(url);
  }
}

function renderHoroscopeParagraphs(body) {
  const container = document.getElementById("horoscope");
  if (!container) return false;

  container.replaceChildren();

  // Selon le format renvoyé, le texte peut être une chaîne, un tableau
  // de paragraphes ou un objet contenant le texte dans un champ connu.
  let value = body;
  if (value && typeof value === "object" && !Array.isArray(value)) {
    value =
      value.text ??
      value.body ??
      value.html ??
      value.content ??
      value.articleBody ??
      value.overview ??
      value.general ??
      value.main;
  }

  let paragraphs = [];
  if (Array.isArray(value)) {
    paragraphs = value.map(part => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object") {
        return part.text ?? part.body ?? part.content ?? "";
      }
      return "";
    });
  } else if (typeof value === "string") {
    // Si le service renvoie du HTML, on le convertit en texte sans l'afficher brut.
    const normalized = value.replace(/<\/p>\s*<p[^>]*>/gi, "\n\n");
    const plainText = normalized.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim();
    paragraphs = plainText
      .split(/\n{2,}/)
      .map(paragraph => paragraph.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (paragraphs.length === 0 && plainText) paragraphs = [plainText];
  }

  paragraphs.forEach(paragraph => {
    if (typeof paragraph !== "string" || !paragraph.trim()) return;
    const element = document.createElement("p");
    element.textContent = paragraph.trim();
    container.appendChild(element);
  });

  return container.children.length > 0;
}

async function loadHoroscope() {
  const status = document.getElementById("horoscope-status");
  const container = document.getElementById("horoscope");

  try {
    if (status) status.textContent = "Les astres prennent la parole…";
    if (container) container.textContent = "Lecture du ciel en cours…";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erreur API : ${response.status}`);
    }

    const result = await response.json();
    const item = result.items?.[0] ?? result;
    const attribution = result.attribution ?? {};
    const editorial = item.editorial ?? {};
    const data = item.data ?? {};

    if (status) {
      status.textContent =
        item.title || item.headline || editorial.title || "Les murmures du jour";
    }

    // L'API Sigastra expose désormais le texte directement dans item.text.
    // On conserve les anciens champs en secours pour éviter de casser l'affichage
    // si la structure de la réponse évolue à nouveau.
    const horoscopeBody =
      item.text ??
      item.body ??
      item.articleBody ??
      item.content ??
      item.description ??
      editorial.body ??
      item.sections?.overview ??
      item.sections?.general ??
      item.sections?.main ??
      item.sections ??
      result.text ??
      result.body;

    const rendered = renderHoroscopeParagraphs(horoscopeBody);
    if (!rendered) {
      console.warn("Réponse Sigastra sans texte reconnu :", result);
      throw new Error("Le texte de l'horoscope est absent ou dans un format inattendu.");
    }

    setText(
      "horoscope-love",
      data.loveLine || item.loveLine || "Écoute ce que tes liens font naître en toi."
    );

    setText(
      "horoscope-work",
      data.workLine || item.workLine || "Laisse une place à tes idées et à ta curiosité."
    );

    setText(
      "horoscope-energy",
      data.energyLine || item.energyLine || "Accorde-toi le rythme dont tu as besoin."
    );

    renderApiCredit(attribution.localizedHref || editorial.canonical || item.url);
  } catch (error) {
    console.error("Impossible de charger l'horoscope :", error);

    if (status) {
      status.textContent = "Le ciel est momentanément silencieux";
    }

    if (container) {
      container.textContent =
        "L'horoscope n'a pas pu être chargé. Vérifie ta connexion ou réessaie un peu plus tard.";
    }

    setText(
      "horoscope-love",
      "Prends le temps d'accorder de l'attention aux liens qui te font du bien."
    );

    setText(
      "horoscope-work",
      "Une petite idée peut devenir le début d'un beau projet."
    );

    setText(
      "horoscope-energy",
      "Écoute ton rythme et laisse-toi un peu d'espace."
    );

    renderApiCredit();
  }
}


let shuffledTarot = [];
let tarotHasBeenDrawn = false;

const tarotQuestions = {
  "Le Mat": "Quel premier pas pourrais-tu faire sans attendre de connaître toute la suite ?",
  "Le Bateleur": "Quelle ressource as-tu déjà entre les mains pour commencer ?",
  "La Papesse": "Qu'entends-tu lorsque tu fais assez de silence pour t'écouter ?",
  "L'Impératrice": "Quelle idée mériterait davantage d'espace pour grandir ?",
  "L'Empereur": "Quelle limite ou structure pourrait protéger ce qui compte pour toi ?",
  "Le Pape": "Quelle valeur veux-tu garder au centre de tes choix ?",
  "L'Amoureux": "Quel choix serait le plus fidèle à tes envies profondes ?",
  "Le Chariot": "Vers quoi souhaites-tu diriger ton énergie aujourd'hui ?",
  "La Justice": "Que vois-tu plus clairement lorsque tu sépares les faits de tes peurs ?",
  "L'Hermite": "Quelle réponse pourrait émerger si tu t'accordais un peu de recul ?",
  "La Roue de Fortune": "Quel changement peux-tu accueillir sans chercher à tout contrôler ?",
  "La Force": "À quoi ressemblerait le courage si tu le pratiquais avec douceur ?",
  "Le Pendu": "Que pourrais-tu découvrir en regardant la situation autrement ?",
  "L'Arcane sans nom": "Qu'es-tu prête à laisser derrière toi pour faire de la place ?",
  "Tempérance": "Quel petit ajustement t'aiderait à retrouver ton propre rythme ?",
  "Le Diable": "Quel désir ou attachement aimerais-tu regarder avec plus de lucidité ?",
  "La Maison Dieu": "Quelle certitude pourrais-tu réexaminer sans te juger ?",
  "L'Étoile": "Qu'est-ce qui te redonne de l'espoir, même discrètement ?",
  "La Lune": "Quel ressenti mérite d'être écouté sans être pris immédiatement pour une certitude ?",
  "Le Soleil": "Quelle joie simple pourrais-tu laisser pleinement entrer aujourd'hui ?",
  "Le Jugement": "Quel appel intérieur revient et demande ton attention ?",
  "Le Monde": "Quel chemin parcouru peux-tu reconnaître et célébrer ?"
};


// Illustrations Rider–Waite–Smith (jeu original de 1909, domaine public).
// L'ordre Strength/Justice du jeu anglais diffère du tarot de Marseille :
const tarotImageNumbers = {
  "Le Mat": 0,
  "Le Bateleur": 1,
  "La Papesse": 2,
  "L'Impératrice": 3,
  "L'Empereur": 4,
  "Le Pape": 5,
  "L'Amoureux": 6,
  "Le Chariot": 7,
  "La Justice": 11,
  "L'Hermite": 9,
  "La Roue de Fortune": 10,
  "La Force": 8,
  "Le Pendu": 12,
  "L'Arcane sans nom": 13,
  "Tempérance": 14,
  "Le Diable": 15,
  "La Maison Dieu": 16,
  "L'Étoile": 17,
  "La Lune": 18,
  "Le Soleil": 19,
  "Le Jugement": 20,
  "Le Monde": 21
};

const tarotImageFiles = {
  0: "00_Fool.jpg",
  1: "01_Magician.jpg",
  2: "02_High_Priestess.jpg",
  3: "03_Empress.jpg",
  4: "04_Emperor.jpg",
  5: "05_Hierophant.jpg",
  6: "06_Lovers.jpg",
  7: "07_Chariot.jpg",
  8: "08_Strength.jpg",
  9: "09_Hermit.jpg",
  10: "10_Wheel_of_Fortune.jpg",
  11: "11_Justice.jpg",
  12: "12_Hanged_Man.jpg",
  13: "13_Death.jpg",
  14: "14_Temperance.jpg",
  15: "15_Devil.jpg",
  16: "16_Tower.jpg",
  17: "17_Star.jpg",
  18: "18_Moon.jpg",
  19: "19_Sun.jpg",
  20: "20_Judgement.jpg",
  21: "21_World.jpg"
};

function setTarotIllustration(card) {
  const image = document.getElementById("tarot-art-image");
  if (!image) return;
  const imageNumber = tarotImageNumbers[card.name];
  if (imageNumber === undefined) return;
  image.src = `assets/tarot/${tarotImageFiles[imageNumber]}`;
  image.alt = `${card.name}, illustration du tarot Rider–Waite–Smith`;
  image.title = `${card.name} — illustration originale Rider–Waite–Smith`;
}

function shuffleArray(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createTarotBack(index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tarot-back";
  button.setAttribute("aria-label", `Choisir la carte cachée ${index + 1}`);
  button.innerHTML = `
    <span class="tarot-back-frame" aria-hidden="true">
      <span class="tarot-back-number">✧</span>
      <span class="tarot-back-moon">☾</span>
      <span class="tarot-back-star">✦</span>
      <span class="tarot-back-flourish">❧</span>
      <span class="tarot-back-bottom">✧</span>
    </span>`;
  button.addEventListener("click", () => revealTarotCard(index));
  return button;
}

function renderTarotDeck() {
  const deck = document.getElementById("tarot-deck");
  if (!deck) return;
  deck.replaceChildren();
  shuffledTarot.forEach((card, index) => {
    if (tarotHasBeenDrawn && index === selectedTarotIndex) return;
    deck.appendChild(createTarotBack(index));
  });
  deck.classList.remove("deck-shuffling");
  void deck.offsetWidth;
}

let selectedTarotIndex = -1;

const DAILY_TAROT_STORAGE_KEY = "grimoire-astral-daily-tarot-v1";

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readSavedDailyTarot() {
  try {
    const raw = window.localStorage.getItem(DAILY_TAROT_STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.date !== getLocalDateKey()) {
      window.localStorage.removeItem(DAILY_TAROT_STORAGE_KEY);
      return null;
    }
    return tarotCards.find(card => card.name === saved.cardName) || null;
  } catch (error) {
    console.warn("Le tirage quotidien ne peut pas être lu :", error);
    return null;
  }
}

function saveDailyTarot(card) {
  try {
    window.localStorage.setItem(
      DAILY_TAROT_STORAGE_KEY,
      JSON.stringify({ date: getLocalDateKey(), cardName: card.name })
    );
  } catch (error) {
    console.warn("Le tirage quotidien ne peut pas être conservé :", error);
  }
}

function updateDailyTarotControls(isDrawn) {
  const shuffleButton = document.getElementById("shuffle-tarot");
  const newButton = document.getElementById("new-tarot");
  if (shuffleButton) {
    shuffleButton.disabled = isDrawn;
    if (isDrawn) shuffleButton.textContent = "✧ Tirage du jour révélé";
    else shuffleButton.textContent = "⤨ Mélanger les cartes";
  }
  if (newButton) {
    newButton.disabled = isDrawn;
    if (isDrawn) newButton.textContent = "↻ Reviens demain pour un nouvel arcane";
    else newButton.textContent = "↻ Tirer une autre carte";
  }
}

function showSavedDailyTarot(card) {
  shuffledTarot = shuffleArray(tarotCards);
  selectedTarotIndex = shuffledTarot.findIndex(item => item.name === card.name);
  tarotHasBeenDrawn = true;
  updateDailyTarotControls(true);

  setText("tarot-number", card.number);
  setText("tarot-name", card.name);
  setTarotIllustration(card);
  setText("tarot-keywords", card.keywords);
  setText("tarot-reading-title", card.title);
  setText("tarot-message", card.message);
  setText("tarot-personal", getPersonalTarotReflection(card));
  setText("tarot-question", tarotQuestions[card.name] || "Qu'est-ce que cette carte vient éveiller en toi aujourd'hui ?");

  const result = document.getElementById("tarot-result");
  if (result) result.hidden = false;
  setText("tarot-status", `Ton arcane du jour : ${card.name}.`);
  setText("tarot-hint", "Ton tirage du jour est conservé. Reviens demain pour découvrir un nouvel arcane.");
  renderTarotDeck();
}

function shuffleTarotDeck() {
  // Une carte révélée est le tirage du jour : on ne la remplace pas en rechargeant.
  if (tarotHasBeenDrawn) return;

  shuffledTarot = shuffleArray(tarotCards);
  selectedTarotIndex = -1;
  const result = document.getElementById("tarot-result");
  if (result) result.hidden = true;
  const deck = document.getElementById("tarot-deck");
  if (deck) deck.classList.add("deck-shuffling");
  setText("tarot-status", "Les arcanes se mêlent et changent de place…");
  setText("tarot-hint", "Prends ton temps, puis choisis la carte qui t'attire.");
  window.setTimeout(() => {
    renderTarotDeck();
    setText("tarot-status", "Les 22 arcanes attendent ton choix…");
  }, 450);
}

function revealTarotCard(index) {
  if (tarotHasBeenDrawn) return;
  const card = shuffledTarot[index];
  if (!card) return;
  tarotHasBeenDrawn = true;
  selectedTarotIndex = index;
  saveDailyTarot(card);
  updateDailyTarotControls(true);

  setText("tarot-number", card.number);
  setText("tarot-name", card.name);
  setTarotIllustration(card);
  setText("tarot-keywords", card.keywords);
  setText("tarot-reading-title", card.title);
  setText("tarot-message", card.message);
  setText("tarot-personal", getPersonalTarotReflection(card));
  setText("tarot-question", tarotQuestions[card.name] || "Qu'est-ce que cette carte vient éveiller en toi aujourd'hui ?");

  const result = document.getElementById("tarot-result");
  if (result) {
    result.hidden = false;
    result.classList.remove("tarot-result-reveal");
    void result.offsetWidth;
    result.classList.add("tarot-result-reveal");
  }
  setText("tarot-status", `Ton arcane est révélé : ${card.name}.`);
  setText("tarot-hint", "Lis le message à ton rythme, puis garde ce qui résonne en toi.");
  renderTarotDeck();
  if (result) result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initInteractiveTarot() {
  const shuffleButton = document.getElementById("shuffle-tarot");
  const newButton = document.getElementById("new-tarot");
  if (shuffleButton) shuffleButton.addEventListener("click", shuffleTarotDeck);
  if (newButton) newButton.addEventListener("click", shuffleTarotDeck);
  updateDailyTarotControls(false);

  const savedCard = readSavedDailyTarot();
  if (savedCard) {
    showSavedDailyTarot(savedCard);
  } else {
    shuffleTarotDeck();
  }
}

function initGrimoire() {
  const today = new Date();

  setText("date", formatDate(today));
  renderMoon(today);
  initInteractiveTarot();
  loadHoroscope();
}

document.addEventListener("DOMContentLoaded", initGrimoire);
