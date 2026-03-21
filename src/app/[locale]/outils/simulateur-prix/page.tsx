'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

type SimResult = { min: number; max: number; label: string };

const baseByType: Record<string, { min: number; max: number }> = {
  studio: { min: 250, max: 420 },
  t2: { min: 300, max: 520 },
  t3: { min: 380, max: 650 },
  t4: { min: 450, max: 780 },
  t5plus: { min: 520, max: 950 },
  villa_petite: { min: 500, max: 800 },
  villa_grande: { min: 700, max: 1200 },
  immeuble_4_8: { min: 800, max: 1500 },
  immeuble_9plus: { min: 1200, max: 2000 },
  bureau_petit: { min: 380, max: 700 },
  bureau_grand: { min: 600, max: 1200 },
  industrie: { min: 800, max: 2000 },
};

const multiplierByCanton: Record<string, number> = {
  GE: 1.35, ZH: 1.40, BS: 1.30, BL: 1.15, ZG: 1.20,
  VD: 1.10, BE: 1.05, AG: 1.00, LU: 1.00, SG: 1.00,
  VS: 0.90, NE: 0.88, JU: 0.85, TI: 0.92, FR: 0.95,
  SO: 0.95, TG: 0.95, SH: 0.95, GR: 0.95, AR: 0.95,
  AI: 0.92, GL: 0.92, NW: 0.92, OW: 0.92, UR: 0.90,
  SZ: 1.0,
};

