'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

const content = {
  fr: {
    h1: 'Contactez-nous — Contrôle OIBT Suisse',
    intro: 'Une question sur votre contrôle OIBT ? Besoin d\'un devis ? Notre équipe vous répond sous 24h ouvrables.',
    fields: {
      nom: 'Nom et prénom',
      email: 'Adresse e-mail',
      tel: 'Téléphone (optionnel)',
      sujet: 'Sujet',
      message: 'Votre message',
      submit: 'Envoyer le message',
    },
    sujets: ['Demande de devis', 'Question sur le contrôle', 'Rapport de sécurité', 'Urgence', 'Autre'],
    success: 'Votre message a bien été envoyé. Nous vous répondons sous 24h ouvrables.',
    bc: ['Accueil', 'Contact'],
  },
  de: {
    h1: 'Kontaktieren Sie uns — NIV-Kontrolle Schweiz',
    intro: 'Frage zu Ihrer NIV-Kontrolle? Offertanfrage? Unser Team antwortet innerhalb von 24 Werktunden.',
    fields: {
      nom: 'Vor- und Nachname',
      email: 'E-Mail-Adresse',
      tel: 'Telefon (optional)',
      sujet: 'Betreff',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
    },
    sujets: ['Offertanfrage', 'Frage zur Kontrolle', 'Sicherheitsnachweis', 'Notfall', 'Sonstiges'],
    success: 'Ihre Nachricht wurde erfolgreich gesendet. Wir antworten innerhalb von 24 Werktunden.',
    bc: ['Startseite', 'Kontakt'],
  },
  it: {
    h1: 'Contattateci — Controllo OIBT Svizzera',
    intro: 'Una domanda sul vostro controllo OIBT? Richiesta di preventivo? Il nostro team risponde entro 24 ore lavorative.',
    fields: {
      nom: 'Nome e cognome',
      email: 'Indirizzo e-mail',
      tel: 'Telefono (opzionale)',
      sujet: 'Oggetto',
      message: 'Il vostro messaggio',
      submit: 'Invia messaggio',
    },
    sujets: ['Richiesta di preventivo', 'Domanda sul controllo', 'Rapporto di sicurezza', 'Urgenza', 'Altro'],
    success: 'Il vostro messaggio è stato inviato. Vi risponderemo entro 24 ore lavorative.',
    bc: ['Home', 'Contatto'],
  },
};

export default function ContactPage() {
  const [locale] = useState<'fr' | 'de' | 'it'>('fr');
  const [form, setForm] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);

  const c = content[locale];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const bc = [
    { label: c.bc[0], href: `/${locale}` },
    { label: c.bc[1] },
  ];

  if (sent) {
    return (
      <>
        <Breadcrumb items={bc} />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-4">✅</div>
          <p className="text-gray-700 text-lg">{c.success}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={bc} />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{c.h1}</h1>
        <p className="text-gray-600 mb-8">{c.intro}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.nom} *</label>
            <input
              type="text"
              required
              value={form.nom}
              onChange={e => setForm({ ...form, nom: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.email} *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.tel}</label>
            <input
              type="tel"
              value={form.tel}
              onChange={e => setForm({ ...form, tel: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.sujet} *</label>
            <select
              required
              value={form.sujet}
              onChange={e => setForm({ ...form, sujet: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
            >
              <option value="">—</option>
              {c.sujets.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.fields.message} *</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            {c.fields.submit}
          </button>
        </form>
      </div>
    </>
  );
}
