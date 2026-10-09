
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

function getDailyTarot(date) {
  return tarotCards[dayOfYear(date) % tarotCards.length];
}

function renderTarot(date) {
  const card = getDailyTarot(date);

  setText("tarot-number", card.number);
  setText("tarot-name", card.name);
  setText("tarot-keywords", card.keywords);
  setText("tarot-message", card.message);
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
  if (!container) return;

  container.replaceChildren();

  let paragraphs = [];

  if (Array.isArray(body)) {
    paragraphs = body;
  } else if (typeof body === "string") {
    paragraphs = body
      .split(/\n{2,}/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean);
  }

  paragraphs.forEach(paragraph => {
    if (typeof paragraph !== "string") return;

    const element = document.createElement("p");
    element.textContent = paragraph;
    container.appendChild(element);
  });

  if (container.children.length === 0) {
    container.textContent =
      "Le ciel garde encore ses secrets. Réessaie un peu plus tard.";
  }
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
      editorial.body ??
      item.sections?.overview ??
      item.sections?.general ??
      item.sections?.main;

    renderHoroscopeParagraphs(horoscopeBody);

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

function initGrimoire() {
  const today = new Date();

  setText("date", formatDate(today));
  renderMoon(today);
  renderTarot(today);
  loadHoroscope();
}

document.addEventListener("DOMContentLoaded", initGrimoire);
