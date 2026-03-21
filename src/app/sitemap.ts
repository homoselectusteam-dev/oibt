import { MetadataRoute } from 'next';
import { villes } from '@/data/villes';
import { cantons } from '@/data/cantons';
import { blogPosts } from '@/data/blog';

const BASE_URL = 'https://controle-oibt.ch';
const locales = ['fr', 'de', 'it'];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // ─── Homepages ───────────────────────────────────────────────────────────────
  for (const locale of locales) {
    urls.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    });
  }

  // ─── Pages piliers ────────────────────────────────────────────────────────────
  const pilierPaths = {
    fr: ['controle-oibt', 'prix-controle-oibt', 'devis-controle-oibt', 'rapport-securite'],
    de: ['elektrokontrolle-niv', 'elektrokontrolle-kosten', 'offerte-elektrokontrolle', 'sicherheitsnachweis'],
    it: ['controllo-oibt', 'costo-controllo-elettrico', 'preventivo-controllo-oibt', 'rapporto-sicurezza'],
  };

  for (const locale of locales) {
    for (const path of pilierPaths[locale as keyof typeof pilierPaths]) {
      urls.push({
        url: `${BASE_URL}/${locale}/${path}`,
        lastModified: lastWeek,
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }
  }

  // ─── Pages villes ─────────────────────────────────────────────────────────────
  for (const locale of locales) {
    for (const ville of villes) {
      urls.push({
        url: `${BASE_URL}/${locale}/villes/${ville.slug}`,
        lastModified: lastWeek,
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  }

  // ─── Pages cantons ────────────────────────────────────────────────────────────
  for (const locale of locales) {
    for (const canton of cantons) {
      urls.push({
        url: `${BASE_URL}/${locale}/cantons/${canton.slug}`,
        lastModified: lastWeek,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // ─── Pages situationnelles ────────────────────────────────────────────────────
  const situationnelPaths = [
    'controle-oibt-vente-maison',
    'controle-oibt-renovation',
    'controle-oibt-photovoltaique',
    'schema-iii-danger',
    'controle-oibt-immeuble-locatif',
    'controle-oibt-copropriete-ppe',
    'controle-oibt-borne-recharge',
    'controle-oibt-locataire',
    'controle-oibt-neuf-construction',
    'glossaire-oibt',
  ];

  for (const locale of locales) {
    for (const path of situationnelPaths) {
      urls.push({
        url: `${BASE_URL}/${locale}/${path}`,
        lastModified: lastWeek,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }

  // ─── Outils ──────────────────────────────────────────────────────────────────
  const outilsPaths = [
    'outils/simulateur-prix',
    'outils/verificateur-echeance',
    'outils/quiz-conformite',
    'outils/carte-grd',
  ];

  for (const locale of locales) {
    for (const path of outilsPaths) {
      urls.push({
        url: `${BASE_URL}/${locale}/${path}`,
        lastModified: lastWeek,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  // ─── Pages entité ─────────────────────────────────────────────────────────────
  const entityPaths = ['a-propos', 'equipe', 'certifications', 'contact'];
  for (const locale of locales) {
    for (const path of entityPaths) {
      urls.push({
        url: `${BASE_URL}/${locale}/${path}`,
        lastModified: lastWeek,
        changeFrequency: 'yearly',
        priority: 0.5,
      });
    }
  }

  // ─── Cantons index ────────────────────────────────────────────────────────────
  for (const locale of locales) {
    urls.push({ url: `${BASE_URL}/${locale}/cantons`, lastModified: lastWeek, changeFrequency: 'monthly', priority: 0.7 });
    urls.push({ url: `${BASE_URL}/${locale}/blog`, lastModified: lastWeek, changeFrequency: 'weekly', priority: 0.7 });
  }

  // ─── Blog posts ───────────────────────────────────────────────────────────────
  for (const locale of locales) {
    for (const post of blogPosts) {
      urls.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'yearly',
        priority: 0.65,
      });
    }
  }

  return urls;
}
