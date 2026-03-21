import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema, buildBreadcrumbSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Prix contrôle OIBT 2026 | Tarifs par canton et type de bâtiment',
    de: 'Elektrokontrolle NIV Kosten 2026 | Preise nach Kanton und Gebäudetyp',
    it: 'Costo controllo OIBT 2026 | Tariffe per cantone e tipo di edificio',
  };
  const descs = {
    fr: "Prix d'un contrôle OIBT en Suisse ✓ CHF 250 à CHF 2'000 ✓ Tarifs par canton (GE, VD, ZH, BE...) ✓ Prix par type de bâtiment ✓ Devis gratuit ✓ Marché libéralisé 2026",
    de: "Kosten Elektrokontrolle NIV Schweiz ✓ CHF 250 bis CHF 2'000 ✓ Preise nach Kanton (ZH, BE, AG...) ✓ Preis nach Gebäudetyp ✓ Kostenlose Offerte ✓ Liberalisierter Markt 2026",
    it: "Costo controllo OIBT Svizzera ✓ CHF 250 a CHF 2'000 ✓ Tariffe per cantone ✓ Prezzo per tipo di edificio ✓ Preventivo gratuito ✓ Mercato liberalizzato 2026",
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: {
      canonical: `https://controle-oibt.ch/${locale}/prix-controle-oibt`,
      languages: {
        fr: 'https://controle-oibt.ch/fr/prix-controle-oibt',
        de: 'https://controle-oibt.ch/de/elektrokontrolle-kosten',
        it: 'https://controle-oibt.ch/it/costo-controllo-elettrico',
      },
    },
  };
}

const prixParCanton = [
  { canton: 'Genève (GE)', min: 400, max: 1200, note: { fr: 'Marché dense, prix élevés', de: 'Dichter Markt, hohe Preise', it: 'Mercato denso, prezzi alti' } },
  { canton: 'Zurich (ZH)', min: 450, max: 1400, note: { fr: 'Plus cher de Suisse', de: 'Teuerster Kanton', it: 'Il più caro della Svizzera' } },
  { canton: 'Bâle-Ville (BS)', min: 400, max: 1200, note: { fr: 'Centre urbain dense', de: 'Dichtes Stadtzentrum', it: 'Centro urbano denso' } },
  { canton: 'Vaud (VD)', min: 300, max: 950, note: { fr: 'Large éventail selon villes', de: 'Breite Preisspanne', it: 'Ampia gamma di prezzi' } },
  { canton: 'Berne (BE)', min: 320, max: 1100, note: { fr: 'Variable selon zones', de: 'Je nach Gebiet variabel', it: 'Variabile per zona' } },
  { canton: 'Argovie (AG)', min: 300, max: 1000, note: { fr: 'Prix intermédiaires', de: 'Mittlere Preise', it: 'Prezzi intermedi' } },
  { canton: 'Valais (VS)', min: 280, max: 820, note: { fr: 'Moins cher, rural', de: 'Günstiger, ländlich', it: 'Meno caro, rurale' } },
  { canton: 'Neuchâtel (NE)', min: 280, max: 780, note: { fr: 'Parmi les moins chers', de: 'Unter den günstigsten', it: 'Tra i meno cari' } },
  { canton: 'Jura (JU)', min: 260, max: 700, note: { fr: 'Moins cher de Suisse romande', de: 'Günstigster frz. Kanton', it: 'Il meno caro della Svizzera romanda' } },
  { canton: 'Tessin (TI)', min: 300, max: 900, note: { fr: 'Prix modérés', de: 'Moderate Preise', it: 'Prezzi moderati' } },
  { canton: 'Lucerne (LU)', min: 320, max: 1000, note: { fr: 'Prix standards', de: 'Standardpreise', it: 'Prezzi standard' } },
  { canton: 'Saint-Gall (SG)', min: 330, max: 1000, note: { fr: 'Prix standards', de: 'Standardpreise', it: 'Prezzi standard' } },
];

