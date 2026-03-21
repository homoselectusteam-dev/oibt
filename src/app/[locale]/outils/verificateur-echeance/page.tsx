'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

type ResultType = 'conforme' | 'bientot' | 'echu' | null;

export default function VerificateurEcheancePage() {
  const locale = useLocale();
  const [typeBatiment, setTypeBatiment] = useState('habitation');
  const [lastControl, setLastControl] = useState('');
  const [result, setResult] = useState<{ status: ResultType; message: string; detail: string; cta: boolean } | null>(null);

  const periodicites: Record<string, number> = {
    habitation: 20,
    bureau: 10,
    commerce: 10,
    hotel: 5,
    industrie: 5,
    photovoltaique: 10,
    borne_ve: 10,
    schema3: 5,
  };

  const content = {
    fr: {
      h1: 'Vérificateur d\'échéance OIBT',
      desc: 'Vérifiez instantanément si votre contrôle OIBT est échu, bientôt dû ou encore valide.',
      typeLabel: 'Type de bâtiment / installation',
      dateLabel: 'Date du dernier contrôle OIBT',
      check: 'Vérifier mon échéance',
      types: {
        habitation: 'Habitation (maison, appartement) — 20 ans',
        bureau: 'Bureau / commerce — 10 ans',
        commerce: 'Commerce / atelier — 10 ans',
        hotel: 'Hôtel / grand établissement — 5 ans',
        industrie: 'Industrie — 5 ans',
        photovoltaique: 'Photovoltaïque — 10 ans',
        borne_ve: 'Borne de recharge VE — 10 ans',
        schema3: 'Schéma III (ancien câblage) — 5 ans',
      },
      statuses: {
        conforme: { title: '✅ Contrôle valide', color: 'green' },
        bientot: { title: '⚠️ Échéance proche', color: 'amber' },
        echu: { title: '🚨 Contrôle échu !', color: 'red' },
      },
      breadcrumb: [{ label: 'Accueil', href: '/fr' }, { label: 'Vérificateur échéance' }],
    },
    de: {
      h1: 'NIV-Fälligkeitsprüfer',
      desc: 'Prüfen Sie sofort, ob Ihre NIV-Kontrolle fällig, bald fällig oder noch gültig ist.',
      typeLabel: 'Gebäude- / Anlagentyp',
      dateLabel: 'Datum der letzten Elektrokontrolle NIV',
      check: 'Fälligkeit prüfen',
      types: {
        habitation: 'Wohngebäude (Haus, Wohnung) — 20 Jahre',
        bureau: 'Büro / Gewerbe — 10 Jahre',
        commerce: 'Handel / Werkstatt — 10 Jahre',
        hotel: 'Hotel / Großgebäude — 5 Jahre',
        industrie: 'Industrie — 5 Jahre',
        photovoltaique: 'Photovoltaik — 10 Jahre',
        borne_ve: 'EV-Ladestation — 10 Jahre',
        schema3: 'Schema III (alte Verkabelung) — 5 Jahre',
      },
      statuses: {
        conforme: { title: '✅ Kontrolle gültig', color: 'green' },
        bientot: { title: '⚠️ Fälligkeit naht', color: 'amber' },
        echu: { title: '🚨 Kontrolle fällig!', color: 'red' },
      },
      breadcrumb: [{ label: 'Startseite', href: '/de' }, { label: 'Fälligkeitsprüfer' }],
    },
    it: {
      h1: 'Verificatore di scadenza OIBT',
      desc: 'Verificate istantaneamente se il vostro controllo OIBT è scaduto, in scadenza o ancora valido.',
      typeLabel: 'Tipo di edificio / impianto',
      dateLabel: 'Data dell\'ultimo controllo OIBT',
      check: 'Verifica la mia scadenza',
      types: {
        habitation: 'Abitazione (casa, appartamento) — 20 anni',
        bureau: 'Ufficio / negozio — 10 anni',
        commerce: 'Commercio / laboratorio — 10 anni',
        hotel: 'Hotel / grande edificio — 5 anni',
        industrie: 'Industria — 5 anni',
        photovoltaique: 'Fotovoltaico — 10 anni',
        borne_ve: 'Stazione di ricarica VE — 10 anni',
        schema3: 'Schema III (vecchio cablaggio) — 5 anni',
      },
      statuses: {
        conforme: { title: '✅ Controllo valido', color: 'green' },
        bientot: { title: '⚠️ Scadenza imminente', color: 'amber' },
        echu: { title: '🚨 Controllo scaduto!', color: 'red' },
      },
      breadcrumb: [{ label: 'Home', href: '/it' }, { label: 'Verifica scadenza' }],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  const check = () => {
    if (!lastControl) return;
    const last = new Date(lastControl);
    const now = new Date();
    const years = (now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const limit = periodicites[typeBatiment] || 20;
    const nextDate = new Date(last);
    nextDate.setFullYear(nextDate.getFullYear() + limit);
    const remaining = Math.round((nextDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30));

    let status: ResultType;
    let message: string;
    let detail: string;
    let cta = false;

    if (years > limit) {
      status = 'echu';
      message = c.statuses.echu.title;
      const overdueMonths = Math.round((years - limit) * 12);
      detail = locale === 'de'
        ? `Ihre NIV-Kontrolle ist seit ${overdueMonths} Monaten fällig. Handeln Sie sofort, um die gesetzliche Pflicht zu erfüllen.`
        : locale === 'it'
        ? `Il vostro controllo OIBT è scaduto da ${overdueMonths} mesi. Agite subito per rispettare l'obbligo legale.`
        : `Votre contrôle OIBT est échu depuis ${overdueMonths} mois. Agissez immédiatement pour remplir votre obligation légale.`;
      cta = true;
    } else if (remaining <= 12) {
      status = 'bientot';
      message = c.statuses.bientot.title;
      detail = locale === 'de'
        ? `Ihre NIV-Kontrolle ist fällig am ${nextDate.toLocaleDateString('de-CH')} (in ${remaining} Monaten). Planen Sie jetzt.`
        : locale === 'it'
        ? `Il vostro controllo OIBT è previsto per ${nextDate.toLocaleDateString('it-CH')} (tra ${remaining} mesi). Pianificate ora.`
        : `Votre contrôle OIBT est dû le ${nextDate.toLocaleDateString('fr-CH')} (dans ${remaining} mois). Planifiez dès maintenant.`;
      cta = true;
    } else {
      status = 'conforme';
      message = c.statuses.conforme.title;
      detail = locale === 'de'
        ? `Ihre NIV-Kontrolle ist gültig bis ${nextDate.toLocaleDateString('de-CH')} (noch ${remaining} Monate).`
        : locale === 'it'
        ? `Il vostro controllo OIBT è valido fino al ${nextDate.toLocaleDateString('it-CH')} (ancora ${remaining} mesi).`
        : `Votre contrôle OIBT est valide jusqu'au ${nextDate.toLocaleDateString('fr-CH')} (encore ${remaining} mois).`;
    }

    setResult({ status, message, detail, cta });
  };

  const colors: Record<string, string> = {
    green: 'bg-green-50 border-green-300 text-green-900',
    amber: 'bg-amber-50 border-amber-300 text-amber-900',
    red: 'bg-red-50 border-red-300 text-red-900',
  };

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{c.h1}</h1>
        <p className="text-gray-600 mb-8">{c.desc}</p>

        <div className="card shadow-md mb-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{c.typeLabel}</label>
            <select
              value={typeBatiment}
              onChange={(e) => setTypeBatiment(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            >
              {Object.entries(c.types).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{c.dateLabel}</label>
            <input
              type="date"
              value={lastControl}
              onChange={(e) => setLastControl(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>

          <button
            onClick={check}
            disabled={!lastControl}
            className="btn-primary w-full justify-center py-3 disabled:opacity-50"
          >
            {c.check}
          </button>
        </div>

        {result && (
          <div className={`border-2 rounded-2xl p-6 ${colors[result.status === 'conforme' ? 'green' : result.status === 'bientot' ? 'amber' : 'red']}`}>
            <h2 className="text-2xl font-bold mb-3">{result.message}</h2>
            <p className="mb-4">{result.detail}</p>
            {result.cta && (
              <Link href={`/${locale}/devis-controle-oibt`} className="btn-primary">
                {locale === 'de' ? 'Jetzt Offerte anfordern' : locale === 'it' ? 'Richiedi preventivo ora' : 'Demander un devis maintenant'}
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
