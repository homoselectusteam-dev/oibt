import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import PeriodiciteTable from '@/components/ui/PeriodiciteTable';
import SchemaOrg, {
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildOrganizationSchema,
} from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT : Guide complet 2026 | Obligation légale Suisse',
    de: 'Elektrokontrolle NIV: Vollständiger Leitfaden 2026 | Gesetzliche Pflicht Schweiz',
    it: 'Controllo OIBT: Guida completa 2026 | Obbligo legale Svizzera',
  };
  const descs = {
    fr: "Tout savoir sur le contrôle OIBT en Suisse ✓ Cadre légal OIBT/ESTI ✓ Périodicités par type de bâtiment ✓ Qui paie ✓ Que faire si non conforme ✓ Guide expert 2026",
    de: "Alles zur NIV-Elektrokontrolle in der Schweiz ✓ Gesetzliche Grundlagen NIV/ESTI ✓ Kontrollfristen nach Gebäudetyp ✓ Wer zahlt ✓ Was tun bei Nichtkonformität ✓ Expertenguide 2026",
    it: "Tutto sul controllo OIBT in Svizzera ✓ Base legale OIBT/ESTI ✓ Periodicità per tipo di edificio ✓ Chi paga ✓ Cosa fare se non conforme ✓ Guida esperta 2026",
  };
  const urls = {
    fr: `https://controle-oibt.ch/fr/controle-oibt`,
    de: `https://controle-oibt.ch/de/elektrokontrolle-niv`,
    it: `https://controle-oibt.ch/it/controllo-oibt`,
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: {
      canonical: urls[locale as keyof typeof urls],
      languages: {
        fr: urls.fr,
        de: urls.de,
        it: urls.it,
      },
    },
  };
}

