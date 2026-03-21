'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Breadcrumb from '@/components/ui/Breadcrumb';

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  canton: string;
  typeBatiment: string;
  nbPieces: string;
  urgence: string;
  message: string;
};

export default function DevisPage() {
  const locale = useLocale();
  const [form, setForm] = useState<FormData>({
    nom: '', email: '', telephone: '', ville: '', canton: '',
    typeBatiment: '', nbPieces: '', urgence: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const content = {
    fr: {
      h1: 'Demandez votre devis OIBT gratuit',
      subtitle: 'Réponse garantie en moins de 24h. Sans engagement. Organe de contrôle indépendant accrédité ESTI.',
      fields: {
        nom: 'Nom & Prénom *',
        email: 'Email *',
        telephone: 'Téléphone',
        ville: 'Ville *',
        canton: 'Canton *',
        typeBatiment: 'Type de bâtiment *',
        nbPieces: 'Nombre de pièces / logements',
        urgence: 'Délai souhaité',
        message: 'Informations complémentaires',
      },
      types: ['Appartement', 'Villa individuelle', 'Immeuble locatif', 'PPE / Copropriété', 'Bureaux / Commerce', 'Industrie / Entrepôt', 'Installation photovoltaïque', 'Borne de recharge VE', 'Autre'],
      urgences: ['Dès que possible (< 2 semaines)', 'Dans le mois', '1-3 mois', 'Flexibel'],
      submit: 'Envoyer ma demande de devis',
      success: {
        title: 'Demande reçue ! ✓',
        text: 'Nous vous contacterons dans les 24h avec votre devis personnalisé. Merci de votre confiance.',
      },
      breadcrumb: [{ label: 'Accueil', href: '/fr' }, { label: 'Devis gratuit' }],
      trusts: [
        '✓ Réponse en 24h garantie',
        '✓ Devis sans engagement',
        '✓ Organe indépendant accrédité',
        '✓ Prix transparent',
      ],
    },
    de: {
      h1: 'Kostenlose NIV-Elektrokontrolle Offerte anfordern',
      subtitle: 'Antwort garantiert in weniger als 24h. Unverbindlich. ESTI-akkreditiertes unabhängiges Kontrollorgan.',
      fields: {
        nom: 'Vor- und Nachname *',
        email: 'E-Mail *',
        telephone: 'Telefon',
        ville: 'Ort *',
        canton: 'Kanton *',
        typeBatiment: 'Gebäudetyp *',
        nbPieces: 'Anzahl Zimmer / Wohnungen',
        urgence: 'Gewünschter Termin',
        message: 'Zusätzliche Informationen',
      },
      types: ['Wohnung', 'Einfamilienhaus', 'Mehrfamilienhaus', 'Stockwerkeigentum', 'Büro / Gewerbe', 'Industrie / Lager', 'Photovoltaikanlage', 'EV-Ladestation', 'Sonstiges'],
      urgences: ['So bald wie möglich (< 2 Wochen)', 'Innerhalb eines Monats', '1-3 Monate', 'Flexibel'],
      submit: 'Offerte anfordern',
      success: {
        title: 'Anfrage erhalten! ✓',
        text: 'Wir melden uns innerhalb von 24h mit Ihrer persönlichen Offerte. Danke für Ihr Vertrauen.',
      },
      breadcrumb: [{ label: 'Startseite', href: '/de' }, { label: 'Kostenlose Offerte' }],
      trusts: [
        '✓ Antwort in 24h garantiert',
        '✓ Unverbindliche Offerte',
        '✓ Akkreditiertes unabhängiges Organ',
        '✓ Transparente Preise',
      ],
    },
    it: {
      h1: 'Richiedete il vostro preventivo OIBT gratuito',
      subtitle: 'Risposta garantita in meno di 24h. Senza impegno. Organo di controllo indipendente accreditato ESTI.',
      fields: {
        nom: 'Nome e Cognome *',
        email: 'Email *',
        telephone: 'Telefono',
        ville: 'Città *',
        canton: 'Cantone *',
        typeBatiment: 'Tipo di edificio *',
        nbPieces: 'Numero di locali / appartamenti',
        urgence: 'Termine desiderato',
        message: 'Informazioni aggiuntive',
      },
      types: ['Appartamento', 'Villa individuale', 'Condominio in affitto', 'PPE / Proprietà per piani', 'Ufficio / Negozio', 'Industria / Magazzino', 'Impianto fotovoltaico', 'Stazione di ricarica VE', 'Altro'],
      urgences: ['Il prima possibile (< 2 settimane)', 'Nel mese', '1-3 mesi', 'Flessibile'],
      submit: 'Invia la mia richiesta di preventivo',
      success: {
        title: 'Richiesta ricevuta! ✓',
        text: 'Vi contatteremo entro 24h con il vostro preventivo personalizzato. Grazie della fiducia.',
      },
      breadcrumb: [{ label: 'Home', href: '/it' }, { label: 'Preventivo gratuito' }],
      trusts: [
        '✓ Risposta in 24h garantita',
        '✓ Preventivo senza impegno',
        '✓ Organo indipendente accreditato',
        '✓ Prezzi trasparenti',
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{c.success.title}</h1>
        <p className="text-gray-600 text-lg">{c.success.text}</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{c.h1}</h1>
        <p className="text-gray-600 mb-6">{c.subtitle}</p>

        {/* Trust */}
        <div className="flex flex-wrap gap-3 mb-8">
          {c.trusts.map((t) => (
            <span key={t} className="badge-success text-sm">{t}</span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.nom}</label>
              <input
                type="text"
                required
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.telephone}</label>
              <input
                type="tel"
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.ville}</label>
              <input
                type="text"
                required
                value={form.ville}
                onChange={(e) => setForm({ ...form, ville: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.typeBatiment}</label>
              <select
                required
                value={form.typeBatiment}
                onChange={(e) => setForm({ ...form, typeBatiment: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">—</option>
                {c.types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.urgence}</label>
              <select
                value={form.urgence}
                onChange={(e) => setForm({ ...form, urgence: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">—</option>
                {c.urgences.map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.message}</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-lg py-4"
          >
            {loading ? '...' : c.submit}
          </button>
        </form>
      </div>
    </>
  );
}
