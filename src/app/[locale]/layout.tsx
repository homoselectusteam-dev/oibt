import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SchemaOrg, { buildOrganizationSchema } from '@/components/seo/SchemaOrg';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://controle-oibt.ch'),
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Contrôle OIBT Suisse',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'de' | 'it')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <SchemaOrg schema={buildOrganizationSchema()} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
