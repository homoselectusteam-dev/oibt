import Link from 'next/link';
import { useLocale } from 'next-intl';

type CTASectionProps = {
  title?: string;
  desc?: string;
  ctaLabel?: string;
  city?: string;
};

export default function CTASection({ title, desc, ctaLabel, city }: CTASectionProps) {
  const locale = useLocale();

  const defaults = {
    fr: {
      title: city ? `Demandez votre devis OIBT à ${city}` : 'Demandez votre devis OIBT gratuit',
      desc: 'Organe de contrôle indépendant accrédité ESTI. Rapport de sécurité en 48h. Prix transparent sans surprise.',
      cta: 'Devis gratuit en 24h',
    },
    de: {
      title: city ? `Offerte für Elektrokontrolle in ${city} anfordern` : 'Kostenlose NIV-Offerte anfordern',
      desc: 'ESTI-akkreditiertes unabhängiges Kontrollorgan. Sicherheitsnachweis in 48h. Transparente Preise.',
      cta: 'Kostenlose Offerte in 24h',
    },
    it: {
      title: city ? `Richiedi il preventivo OIBT a ${city}` : 'Richiedi il tuo preventivo OIBT gratuito',
      desc: 'Organo di controllo indipendente accreditato ESTI. Rapporto di sicurezza in 48h. Prezzi trasparenti.',
      cta: 'Preventivo gratuito in 24h',
    },
  };

  const d = defaults[locale as keyof typeof defaults] || defaults.fr;

  return (
    <section className="bg-gradient-to-br from-primary-700 to-primary-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title || d.title}
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          {desc || d.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/devis-controle-oibt`}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {ctaLabel || d.cta}
          </Link>
          <Link
            href={`/${locale}/controle-oibt`}
            className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            {locale === 'de' ? 'Mehr erfahren' : locale === 'it' ? 'Scopri di più' : 'En savoir plus'}
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-primary-100 text-sm">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{locale === 'de' ? 'Unabhängiges Organ' : locale === 'it' ? 'Organo indipendente' : 'Organe indépendant'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{locale === 'de' ? 'ESTI-akkreditiert' : locale === 'it' ? 'Accreditato ESTI' : 'Accrédité ESTI'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{locale === 'de' ? 'SiNa in 48h' : locale === 'it' ? 'RaSi in 48h' : 'Rapport en 48h'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{locale === 'de' ? '100% Schweiz' : locale === 'it' ? '100% Svizzera' : '100% Suisse'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
