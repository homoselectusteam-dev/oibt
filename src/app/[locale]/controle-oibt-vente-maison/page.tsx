import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT vente maison — Obligatoire ? | Guide complet 2026',
    de: 'NIV-Kontrolle beim Hausverkauf — Pflicht? | Vollständiger Leitfaden 2026',
    it: 'Controllo OIBT vendita casa — Obbligatorio? | Guida completa 2026',
  };
  const descs = {
    fr: 'Contrôle OIBT obligatoire pour vendre votre maison en Suisse ? ✓ Qui paie ? ✓ Quel impact sur la vente ? ✓ Délais et procédure ✓ FAQ complète',
    de: 'NIV-Kontrolle beim Hausverkauf in der Schweiz obligatorisch? ✓ Wer zahlt? ✓ Auswirkungen auf den Verkauf? ✓ Fristen und Verfahren ✓ FAQ komplett',
    it: 'Controllo OIBT obbligatorio per vendere casa in Svizzera? ✓ Chi paga? ✓ Impatto sulla vendita? ✓ Scadenze e procedura ✓ FAQ completa',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-vente-maison` },
  };
}

export default async function VenteMaisonPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Ist die NIV-Kontrolle beim Hausverkauf obligatorisch?', a: 'Nicht als separate Pflicht beim Verkauf, aber der Verkäufer muss einen gültigen Sicherheitsnachweis (SiNa) vorweisen. Wenn die letzte Kontrolle abgelaufen ist, muss vor dem Verkauf eine neue Kontrolle durchgeführt werden.' },
    { q: 'Wer zahlt die NIV-Kontrolle beim Hausverkauf?', a: 'In der Regel zahlt der Verkäufer, da er die Pflicht zur Vorlage eines gültigen SiNa hat. Die Kosten können jedoch im Kaufvertrag zwischen Käufer und Verkäufer ausgehandelt werden.' },
    { q: 'Kann ich ein Haus ohne gültigen Sicherheitsnachweis verkaufen?', a: 'Technisch ja, aber der Notar wird Sie auf die fehlende Konformität hinweisen. Der Käufer kann dies als Verhandlungspunkt nutzen oder auf einer Preisminderung bestehen.' },
    { q: 'Wie lange dauert eine NIV-Kontrolle für den Hausverkauf?', a: 'Die Kontrolle selbst dauert 2-4 Stunden für ein Einfamilienhaus. Das Ergebnis und der SiNa werden innerhalb von 5-10 Werktagen übermittelt.' },
  ] : locale === 'it' ? [
    { q: 'Il controllo OIBT è obbligatorio per la vendita di una casa?', a: 'Non come obbligo specifico alla vendita, ma il venditore deve presentare un rapporto di sicurezza (RaSi) valido. Se l\'ultimo controllo è scaduto, è necessario effettuarne uno nuovo prima della vendita.' },
    { q: 'Chi paga il controllo OIBT nella vendita di una casa?', a: 'Di norma il venditore, poiché è tenuto a presentare un RaSi valido. I costi possono tuttavia essere negoziati tra acquirente e venditore nel contratto di compravendita.' },
    { q: 'Posso vendere una casa senza rapporto di sicurezza valido?', a: 'Tecnicamente sì, ma il notaio segnalerà la non conformità. L\'acquirente può utilizzarlo come punto di trattativa o richiedere una riduzione del prezzo.' },
  ] : [
    { q: 'Le contrôle OIBT est-il obligatoire pour vendre une maison ?', a: 'Il n\'existe pas d\'obligation légale spécifique de contrôle OIBT lors de la vente, mais le vendeur doit présenter un rapport de sécurité (RdS) valide au GRD. Si la périodicité est échue, un nouveau contrôle s\'impose avant la transaction.' },
    { q: 'Qui paie le contrôle OIBT lors de la vente d\'une maison ?', a: 'En principe le vendeur, car c\'est lui qui doit présenter un RdS valide. Les frais peuvent néanmoins être négociés entre acheteur et vendeur dans le compromis de vente.' },
    { q: 'Puis-je vendre ma maison sans rapport de sécurité OIBT valide ?', a: 'Techniquement oui, mais le notaire vous signalera la non-conformité. L\'acheteur peut s\'en prévaloir pour négocier le prix à la baisse. En cas de sinistre post-vente, la responsabilité du vendeur peut être engagée.' },
    { q: 'Quel impact une non-conformité OIBT a-t-elle sur la vente ?', a: 'Une non-conformité OIBT peut faire baisser le prix de vente, bloquer l\'obtention d\'un prêt hypothécaire, ou retarder la transaction. Mieux vaut réaliser le contrôle et corriger les défauts avant de mettre en vente.' },
    { q: 'Combien de temps faut-il pour obtenir un rapport de sécurité OIBT avant la vente ?', a: 'Comptez 2-4h pour le contrôle sur place d\'un logement standard, puis 5-10 jours ouvrables pour recevoir le rapport officiel. Planifiez au minimum 3 semaines avant la signature chez le notaire.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle & Hausverkauf' : locale === 'it' ? 'OIBT & Vendita casa' : 'OIBT & Vente maison' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Beim Hausverkauf in der Schweiz muss ein gültiger Sicherheitsnachweis (SiNa) vorgelegt werden. Wenn die Kontrollperiode abgelaufen ist, muss vor dem Verkauf eine neue NIV-Kontrolle durchgeführt werden.'
              : locale === 'it'
              ? 'Per la vendita di una casa in Svizzera, è necessario presentare un rapporto di sicurezza (RaSi) valido. Se il periodo di controllo è scaduto, è necessario effettuare un nuovo controllo OIBT prima della vendita.'
              : 'Lors de la vente d\'une maison en Suisse, un rapport de sécurité OIBT (RdS) valide doit être présenté au GRD. Si la périodicité est échue, un nouveau contrôle s\'impose avant la transaction.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Elektrokontrolle beim Hausverkauf — Was Verkäufer wissen müssen'
            : locale === 'it'
            ? 'Controllo OIBT nella vendita immobiliare — Cosa devono sapere i venditori'
            : 'Contrôle OIBT et vente immobilière — Ce que tout vendeur doit savoir'}
        </h1>

        {/* Checklist vente */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Checkliste vor dem Hausverkauf' : locale === 'it' ? 'Checklist prima della vendita' : 'Checklist avant la vente'}
          </h2>
          <div className="space-y-3">
            {(locale === 'de' ? [
              'Letztes Kontrolldatum der Elektroinstallation prüfen',
              'Gültigkeit des SiNa verifizieren (20J. Wohnen / 10J. Gewerbe)',
              'Bei abgelaufenem SiNa: neue NIV-Kontrolle beauftragen',
              'Mängel aus dem Bericht vor der Besichtigung beheben',
              'SiNa dem Notariat und dem Käufer vorlegen',
            ] : locale === 'it' ? [
              'Verificare la data dell\'ultimo controllo dell\'impianto elettrico',
              'Verificare la validità del RaSi (20 anni abitazioni / 10 anni uffici)',
              'Se il RaSi è scaduto: ordinare un nuovo controllo OIBT',
              'Correggere i difetti del rapporto prima delle visite',
              'Presentare il RaSi al notaio e all\'acquirente',
            ] : [
              'Vérifier la date du dernier contrôle de l\'installation électrique',
              'Contrôler la validité du RdS (20 ans logement / 10 ans commercial)',
              'Si RdS échu : commander un nouveau contrôle OIBT',
              'Corriger les défauts du rapport avant les visites',
              'Remettre le RdS au notaire et à l\'acheteur',
            ]).map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Impact non-conformité */}
        <div className="card bg-amber-50 border-amber-300 mb-10">
          <h2 className="font-bold text-amber-900 text-xl mb-3">
            {locale === 'de' ? '⚠️ Risiken bei fehlendem SiNa' : locale === 'it' ? '⚠️ Rischi senza RaSi valido' : '⚠️ Risques d\'une non-conformité OIBT lors de la vente'}
          </h2>
          <ul className="text-amber-800 space-y-2 text-sm">
            {(locale === 'de' ? [
              'Preisminderung durch den Käufer',
              'Ablehnung des Hypothekarkredits durch die Bank',
              'Mögliche Haftung des Verkäufers nach dem Verkauf',
              'Verzögerung oder Scheitern der Transaktion',
            ] : locale === 'it' ? [
              'Riduzione del prezzo da parte dell\'acquirente',
              'Rifiuto del credito ipotecario dalla banca',
              'Possibile responsabilità del venditore dopo la vendita',
              'Ritardo o fallimento della transazione',
            ] : [
              'Négociation du prix à la baisse par l\'acheteur',
              'Refus du crédit hypothécaire par la banque',
              'Responsabilité du vendeur engagée après la vente',
              'Retard ou blocage de la transaction notariale',
            ]).map((item) => (
              <li key={item}>⚠ {item}</li>
            ))}
          </ul>
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