const content = {
  fr: {
    breadcrumb: [
      { label: 'Accueil', href: '/fr' },
      { label: 'Contrôle OIBT' },
    ],
    h1: "Contrôle OIBT en Suisse — Guide complet 2026",
    definition: "Le contrôle OIBT (Ordonnance sur les Installations électriques à Basse Tension) est une inspection électrique obligatoire imposée par l'ESTI en Suisse. Tout propriétaire d'installation électrique doit faire vérifier son installation par un organe de contrôle indépendant à intervalle régulier.",
    toc: [
      { id: 'cadre-legal', label: 'Cadre légal OIBT' },
      { id: 'types-controles', label: 'Types de contrôles' },
      { id: 'periodicites', label: 'Périodicités' },
      { id: 'acteurs', label: 'Qui fait quoi ?' },
      { id: 'deroulement', label: 'Déroulement' },
      { id: 'consequences', label: 'Conséquences non-conformité' },
      { id: 'faq', label: 'FAQ' },
    ],
    sections: {
      legalTitle: "Cadre légal du contrôle OIBT",
      legalContent: `L'Ordonnance sur les installations électriques à basse tension (OIBT) du 7 novembre 2001, entrée en vigueur le 1er janvier 2002 et révisée le 1er janvier 2024, constitue le cadre légal principal. Elle s'appuie sur la Loi fédérale sur les installations électriques (LIE) de 1902 et est supervisée par l'ESTI (Inspection fédérale des installations à courant fort).

L'OIBT s'applique à toutes les installations électriques alimentées en courant fort sous une tension n'excédant pas 1000V en courant alternatif ou 1500V en courant continu.`,
      typesTitle: "Les 5 types de contrôles OIBT",
      types: [
        { name: "Contrôle final (Art. 24)", desc: "Réalisé par l'installateur avant remise au propriétaire. Obligatoire pour toute nouvelle installation." },
        { name: "Contrôle de réception (Art. 35)", desc: "Obligatoire dans les 6 mois après mise en service si périodicité < 20 ans. Réalisé par un organe indépendant." },
        { name: "Contrôle périodique (Art. 36)", desc: "À échéance fixe. Le GRD envoie un courrier au propriétaire 6 mois avant l'échéance." },
        { name: "Contrôle quinquennal", desc: "Obligatoire lors changement de propriétaire si dernier contrôle date de + de 5 ans." },
        { name: "Contrôle sporadique (Art. 39)", desc: "L'exploitant de réseau peut effectuer un contrôle ponctuel en cas de doute sur une installation." },
      ],
      acteursTitle: "Qui fait quoi dans le contrôle OIBT ?",
      acteurs: [
        { role: "Propriétaire (Art. 5)", desc: "Responsable à 100% de la sécurité. Mandate et paie le contrôle. Conserve le rapport. Répare les défauts sans retard." },
        { role: "Locataire", desc: "Indirectement concerné (signale les défauts). Ne paie JAMAIS le contrôle. Ne peut pas être contraint d'organiser le contrôle." },
        { role: "GRD (Gestionnaire de réseau)", desc: "Rôle administratif. Envoie les convocations 6 mois avant l'échéance. Vérifie la réception des rapports de sécurité." },
        { role: "Organe de contrôle", desc: "INDÉPENDANT de l'installateur. Inspecte l'installation. Rédige le rapport de sécurité (RdS). NE PEUT PAS effectuer les travaux de mise en conformité." },
        { role: "ESTI", desc: "Autorité de surveillance fédérale. Accrédite les organismes de contrôle. Intervient en cas de litige ou de non-conformité grave." },
      ],
      consequencesTitle: "Que se passe-t-il si vous n'avez pas de contrôle OIBT valide ?",
      consequences: [
        "Responsabilité civile et pénale en cas d'accident électrique (incendie, électrocution)",
        "Refus d'indemnisation par votre assurance incendie (ECA, GVA, etc.)",
        "Signalement à l'ESTI par le GRD en cas de non-respect des délais",
        "Impossibilité de vendre ou louer votre bien sans rapport valide",
        "Amende potentielle selon les cantons",
      ],
    },
    faqs: [
      { q: "Qu'est-ce que l'OIBT exactement ?", a: "L'OIBT (Ordonnance sur les Installations électriques à Basse Tension) est une ordonnance fédérale suisse du 7 novembre 2001 (RS 734.27) qui régit la sécurité des installations électriques à basse tension (< 1000V AC). Elle impose des contrôles périodiques obligatoires pour tous les bâtiments." },
      { q: "Le contrôle OIBT est-il obligatoire pour les propriétaires de villas ?", a: "Oui, absolument. Les propriétaires de villas individuelles sont soumis aux mêmes obligations OIBT que les propriétaires d'immeubles. La périodicité pour une villa (habitation) est de 20 ans. Si vous n'avez jamais eu de contrôle ou si le dernier date de plus de 20 ans, vous êtes en infraction." },
      { q: "Qui est accrédité pour faire les contrôles OIBT ?", a: "L'ESTI (Inspection fédérale des installations à courant fort) accrédite les organismes de contrôle. Pour les contrôles courants, un organe 'simplement indépendant' suffit. Pour les installations en zones à risque (explosion, médicales), un organisme accrédité ISO 17020 est requis." },
      { q: "Que contient le rapport de sécurité OIBT ?", a: "Le rapport de sécurité (RdS) contient : l'identification complète de l'installation, la liste des défauts constatés (classés par niveau de risque), l'attestation de conformité ou de non-conformité, et les recommandations. Il est transmis au GRD local par l'organe de contrôle." },
      { q: "Peut-on faire le contrôle OIBT soi-même ?", a: "Non. Le contrôle OIBT doit impérativement être réalisé par un organe de contrôle indépendant. Le propriétaire ne peut pas effectuer lui-même son contrôle. L'installateur qui a réalisé les travaux ne peut pas non plus contrôler sa propre installation (principe d'indépendance, Art. 36 al. 3 OIBT)." },
      { q: "Combien de temps dure un contrôle OIBT ?", a: "La durée d'un contrôle OIBT varie selon la taille de l'installation : 1-2h pour un appartement, 2-4h pour une villa, une demi-journée à plusieurs jours pour un immeuble ou une installation industrielle. Le rapport de sécurité est généralement transmis dans les 48h suivant l'inspection." },
    ],
  },
  de: {
    breadcrumb: [
      { label: 'Startseite', href: '/de' },
      { label: 'Elektrokontrolle NIV' },
    ],
    h1: "NIV-Elektrokontrolle in der Schweiz — Vollständiger Leitfaden 2026",
    definition: "Die NIV-Elektrokontrolle (Niederspannungs-Installationsverordnung) ist eine gesetzlich vorgeschriebene elektrische Inspektion, die vom ESTI in der Schweiz überwacht wird. Jeder Eigentümer einer Elektroinstallation muss seine Anlage regelmäßig von einem unabhängigen Kontrollorgan prüfen lassen.",
    toc: [
      { id: 'rechtsgrundlage', label: 'Gesetzliche Grundlage NIV' },
      { id: 'kontrollarten', label: 'Kontrollarten' },
      { id: 'kontrollfristen', label: 'Kontrollfristen' },
      { id: 'akteure', label: 'Wer macht was?' },
      { id: 'ablauf', label: 'Ablauf' },
      { id: 'konsequenzen', label: 'Konsequenzen Nichtkonformität' },
      { id: 'faq', label: 'FAQ' },
    ],
    sections: {
      legalTitle: "Gesetzliche Grundlage der NIV-Elektrokontrolle",
      legalContent: `Die Niederspannungs-Installationsverordnung (NIV) vom 7. November 2001, in Kraft seit dem 1. Januar 2002 und revidiert am 1. Januar 2024, bildet den rechtlichen Rahmen. Sie stützt sich auf das Elektrizitätsgesetz (EleG) von 1902 und wird vom ESTI (Eidgenössisches Starkstrominspektorat) überwacht.

Die NIV gilt für alle Niederspannungsinstallationen unter 1000V Wechselstrom oder 1500V Gleichstrom.`,
      typesTitle: "Die 5 Arten der NIV-Kontrolle",
      types: [
        { name: "Schlussrevision (Art. 24)", desc: "Wird vom Installateur vor der Übergabe an den Eigentümer durchgeführt. Pflicht für jede neue Installation." },
        { name: "Abnahmekontrolle (Art. 35)", desc: "Pflicht innerhalb von 6 Monaten nach Inbetriebnahme, wenn die Kontrollperiode < 20 Jahre. Unabhängiges Organ." },
        { name: "Periodische Kontrolle (Art. 36)", desc: "Zu festem Fälligkeitstermin. Der VNB schreibt dem Eigentümer 6 Monate vor Fälligkeit." },
        { name: "Fünfjähreskontrolle", desc: "Pflicht bei Eigentümerwechsel, wenn die letzte Kontrolle mehr als 5 Jahre zurückliegt." },
        { name: "Stichprobenkontrolle (Art. 39)", desc: "Der Netzbetreiber kann bei Zweifeln an einer Anlage eine stichprobenartige Kontrolle durchführen." },
      ],
      acteursTitle: "Wer macht was bei der NIV-Elektrokontrolle?",
      acteurs: [
        { role: "Eigentümer (Art. 5)", desc: "Zu 100% verantwortlich für die Sicherheit. Beauftragt und bezahlt die Kontrolle. Verwahrt den Bericht. Behebt Mängel unverzüglich." },
        { role: "Mieter", desc: "Indirekt betroffen (meldet Mängel). Zahlt NIE die Kontrolle. Kann nicht zur Organisation der Kontrolle verpflichtet werden." },
        { role: "VNB (Netzbetreiber)", desc: "Administrative Rolle. Versendet die Aufforderungsschreiben 6 Monate vor Fälligkeit. Prüft den Eingang der Sicherheitsnachweise." },
        { role: "Kontrollorgan", desc: "UNABHÄNGIG vom Installateur. Inspiziert die Anlage. Erstellt den Sicherheitsnachweis (SiNa). DARF KEINE Sanierungsarbeiten durchführen." },
        { role: "ESTI", desc: "Eidgenössische Aufsichtsbehörde. Akkreditiert Kontrollorgane. Interveniert bei Streitigkeiten oder schwerwiegenden Nichtkonformitäten." },
      ],
      consequencesTitle: "Was passiert ohne gültigen NIV-Sicherheitsnachweis?",
      consequences: [
        "Zivil- und strafrechtliche Haftung bei Elektrounfall (Brand, Stromschlag)",
        "Verweigerung der Entschädigung durch Gebäudeversicherung",
        "Meldung an das ESTI durch den VNB bei Nichteinhaltung der Fristen",
        "Unmöglichkeit, die Immobilie ohne gültigen Bericht zu verkaufen oder zu vermieten",
        "Mögliche Bußgeldverfügung je nach Kanton",
      ],
    },
    faqs: [
      { q: "Was genau ist die NIV?", a: "Die NIV (Niederspannungs-Installationsverordnung) ist eine eidgenössische Verordnung der Schweiz vom 7. November 2001 (SR 734.27), die die Sicherheit von Niederspannungsinstallationen (< 1000V AC) regelt und periodische Pflichtkontrollen für alle Gebäude vorschreibt." },
      { q: "Ist die Elektrokontrolle für Einfamilienhausbesitzer Pflicht?", a: "Ja, absolut. Eigentümer von Einfamilienhäusern unterliegen denselben NIV-Pflichten wie Eigentümer von Mehrfamilienhäusern. Die Kontrollfrist für ein Wohngebäude beträgt 20 Jahre." },
      { q: "Kann man die Elektrokontrolle selbst durchführen?", a: "Nein. Die NIV-Kontrolle muss zwingend von einem unabhängigen Kontrollorgan durchgeführt werden. Weder der Eigentümer noch der Installateur, der die Arbeiten ausgeführt hat, darf die Kontrolle seiner eigenen Anlage vornehmen (Unabhängigkeitsprinzip, NIV Art. 36 Abs. 3)." },
      { q: "Wie lange dauert eine Elektrokontrolle?", a: "Die Dauer variiert: 1-2h für eine Wohnung, 2-4h für ein Einfamilienhaus, ein halber bis mehrere Tage für ein Mehrfamilienhaus oder eine Industrieanlage. Der Sicherheitsnachweis wird in der Regel innerhalb von 48h nach der Inspektion übermittelt." },
    ],
  },
  it: {
    breadcrumb: [
      { label: 'Home', href: '/it' },
      { label: 'Controllo OIBT' },
    ],
    h1: "Controllo OIBT in Svizzera — Guida completa 2026",
    definition: "Il controllo OIBT (Ordinanza sugli Impianti elettrici a Bassa Tensione) è un'ispezione elettrica obbligatoria imposta dall'ESTI in Svizzera. Ogni proprietario di un impianto elettrico deve far verificare il proprio impianto da un organo di controllo indipendente a intervalli regolari.",
    toc: [
      { id: 'base-legale', label: 'Base legale OIBT' },
      { id: 'tipi-controlli', label: 'Tipi di controlli' },
      { id: 'periodicita', label: 'Periodicità' },
      { id: 'attori', label: 'Chi fa cosa?' },
      { id: 'svolgimento', label: 'Svolgimento' },
      { id: 'conseguenze', label: 'Conseguenze non conformità' },
      { id: 'faq', label: 'FAQ' },
    ],
    sections: {
      legalTitle: "Base legale del controllo OIBT",
      legalContent: `L'Ordinanza sugli impianti elettrici a bassa tensione (OIBT) del 7 novembre 2001, entrata in vigore il 1° gennaio 2002 e revisionata il 1° gennaio 2024, costituisce il quadro giuridico principale. Si basa sulla Legge federale sugli impianti elettrici (LIE) del 1902 ed è supervisionata dall'ESTI.

L'OIBT si applica a tutti gli impianti elettrici alimentati con tensione non superiore a 1000V in corrente alternata o 1500V in corrente continua.`,
      typesTitle: "I 5 tipi di controllo OIBT",
      types: [
        { name: "Controllo finale (Art. 24)", desc: "Eseguito dall'installatore prima della consegna al proprietario. Obbligatorio per ogni nuovo impianto." },
        { name: "Controllo di collaudo (Art. 35)", desc: "Obbligatorio entro 6 mesi dalla messa in servizio se la periodicità è < 20 anni. Organo indipendente." },
        { name: "Controllo periodico (Art. 36)", desc: "A scadenza fissa. Il GRD invia una comunicazione al proprietario 6 mesi prima della scadenza." },
        { name: "Controllo quinquennale", desc: "Obbligatorio in caso di cambio di proprietà se l'ultimo controllo risale a più di 5 anni fa." },
        { name: "Controllo spot (Art. 39)", desc: "Il gestore di rete può effettuare un controllo spot in caso di dubbio su un impianto." },
      ],
      acteursTitle: "Chi fa cosa nel controllo OIBT?",
      acteurs: [
        { role: "Proprietario (Art. 5)", desc: "Responsabile al 100% della sicurezza. Incarica e paga il controllo. Conserva il rapporto. Ripara i difetti senza ritardo." },
        { role: "Inquilino", desc: "Indirettamente coinvolto (segnala i difetti). NON paga MAI il controllo. Non può essere costretto ad organizzarlo." },
        { role: "GRD (Gestore di rete)", desc: "Ruolo amministrativo. Invia le convocazioni 6 mesi prima della scadenza. Verifica la ricezione dei rapporti di sicurezza." },
        { role: "Organo di controllo", desc: "INDIPENDENTE dall'installatore. Ispeziona l'impianto. Redige il rapporto di sicurezza (RaSi). NON PUÒ eseguire lavori di messa a norma." },
        { role: "ESTI", desc: "Autorità federale di vigilanza. Accredita gli organismi di controllo. Interviene in caso di controversie." },
      ],
      consequencesTitle: "Cosa succede senza un rapporto OIBT valido?",
      consequences: [
        "Responsabilità civile e penale in caso di incidente elettrico (incendio, folgorazione)",
        "Rifiuto di indennizzo da parte dell'assicurazione antincendio",
        "Segnalazione all'ESTI da parte del GRD in caso di mancato rispetto dei termini",
        "Impossibilità di vendere o affittare l'immobile senza rapporto valido",
        "Possibile multa a seconda del cantone",
      ],
    },
    faqs: [
      { q: "Cos'è esattamente l'OIBT?", a: "L'OIBT (Ordinanza sugli Impianti elettrici a Bassa Tensione) è un'ordinanza federale svizzera del 7 novembre 2001 (RS 734.27) che regola la sicurezza degli impianti elettrici a bassa tensione (< 1000V AC) e impone controlli periodici obbligatori per tutti gli edifici." },
      { q: "Il controllo OIBT è obbligatorio per i proprietari di ville?", a: "Sì, assolutamente. I proprietari di ville individuali sono soggetti agli stessi obblighi OIBT dei proprietari di condomini. La periodicità per una villa (abitazione) è di 20 anni." },
      { q: "Quanto dura un controllo OIBT?", a: "La durata varia: 1-2h per un appartamento, 2-4h per una villa, mezza giornata o più per un condominio o un impianto industriale. Il rapporto di sicurezza è generalmente trasmesso entro 48h dall'ispezione." },
    ],
  },
};