const prixParType = [
  { type: { fr: 'Studio / 1 pièce', de: '1-Zimmerwohnung', it: 'Monolocale / 1 locale' }, min: 250, max: 450 },
  { type: { fr: 'Appartement 2 pièces', de: '2-Zimmerwohnung', it: 'Appartamento 2 locali' }, min: 300, max: 550 },
  { type: { fr: 'Appartement 3-4 pièces', de: '3-4-Zimmerwohnung', it: 'Appartamento 3-4 locali' }, min: 380, max: 700 },
  { type: { fr: 'Appartement 5+ pièces', de: '5+-Zimmerwohnung', it: 'Appartamento 5+ locali' }, min: 450, max: 900 },
  { type: { fr: 'Villa individuelle (petite)', de: 'Kleines Einfamilienhaus', it: 'Villa individuale (piccola)' }, min: 500, max: 800 },
  { type: { fr: 'Villa individuelle (grande)', de: 'Großes Einfamilienhaus', it: 'Villa individuale (grande)' }, min: 700, max: 1200 },
  { type: { fr: 'Immeuble 4-8 logements', de: 'Mehrfamilienhaus 4-8 Whg.', it: 'Condominio 4-8 appartamenti' }, min: 800, max: 1500 },
  { type: { fr: 'Immeuble 9+ logements', de: 'Mehrfamilienhaus 9+ Whg.', it: 'Condominio 9+ appartamenti' }, min: 1200, max: 2000 },
  { type: { fr: 'Bureau / commerce (petit)', de: 'Kleines Büro/Gewerbe', it: 'Ufficio/negozio (piccolo)' }, min: 400, max: 800 },
  { type: { fr: 'Installation industrielle', de: 'Industrieanlage', it: 'Impianto industriale' }, min: 800, max: 2000 },
];

