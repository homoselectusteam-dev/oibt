'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Question = { q: string; answers: { text: string; risk: number }[] };

export default function QuizConformitePage() {
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const content = {
    fr: {
      h1: 'Quiz conformité électrique OIBT',
      desc: 'Évaluez le niveau de risque de votre installation électrique en 7 questions. Résultat immédiat.',
      breadcrumb: [{ label: 'Accueil', href: '/fr' }, { label: 'Quiz conformité' }],
      questions: [
        {
          q: "Quand a eu lieu le dernier contrôle OIBT de votre installation ?",
          answers: [
            { text: "Moins de 5 ans", risk: 0 },
            { text: "Entre 5 et 10 ans", risk: 1 },
            { text: "Entre 10 et 20 ans", risk: 2 },
            { text: "Plus de 20 ans / Jamais", risk: 4 },
          ],
        },
        {
          q: "Votre installation comporte-t-elle des câbles en aluminium ou sans mise à la terre ?",
          answers: [
            { text: "Non, câblage moderne", risk: 0 },
            { text: "Je ne sais pas", risk: 2 },
            { text: "Oui, câblage ancien (Schéma III)", risk: 5 },
          ],
        },
        {
          q: "Avez-vous remarqué des disjoncteurs qui sautent fréquemment ?",
          answers: [
            { text: "Non, jamais", risk: 0 },
            { text: "Occasionnellement", risk: 1 },
            { text: "Régulièrement", risk: 3 },
          ],
        },
        {
          q: "Des prises ou interrupteurs présentent-ils des traces de brûlures ou de chaleur ?",
          answers: [
            { text: "Non", risk: 0 },
            { text: "J'ai quelques doutes", risk: 2 },
            { text: "Oui", risk: 5 },
          ],
        },
        {
          q: "Votre tableau électrique est-il de quelle génération ?",
          answers: [
            { text: "Moderne (après 2000)", risk: 0 },
            { text: "Intermédiaire (1980-2000)", risk: 1 },
            { text: "Ancien (avant 1980)", risk: 3 },
          ],
        },
        {
          q: "Avez-vous fait des travaux électriques ces 5 dernières années ?",
          answers: [
            { text: "Non", risk: 0 },
            { text: "Oui, par un électricien agréé", risk: 0 },
            { text: "Oui, bricolage amateur", risk: 3 },
          ],
        },
        {
          q: "Votre installation a-t-elle des panneaux solaires, bornes VE ou appareils haute puissance ajoutés récemment ?",
          answers: [
            { text: "Non", risk: 0 },
            { text: "Oui, installés par professionnel", risk: 0 },
            { text: "Oui, sans contrôle subséquent", risk: 2 },
          ],
        },
      ] as Question[],
      results: [
        { max: 3, level: '✅ Risque faible', color: 'green', message: "Votre installation semble en bon état. Vérifiez néanmoins la date de votre dernier contrôle OIBT pour être en conformité légale." },
        { max: 8, level: '⚠️ Risque modéré', color: 'amber', message: "Votre installation présente quelques points de vigilance. Un contrôle OIBT permettra d'identifier et de corriger les défauts." },
        { max: 999, level: '🚨 Risque élevé', color: 'red', message: "Votre installation présente des risques sérieux. Un contrôle OIBT urgent est fortement recommandé pour votre sécurité." },
      ],
      ctaText: 'Demander un contrôle OIBT urgent',
      progress: 'Question',
      of: 'sur',
    },
    de: {
      h1: 'NIV-Konformitätsquiz',
      desc: 'Bewerten Sie das Risikoniveau Ihrer Elektroinstallation in 7 Fragen. Sofortiges Ergebnis.',
      breadcrumb: [{ label: 'Startseite', href: '/de' }, { label: 'Konformitäts-Quiz' }],
      questions: [
        {
          q: "Wann fand die letzte NIV-Elektrokontrolle Ihrer Anlage statt?",
          answers: [
            { text: "Weniger als 5 Jahre", risk: 0 },
            { text: "Zwischen 5 und 10 Jahren", risk: 1 },
            { text: "Zwischen 10 und 20 Jahren", risk: 2 },
            { text: "Mehr als 20 Jahre / Nie", risk: 4 },
          ],
        },
        {
          q: "Hat Ihre Installation Aluminiumkabel oder Kabel ohne Erdung?",
          answers: [
            { text: "Nein, moderne Verkabelung", risk: 0 },
            { text: "Ich weiß es nicht", risk: 2 },
            { text: "Ja, alte Verkabelung (Schema III)", risk: 5 },
          ],
        },
        {
          q: "Lösen Ihre Schutzschalter häufig aus?",
          answers: [
            { text: "Nein, nie", risk: 0 },
            { text: "Gelegentlich", risk: 1 },
            { text: "Regelmäßig", risk: 3 },
          ],
        },
        {
          q: "Zeigen Steckdosen oder Schalter Brandspuren oder Hitze?",
          answers: [
            { text: "Nein", risk: 0 },
            { text: "Ich habe Zweifel", risk: 2 },
            { text: "Ja", risk: 5 },
          ],
        },
        {
          q: "Aus welcher Generation stammt Ihr Sicherungskasten?",
          answers: [
            { text: "Modern (nach 2000)", risk: 0 },
            { text: "Mittelalt (1980-2000)", risk: 1 },
            { text: "Alt (vor 1980)", risk: 3 },
          ],
        },
        {
          q: "Haben Sie in den letzten 5 Jahren Elektroarbeiten durchgeführt?",
          answers: [
            { text: "Nein", risk: 0 },
            { text: "Ja, durch zugelassenen Elektriker", risk: 0 },
            { text: "Ja, Heimwerkerarbeiten", risk: 3 },
          ],
        },
        {
          q: "Wurden kürzlich Solaranlagen, EV-Ladestationen oder Hochleistungsgeräte installiert?",
          answers: [
            { text: "Nein", risk: 0 },
            { text: "Ja, vom Fachmann installiert", risk: 0 },
            { text: "Ja, ohne anschließende Kontrolle", risk: 2 },
          ],
        },
      ] as Question[],
      results: [
        { max: 3, level: '✅ Geringes Risiko', color: 'green', message: "Ihre Anlage scheint in gutem Zustand. Überprüfen Sie dennoch das Datum Ihrer letzten NIV-Kontrolle." },
        { max: 8, level: '⚠️ Mittleres Risiko', color: 'amber', message: "Ihre Anlage weist einige Warnsignale auf. Eine NIV-Kontrolle hilft, Mängel zu identifizieren." },
        { max: 999, level: '🚨 Hohes Risiko', color: 'red', message: "Ihre Anlage weist ernste Risiken auf. Eine dringende NIV-Elektrokontrolle wird zu Ihrer Sicherheit empfohlen." },
      ],
      ctaText: 'Dringende NIV-Kontrolle anfordern',
      progress: 'Frage',
      of: 'von',
    },
    it: {
      h1: 'Quiz conformità elettrica OIBT',
      desc: 'Valutate il livello di rischio del vostro impianto elettrico in 7 domande. Risultato immediato.',
      breadcrumb: [{ label: 'Home', href: '/it' }, { label: 'Quiz conformità' }],
      questions: [
        {
          q: "Quando è avvenuto l'ultimo controllo OIBT del vostro impianto?",
          answers: [
            { text: "Meno di 5 anni fa", risk: 0 },
            { text: "Tra 5 e 10 anni fa", risk: 1 },
            { text: "Tra 10 e 20 anni fa", risk: 2 },
            { text: "Più di 20 anni / Mai", risk: 4 },
          ],
        },
        {
          q: "Il vostro impianto ha cavi in alluminio o senza messa a terra?",
          answers: [
            { text: "No, cablaggio moderno", risk: 0 },
            { text: "Non lo so", risk: 2 },
            { text: "Sì, cablaggio antico (Schema III)", risk: 5 },
          ],
        },
        {
          q: "I vostri interruttori scattano frequentemente?",
          answers: [
            { text: "No, mai", risk: 0 },
            { text: "Occasionalmente", risk: 1 },
            { text: "Regolarmente", risk: 3 },
          ],
        },
        {
          q: "Alcune prese o interruttori presentano segni di bruciature o calore?",
          answers: [
            { text: "No", risk: 0 },
            { text: "Ho qualche dubbio", risk: 2 },
            { text: "Sì", risk: 5 },
          ],
        },
        {
          q: "Di quale generazione è il vostro quadro elettrico?",
          answers: [
            { text: "Moderno (dopo il 2000)", risk: 0 },
            { text: "Intermedio (1980-2000)", risk: 1 },
            { text: "Vecchio (prima del 1980)", risk: 3 },
          ],
        },
        {
          q: "Avete effettuato lavori elettrici negli ultimi 5 anni?",
          answers: [
            { text: "No", risk: 0 },
            { text: "Sì, da un elettricista abilitato", risk: 0 },
            { text: "Sì, fai-da-te", risk: 3 },
          ],
        },
        {
          q: "Sono stati installati recentemente pannelli solari, stazioni di ricarica VE o apparecchi ad alta potenza?",
          answers: [
            { text: "No", risk: 0 },
            { text: "Sì, installati da professionisti", risk: 0 },
            { text: "Sì, senza controllo successivo", risk: 2 },
          ],
        },
      ] as Question[],
      results: [
        { max: 3, level: '✅ Rischio basso', color: 'green', message: "Il vostro impianto sembra in buono stato. Verificate comunque la data dell'ultimo controllo OIBT." },
        { max: 8, level: '⚠️ Rischio moderato', color: 'amber', message: "Il vostro impianto presenta alcuni punti di attenzione. Un controllo OIBT permetterà di identificare e correggere i difetti." },
        { max: 999, level: '🚨 Rischio elevato', color: 'red', message: "Il vostro impianto presenta rischi seri. Un controllo OIBT urgente è fortemente raccomandato." },
      ],
      ctaText: 'Richiedere un controllo OIBT urgente',
      progress: 'Domanda',
      of: 'su',
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;
  const questions = c.questions;

  const answer = (risk: number) => {
    const newScore = score + risk;
    if (current + 1 >= questions.length) {
      setScore(newScore);
      setDone(true);
    } else {
      setScore(newScore);
      setCurrent(current + 1);
    }
  };

  const getResult = () => c.results.find((r) => score <= r.max) || c.results[c.results.length - 1];
  const colorMap: Record<string, string> = {
    green: 'bg-green-50 border-green-300',
    amber: 'bg-amber-50 border-amber-300',
    red: 'bg-red-50 border-red-300',
  };

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{c.h1}</h1>
        <p className="text-gray-600 mb-8">{c.desc}</p>

        {!done ? (
          <div className="card shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">{c.progress} {current + 1} {c.of} {questions.length}</span>
              <div className="h-2 flex-1 bg-gray-200 rounded-full mx-4">
                <div
                  className="h-2 bg-primary-600 rounded-full transition-all"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-5">{questions[current].q}</h2>
            <div className="space-y-3">
              {questions[current].answers.map((ans) => (
                <button
                  key={ans.text}
                  onClick={() => answer(ans.risk)}
                  className="w-full text-left p-4 border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 rounded-xl transition-all"
                >
                  {ans.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={`border-2 rounded-2xl p-8 ${colorMap[getResult().color]}`}>
            <h2 className="text-2xl font-bold mb-3">{getResult().level}</h2>
            <p className="text-gray-800 mb-6">{getResult().message}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href={`/${locale}/devis-controle-oibt`} className="btn-primary">
                {c.ctaText}
              </Link>
              <button
                onClick={() => { setCurrent(0); setScore(0); setDone(false); }}
                className="btn-secondary"
              >
                {locale === 'de' ? 'Quiz wiederholen' : locale === 'it' ? 'Ricomincia il quiz' : 'Recommencer le quiz'}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