export default function SimulateurPrixPage() {
  const locale = useLocale();
  const [type, setType] = useState('');
  const [canton, setCanton] = useState('');
  const [result, setResult] = useState<SimResult | null>(null);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSent, setLeadSent] = useState(false);

  const content = {
    fr: {
      h1: 'Simulateur de prix — Contrôle OIBT',
      desc: 'Estimez gratuitement le coût de votre contrôle OIBT en Suisse. Résultat instantané. Sans inscription.',
      typeLabel: 'Type de bâtiment',
      cantonLabel: 'Canton',
      calculate: 'Calculer mon estimation',
      resultTitle: 'Estimation du coût OIBT',
      resultNote: 'Prix indicatif. Obtenez votre devis exact gratuit :',
      devisBtn: 'Devis exact gratuit en 24h',
      emailLabel: 'Recevez votre estimation par email',
      emailPlaceholder: 'votre@email.ch',
      emailBtn: 'Envoyer',
      disclaimer: '⚠️ Ces estimations sont indicatives. Le prix réel dépend de la complexité de votre installation. Demandez un devis gratuit pour un prix exact.',
      types: {
        studio: 'Studio / 1 pièce', t2: 'Appartement 2 pièces', t3: 'Appartement 3 pièces',
        t4: 'Appartement 4 pièces', t5plus: 'Appartement 5 pièces et +',
        villa_petite: 'Villa individuelle (< 200m²)', villa_grande: 'Villa individuelle (> 200m²)',
        immeuble_4_8: 'Immeuble 4-8 logements', immeuble_9plus: 'Immeuble 9+ logements',
        bureau_petit: 'Bureau/commerce (< 300m²)', bureau_grand: 'Bureau/commerce (> 300m²)',
        industrie: 'Installation industrielle',
      },
      breadcrumb: [{ label: 'Accueil', href: '/fr' }, { label: 'Simulateur de prix' }],
    },
    de: {
      h1: 'Preisrechner — NIV-Elektrokontrolle',
      desc: 'Schätzen Sie kostenlos die Kosten Ihrer Elektrokontrolle NIV in der Schweiz. Sofortiges Ergebnis.',
      typeLabel: 'Gebäudetyp',
      cantonLabel: 'Kanton',
      calculate: 'Meine Kostenschätzung berechnen',
      resultTitle: 'Kostenschätzung NIV-Elektrokontrolle',
      resultNote: 'Richtwert. Erhalten Sie Ihre exakte kostenlose Offerte:',
      devisBtn: 'Genaue Offerte kostenlos in 24h',
      emailLabel: 'Schätzung per E-Mail erhalten',
      emailPlaceholder: 'ihre@email.ch',
      emailBtn: 'Senden',
      disclaimer: '⚠️ Diese Schätzungen sind Richtwerte. Der tatsächliche Preis hängt von der Komplexität Ihrer Anlage ab.',
      types: {
        studio: '1-Zimmerwohnung', t2: '2-Zimmerwohnung', t3: '3-Zimmerwohnung',
        t4: '4-Zimmerwohnung', t5plus: '5+-Zimmerwohnung',
        villa_petite: 'Kleines Einfamilienhaus (< 200m²)', villa_grande: 'Großes Einfamilienhaus (> 200m²)',
        immeuble_4_8: 'Mehrfamilienhaus 4-8 Whg.', immeuble_9plus: 'Mehrfamilienhaus 9+ Whg.',
        bureau_petit: 'Kleines Büro/Gewerbe (< 300m²)', bureau_grand: 'Großes Büro/Gewerbe (> 300m²)',
        industrie: 'Industrieanlage',
      },
      breadcrumb: [{ label: 'Startseite', href: '/de' }, { label: 'Preisrechner' }],
    },
    it: {
      h1: 'Simulatore di prezzi — Controllo OIBT',
      desc: 'Stimate gratuitamente il costo del vostro controllo OIBT in Svizzera. Risultato istantaneo.',
      typeLabel: 'Tipo di edificio',
      cantonLabel: 'Cantone',
      calculate: 'Calcola la mia stima',
      resultTitle: 'Stima del costo OIBT',
      resultNote: 'Prezzo indicativo. Ottenete il vostro preventivo esatto gratuito:',
      devisBtn: 'Preventivo esatto gratuito in 24h',
      emailLabel: 'Ricevete la stima per email',
      emailPlaceholder: 'vostro@email.ch',
      emailBtn: 'Invia',
      disclaimer: '⚠️ Queste stime sono indicative. Il prezzo reale dipende dalla complessità del vostro impianto.',
      types: {
        studio: 'Monolocale / 1 locale', t2: 'Appartamento 2 locali', t3: 'Appartamento 3 locali',
        t4: 'Appartamento 4 locali', t5plus: 'Appartamento 5+ locali',
        villa_petite: 'Villa individuale (< 200m²)', villa_grande: 'Villa individuale (> 200m²)',
        immeuble_4_8: 'Condominio 4-8 appartamenti', immeuble_9plus: 'Condominio 9+ appartamenti',
        bureau_petit: 'Ufficio/negozio (< 300m²)', bureau_grand: 'Ufficio/negozio (> 300m²)',
        industrie: 'Impianto industriale',
      },
      breadcrumb: [{ label: 'Home', href: '/it' }, { label: 'Simulatore prezzi' }],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  const cantonsList = [
    { code: 'GE', name: 'Genève' }, { code: 'VD', name: 'Vaud' }, { code: 'VS', name: 'Valais / Wallis' },
    { code: 'NE', name: 'Neuchâtel' }, { code: 'FR', name: 'Fribourg' }, { code: 'JU', name: 'Jura' },
    { code: 'BE', name: 'Berne / Bern' }, { code: 'ZH', name: 'Zürich' }, { code: 'AG', name: 'Aargau' },
    { code: 'LU', name: 'Luzern' }, { code: 'SG', name: 'St. Gallen' }, { code: 'BS', name: 'Basel-Stadt' },
    { code: 'BL', name: 'Basel-Landschaft' }, { code: 'SO', name: 'Solothurn' }, { code: 'TG', name: 'Thurgau' },
    { code: 'SH', name: 'Schaffhausen' }, { code: 'ZG', name: 'Zug' }, { code: 'GR', name: 'Graubünden' },
    { code: 'TI', name: 'Ticino' }, { code: 'SZ', name: 'Schwyz' }, { code: 'NW', name: 'Nidwalden' },
    { code: 'OW', name: 'Obwalden' }, { code: 'UR', name: 'Uri' }, { code: 'GL', name: 'Glarus' },
    { code: 'AI', name: 'Appenzell Innerrhoden' }, { code: 'AR', name: 'Appenzell Ausserrhoden' },
  ];

  const calculate = () => {
    if (!type || !canton) return;
    const base = baseByType[type];
    const mult = multiplierByCanton[canton] || 1.0;
    const min = Math.round(base.min * mult / 10) * 10;
    const max = Math.round(base.max * mult / 10) * 10;
    const cantonName = cantonsList.find((c) => c.code === canton)?.name || canton;
    const typeName = c.types[type as keyof typeof c.types] || type;
    setResult({ min, max, label: `${typeName} — ${cantonName}` });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{c.h1}</h1>
        <p className="text-gray-600 mb-8">{c.desc}</p>

        <div className="card shadow-md mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{c.typeLabel}</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              >
                <option value="">—</option>
                {Object.entries(c.types).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{c.cantonLabel}</label>
              <select
                value={canton}
                onChange={(e) => setCanton(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              >
                <option value="">—</option>
                {cantonsList.map((ct) => (
                  <option key={ct.code} value={ct.code}>{ct.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!type || !canton}
              className="btn-primary w-full justify-center py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {c.calculate}
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-200 rounded-2xl p-8 text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">{result.label}</p>
            <h2 className="text-4xl font-extrabold text-primary-800 mb-1">
              CHF {result.min} — CHF {result.max}
            </h2>
            <p className="text-gray-500 text-sm mb-6">{c.resultNote}</p>
            <Link href={`/${locale}/devis-controle-oibt`} className="btn-primary">
              {c.devisBtn}
            </Link>

            {/* Lead capture */}
            {!leadSent ? (
              <form onSubmit={sendEmail} className="mt-6 flex gap-2">
                <input
                  type="email"
                  required
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
                <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                  {c.emailBtn}
                </button>
              </form>
            ) : (
              <p className="mt-4 text-green-700 text-sm font-medium">✓ {locale === 'de' ? 'E-Mail gesendet!' : locale === 'it' ? 'Email inviata!' : 'Email envoyé !'}</p>
            )}
          </div>
        )}

        <p className="text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-lg p-3">{c.disclaimer}</p>
      </div>
    </>
  );
}
