import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'de', 'it'],
  defaultLocale: 'fr',
  pathnames: {
    '/': '/',
    '/controle-oibt': {
      fr: '/controle-oibt',
      de: '/elektrokontrolle-niv',
      it: '/controllo-oibt',
    },
    '/prix-controle-oibt': {
      fr: '/prix-controle-oibt',
      de: '/elektrokontrolle-kosten',
      it: '/costo-controllo-elettrico',
    },
    '/devis-controle-oibt': {
      fr: '/devis-controle-oibt',
      de: '/offerte-elektrokontrolle',
      it: '/preventivo-controllo-oibt',
    },
    '/rapport-securite': {
      fr: '/rapport-securite',
      de: '/sicherheitsnachweis',
      it: '/rapporto-sicurezza',
    },
    '/villes/[slug]': {
      fr: '/villes/[slug]',
      de: '/staedte/[slug]',
      it: '/citta/[slug]',
    },
    '/cantons/[slug]': {
      fr: '/cantons/[slug]',
      de: '/kantone/[slug]',
      it: '/cantoni/[slug]',
    },
    '/blog/[slug]': {
      fr: '/blog/[slug]',
      de: '/blog/[slug]',
      it: '/blog/[slug]',
    },
    '/outils/simulateur-prix': {
      fr: '/outils/simulateur-prix',
      de: '/werkzeuge/preis-rechner',
      it: '/strumenti/simulatore-prezzi',
    },
    '/outils/verificateur-echeance': {
      fr: '/outils/verificateur-echeance',
      de: '/werkzeuge/faelligkeitspruefung',
      it: '/strumenti/verifica-scadenza',
    },
    '/outils/quiz-conformite': {
      fr: '/outils/quiz-conformite',
      de: '/werkzeuge/konformitaets-quiz',
      it: '/strumenti/quiz-conformita',
    },
    '/outils/carte-grd': {
      fr: '/outils/carte-grd',
      de: '/werkzeuge/vnb-karte',
      it: '/strumenti/mappa-grd',
    },
    '/a-propos': {
      fr: '/a-propos',
      de: '/ueber-uns',
      it: '/chi-siamo',
    },
    '/equipe': {
      fr: '/equipe',
      de: '/team',
      it: '/team',
    },
    '/certifications': {
      fr: '/certifications',
      de: '/zertifizierungen',
      it: '/certificazioni',
    },
    '/contact': {
      fr: '/contact',
      de: '/kontakt',
      it: '/contatto',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
