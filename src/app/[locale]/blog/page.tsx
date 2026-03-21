import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { blogPosts } from '@/data/blog';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Blog OIBT — Conseils, guides et actualités sur le contrôle électrique en Suisse',
    de: 'NIV-Blog — Tipps, Leitfäden und Neuigkeiten zur Elektrokontrolle in der Schweiz',
    it: 'Blog OIBT — Consigli, guide e notizie sul controllo elettrico in Svizzera',
  };
  const descs = {
    fr: 'Retrouvez tous nos articles sur le contrôle OIBT en Suisse : obligations légales, prix, rapport de sécurité, schéma III et plus.',
    de: 'Alle Artikel zur NIV-Elektrokontrolle in der Schweiz: gesetzliche Pflichten, Preise, Sicherheitsnachweis, Schema III und mehr.',
    it: 'Tutti i nostri articoli sul controllo OIBT in Svizzera: obblighi legali, prezzi, rapporto di sicurezza, schema III e altro.',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/blog` },
  };
}

const categoryLabels: Record<string, Record<string, string>> = {
  juridique: { fr: 'Juridique', de: 'Rechtliches', it: 'Giuridico' },
  prix: { fr: 'Prix', de: 'Preise', it: 'Prezzi' },
  technique: { fr: 'Technique', de: 'Technik', it: 'Tecnica' },
  securite: { fr: 'Sécurité', de: 'Sicherheit', it: 'Sicurezza' },
};

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: 'Blog' },
  ];

  const h1 = locale === 'de'
    ? 'NIV-Blog — Elektrokontrolle Schweiz'
    : locale === 'it'
    ? 'Blog OIBT — Controllo elettrico Svizzera'
    : 'Blog OIBT — Contrôle électrique Suisse';

  const intro = locale === 'de'
    ? 'Alle unsere Artikel rund um die NIV-Elektrokontrolle: gesetzliche Grundlagen, Kosten, Sicherheitsnachweis und praktische Tipps für Eigentümer in der Schweiz.'
    : locale === 'it'
    ? 'Tutti i nostri articoli sul controllo OIBT: basi legali, costi, rapporto di sicurezza e consigli pratici per i proprietari in Svizzera.'
    : 'Tous nos articles sur le contrôle OIBT : bases légales, coûts, rapport de sécurité et conseils pratiques pour les propriétaires en Suisse.';

  const readMore = locale === 'de' ? 'Weiterlesen →' : locale === 'it' ? 'Leggi di più →' : 'Lire la suite →';

  return (
    <>
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{h1}</h1>
        <p className="text-gray-600 mb-10">{intro}</p>

        <div className="space-y-6">
          {blogPosts.map((post) => {
            const title = locale === 'de' ? post.titleDE : locale === 'it' ? post.titleIT : post.titleFR;
            const desc = locale === 'de' ? post.descDE : locale === 'it' ? post.descIT : post.descFR;
            const catLabel = categoryLabels[post.category]?.[locale] ?? post.category;

            return (
              <article key={post.slug} className="card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="badge bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">{catLabel}</span>
                  <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString(
                      locale === 'de' ? 'de-CH' : locale === 'it' ? 'it-CH' : 'fr-CH',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{desc}</p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  {readMore}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