export default async function ControleOIBTPage({ params }: Props) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] || content.fr;

  const breadcrumbSchema = buildBreadcrumbSchema(
    c.breadcrumb.map((item) => ({
      name: item.label,
      url: item.href ? `https://controle-oibt.ch${item.href}` : '#',
    }))
  );

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={buildFAQSchema(c.faqs)} />
      <SchemaOrg schema={buildHowToSchema(locale)} />

      <Breadcrumb items={c.breadcrumb} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Definition atomique AI-first */}
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">{c.definition}</p>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{c.h1}</h1>

        {/* TOC */}
        <nav className="bg-gray-50 rounded-xl p-5 mb-10 border border-gray-200">
          <p className="font-semibold text-gray-700 mb-3">
            {locale === 'de' ? 'Inhaltsverzeichnis' : locale === 'it' ? 'Sommario' : 'Table des matières'}
          </p>
          <ol className="space-y-1">
            {c.toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-primary-700 hover:underline text-sm">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Section Cadre légal */}
        <section id={c.toc[0].id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.sections.legalTitle}</h2>
          <div className="prose prose-blue max-w-none">
            {c.sections.legalContent.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
            ))}
          </div>
        </section>

        {/* Types de contrôles */}
        <section id={c.toc[1].id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.sections.typesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.sections.types.map((type) => (
              <div key={type.name} className="card border-l-4 border-primary-500">
                <h3 className="font-bold text-primary-800 mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Periodicites */}
        <section id={c.toc[2].id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'NIV-Kontrollfristen' : locale === 'it' ? 'Periodicità OIBT' : 'Périodicités OIBT'}
          </h2>
          <PeriodiciteTable />
        </section>

        {/* Acteurs */}
        <section id={c.toc[3].id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.sections.acteursTitle}</h2>
          <div className="space-y-4">
            {c.sections.acteurs.map((acteur) => (
              <div key={acteur.role} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">👤</span>
                <div>
                  <h3 className="font-bold text-gray-900">{acteur.role}</h3>
                  <p className="text-gray-600 text-sm mt-1">{acteur.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conséquences */}
        <section id={c.toc[5].id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.sections.consequencesTitle}</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <ul className="space-y-3">
              {c.sections.consequences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">⚠️</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Häufig gestellte Fragen' : locale === 'it' ? 'Domande frequenti' : 'Questions fréquentes'}
          </h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
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
      </article>

      <CTASection />
    </>
  );
}
