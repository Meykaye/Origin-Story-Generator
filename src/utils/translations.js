const TRANSLATIONS = {
  "en-US": {
    "originStories": "Origin Stories",
    "legendaryBeginnings": "Discover the legendary beginnings of anything your heart desires",
    "whatOriginStory": "What origin story shall we tell?",
    "enterAnything": "Enter anything - an object, concept, tradition, or invention",
    "placeholderText": "e.g., coffee, the internet, democracy, pizza...",
    "begin": "Begin the Tale",
    "generating": "Generating...",
    "doingDigging": "Uncovering the truth",
    "planningStructure": "Consulting ancient scrolls...",
    "gatheringFacts": "Gathering historical facts...",
    "addingHumor": "Adding a dash of wit...",
    "craftingNarrative": "Weaving the narrative...",
    "finalTouches": "Adding the final touches...",
    "complete": "Tale Complete!",
    "errorOccurred": "The mystical energies failed us. Please try again.",
    "loading": "Loading..."
  }
};

const appLocale = 'en-US';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';

const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};

const locale = findMatchingLocale(appLocale !== 'en-US' ? appLocale : browserLocale);

export const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;