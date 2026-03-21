import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Glossaire OIBT — Tous les termes du contrôle électrique en Suisse | 2026',
    de: 'NIV-Glossar — Alle Begriffe der Elektrokontrolle in der Schweiz | 2026',
    it: 'Glossario OIBT — Tutti i termini del controllo elettrico in Svizzera | 2026',
  };
  const descs = {
    fr: 'Dictionnaire complet des termes OIBT : RdS, GRD, ESTI, schéma III, périodicité, organe de contrôle, installation à basse tension et plus.',
    de: 'Vollständiges Glossar der NIV-Begriffe: SiNa, VNB, ESTI, Schema III, Kontrollperiode, Kontrollorgan, Niederspannungsanlage und mehr.',
    it: 'Glossario completo dei termini OIBT: RaSi, GRD, ESTI, schema III, periodicità, organo di controllo, impianto a bassa tensione e altro.',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/glossaire-oibt` },
  };
}

export default async function GlossairePage({ params }: Props) {
  const { locale } = await params;

  const terms = locale === 'de' ? [
    { term: 'NIV', def: 'Niederspannungsinstallationsverordnung — Die schweizweit gültige Verordnung, die die Anforderungen an elektrische Niederspannungsinstallationen und deren periodische Kontrolle regelt.' },
    { term: 'SiNa', def: 'Sicherheitsnachweis — Das offizielle Dokument, das nach einer NIV-Kontrolle ausgestellt wird. Es bescheinigt den Zustand der elektrischen Installation und wird direkt an den Netzbetreiber (VNB) übermittelt.' },
    { term: 'VNB', def: 'Verteilnetzbetreiber — Das lokale Stromversorgungsunternehmen, das das Verteilnetz betreibt und den SiNa empfängt. Beispiele: CFF Genf, IWB Basel, EWZ Zürich.' },
    { term: 'ESTI', def: 'Eidgenössisches Starkstrominspektorat — Die nationale Aufsichtsbehörde für elektrische Sicherheit in der Schweiz. Akkreditiert und überwacht die Kontrollorgane.' },
    { term: 'Schema III', def: 'Unmittelbar gefährlicher Mangel — Höchste Risikostufe in der NIV-Kontrolle. Die Installation muss sofort ausser Betrieb genommen werden. Keine Frist gewährt.' },
    { term: 'Schema II', def: 'Zu behebender Mangel — Sicherheitsmangel, der innerhalb einer gesetzten Frist (in der Regel 3-6 Monate) behoben werden muss.' },
    { term: 'Schema I', def: 'Empfehlung — Keine unmittelbare Gefahr, aber eine Verbesserung wird empfohlen. Keine gesetzliche Behebungspflicht.' },
    { term: 'Kontrollperiode', def: 'Die gesetzlich vorgeschriebene Zeit zwischen zwei periodischen NIV-Kontrollen: 20 Jahre für Wohngebäude, 10 Jahre für Büros/Gewerbe, 5 Jahre für Hotels/Industrie.' },
    { term: 'Kontrollorgan', def: 'Unabhängiges, von der ESTI akkreditiertes Organ, das NIV-Kontrollen durchführt. Darf nicht mit dem Installateur identisch sein (Unabhängigkeitsprinzip).' },
    { term: 'Installationsanzeige', def: 'Dokument des Installateurs nach Abschluss der Arbeiten, das die durchgeführten Installationen beschreibt. Grundlage für die Kontrolle.' },
  ] : locale === 'it' ? [
    { term: 'OIBT', def: 'Ordinanza sugli impianti a bassa tensione — Il regolamento valido in tutta la Svizzera che disciplina i requisiti degli impianti elettrici a bassa tensione e il loro controllo periodico.' },
    { term: 'RaSi', def: 'Rapporto di sicurezza — Il documento ufficiale rilasciato dopo un controllo OIBT. Attesta lo stato dell\'impianto elettrico e viene trasmesso direttamente al GRD.' },
    { term: 'GRD', def: 'Gestore di rete di distribuzione — L\'azienda elettrica locale che gestisce la rete di distribuzione e riceve il RaSi. Esempi: AES Ginevra, BKW Berna, FFS.' },
    { term: 'ESTI', def: 'Ispettorato federale degli impianti a corrente forte — L\'autorità di vigilanza nazionale per la sicurezza elettrica in Svizzera. Accredita e supervisiona gli organi di controllo.' },
    { term: 'Schema III', def: 'Difetto a pericolo immediato — Livello di rischio massimo nel controllo OIBT. L\'impianto deve essere immediatamente messo fuori servizio. Nessun termine concesso.' },
    { term: 'Periodicità', def: 'Il tempo prescritto dalla legge tra due controlli OIBT periodici: 20 anni per le abitazioni, 10 anni per uffici/negozi, 5 anni per hotel/industrie.' },
    { term: 'Organo di controllo', def: 'Organo indipendente, accreditato dall\'ESTI, che effettua i controlli OIBT. Non può essere identico all\'installatore (principio di indipendenza).' },
  ] : [
    { term: 'OIBT', def: 'Ordonnance sur les Installations à Basse Tension — Le règlement fédéral suisse régissant les exigences des installations électriques à basse tension et leur contrôle périodique obligatoire.' },
    { term: 'RdS', def: 'Rapport de sécurité — Le document officiel délivré après un contrôle OIBT. Il atteste l\'état de l\'installation électrique et est transmis directement au GRD.' },
    { term: 'GRD', def: 'Gestionnaire de réseau de distribution — L\'entreprise électrique locale qui gère le réseau de distribution et reçoit le RdS. Exemples : SIG Genève, Romande Energie, BKW Berne.' },
    { term: 'ESTI', def: 'Inspection fédérale des installations à courant fort — L\'autorité de surveillance nationale pour la sécurité électrique en Suisse. Accrédite et surveille les organes de contrôle.' },
    { term: 'Schéma III', def: 'Défaut à danger immédiat — Niveau de risque maximal lors d\'un contrôle OIBT. L\'installation doit être immédiatement mise hors service. Aucun délai accordé.' },
    { term: 'Schéma II', def: 'Défaut à corriger — Défaut de sécurité devant être corrigé dans un délai accordé (généralement 3-6 mois).' },
    { term: 'Schéma I', def: 'Recommandation — Aucun danger immédiat, mais une amélioration est conseillée. Aucune obligation légale de correction.' },
    { term: 'Périodicité', def: 'Le délai légal entre deux contrôles OIBT périodiques : 20 ans pour les habitations, 10 ans pour les bureaux/commerces, 5 ans pour les hôtels/industries.' },
    { term: 'Organe de contrôle', def: 'Organe indépendant, accrédité par l\'ESTI, qui réalise les contrôles OIBT. Ne peut pas être identique à l\'installateur (principe d\'indépendance, Art. 36 al. 3 OIBT).' },
    { term: 'Avis d\'installation', def: 'Document de l\'installateur en fin de travaux décrivant les installations réalisées. Base pour le contrôle OIBT.' },
    { term: 'Art. 5 OIBT', def: 'Article fondamental établissant que le propriétaire est responsable de la sécurité de l\'installation électrique et supporte les frais du contrôle périodique.' },
    { term: 'Art. 36 OIBT', def: 'Article instaurant l\'obligation de contrôle périodique indépendant par un organe de contrôle accrédité ESTI.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Glossar' : locale === 'it' ? 'Glossario OIBT' : 'Glossaire OIBT' },
  ];

  const definedTermsSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: locale === 'de' ? 'NIV Glossar Schweiz' : locale === 'it' ? 'Glossario OIBT Svizzera' : 'Glossaire OIBT Suisse',
    hasDefinedTerm: terms.map(t => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.def,
    })),
  };

  return (
    <>
      <SchemaOrg schema={definedTermsSchema} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {locale === 'de'
            ? 'NIV-Glossar — Alle Fachbegriffe der Elektrokontrolle'
            : locale === 'it'
            ? 'Glossario OIBT — Tutti i termini del controllo elettrico'
            : 'Glossaire OIBT — Tous les termes du contrôle électrique'}
        </h1>
        <p className="text-gray-600 mb-10">
          {locale === 'de'
            ? 'Definitionen aller Fachbegriffe im Zusammenhang mit der NIV-Elektrokontrolle in der Schweiz.'
            : locale === 'it'
            ? 'Definizioni di tutti i termini tecnici relativi al controllo elettrico OIBT in Svizzera.'
            : 'Définitions de tous les termes techniques liés au contrôle électrique OIBT en Suisse.'}
        </p>

        <dl className="space-y-4">
          {terms.map((item) => (
            <div key={item.term} className="card">
              <dt className="font-bold text-primary-700 text-lg mb-1">{item.term}</dt>
              <dd className="text-gray-700">{item.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