export default async function PrixPage({ params }: Props) {
  const { locale } = await params;

  const breadcrumbs = {
    fr: [{ label: 'Accueil', href: '/fr' }, { label: 'Prix contrôle OIBT' }],
    de: [{ label: 'Startseite', href: '/de' }, { label: 'Elektrokontrolle Kosten' }],
    it: [{ label: 'Home', href: '/it' }, { label: 'Costo controllo OIBT' }],
  };

  const bc = breadcrumbs[locale as keyof typeof breadcrumbs] || breadcrumbs.fr;

  const content = {
    fr: {
      h1: "Prix du contrôle OIBT en Suisse — Tarifs 2026",
      definition: "Le prix d'un contrôle OIBT en Suisse varie entre CHF 250 et CHF 2'000 selon la taille de l'installation, le type de bâtiment et le canton. L'OIBT ne fixe aucun barème tarifaire : le marché est entièrement libéralisé et les prix sont négociables.",
      importantTitle: "Règles clés sur les prix OIBT",
      importantPoints: [
        "L'OIBT ne fixe AUCUN tarif officiel — marché 100% libéralisé",
        "Les prix varient de CHF 250 (studio) à CHF 2'000 (grande installation industrielle)",
        "Les cantons urbains (GE, ZH, BS) pratiquent des prix supérieurs de 20-40%",
        "La concurrence entre organes de contrôle joue : obtenez au moins 3 devis",
        "Le prix peut inclure ou exclure le rapport de sécurité — à vérifier",
        "Une installation non conforme n'augmente PAS le prix du contrôle",
      ],
      cantonTableTitle: "Prix par canton",
      typeTableTitle: "Prix par type de bâtiment",
      faqTitle: "FAQ — Prix du contrôle OIBT",
      noteTitle: "Note importante sur les prix",
      note: "Ces prix sont des estimations basées sur le marché suisse 2026. Le seul moyen d'obtenir un prix exact est de demander un devis gratuit auprès d'un organe de contrôle. Les prix affichés ci-dessus représentent les fourchettes typiques observées sur le marché, sans TVA (les contrôles OIBT sont exonérés de TVA en Suisse).",
      tvaNote: "✓ Exonéré de TVA (contrôle légalement obligatoire)",
    },
    de: {
      h1: "NIV-Elektrokontrolle Kosten in der Schweiz — Preise 2026",
      definition: "Die Kosten einer NIV-Elektrokontrolle in der Schweiz variieren zwischen CHF 250 und CHF 2'000, je nach Anlagengröße, Gebäudetyp und Kanton. Die NIV legt keine offiziellen Tarife fest: Der Markt ist vollständig liberalisiert.",
      importantTitle: "Wichtige Regelungen zu den Preisen",
      importantPoints: [
        "Die NIV legt KEINE offiziellen Tarife fest — vollständig liberalisierter Markt",
        "Preise variieren von CHF 250 (1-Zimmer-Wohnung) bis CHF 2'000 (große Industrieanlage)",
        "Städtische Kantone (ZH, GE, BS) haben 20-40% höhere Preise",
        "Holen Sie mindestens 3 Offerten ein, um die Preise zu vergleichen",
        "Prüfen Sie, ob der Sicherheitsnachweis im Preis inbegriffen ist",
        "Eine nicht konforme Anlage erhöht den Kontrollpreis NICHT",
      ],
      cantonTableTitle: "Preise nach Kanton",
      typeTableTitle: "Preise nach Gebäudetyp",
      faqTitle: "FAQ — Kosten der NIV-Elektrokontrolle",
      noteTitle: "Wichtiger Hinweis zu den Preisen",
      note: "Diese Preise sind Schätzungen basierend auf dem Schweizer Markt 2026. Der einzige Weg, einen genauen Preis zu erhalten, ist eine kostenlose Offerte anzufordern. Die angezeigten Preise sind typische Marktspannen, exkl. MWST.",
      tvaNote: "✓ MWST-befreit (gesetzlich obligatorische Kontrolle)",
    },
    it: {
      h1: "Costo del controllo OIBT in Svizzera — Tariffe 2026",
      definition: "Il costo di un controllo OIBT in Svizzera varia tra CHF 250 e CHF 2'000 a seconda delle dimensioni dell'impianto, del tipo di edificio e del cantone. L'OIBT non fissa alcuna tariffa ufficiale: il mercato è completamente liberalizzato.",
      importantTitle: "Regole chiave sui prezzi OIBT",
      importantPoints: [
        "L'OIBT non fissa NESSUNA tariffa ufficiale — mercato 100% liberalizzato",
        "I prezzi variano da CHF 250 (monolocale) a CHF 2'000 (grande impianto industriale)",
        "I cantoni urbani (GE, ZH, BS) hanno prezzi superiori del 20-40%",
        "Richiedete almeno 3 preventivi per confrontare i prezzi",
        "Verificate se il rapporto di sicurezza è incluso nel prezzo",
        "Un impianto non conforme NON aumenta il prezzo del controllo",
      ],
      cantonTableTitle: "Prezzi per cantone",
      typeTableTitle: "Prezzi per tipo di edificio",
      faqTitle: "FAQ — Costo del controllo OIBT",
      noteTitle: "Nota importante sui prezzi",
      note: "Questi prezzi sono stime basate sul mercato svizzero 2026. L'unico modo per ottenere un prezzo esatto è richiedere un preventivo gratuito. I prezzi mostrati sono le fasce tipiche osservate sul mercato, IVA esclusa.",
      tvaNote: "✓ Esente da IVA (controllo obbligatorio per legge)",
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  const faqsFR = [
    { q: "Pourquoi le prix du contrôle OIBT varie-t-il autant ?", a: "Le prix d'un contrôle OIBT varie selon plusieurs facteurs : taille et complexité de l'installation, nombre de circuits électriques, type de bâtiment (résidentiel vs industriel), canton (les zones urbaines sont plus chères), et l'organe de contrôle choisi. Le marché est entièrement libéralisé : il n'y a pas de tarif officiel." },
    { q: "Le locataire doit-il rembourser le contrôle OIBT ?", a: "Non. Le contrôle OIBT est exclusivement à la charge du propriétaire (Art. 5 OIBT). Le locataire ne peut pas être contraint de payer, même partiellement, le coût du contrôle OIBT. Toute clause de bail contraire est nulle de plein droit." },
    { q: "Est-ce que le contrôle OIBT est soumis à la TVA ?", a: "Non. En Suisse, le contrôle OIBT est exonéré de TVA car il s'agit d'une prestation légalement obligatoire. Le prix annoncé par l'organe de contrôle est donc le prix final, sans TVA supplémentaire." },
    { q: "Comment obtenir le meilleur prix pour un contrôle OIBT ?", a: "Pour obtenir le meilleur prix : 1) Demandez au moins 3 devis gratuits, 2) Comparez les prestations incluses (rapport de sécurité inclus ?), 3) Regroupez plusieurs logements si vous êtes gérant ou PPE (tarif volume), 4) Planifiez en dehors des périodes de pointe." },
  ];

  const faqsDE = [
    { q: "Warum variiert der Preis der Elektrokontrolle so stark?", a: "Der Preis einer NIV-Elektrokontrolle variiert je nach Größe und Komplexität der Anlage, Anzahl der Stromkreise, Gebäudetyp und Kanton. Der Markt ist vollständig liberalisiert." },
    { q: "Muss der Mieter die Elektrokontrolle erstatten?", a: "Nein. Die Elektrokontrolle ist ausschließlich Sache des Eigentümers (NIV Art. 5). Der Mieter kann nicht zur Zahlung gezwungen werden. Jede gegenteilige Mietvertragsklausel ist nichtig." },
    { q: "Unterliegt die Elektrokontrolle der MWST?", a: "Nein. In der Schweiz ist die NIV-Elektrokontrolle MWST-befreit, da es sich um eine gesetzlich vorgeschriebene Leistung handelt." },
  ];

  const faqsIT = [
    { q: "Perché il prezzo del controllo OIBT varia così tanto?", a: "Il prezzo di un controllo OIBT varia in base a diversi fattori: dimensioni e complessità dell'impianto, numero di circuiti, tipo di edificio e cantone. Il mercato è completamente liberalizzato." },
    { q: "L'inquilino deve rimborsare il controllo OIBT?", a: "No. Il controllo OIBT è esclusivamente a carico del proprietario (Art. 5 OIBT). L'inquilino non può essere costretto a pagare. Qualsiasi clausola contraria nel contratto di locazione è nulla." },
    { q: "Il controllo OIBT è soggetto all'IVA?", a: "No. In Svizzera, il controllo OIBT è esente da IVA in quanto prestazione legalmente obbligatoria." },
  ];

  const faqs = locale === 'de' ? faqsDE : locale === 'it' ? faqsIT : faqsFR;

  return (
    <>
      <SchemaOrg schema={buildBreadcrumbSchema(bc.map(b => ({ name: b.label, url: b.href ? `https://controle-oibt.ch${b.href}` : '#' })))} />
      <SchemaOrg schema={buildFAQSchema(faqs)} />

      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium">{c.definition}</p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{c.h1}</h1>

        {/* Key points */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h2 className="font-bold text-amber-900 mb-3">{c.importantTitle}</h2>
          <ul className="space-y-2">
            {c.importantPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-amber-800">
                <span>→</span>{point}
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-700 mt-3 font-medium">{c.tvaNote}</p>
        </div>

        {/* Table cantons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.cantonTableTitle}</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="text-left px-4 py-3">Canton</th>
                  <th className="text-center px-4 py-3">Min (CHF)</th>
                  <th className="text-center px-4 py-3">Max (CHF)</th>
                  <th className="text-left px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                {prixParCanton.map((row, i) => (
                  <tr key={row.canton} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.canton}</td>
                    <td className="px-4 py-3 text-center text-primary-700 font-semibold">{row.min}</td>
                    <td className="px-4 py-3 text-center text-primary-700 font-semibold">{row.max}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.note[locale as keyof typeof row.note] || row.note.fr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.typeTableTitle}</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="text-left px-4 py-3">
                    {locale === 'de' ? 'Gebäudetyp' : locale === 'it' ? 'Tipo di edificio' : 'Type de bâtiment'}
                  </th>
                  <th className="text-center px-4 py-3">Min (CHF)</th>
                  <th className="text-center px-4 py-3">Max (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {prixParType.map((row, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3 text-gray-800">{row.type[locale as keyof typeof row.type] || row.type.fr}</td>
                    <td className="px-4 py-3 text-center text-green-700 font-semibold">{row.min}</td>
                    <td className="px-4 py-3 text-center text-primary-700 font-semibold">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">{c.noteTitle}: {c.note}</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.faqTitle}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between">
                  <span>{faq.q}</span>
                  <span className="text-primary-600">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
