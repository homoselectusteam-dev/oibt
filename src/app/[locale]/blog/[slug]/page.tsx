import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';
import { blogPosts } from '@/data/blog';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['fr', 'de', 'it']) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = locale === 'de' ? post.titleDE : locale === 'it' ? post.titleIT : post.titleFR;
  const desc = locale === 'de' ? post.descDE : locale === 'it' ? post.descIT : post.descFR;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://controle-oibt.ch/${locale}/blog/${slug}`,
      languages: {
        fr: `https://controle-oibt.ch/fr/blog/${slug}`,
        de: `https://controle-oibt.ch/de/blog/${slug}`,
        it: `https://controle-oibt.ch/it/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description: desc,
      type: 'article',
      publishedTime: post.publishDate,
    },
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-700">• $1</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-700 mb-4">')
    .replace(/^(?!<[h|l])(.+)$/gm, '$1');
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const title = locale === 'de' ? post.titleDE : locale === 'it' ? post.titleIT : post.titleFR;
  const content = locale === 'de' ? post.contentDE : locale === 'it' ? post.contentIT : post.contentFR;
  const faq = locale === 'de' ? post.faqDE : locale === 'it' ? post.faqIT : post.faqFR;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: 'Blog', href: `/${locale}/blog` },
    { label: title },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'Contrôle OIBT Suisse' },
    publisher: { '@type': 'Organization', name: 'Contrôle OIBT Suisse', url: 'https://controle-oibt.ch' },
  };

  const faqSchema = faq.length > 0 ? buildFAQSchema(faq) : null;

  return (
    <>
      <SchemaOrg schema={schema} />
      {faqSchema && <SchemaOrg schema={faqSchema} />}
      <Breadcrumb items={bc} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-6">
          <time className="text-sm text-gray-500" dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString(
              locale === 'de' ? 'de-CH' : locale === 'it' ? 'it-CH' : 'fr-CH',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </time>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{title}</h1>

        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: `<p class="text-gray-700 mb-4">${markdownToHtml(content)}</p>` }}
        />

        {faq.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="card">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between">
                    <span>{item.q}</span><span className="text-primary-600">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTASection />
    </>
  );
}
