import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Schéma III — Défauts à danger immédiat OIBT | Que faire ? Guide 2026',
    de: 'Schema III — Unmittelbar gefährliche Mängel NIV | Was tun? Leitfaden 2026',
    it: 'Schema III — Difetti a pericolo immediato OIBT | Cosa fare? Guida 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/schema-iii-danger` },
  };
}

export default async function SchemaIIIDangerPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Was bedeutet Schema III in der NIV-Kontrolle?', a: 'Schema III bezeichnet unmittelbar gefährliche Mängel, die sofortiges Handeln erfordern. Die Installation darf nicht wieder in Betrieb genommen werden, bevor diese Mängel behoben sind.' },
    { q: 'Wer ist für die Behebung eines Schema III-Mangels zuständig?', a: 'Der Eigentümer ist verantwortlich, einen konzessionierten Elektriker unverzüglich zu beauftragen. Der VNB (Netzbetreiber) kann die Installation bei Nichtbehebung ausschalten.' },
    { q: 'Wie lange hat man Zeit, einen Schema III-Mangel zu beheben?', a: 'Bei einem Schema III-Mangel (unmittelbar gefährlich) gibt es keine Frist: Die Anlage muss SOFORT ausser Betrieb genommen werden bis zur Behebung.' },
  ] : locale === 'it' ? [
    { q: 'Cosa significa Schema III nel controllo OIBT?', a: 'Schema III indica difetti a pericolo immediato che richiedono un\'azione immediata. L\'impianto non può essere rimesso in servizio prima che questi difetti siano corretti.' },
    { q: 'Chi è responsabile della correzione di un difetto Schema III?', a: 'Il proprietario è responsabile di incaricare immediatamente un elettricista autorizzato. Il GRD può disconnettere l\'impianto in caso di mancata correzione.' },
  ] : [
    { q: 'Qu\'est-ce que le schéma III dans un contrôle OIBT ?', a: 'Le schéma III désigne les défauts à danger immédiat qui nécessitent une action immédiate. L\'installation ne peut pas être remise en service avant que ces défauts ne soient corrigés.' },
    { q: 'Qui est responsable de corriger un défaut schéma III ?', a: 'Le propriétaire est responsable de mandater immédiatement un électricien agréé. Le GRD peut couper l\'installation en cas de non-correction.' },
    { q: 'Quel délai pour corriger un défaut schéma III ?', a: 'Aucun délai : l\'installation doit être IMMÉDIATEMENT mise hors service jusqu\'à correction. C\'est la différence avec le schéma II (délai accordé) et le schéma I (recommandation).' },
    { q: 'Mon assurance couvre-t-elle un sinistre avec un défaut schéma III connu ?', a: 'Non. Si vous avez connaissance d\'un défaut schéma III et qu\'un sinistre survient avant correction, votre assurance incendie peut légitimement refuser l\'indemnisation pour faute grave du propriétaire.' },
    { q: 'Exemples de défauts classés schéma III OIBT ?', a: 'Câblage en contact avec des matériaux inflammables, absence de protection contre les contacts directs (tableau ouvert), installation submergée ou inondée, fuite de courant importante détectée.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Schema III — Unmittelbare Gefahr' : locale === 'it' ? 'Schema III — Pericolo immediato' : 'Schéma III — Danger immédiat' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? '🚨 Schema III = Unmittelbar gefährlicher Mangel. Die Installation MUSS sofort ausser Betrieb genommen werden. Keine Frist — sofortiges Handeln erforderlich.'
              : locale === 'it'
              ? '🚨 Schema III = Difetto a pericolo immediato. L\'impianto DEVE essere immediatamente messo fuori servizio. Nessun termine — azione immediata richiesta.'
              : '🚨 Schéma III = Défaut à danger immédiat. L\'installation DOIT être immédiatement mise hors service. Aucun délai accordé — action immédiate requise.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'Schema III NIV — Unmittelbar gefährliche Mängel verstehen und handeln'
            : locale === 'it'
            ? 'Schema III OIBT — Capire i difetti a pericolo immediato e agire'
            : 'Schéma III OIBT — Comprendre les défauts à danger immédiat et agir'}
        </h1>

        {/* Les 3 niveaux */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Die 3 Mängelkategorien im Vergleich' : locale === 'it' ? 'Le 3 categorie di difetti a confronto' : 'Les 3 niveaux de défauts OIBT en comparaison'}
          </h2>
          <div className="space-y-3">
            {(locale === 'de' ? [
              { level: 'Schema I', color: 'green', label: 'Empfehlung', desc: 'Keine sofortige Gefahr, Verbesserung empfohlen', delay: 'Kein Zwang' },
              { level: 'Schema II', color: 'amber', label: 'Zu behebender Mangel', desc: 'Sicherheitsmangel, muss innerhalb einer Frist behoben werden', delay: '3-6 Monate' },
              { level: 'Schema III', color: 'red', label: '🚨 UNMITTELBAR GEFÄHRLICH', desc: 'Lebensgefahr — sofortige Abschaltung erforderlich', delay: 'SOFORT' },
            ] : locale === 'it' ? [
              { level: 'Schema I', color: 'green', label: 'Raccomandazione', desc: 'Nessun pericolo immediato, miglioramento consigliato', delay: 'Nessun obbligo' },
              { level: 'Schema II', color: 'amber', label: 'Difetto da correggere', desc: 'Difetto di sicurezza, da correggere entro un termine', delay: '3-6 mesi' },
              { level: 'Schema III', color: 'red', label: '🚨 PERICOLO IMMEDIATO', desc: 'Pericolo di vita — spegnimento immediato richiesto', delay: 'IMMEDIATO' },
            ] : [
              { level: 'Schéma I', color: 'green', label: 'Recommandation', desc: 'Aucun danger immédiat, amélioration conseillée', delay: 'Aucune contrainte' },
              { level: 'Schéma II', color: 'amber', label: 'Défaut à corriger', desc: 'Défaut de sécurité, doit être corrigé dans un délai accordé', delay: '3-6 mois' },
              { level: 'Schéma III', color: 'red', label: '🚨 DANGER IMMÉDIAT', desc: 'Danger pour la vie — mise hors service immédiate requise', delay: 'IMMÉDIAT' },
            ]).map((item) => (
              <div key={item.level} className={`border-2 rounded-lg p-4 ${item.color === 'red' ? 'border-red-400 bg-red-50' : item.color === 'amber' ? 'border-amber-400 bg-amber-50' : 'border-green-400 bg-green-50'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-900">{item.level}</span>
                    <span className={`ml-2 font-semibold ${item.color === 'red' ? 'text-red-700' : item.color === 'amber' ? 'text-amber-700' : 'text-green-700'}`}>{item.label}</span>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <span className={`font-bold text-sm ${item.color === 'red' ? 'text-red-700' : item.color === 'amber' ? 'text-amber-700' : 'text-green-700'}`}>{item.delay}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exemples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Typische Schema III Mängel' : locale === 'it' ? 'Difetti tipici Schema III' : 'Exemples de défauts schéma III'}
          </h2>
          <ul className="space-y-2">
            {(locale === 'de' ? [
              'Fehlende Berührungsschutz (offener Verteiler, blanke Kabel)',
              'Elektroinstallation in Kontakt mit Wasser oder Feuchtigkeit',
              'Kabel in Kontakt mit brennbaren Materialien ohne Schutz',
              'Überstromschutz fehlt bei Hauptleitung',
              'Erdungsleiter unterbrochen oder fehlend',
            ] : locale === 'it' ? [
              'Protezione dai contatti diretti mancante (quadro aperto, cavi scoperti)',
              'Impianto elettrico a contatto con acqua o umidità',
              'Cavi a contatto con materiali infiammabili senza protezione',
              'Protezione contro le sovracorrenti mancante sulla linea principale',
              'Conduttore di terra interrotto o mancante',
            ] : [
              'Absence de protection contre les contacts directs (tableau ouvert, câbles nus)',
              'Installation électrique en contact avec de l\'eau ou de l\'humidité',
              'Câbles en contact avec des matériaux inflammables sans protection',
              'Protection contre les surintensités absente sur la ligne principale',
              'Conducteur de terre interrompu ou absent',
            ]).map((item) => (
              <li key={item} className="flex items-start gap-3 text-red-700">
                <span className="font-bold mt-1">⚠</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

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
