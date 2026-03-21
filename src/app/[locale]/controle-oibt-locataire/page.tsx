import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT et locataire : qui paie ? | Guide juridique complet 2026',
    de: 'NIV-Kontrolle und Mieter: Wer zahlt? | Vollständiger Rechtsleitfaden 2026',
    it: 'Controllo OIBT e inquilino: chi paga? | Guida giuridica completa 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: locale === 'de'
      ? 'NIV-Elektrokontrolle: Wer zahlt, Mieter oder Eigentümer? ✓ Rechtliche Grundlage NIV Art. 5 ✓ Rechte der Mieter ✓ Pflichten des Eigentümers ✓ FAQ komplett'
      : locale === 'it'
      ? 'Controllo OIBT: chi paga, l\'inquilino o il proprietario? ✓ Base legale Art. 5 OIBT ✓ Diritti degli inquilini ✓ Obblighi del proprietario ✓ FAQ completa'
      : 'Contrôle OIBT : qui paie, le locataire ou le propriétaire ? ✓ Art. 5 OIBT ✓ Droits du locataire ✓ Obligations du propriétaire ✓ FAQ complète',
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-locataire` },
  };
}

export default async function LocatairePage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: "Muss der Mieter die NIV-Elektrokontrolle bezahlen?", a: "Nein, niemals. Die NIV-Elektrokontrolle ist ausschließlich Sache des Eigentümers (NIV Art. 5). Der Mieter kann unter keinen Umständen zur Zahlung dieser Kosten verpflichtet werden, weder direkt noch durch eine Klausel im Mietvertrag." },
    { q: "Kann der Vermieter die Kosten der NIV-Kontrolle auf den Mieter umlegen?", a: "Nein. Die NIV-Kontrolle ist eine gesetzliche Pflicht des Eigentümers und kann nicht auf den Mieter umgewälzt werden. Jede diesbezügliche Klausel im Mietvertrag ist nichtig und rechtswidrig." },
    { q: "Muss der Mieter dem Kontrolleur Zugang gewähren?", a: "Ja. Der Mieter muss dem Kontrolleur nach angemessener Voranmeldung Zugang zur Wohnung gewähren. Eine Verweigerung ohne triftigen Grund kann als Vertragsverletzung angesehen werden." },
    { q: "Was soll der Mieter tun, wenn der Vermieter die NIV-Kontrolle verweigert?", a: "Der Mieter kann den Vermieter schriftlich auffordern und das lokale Mietamt oder den VNB (Netzbetreiber) informieren. Schwerwiegende elektrische Mängel können einen Mietminderungsantrag rechtfertigen." },
  ] : locale === 'it' ? [
    { q: "L'inquilino deve pagare il controllo OIBT?", a: "No, mai. Il controllo OIBT è esclusivamente a carico del proprietario (Art. 5 OIBT). L'inquilino non può in nessun modo essere obbligato a pagare questi costi, né direttamente né tramite una clausola del contratto di locazione." },
    { q: "Il locatore può trasferire i costi del controllo OIBT all'inquilino?", a: "No. Il controllo OIBT è un obbligo legale del proprietario e non può essere trasferito all'inquilino. Qualsiasi clausola contrattuale in tal senso è nulla e illegale." },
    { q: "L'inquilino deve dare accesso all'appartamento per il controllo?", a: "Sì. L'inquilino deve consentire l'accesso al controllore dopo un preavviso ragionevole. Un rifiuto senza valido motivo può essere considerato una violazione contrattuale." },
    { q: "Cosa deve fare l'inquilino se il proprietario rifiuta il controllo OIBT?", a: "L'inquilino può diffidare il proprietario per iscritto e informare l'ufficio di conciliazione in materia di locazione o il GRD locale. Gravi difetti elettrici possono giustificare una richiesta di riduzione dell'affitto." },
  ] : [
    { q: "Le locataire doit-il payer le contrôle OIBT ?", a: "Non, jamais. Le contrôle OIBT est exclusivement à la charge du propriétaire (Art. 5 OIBT). Le locataire ne peut en aucun cas être contraint de payer ces frais, ni directement, ni par une clause du bail." },
    { q: "Le bailleur peut-il répercuter les coûts du contrôle OIBT sur le locataire ?", a: "Non. Le contrôle OIBT est une obligation légale du propriétaire et ne peut pas être mis à la charge du locataire. Toute clause de bail contraire est nulle et illégale." },
    { q: "Le locataire doit-il laisser accès à l'appartement pour le contrôle ?", a: "Oui. Le locataire doit permettre l'accès au contrôleur après un préavis raisonnable. Un refus sans motif légitime peut être assimilé à une violation contractuelle." },
    { q: "Que faire si mon propriétaire refuse de faire le contrôle OIBT ?", a: "Le locataire peut mettre le bailleur en demeure par écrit et informer l'autorité de conciliation en matière de baux ou le GRD local. Des défauts électriques graves peuvent justifier une demande de réduction de loyer." },
    { q: "Le locataire est-il responsable si son logement n'est pas conforme OIBT ?", a: "Non. La responsabilité de la conformité OIBT incombe exclusivement au propriétaire. Le locataire est simplement tenu de signaler les défauts apparents au bailleur." },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle & Mieter' : locale === 'it' ? 'OIBT & Inquilino' : 'OIBT & Locataire' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Définition atomique AI-first */}
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? "Der Mieter zahlt NIE die NIV-Elektrokontrolle. Diese gesetzliche Pflicht liegt ausschließlich beim Eigentümer (NIV Art. 5). Keine Mietvertragsklausel kann dies ändern."
              : locale === 'it'
              ? "L'inquilino NON paga MAI il controllo OIBT. Quest'obbligo legale spetta esclusivamente al proprietario (Art. 5 OIBT). Nessuna clausola del contratto di locazione può modificarlo."
              : "Le locataire ne paie JAMAIS le contrôle OIBT. Cette obligation légale incombe exclusivement au propriétaire (Art. 5 OIBT). Aucune clause de bail ne peut modifier cette règle."}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? "NIV-Elektrokontrolle & Mietrecht — Wer zahlt? Wer ist verantwortlich?"
            : locale === 'it'
            ? "Controllo OIBT & Locazione — Chi paga? Chi è responsabile?"
            : "Contrôle OIBT & Bail — Qui paie ? Qui est responsable ?"}
        </h1>

        {/* Key visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6">
            <h2 className="font-bold text-green-800 text-lg mb-3">
              {locale === 'de' ? '✅ Eigentümer (immer)' : locale === 'it' ? '✅ Proprietario (sempre)' : '✅ Propriétaire (toujours)'}
            </h2>
            <ul className="text-sm text-green-800 space-y-2">
              {(locale === 'de'
                ? ['Zahlt die Kontrolle', 'Organisiert den Termin', 'Empfängt den SiNa', 'Behebt Mängel', 'Bewahrt den Bericht auf']
                : locale === 'it'
                ? ['Paga il controllo', 'Organizza l\'appuntamento', 'Riceve il RaSi', 'Ripara i difetti', 'Conserva il rapporto']
                : ['Paie le contrôle', 'Organise le rendez-vous', 'Reçoit le rapport (RdS)', 'Répare les défauts', 'Conserve le rapport 20 ans']
              ).map(item => <li key={item}>✓ {item}</li>)}
            </ul>
          </div>
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h2 className="font-bold text-red-800 text-lg mb-3">
              {locale === 'de' ? '❌ Mieter (niemals)' : locale === 'it' ? '❌ Inquilino (mai)' : '❌ Locataire (jamais)'}
            </h2>
            <ul className="text-sm text-red-800 space-y-2">
              {(locale === 'de'
                ? ['Zahlt nicht die Kontrolle', 'Organisiert nicht den Termin', 'Haftet nicht für Nichtkonformität', 'Kann nicht gezwungen werden zu zahlen', 'Keine Mietvertragsklausel kann dies ändern']
                : locale === 'it'
                ? ['Non paga il controllo', 'Non organizza l\'appuntamento', 'Non è responsabile della non conformità', 'Non può essere costretto a pagare', 'Nessuna clausola contrattuale può cambiarlo']
                : ['Ne paie PAS le contrôle', 'N\'organise PAS le rendez-vous', 'N\'est PAS responsable de la non-conformité', 'Ne peut PAS être contraint de payer', 'Aucune clause de bail ne peut changer ça']
              ).map(item => <li key={item}>✗ {item}</li>)}
            </ul>
          </div>
        </div>

        {/* Legal basis */}
        <div className="card mb-10">
          <h2 className="font-bold text-gray-900 text-xl mb-3">
            {locale === 'de' ? '📖 Gesetzliche Grundlage: NIV Art. 5' : locale === 'it' ? '📖 Base legale: Art. 5 OIBT' : '📖 Base légale : Art. 5 OIBT'}
          </h2>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700">
            {locale === 'de'
              ? '"Der Eigentümer ist verantwortlich für die Sicherheit der Elektroinstallation und trägt die Kosten der periodischen Kontrolle." — NIV Art. 5'
              : locale === 'it'
              ? '"Il proprietario è responsabile della sicurezza dell\'impianto elettrico e sostiene i costi del controllo periodico." — Art. 5 OIBT'
              : '"Le propriétaire est responsable de la sécurité de l\'installation électrique et supporte les frais du contrôle périodique." — Art. 5 OIBT'}
          </blockquote>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card">
                <summary className="font-semibold cursor-pointer list-none flex justify-between">
                  <span>{faq.q}</span><span className="text-primary-600">+</span>
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
