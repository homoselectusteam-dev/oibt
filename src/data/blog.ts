export type BlogPost = {
  slug: string;
  titleFR: string;
  titleDE: string;
  titleIT: string;
  descFR: string;
  descDE: string;
  descIT: string;
  category: string;
  publishDate: string;
  contentFR: string;
  contentDE: string;
  contentIT: string;
  faqFR: { q: string; a: string }[];
  faqDE: { q: string; a: string }[];
  faqIT: { q: string; a: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'controle-oibt-obligatoire-suisse',
    titleFR: 'Le contrôle OIBT est-il vraiment obligatoire en Suisse ? Réponse juridique complète',
    titleDE: 'Ist die NIV-Elektrokontrolle in der Schweiz wirklich obligatorisch? Vollständige Rechtsantwort',
    titleIT: 'Il controllo OIBT è davvero obbligatorio in Svizzera? Risposta giuridica completa',
    descFR: 'Oui, le contrôle OIBT est obligatoire pour toutes les installations électriques en Suisse. Découvrez le cadre légal, les sanctions et ce que dit exactement l\'Art. 36 OIBT.',
    descDE: 'Ja, die NIV-Elektrokontrolle ist für alle Elektroinstallationen in der Schweiz obligatorisch. Erfahren Sie den Rechtsrahmen, die Sanktionen und was NIV Art. 36 genau sagt.',
    descIT: 'Sì, il controllo OIBT è obbligatorio per tutti gli impianti elettrici in Svizzera. Scoprite il quadro giuridico, le sanzioni e cosa dice esattamente l\'Art. 36 OIBT.',
    category: 'juridique',
    publishDate: '2026-03-01',
    contentFR: `## Le contrôle OIBT est-il obligatoire ?

**Réponse directe : Oui, absolument.**

L'Art. 36 de l'Ordonnance sur les Installations électriques à Basse Tension (OIBT) impose un contrôle périodique obligatoire pour toutes les installations électriques à basse tension en Suisse, sans exception.

## Ce que dit exactement l'Art. 36 OIBT

L'article 36 OIBT stipule que "les installations électriques doivent être contrôlées périodiquement par un organe de contrôle indépendant". La périodicité varie selon le type d'installation :

- **20 ans** pour les habitations (maisons, appartements)
- **10 ans** pour les bureaux et commerces
- **5 ans** pour les hôtels, cinémas, industries

## Qui est concerné ?

**Tout propriétaire** d'une installation électrique en Suisse est concerné :
- Propriétaires de villas individuelles
- Propriétaires d'immeubles locatifs
- Copropriétaires (PPE)
- Propriétaires de locaux commerciaux
- Propriétaires d'installations industrielles

Le statut (privé, institutionnel, commercial) ne change rien à l'obligation.

## Quelles sanctions en cas de non-respect ?

En cas d'absence de contrôle OIBT valide :

1. **Responsabilité civile** : vous êtes pleinement responsable de tout dommage causé par votre installation défaillante
2. **Responsabilité pénale** : en cas de blessé ou de décès, les poursuites pénales sont possibles
3. **Refus d'assurance** : votre assurance incendie (ECA/GVA) peut refuser l'indemnisation
4. **Signalement ESTI** : le GRD peut vous signaler à l'autorité fédérale ESTI

## Conclusion

Le contrôle OIBT n'est pas une option ni une recommandation : c'est une obligation légale fédérale. Ignorer cette obligation vous expose à des risques juridiques et financiers considérables.`,
    contentDE: `## Ist die NIV-Elektrokontrolle obligatorisch?

**Direkte Antwort: Ja, absolut.**

NIV Art. 36 schreibt eine periodische Pflichtprüfung für alle Niederspannungsinstallationen in der Schweiz vor, ohne Ausnahme.

## Was sagt NIV Art. 36 genau?

Artikel 36 NIV bestimmt, dass "elektrische Installationen regelmäßig von einem unabhängigen Kontrollorgan zu kontrollieren sind". Die Kontrollfristen variieren je nach Anlagentyp:

- **20 Jahre** für Wohngebäude (Häuser, Wohnungen)
- **10 Jahre** für Büros und Gewerbe
- **5 Jahre** für Hotels, Kinos, Industrie

## Wen betrifft es?

**Jeden Eigentümer** einer Elektroinstallation in der Schweiz:
- Eigentümer von Einfamilienhäusern
- Eigentümer von Mehrfamilienhäusern
- Stockwerkeigentümer
- Eigentümer von Gewerberäumen
- Eigentümer von Industrieanlagen

## Folgen bei Nichtbeachtung

1. **Zivilrechtliche Haftung**: volle Verantwortung für Schäden durch defekte Anlage
2. **Strafrechtliche Haftung**: bei Verletzten oder Todesopfern mögliche Strafverfolgung
3. **Versicherungsverweigerung**: Gebäudeversicherung kann Entschädigung verweigern
4. **ESTI-Meldung**: Der VNB kann Sie beim ESTI melden`,
    contentIT: `## Il controllo OIBT è obbligatorio?

**Risposta diretta: Sì, assolutamente.**

L'Art. 36 dell'Ordinanza sugli Impianti elettrici a Bassa Tensione (OIBT) impone un controllo periodico obbligatorio per tutti gli impianti elettrici in Svizzera.

## Cosa dice esattamente l'Art. 36 OIBT

L'articolo 36 OIBT stabilisce che "gli impianti elettrici devono essere controllati periodicamente da un organo di controllo indipendente". Le periodicità variano:

- **20 anni** per le abitazioni (case, appartamenti)
- **10 anni** per uffici e negozi
- **5 anni** per hotel, cinema, industrie

## Chi è interessato?

**Ogni proprietario** di un impianto elettrico in Svizzera.

## Conseguenze in caso di mancato rispetto

1. **Responsabilità civile**: piena responsabilità per i danni causati
2. **Responsabilità penale**: possibile perseguimento penale in caso di feriti o decessi
3. **Rifiuto assicurativo**: l'assicurazione antincendio può rifiutare l'indennizzo
4. **Segnalazione ESTI**: il GRD può segnalarvi all'ESTI`,
    faqFR: [
      { q: "Peut-on être exempté du contrôle OIBT ?", a: "Non. Toutes les installations électriques à basse tension en Suisse sont soumises à l'OIBT sans exception. Il n'existe aucune dérogation possible pour les particuliers ou les entreprises." },
      { q: "Le contrôle OIBT est-il obligatoire même si l'installation est récente ?", a: "Oui, même les nouvelles installations doivent être contrôlées. Pour une installation neuve, un contrôle de réception (Art. 35) est obligatoire dans les 6 mois suivant la mise en service si la périodicité est inférieure à 20 ans." },
    ],
    faqDE: [
      { q: "Gibt es Ausnahmen von der NIV-Pflicht?", a: "Nein. Alle Niederspannungsinstallationen in der Schweiz unterliegen der NIV ohne Ausnahme." },
      { q: "Ist die NIV-Kontrolle auch bei neuen Installationen Pflicht?", a: "Ja. Für neue Anlagen ist eine Abnahmekontrolle (Art. 35) innerhalb von 6 Monaten nach Inbetriebnahme obligatorisch, wenn die Kontrollperiode unter 20 Jahren liegt." },
    ],
    faqIT: [
      { q: "Ci sono esenzioni dal controllo OIBT?", a: "No. Tutti gli impianti elettrici a bassa tensione in Svizzera sono soggetti all'OIBT senza eccezioni." },
    ],
  },
  {
    slug: 'prix-controle-oibt-suisse-2026',
    titleFR: 'Prix contrôle OIBT en Suisse 2026 : combien ça coûte vraiment ?',
    titleDE: 'NIV-Elektrokontrolle Kosten 2026: Was kostet es wirklich?',
    titleIT: 'Costo controllo OIBT in Svizzera 2026: quanto costa davvero?',
    descFR: 'Guide complet des prix du contrôle OIBT 2026 : par canton, par type de bâtiment, par taille. Fourchettes réelles, ce qui fait varier le prix et comment obtenir le meilleur tarif.',
    descDE: 'Vollständiger NIV-Kostenleitfaden 2026: nach Kanton, Gebäudetyp, Größe. Echte Preisspannen und wie man den besten Preis erhält.',
    descIT: 'Guida completa ai prezzi del controllo OIBT 2026: per cantone, tipo di edificio, dimensioni. Fasce di prezzo reali e come ottenere la migliore tariffa.',
    category: 'prix',
    publishDate: '2026-02-15',
    contentFR: `## Combien coûte un contrôle OIBT en Suisse en 2026 ?

**Réponse directe : entre CHF 250 et CHF 2'000** selon la taille et le type d'installation, le canton et l'organe de contrôle choisi.

## Fourchettes de prix par type de logement

| Type | Prix min | Prix max |
|------|---------|---------|
| Studio / 1 pièce | CHF 250 | CHF 420 |
| Appartement 3 pièces | CHF 380 | CHF 650 |
| Villa moyenne | CHF 500 | CHF 900 |
| Immeuble 6 logements | CHF 900 | CHF 1'500 |

## Pourquoi le prix varie-t-il ?

Plusieurs facteurs influencent le prix :

1. **Le canton** : Genève et Zurich sont 30-40% plus chers que le Jura ou le Valais
2. **La complexité** : câblage ancien (Schéma III), triphasé, nombreux circuits
3. **L'organe de contrôle** : marché libéralisé, comparez les devis
4. **Le délai** : urgence ou planification à l'avance

## Comment économiser sur votre contrôle OIBT

1. Demandez au moins 3 devis gratuits
2. Planifiez en dehors des périodes de pointe
3. Regroupez plusieurs logements si vous êtes gérant (tarif volume)
4. Anticipez avant l'échéance pour éviter les majorations d'urgence`,
    contentDE: `## Was kostet eine NIV-Elektrokontrolle 2026?

**Direkte Antwort: zwischen CHF 250 und CHF 2'000** je nach Anlagengröße, Kanton und Kontrollorgan.

## Preisspannen nach Wohnungstyp

| Typ | Min | Max |
|-----|-----|-----|
| 1-Zimmerwohnung | CHF 250 | CHF 420 |
| 3-Zimmerwohnung | CHF 380 | CHF 650 |
| Einfamilienhaus | CHF 500 | CHF 900 |
| MFH 6 Whg. | CHF 900 | CHF 1'500 |

## Warum variiert der Preis?

1. **Der Kanton**: Genf und Zürich sind 30-40% teurer als Jura oder Wallis
2. **Die Komplexität**: alte Verkabelung (Schema III), Drehstrom
3. **Das Kontrollorgan**: liberalisierter Markt, Offerten vergleichen
4. **Die Dringlichkeit**: Planung vs. Notfall`,
    contentIT: `## Quanto costa un controllo OIBT in Svizzera nel 2026?

**Risposta diretta: tra CHF 250 e CHF 2'000** secondo le dimensioni, il cantone e l'organo di controllo scelto.

## Fasce di prezzo per tipo di alloggio

| Tipo | Min | Max |
|------|-----|-----|
| Monolocale | CHF 250 | CHF 420 |
| Appartamento 3 locali | CHF 380 | CHF 650 |
| Villa media | CHF 500 | CHF 900 |
| Condominio 6 app. | CHF 900 | CHF 1'500 |

## Perché il prezzo varia?

1. **Il cantone**: Ginevra e Zurigo costano il 30-40% in più del Giura o del Vallese
2. **La complessità**: cablaggio vecchio (Schema III), trifase
3. **L'organo di controllo**: mercato liberalizzato, confrontate i preventivi`,
    faqFR: [
      { q: "Est-ce que le contrôle OIBT est soumis à la TVA ?", a: "Non. En Suisse, le contrôle OIBT est exonéré de TVA car c'est une prestation légalement obligatoire. Le prix affiché est donc le prix final." },
    ],
    faqDE: [
      { q: "Unterliegt die NIV-Elektrokontrolle der MWST?", a: "Nein. Die NIV-Kontrolle ist MWST-befreit, da es eine gesetzlich vorgeschriebene Leistung ist." },
    ],
    faqIT: [
      { q: "Il controllo OIBT è soggetto all'IVA?", a: "No. Il controllo OIBT è esente da IVA in Svizzera in quanto prestazione legalmente obbligatoria." },
    ],
  },
  {
    slug: 'schema-iii-risques-electricite',
    titleFR: 'Schéma III : le câblage électrique le plus dangereux de Suisse',
    titleDE: 'Schema III: Die gefährlichste Elektroinstallation der Schweiz',
    titleIT: 'Schema III: il cablaggio elettrico più pericoloso della Svizzera',
    descFR: 'Le Schéma III (sans conducteur de protection) est présent dans des centaines de milliers de logements suisses construits avant 1975. Risques réels et solutions.',
    descDE: 'Schema III (ohne Schutzleiter) ist in Hunderttausenden von Schweizer Gebäuden vorhanden, die vor 1975 gebaut wurden. Echte Risiken und Lösungen.',
    descIT: 'Lo Schema III (senza conduttore di protezione) è presente in centinaia di migliaia di edifici svizzeri costruiti prima del 1975. Rischi reali e soluzioni.',
    category: 'technique',
    publishDate: '2026-01-20',
    contentFR: `## Qu'est-ce que le Schéma III (ou Schéma 3) ?

Le Schéma III désigne une installation électrique à **2 conducteurs** (phase + neutre) **sans conducteur de protection** (terre). Ce type d'installation était courant en Suisse jusqu'aux années 1970-1975.

## Pourquoi le Schéma III est-il dangereux ?

Sans conducteur de protection, en cas de défaut d'isolement :
- Le courant de défaut ne peut pas s'écouler vers la terre
- Un simple contact avec un appareil défectueux peut être électrocutant
- Les disjoncteurs différentiels (DDR) ne fonctionnent pas correctement
- Risque d'incendie électrique accru

## Comment savoir si votre logement a un Schéma III ?

Signes révélateurs :
- Prises sans broche de terre (2 trous ronds)
- Tableau électrique très ancien sans disjoncteurs différentiels
- Câbles en tissu tressé ou en caoutchouc vieilli
- Construction avant 1975

## Contrôle OIBT et Schéma III : périodicité de 5 ans

Les installations Schéma III sont soumises à une **périodicité de contrôle de 5 ans** (et non 20 ans) en raison du risque accru. Cette règle est inscrite à l'Annexe de l'Art. 3 OIBT.

## Que faire si votre logement a un Schéma III ?

1. Faire réaliser un contrôle OIBT immédiat
2. Ne pas tarder pour la mise en conformité
3. Prioriser les pièces à risque : salle de bain, cuisine, buanderie
4. Contacter un électricien qualifié pour le remplacement du câblage`,
    contentDE: `## Was ist Schema III?

Schema III bezeichnet eine elektrische Installation mit **2 Leitern** (Phase + Nullleiter) **ohne Schutzleiter** (Erdung). Diese Art der Installation war in der Schweiz bis in die 1970er-75er Jahre üblich.

## Warum ist Schema III gefährlich?

Ohne Schutzleiter bei einem Isolationsfehler:
- Der Fehlerstrom kann nicht zur Erde abfließen
- Kontakt mit einem defekten Gerät kann zu Stromschlag führen
- FI-Schalter funktionieren nicht korrekt
- Erhöhtes Brandrisiko

## Elektrokontrolle NIV und Schema III: 5-Jahres-Frist

Schema-III-Installationen unterliegen einer **Kontrollfrist von 5 Jahren** (nicht 20 Jahren). Diese Regel ist im NIV-Anhang Art. 3 festgelegt.`,
    contentIT: `## Cos'è lo Schema III?

Lo Schema III designa un impianto elettrico a **2 conduttori** (fase + neutro) **senza conduttore di protezione** (terra). Questo tipo di installazione era comune in Svizzera fino agli anni 1970-75.

## Perché lo Schema III è pericoloso?

Senza conduttore di protezione, in caso di guasto di isolamento:
- La corrente di guasto non può defluire verso terra
- Il contatto con un apparecchio difettoso può causare folgorazione
- Gli interruttori differenziali non funzionano correttamente
- Rischio di incendio elettrico aumentato

## Controllo OIBT e Schema III: periodicità di 5 anni

Le installazioni Schema III sono soggette a una **periodicità di controllo di 5 anni** (non 20 anni) a causa del rischio aumentato.`,
    faqFR: [
      { q: "Est-ce que mon logement est forcément en Schéma III s'il a été construit avant 1975 ?", a: "Pas forcément. Certains logements construits avant 1975 ont déjà été mis en conformité avec du câblage 3 conducteurs. Un contrôle OIBT permettra de vérifier l'état réel de votre installation." },
    ],
    faqDE: [
      { q: "Ist meine Wohnung automatisch in Schema III, wenn sie vor 1975 gebaut wurde?", a: "Nicht unbedingt. Einige Gebäude wurden bereits auf 3-Leiter-Verkabelung umgerüstet. Eine NIV-Kontrolle prüft den tatsächlichen Zustand." },
    ],
    faqIT: [
      { q: "Il mio alloggio è necessariamente in Schema III se è stato costruito prima del 1975?", a: "Non necessariamente. Alcuni alloggi sono già stati messi a norma con cablaggio a 3 conduttori. Un controllo OIBT verificherà lo stato reale." },
    ],
  },

  // ── Article 4 ──────────────────────────────────────────────────────────────
  {
    slug: 'periodicite-controle-oibt-suisse',
    titleFR: 'Périodicité contrôle OIBT : 20 ans, 10 ans, 5 ans — Le guide complet',
    titleDE: 'NIV-Kontrollperioden: 20 Jahre, 10 Jahre, 5 Jahre — Der vollständige Leitfaden',
    titleIT: 'Periodicità controllo OIBT: 20 anni, 10 anni, 5 anni — Guida completa',
    descFR: 'Quelle est la périodicité de contrôle OIBT selon le type de bâtiment ? Habitations, commerces, hôtels, industrie — tout savoir sur les échéances légales.',
    descDE: 'Welche NIV-Kontrollperiode gilt für welchen Gebäudetyp? Wohngebäude, Gewerbe, Hotels, Industrie — alles über gesetzliche Fristen.',
    descIT: 'Quale periodicità di controllo OIBT si applica a quale tipo di edificio? Abitazioni, commerci, hotel, industria — tutto sulle scadenze legali.',
    category: 'juridique',
    publishDate: '2026-03-05',
    contentFR: `## Quelle périodicité pour le contrôle OIBT ?

La périodicité de contrôle OIBT est fixée par l'Art. 36 OIBT selon le type d'utilisation du bâtiment. Elle représente le délai maximum entre deux contrôles périodiques obligatoires.

## Les 4 périodicités principales

### 20 ans — Habitations
La périodicité de 20 ans s'applique aux :
- Logements (appartements, maisons)
- Résidences secondaires et chalets
- Homes et EMS (établissements médico-sociaux à usage résidentiel)

**Attention** : une installation de 1985 non encore contrôlée est en retard depuis 2005.

### 10 ans — Bureaux et commerces
- Bureaux et surfaces administratives
- Commerces, restaurants, cafés
- Parkings couverts
- Salles de sport et fitness

### 5 ans — Hôtels, cinémas, industries
- Hôtels et hébergements touristiques
- Cinémas, théâtres, salles de spectacle
- Installations industrielles et ateliers
- Locaux avec risques spécifiques (humidité, poussières)

### 1 an ou moins — Chantiers et installations temporaires
- Chantiers de construction
- Foires et expositions
- Manifestations temporaires

## Que se passe-t-il en cas de dépassement ?

Le dépassement de la périodicité constitue une infraction à l'OIBT. Conséquences :
- Refus d'indemnisation par l'assurance incendie
- Mise en demeure du GRD
- Possibilité de coupure de courant`,
    contentDE: `## Welche NIV-Kontrollperioden gelten?

Die NIV-Kontrollperiodizität wird durch Art. 36 NIV festgelegt und richtet sich nach der Nutzungsart des Gebäudes.

## Die 4 Hauptperioden

### 20 Jahre — Wohngebäude
- Wohnungen (Miet- und Eigentumswohnungen)
- Einfamilienhäuser
- Ferienwohnungen und Chalets

### 10 Jahre — Büros und Gewerbe
- Büros und Verwaltungsgebäude
- Geschäfte, Restaurants
- Tiefgaragen

### 5 Jahre — Hotels, Kinos, Industrie
- Hotels und Beherbergungsbetriebe
- Kinos, Theater
- Industrieanlagen und Werkstätten

### 1 Jahr oder weniger — Baustellen
- Baustellen
- Messen und Ausstellungen`,
    contentIT: `## Quali periodicità si applicano al controllo OIBT?

La periodicità del controllo OIBT è stabilita dall'Art. 36 OIBT in base al tipo di utilizzo dell'edificio.

## Le 4 periodicità principali

### 20 anni — Abitazioni
- Appartamenti e case unifamiliari
- Residenze secondarie

### 10 anni — Uffici e commerci
- Uffici e locali amministrativi
- Negozi, ristoranti

### 5 anni — Hotel, cinema, industria
- Hotel e strutture ricettive
- Impianti industriali

### 1 anno o meno — Cantieri
- Cantieri di costruzione
- Fiere ed esposizioni`,
    faqFR: [
      { q: "Quelle est la périodicité OIBT pour un appartement ?", a: "20 ans pour un appartement résidentiel en Suisse. Si votre installation date d'avant 2006 et n'a jamais été contrôlée, elle est en retard." },
      { q: "Quelle est la périodicité OIBT pour un restaurant ?", a: "10 ans pour un restaurant (catégorie bureaux et commerces)." },
      { q: "Les résidences secondaires ont-elles la même périodicité ?", a: "Oui, les résidences secondaires et chalets sont soumis à la même périodicité de 20 ans que les résidences principales." },
    ],
    faqDE: [
      { q: "Welche NIV-Periode gilt für eine Wohnung?", a: "20 Jahre für eine Wohnwohnung in der Schweiz." },
      { q: "Welche NIV-Periode für ein Restaurant?", a: "10 Jahre für ein Restaurant (Kategorie Büro und Gewerbe)." },
    ],
    faqIT: [
      { q: "Quale periodicità OIBT per un appartamento?", a: "20 anni per un appartamento residenziale in Svizzera." },
      { q: "Quale periodicità per un ristorante?", a: "10 anni per un ristorante (categoria uffici e commerci)." },
    ],
  },

  // ── Article 5 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-assurance-sinistre',
    titleFR: 'Contrôle OIBT et assurance incendie : ce que vous risquez sans rapport valide',
    titleDE: 'NIV-Kontrolle und Feuerversicherung: Was Sie ohne gültigen SiNa riskieren',
    titleIT: 'Controllo OIBT e assicurazione incendio: cosa rischiate senza rapporto valido',
    descFR: 'Sans rapport de sécurité OIBT valide, votre assurance incendie peut refuser de vous indemniser. Découvrez les risques concrets et comment vous protéger.',
    descDE: 'Ohne gültigen NIV-Sicherheitsnachweis kann Ihre Feuerversicherung die Entschädigung verweigern. Erfahren Sie die konkreten Risiken und wie Sie sich schützen.',
    descIT: 'Senza rapporto di sicurezza OIBT valido, la vostra assicurazione incendio può rifiutare l\'indennizzo. Scoprite i rischi concreti e come proteggersi.',
    category: 'juridique',
    publishDate: '2026-03-08',
    contentFR: `## Le lien entre contrôle OIBT et assurance incendie

En Suisse, les assurances incendie cantonales (ECA en Vaud, GVA à Genève, AGS en Valais...) ou privées ont le droit de réduire ou refuser l'indemnisation si le propriétaire ne peut pas prouver que son installation était conforme OIBT.

## Base légale

L'Art. 14 LCA (Loi sur le Contrat d'Assurance) permet à l'assureur de réduire l'indemnisation en cas de "faute grave du preneur d'assurance". Or, un propriétaire qui n'a pas fait contrôler son installation alors que la périodicité était dépassée commet une faute grave.

## Cas concrets

### Cas 1 : Incendie électrique, rapport échu depuis 5 ans
Installation résidentielle dont le contrôle OIBT (dû en 2019) n'a pas été réalisé. Incendie en 2024 causé par un court-circuit. L'ECA peut légitimement réduire l'indemnisation de 30 à 100%.

### Cas 2 : Court-circuit, rapport jamais établi
Maison de 1960 sans aucun rapport de sécurité OIBT. Dégâts électriques en 2025. L'assureur privé refuse l'indemnisation totale : faute grave caractérisée.

## Comment se protéger

1. Vérifier la date de votre dernier contrôle OIBT
2. Si la périodicité est dépassée, commander immédiatement un contrôle
3. Conserver le rapport de sécurité OIBT pendant toute la durée de la périodicité
4. Informer votre assurance de la date du contrôle`,
    contentDE: `## Zusammenhang zwischen NIV-Kontrolle und Feuerversicherung

In der Schweiz haben kantonale Gebäudeversicherungen (GVB in Bern, GVZ in Zürich) oder Privatversicherungen das Recht, die Entschädigung zu kürzen oder zu verweigern, wenn der Eigentümer die NIV-Konformität nicht nachweisen kann.

## Rechtliche Grundlage

Art. 14 VVG erlaubt dem Versicherer, die Entschädigung bei "grober Fahrlässigkeit" zu kürzen. Ein Eigentümer, der die NIV-Kontrolle trotz abgelaufener Periodizität nicht durchgeführt hat, begeht grobe Fahrlässigkeit.

## Wie Sie sich schützen

1. Datum Ihrer letzten NIV-Kontrolle prüfen
2. Bei abgelaufener Periodizität sofort eine neue Kontrolle beauftragen
3. SiNa während der gesamten Kontrollperiode aufbewahren`,
    contentIT: `## Il legame tra controllo OIBT e assicurazione incendio

In Svizzera, le assicurazioni incendio cantonali o private hanno il diritto di ridurre o rifiutare l'indennizzo se il proprietario non può provare la conformità OIBT dell'impianto.

## Base giuridica

L'Art. 14 LCA permette all'assicuratore di ridurre l'indennizzo in caso di "colpa grave dell'assicurato". Un proprietario che non ha fatto controllare il proprio impianto con la periodicità scaduta commette una colpa grave.

## Come proteggersi

1. Verificare la data dell'ultimo controllo OIBT
2. Se la periodicità è scaduta, ordinare immediatamente un nuovo controllo
3. Conservare il rapporto di sicurezza per tutta la durata della periodicità`,
    faqFR: [
      { q: "Mon assurance peut-elle refuser de m'indemniser sans contrôle OIBT ?", a: "Oui. En cas de sinistre électrique (incendie, court-circuit) sans rapport de sécurité OIBT valide, votre assurance incendie peut légitimement réduire ou refuser votre indemnisation." },
      { q: "Combien de temps conserver le rapport OIBT pour l'assurance ?", a: "Conservez le rapport OIBT pendant toute la durée de la périodicité (20 ans pour une habitation) et remettez-le immédiatement à votre assureur en cas de sinistre." },
    ],
    faqDE: [
      { q: "Kann meine Versicherung ohne NIV-Kontrolle die Entschädigung verweigern?", a: "Ja. Bei einem Brandschaden ohne gültigen SiNa kann die Versicherung die Entschädigung kürzen oder verweigern." },
    ],
    faqIT: [
      { q: "L'assicurazione può rifiutare l'indennizzo senza controllo OIBT?", a: "Sì. In caso di sinistro elettrico senza RaSi valido, l'assicurazione incendio può ridurre o rifiutare l'indennizzo." },
    ],
  },

  // ── Article 6 ──────────────────────────────────────────────────────────────
  {
    slug: 'organe-controle-oibt-choisir',
    titleFR: 'Comment choisir un organe de contrôle OIBT accrédité ESTI en Suisse ?',
    titleDE: 'Wie wählt man ein ESTI-akkreditiertes NIV-Kontrollorgan in der Schweiz?',
    titleIT: 'Come scegliere un organo di controllo OIBT accreditato ESTI in Svizzera?',
    descFR: 'Critères pour choisir un organe de contrôle OIBT : accréditation ESTI, indépendance, délais, rapport. Guide complet pour propriétaires suisses.',
    descDE: 'Kriterien für die Wahl eines NIV-Kontrollorgans: ESTI-Akkreditierung, Unabhängigkeit, Fristen, Bericht. Vollständiger Leitfaden für Schweizer Eigentümer.',
    descIT: 'Criteri per scegliere un organo di controllo OIBT: accreditamento ESTI, indipendenza, tempi, rapporto. Guida completa per proprietari svizzeri.',
    category: 'technique',
    publishDate: '2026-03-10',
    contentFR: `## Pourquoi le choix de l'organe de contrôle est-il crucial ?

Seul un organe de contrôle **accrédité par l'ESTI** peut délivrer un rapport de sécurité OIBT (RdS) valide en Suisse. Un rapport émis par un organisme non accrédité est nul et sans effet juridique.

## Les 5 critères essentiels

### 1. Accréditation ESTI en cours de validité
Vérifiez que l'organe est bien accrédité sur le registre officiel de l'ESTI (esti.admin.ch). L'accréditation doit être active et non expirée.

### 2. Indépendance vis-à-vis de l'installateur
L'Art. 36 al. 3 OIBT interdit formellement à l'installateur de contrôler sa propre installation. Assurez-vous que l'organe de contrôle est totalement indépendant de l'entreprise qui a réalisé vos travaux.

### 3. Couverture géographique
Vérifiez que l'organe est habilité à travailler dans votre canton et qu'il connaît le GRD local.

### 4. Délais de rendez-vous
Un bon organe de contrôle propose des rendez-vous sous 1 à 2 semaines. Méfiez-vous des délais anormalement longs.

### 5. Clarté du rapport
Le rapport de sécurité OIBT doit être structuré selon le schéma I/II/III, avec une liste exhaustive des défauts et une date du prochain contrôle.

## Ce que vous ne devez pas faire

- Confier le contrôle à l'électricien qui vient de finir vos travaux
- Accepter un "contrôle" sans rapport officiel ESTI
- Choisir uniquement sur le prix (le moins cher peut bâcler)`,
    contentDE: `## Warum ist die Wahl des Kontrollorgans entscheidend?

Nur ein **ESTI-akkreditiertes** Kontrollorgan kann einen gültigen NIV-Sicherheitsnachweis (SiNa) ausstellen. Ein von einem nicht-akkreditierten Organ ausgestellter SiNa ist nichtig.

## Die 5 wesentlichen Kriterien

### 1. Gültige ESTI-Akkreditierung
Prüfen Sie im offiziellen ESTI-Register (esti.admin.ch), ob das Organ akkreditiert ist.

### 2. Unabhängigkeit vom Installateur
Art. 36 Abs. 3 NIV verbietet dem Installateur ausdrücklich, seine eigene Anlage zu kontrollieren.

### 3. Geografische Abdeckung
Das Kontrollorgan muss in Ihrem Kanton tätig sein dürfen.

### 4. Terminfristen
Ein gutes Kontrollorgan bietet Termine innerhalb von 1-2 Wochen an.

### 5. Berichtsqualität
Der SiNa muss nach Schema I/II/III strukturiert sein.`,
    contentIT: `## Perché la scelta dell'organo di controllo è cruciale?

Solo un organo di controllo **accreditato dall'ESTI** può rilasciare un rapporto di sicurezza OIBT (RaSi) valido in Svizzera.

## I 5 criteri essenziali

### 1. Accreditamento ESTI in corso di validità
Verificate nel registro ufficiale ESTI (esti.admin.ch).

### 2. Indipendenza dall'installatore
L'Art. 36 cpv. 3 OIBT vieta formalmente all'installatore di controllare il proprio impianto.

### 3. Copertura geografica
L'organo deve essere abilitato a operare nel vostro cantone.

### 4. Tempi di appuntamento
Un buon organo di controllo propone appuntamenti entro 1-2 settimane.

### 5. Qualità del rapporto
Il RaSi deve essere strutturato secondo Schema I/II/III.`,
    faqFR: [
      { q: "Comment vérifier qu'un organe de contrôle OIBT est bien accrédité ESTI ?", a: "Rendez-vous sur esti.admin.ch et cherchez le nom de l'organe dans le registre officiel des organes de contrôle accrédités. L'accréditation doit être active." },
      { q: "L'électricien qui a fait mes travaux peut-il aussi faire le contrôle OIBT ?", a: "Non, c'est interdit par l'Art. 36 al. 3 OIBT. Le contrôle doit obligatoirement être réalisé par un organe totalement indépendant de l'installateur." },
    ],
    faqDE: [
      { q: "Wie prüfe ich, ob ein NIV-Kontrollorgan ESTI-akkreditiert ist?", a: "Besuchen Sie esti.admin.ch und suchen Sie den Namen des Organs im offiziellen Register der akkreditierten Kontrollorgane." },
    ],
    faqIT: [
      { q: "Come verificare che un organo di controllo OIBT sia accreditato ESTI?", a: "Visitate esti.admin.ch e cercate il nome dell'organo nel registro ufficiale." },
    ],
  },

  // ── Article 7 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-geneve-sig',
    titleFR: 'Contrôle OIBT à Genève — SIG, périodicités et prix 2026',
    titleDE: 'NIV-Elektrokontrolle in Genf — SIG, Perioden und Preise 2026',
    titleIT: 'Controllo OIBT a Ginevra — SIG, periodicità e prezzi 2026',
    descFR: 'Tout sur le contrôle OIBT à Genève : le rôle du SIG (Services Industriels de Genève), les prix (CHF 300-850), les périodicités et comment mandater un contrôle.',
    descDE: 'Alles über die NIV-Kontrolle in Genf: Rolle der SIG, Preise (CHF 300-850), Perioden und wie man eine Kontrolle beauftragt.',
    descIT: 'Tutto sul controllo OIBT a Ginevra: ruolo di SIG, prezzi (CHF 300-850), periodicità e come ordinare un controllo.',
    category: 'prix',
    publishDate: '2026-03-12',
    contentFR: `## Le contrôle OIBT à Genève : spécificités cantonales

Genève est l'un des cantons suisses avec le plus fort taux de locataires (80%+). Pour les propriétaires, le contrôle OIBT est obligatoire et le rapport de sécurité est transmis au SIG (Services Industriels de Genève), le GRD unique du canton.

## Le SIG : GRD unique du canton de Genève

Le SIG (Services Industriels de Genève) est le seul gestionnaire de réseau de distribution dans tout le canton de Genève. Il reçoit tous les rapports de sécurité OIBT genevois et peut exiger des contrôles en cas de doute sur la conformité.

**Contact SIG :** 0800 606 060 | sig-ge.ch

## Prix du contrôle OIBT à Genève (2026)

| Type de bien | Prix min | Prix max |
|---|---|---|
| Studio/T1 | CHF 300 | CHF 450 |
| Appartement T2-T3 | CHF 350 | CHF 550 |
| Appartement T4+ | CHF 450 | CHF 700 |
| Villa individuelle | CHF 500 | CHF 850 |
| Local commercial | CHF 400 | CHF 800 |

## Communes genevoises et périodicités

Toutes les communes du canton (Carouge, Lancy, Meyrin, Onex, Vernier, etc.) sont soumises aux mêmes règles OIBT avec le SIG comme GRD unique.`,
    contentDE: `## NIV-Elektrokontrolle in Genf

Der Kanton Genf hat eine der höchsten Mieterquoten der Schweiz (80%+). Für Eigentümer ist die NIV-Kontrolle obligatorisch, und der SiNa wird an SIG übermittelt.

## SIG: einziger VNB im Kanton Genf

SIG (Services Industriels de Genève) ist der einzige Netzbetreiber im ganzen Kanton Genf.

**Kontakt SIG:** 0800 606 060 | sig-ge.ch

## Preise NIV-Kontrolle in Genf (2026)

| Objekttyp | Min. | Max. |
|---|---|---|
| Studio/1-Zimmer | CHF 300 | CHF 450 |
| 2-3-Zimmer-Wohnung | CHF 350 | CHF 550 |
| 4+-Zimmer-Wohnung | CHF 450 | CHF 700 |
| Einfamilienhaus | CHF 500 | CHF 850 |`,
    contentIT: `## Controllo OIBT a Ginevra

Il cantone di Ginevra ha uno dei più alti tassi di affittuari della Svizzera (80%+). Per i proprietari, il controllo OIBT è obbligatorio e il RaSi viene trasmesso a SIG.

## SIG: unico GRD del cantone di Ginevra

SIG (Services Industriels de Genève) è l'unico gestore di rete in tutto il cantone di Ginevra.

**Contatto SIG:** 0800 606 060 | sig-ge.ch

## Prezzi controllo OIBT a Ginevra (2026)

| Tipo di bene | Min. | Max. |
|---|---|---|
| Monolocale | CHF 300 | CHF 450 |
| Appartamento 2-3 locali | CHF 350 | CHF 550 |
| Villa individuale | CHF 500 | CHF 850 |`,
    faqFR: [
      { q: "Qui est le GRD à Genève pour le contrôle OIBT ?", a: "Le GRD unique du canton de Genève est SIG (Services Industriels de Genève). C'est lui qui reçoit tous les rapports de sécurité OIBT genevois." },
      { q: "Combien coûte le contrôle OIBT à Genève ?", a: "À Genève, le contrôle OIBT coûte entre CHF 300 (studio) et CHF 850 (villa individuelle). Prix moyens pour 2026." },
    ],
    faqDE: [
      { q: "Wer ist der VNB in Genf?", a: "Der einzige VNB im Kanton Genf ist SIG (Services Industriels de Genève)." },
    ],
    faqIT: [
      { q: "Chi è il GRD a Ginevra?", a: "L'unico GRD del cantone di Ginevra è SIG (Services Industriels de Genève)." },
    ],
  },

  // ── Article 8 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-lausanne-romande-energie',
    titleFR: 'Contrôle OIBT à Lausanne — Romande Energie, prix et démarches 2026',
    titleDE: 'NIV-Elektrokontrolle in Lausanne — Romande Energie, Preise 2026',
    titleIT: 'Controllo OIBT a Losanna — Romande Energie, prezzi 2026',
    descFR: 'Guide complet du contrôle OIBT à Lausanne : Romande Energie comme GRD, tarifs (CHF 280-750), démarches pour appartements et villas de la région lausannoise.',
    descDE: 'Vollständiger Leitfaden zur NIV-Kontrolle in Lausanne: Romande Energie als VNB, Tarife (CHF 280-750), Vorgehen für Wohnungen und Villen.',
    descIT: 'Guida completa al controllo OIBT a Losanna: Romande Energie come GRD, tariffe (CHF 280-750), procedura per appartamenti e ville.',
    category: 'prix',
    publishDate: '2026-03-14',
    contentFR: `## Le contrôle OIBT à Lausanne

Lausanne, capitale olympique et deuxième ville romande avec 145'000 habitants, présente un parc immobilier dense et diversifié. Le GRD est Romande Energie, qui couvre toute la région lausannoise.

## Romande Energie : GRD du Grand Lausanne

Romande Energie dessert Lausanne et la quasi-totalité du canton de Vaud. Le rapport de sécurité OIBT est transmis directement à Romande Energie après chaque contrôle.

**Contact Romande Energie :** 0800 234 000 | romande-energie.ch

## Prix du contrôle OIBT à Lausanne (2026)

Les tarifs lausannois sont dans la fourchette vaudoise :

| Type | Prix approx. |
|---|---|
| Appartement 2-3 pièces | CHF 280-420 |
| Appartement 4+ pièces | CHF 380-580 |
| Villa individuelle | CHF 450-750 |
| Locaux commerciaux | CHF 400-700 |

## Communes de la région couverte

Renens, Prilly, Écublens, Pully, Lutry, Morges, Nyon, Yverdon-les-Bains — toutes couvertes par Romande Energie.`,
    contentDE: `## NIV-Kontrolle in Lausanne

Lausanne, olympische Hauptstadt und zweitgrösste Westschweizer Stadt mit 145'000 Einwohnern. Der VNB ist Romande Energie.

## Romande Energie: VNB von Lausanne

Romande Energie versorgt Lausanne und fast den gesamten Kanton Waadt.

**Kontakt Romande Energie:** 0800 234 000 | romande-energie.ch

## Preise NIV-Kontrolle Lausanne (2026)

| Objekttyp | Ungefähr |
|---|---|
| 2-3-Zimmer-Wohnung | CHF 280-420 |
| 4+-Zimmer-Wohnung | CHF 380-580 |
| Einfamilienhaus | CHF 450-750 |`,
    contentIT: `## Controllo OIBT a Losanna

Losanna, capitale olimpica con 145'000 abitanti. Il GRD è Romande Energie.

## Romande Energie: GRD di Losanna

Romande Energie serve Losanna e quasi tutto il canton Vaud.

**Contatto:** 0800 234 000 | romande-energie.ch

## Prezzi controllo OIBT a Losanna (2026)

| Tipo | Circa |
|---|---|
| Appartamento 2-3 locali | CHF 280-420 |
| Appartamento 4+ locali | CHF 380-580 |
| Villa | CHF 450-750 |`,
    faqFR: [
      { q: "Quel est le GRD à Lausanne ?", a: "Le GRD à Lausanne est Romande Energie. C'est lui qui reçoit le rapport de sécurité OIBT après chaque contrôle." },
      { q: "Combien coûte le contrôle OIBT à Lausanne ?", a: "Entre CHF 280 et CHF 750 selon le type et la surface du bien. Un appartement standard coûte entre CHF 280 et CHF 450." },
    ],
    faqDE: [
      { q: "VNB in Lausanne?", a: "Romande Energie ist der VNB in Lausanne." },
    ],
    faqIT: [
      { q: "GRD a Losanna?", a: "Romande Energie è il GRD a Losanna." },
    ],
  },

  // ── Article 9 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-zurich-ekz',
    titleFR: 'Contrôle OIBT à Zurich — EKZ, IWB et prix 2026',
    titleDE: 'NIV-Elektrokontrolle in Zürich — EKZ, IWB und Preise 2026',
    titleIT: 'Controllo OIBT a Zurigo — EKZ, IWB e prezzi 2026',
    descFR: 'Tout sur le contrôle OIBT à Zurich : EKZ pour le canton, EWZ pour la ville, prix (CHF 320-900), démarches et communes couvertes.',
    descDE: 'Alles über die NIV-Kontrolle in Zürich: EKZ für den Kanton, EWZ für die Stadt, Preise (CHF 320-900).',
    descIT: 'Tutto sul controllo OIBT a Zurigo: EKZ per il cantone, EWZ per la città, prezzi (CHF 320-900).',
    category: 'prix',
    publishDate: '2026-03-15',
    contentFR: `## Le contrôle OIBT à Zurich

Zurich, première ville de Suisse avec 440'000 habitants, présente deux GRD selon la zone :
- **EWZ (Elektrizitätswerk der Stadt Zürich)** : ville de Zurich intra-muros
- **EKZ (Elektrizitätswerke des Kantons Zürich)** : reste du canton

## EWZ vs EKZ : quelle différence ?

Pour les contrôles OIBT, la différence principale est l'adresse de transmission du rapport de sécurité. Le contrôle lui-même est identique dans les deux cas.

## Prix à Zurich (2026)

| Type | EWZ (ville) | EKZ (canton) |
|---|---|---|
| Appartement 2-3 pièces | CHF 350-550 | CHF 320-500 |
| Villa individuelle | CHF 550-900 | CHF 500-850 |
| Locaux commerciaux | CHF 450-800 | CHF 420-750 |

Les prix zurichois sont généralement 10-15% plus élevés que la moyenne suisse, en raison des coûts plus élevés de la région.`,
    contentDE: `## NIV-Kontrolle in Zürich

Zürich, grösste Stadt der Schweiz mit 440'000 Einwohnern, hat zwei VNB:
- **EWZ** (Stadt Zürich)
- **EKZ** (Kanton Zürich)

## Preise NIV-Kontrolle Zürich (2026)

| Objekttyp | EWZ (Stadt) | EKZ (Kanton) |
|---|---|---|
| 2-3-Zimmer-Wohnung | CHF 350-550 | CHF 320-500 |
| Einfamilienhaus | CHF 550-900 | CHF 500-850 |

Zürcher Preise liegen 10-15% über dem Schweizer Durchschnitt.`,
    contentIT: `## Controllo OIBT a Zurigo

Zurigo, la più grande città svizzera con 440'000 abitanti, ha due GRD:
- **EWZ** (città di Zurigo)
- **EKZ** (cantone di Zurigo)

## Prezzi controllo OIBT Zurigo (2026)

| Tipo | EWZ (città) | EKZ (cantone) |
|---|---|---|
| Appartamento 2-3 locali | CHF 350-550 | CHF 320-500 |
| Villa | CHF 550-900 | CHF 500-850 |`,
    faqFR: [
      { q: "Quel est le GRD à Zurich pour le contrôle OIBT ?", a: "Dans la ville de Zurich intra-muros : EWZ (Elektrizitätswerk der Stadt Zürich). Dans le reste du canton : EKZ (Elektrizitätswerke des Kantons Zürich)." },
      { q: "Combien coûte le contrôle OIBT à Zurich ?", a: "À Zurich, les prix sont légèrement plus élevés que la moyenne : CHF 350-900 selon le type de bien (ville intra-muros)." },
    ],
    faqDE: [
      { q: "VNB in Zürich?", a: "EWZ für die Stadt Zürich, EKZ für den Rest des Kantons." },
    ],
    faqIT: [
      { q: "GRD a Zurigo?", a: "EWZ per la città di Zurigo, EKZ per il resto del cantone." },
    ],
  },

  // ── Article 10 ──────────────────────────────────────────────────────────────
  {
    slug: 'defauts-frequents-controle-oibt',
    titleFR: 'Les 10 défauts les plus fréquents lors d\'un contrôle OIBT en Suisse',
    titleDE: 'Die 10 häufigsten Mängel bei einer NIV-Elektrokontrolle in der Schweiz',
    titleIT: 'I 10 difetti più frequenti durante un controllo OIBT in Svizzera',
    descFR: 'Découvrez les défauts électriques les plus souvent relevés lors des contrôles OIBT : tableau, prises de terre, câblage, protection différentielle et plus.',
    descDE: 'Erfahren Sie, welche elektrischen Mängel am häufigsten bei NIV-Kontrollen festgestellt werden: Sicherungskasten, Erdung, Kabel, FI-Schutz und mehr.',
    descIT: 'Scoprite i difetti elettrici più spesso rilevati durante i controlli OIBT: quadro, messa a terra, cablaggio, protezione differenziale e altro.',
    category: 'technique',
    publishDate: '2026-03-17',
    contentFR: `## Les défauts les plus fréquents en contrôle OIBT

Selon les statistiques ESTI, plus de 60% des installations contrôlées présentent au moins un défaut. Voici les 10 défauts les plus souvent relevés.

## 1. Absence de prise de terre (PE)
Très fréquent dans les installations avant 1970. Le câblage 2 fils ne permet pas la mise à la terre des appareils. **Schéma III** si PE absente sur les circuits cuisine/salle de bain.

## 2. Absence de protection différentielle (FI 30mA)
Les normes actuelles imposent un disjoncteur différentiel 30mA pour salle de bain, cuisine et extérieur. Les installations anciennes n'en disposaient pas.

## 3. Tableau électrique vétuste
Fusibles à broches (pre-1970), cosses corrodées, espace libre insuffisant pour la chaleur. **Schéma II** en général, **Schéma III** si court-circuit possible.

## 4. Câblage exposé sans gaine
Câbles sous tension sans protection mécanique dans grenier, cave ou garage. Risque d'endommagement mécanique.

## 5. Mauvaise section de câble
Câble sous-dimensionné pour la charge (ex : câble 1.5mm² sur circuit 16A au lieu de 2.5mm²). Risque de surchauffe.

## 6. Luminaires de salle de bain non IP44
Luminaires sans protection contre les éclaboussures dans la zone 2 de la salle de bain.

## 7. Boîtes de dérivation non fermées
Bornes de connexion accessibles sans outil dans les boîtes de jonction.

## 8. Rallonges permanentes
Utilisation de multiprises comme installation permanente au lieu d'un circuit dédié.

## 9. Manque de schéma électrique
L'installateur n'a pas fourni de plan de l'installation électrique.

## 10. Étiquetage incorrect du tableau
Disjoncteurs non étiquetés ou mal étiquetés, rendant les interventions d'urgence dangereuses.`,
    contentDE: `## Die häufigsten NIV-Mängel

Laut ESTI-Statistiken weisen über 60% der kontrollierten Anlagen mindestens einen Mangel auf.

## 1. Fehlender Schutzleiter (PE)
Sehr häufig bei Anlagen vor 1970 (2-Leiter-System ohne PE).

## 2. Fehlender FI-Schutzschalter (30mA)
Aktuelle Normen verlangen 30mA FI-Schutz für Bad, Küche und Aussenbereich.

## 3. Veralteter Sicherungskasten
Stöpsel-Sicherungen, korrodierte Klemmen.

## 4. Freiliegendes Kabel ohne Schutz
Spannungsführende Kabel ohne mechanischen Schutz in Keller oder Estrich.

## 5. Unterdimensionierte Kabelquerschnitte
Kabel zu schwach für die Strombelastung.

## 6. Leuchten im Bad ohne IP44
Leuchten ohne Spritzwasserschutz in Zone 2.

## 7. Offene Abzweigdosen
Zugängliche Klemmen ohne Werkzeug.

## 8. Dauerhafte Verwendung von Verlängerungen
Steckdosenleisten als permanente Installation.

## 9. Fehlende Schemazeichnung
Kein Installationsplan vom Elektriker geliefert.

## 10. Falsche Etikettierung des Verteilers
Nicht beschriftete Sicherungen.`,
    contentIT: `## I difetti più frequenti nel controllo OIBT

Secondo le statistiche ESTI, oltre il 60% degli impianti controllati presenta almeno un difetto.

## 1. Mancanza di conduttore di protezione (PE)
Molto frequente negli impianti precedenti al 1970 (sistema a 2 fili senza PE).

## 2. Mancanza di interruttore differenziale (30mA)
Le norme attuali impongono un differenziale 30mA per bagno, cucina ed esterno.

## 3. Quadro elettrico obsoleto
Fusibili a tappo, morsetti corrosi.

## 4. Cavi esposti senza guaina
Cavi sotto tensione senza protezione meccanica in cantina o soffitta.

## 5. Sezione cavo sottodimensionata
Cavo troppo debole per il carico elettrico.

## 6. Luminari bagno senza IP44
Luminari senza protezione contro gli spruzzi in zona 2.

## 7. Cassette di derivazione aperte
Morsetti accessibili senza attrezzi.

## 8. Uso permanente di prolunghe
Multiprese come installazione permanente.

## 9. Schema elettrico mancante
Nessuna planimetria dell'impianto.

## 10. Etichettatura errata del quadro
Interruttori non etichettati.`,
    faqFR: [
      { q: "Quel est le défaut OIBT le plus dangereux (schéma III) ?", a: "L'absence totale de protection contre les contacts directs (tableau ouvert, câbles nus accessibles) est le défaut schéma III le plus courant. Il nécessite une mise hors service immédiate." },
      { q: "Tous les défauts trouvés lors du contrôle OIBT doivent-ils être corrigés immédiatement ?", a: "Non. Seuls les défauts schéma III (danger immédiat) nécessitent une correction immédiate. Les défauts schéma II ont un délai accordé (3-6 mois), et les défauts schéma I sont des recommandations." },
    ],
    faqDE: [
      { q: "Was ist der gefährlichste NIV-Mangel (Schema III)?", a: "Das Fehlen des Berührungsschutzes (offener Verteiler, blanke Kabel) ist der häufigste Schema-III-Mangel und erfordert sofortige Abschaltung." },
    ],
    faqIT: [
      { q: "Qual è il difetto OIBT più pericoloso (Schema III)?", a: "L'assenza di protezione dai contatti diretti (quadro aperto, cavi scoperti) è il difetto Schema III più comune e richiede lo spegnimento immediato." },
    ],
  },
  // ─── Article 11 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-installation-photovoltaique',
    titleFR: 'Contrôle OIBT et installation photovoltaïque : ce que vous devez savoir',
    titleDE: 'NIV-Kontrolle und Photovoltaikanlage: Was Sie wissen müssen',
    titleIT: 'Controllo OIBT e impianti fotovoltaici: tutto quello che dovete sapere',
    descFR: 'Toute installation photovoltaïque nécessite un contrôle OIBT spécifique. Découvrez quels éléments sont vérifiés, les délais et les risques en cas de non-conformité.',
    descDE: 'Jede Photovoltaikanlage erfordert eine spezifische NIV-Kontrolle. Erfahren Sie, welche Elemente geprüft werden und welche Risiken bei Nicht-Konformität bestehen.',
    descIT: 'Ogni impianto fotovoltaico richiede un controllo OIBT specifico. Scoprite quali elementi vengono verificati e i rischi in caso di non conformità.',
    category: 'technique',
    publishDate: '2026-02-20',
    contentFR: `## Pourquoi les panneaux solaires nécessitent un contrôle OIBT spécifique

L'essor du photovoltaïque en Suisse crée de nouveaux défis pour la sécurité électrique. En 2023, plus de 120'000 nouvelles installations solaires ont été raccordées au réseau suisse. Chacune d'elles doit faire l'objet d'un contrôle OIBT.

## Ce qui est contrôlé lors d'une installation PV

### Côté DC (courant continu — panneaux)
- Câblage DC et coffrets de jonction
- Fusibles et protections DC
- Mise à la terre des structures
- Protection contre les arcs électriques (arc-fault)

### Côté AC (courant alternatif — réseau)
- Onduleur et son raccordement
- Disjoncteur d'injection réseau
- Compteur bidirectionnel
- Protection contre les surintensités et défauts d'isolement

### Raccordement au tableau général
- Disjoncteur principal de branchement PV
- Conformité du tableau électrique existant
- Marquage et schémas électriques mis à jour

## Périodicité du contrôle OIBT pour une installation PV

| Type d'installation | Périodicité |
|---------------------|-------------|
| PV résidentiel (< 30 kVA) | Contrôle à la mise en service + 20 ans |
| PV commercial (30-100 kVA) | Contrôle à la mise en service + 10 ans |
| Grande installation (> 100 kVA) | Contrôle à la mise en service + 5 ans |

## Le contrôle de mise en service est obligatoire

Contrairement aux installations électriques existantes, **toute nouvelle installation PV nécessite un contrôle de mise en service avant d'être raccordée au réseau**. Ce contrôle est exigé par le GRD (gestionnaire de réseau) avant d'activer le compteur bidirectionnel.

## Risques en cas d'installation PV non contrôlée

1. **Refus de rachat du surplus** : sans RdS conforme, le GRD peut refuser la convention de rachat
2. **Invalidation de l'assurance** : en cas d'incendie d'origine électrique, l'assureur peut refuser d'indemniser
3. **Amendes administratives** : l'ESTI peut imposer des sanctions
4. **Danger réel** : un onduleur défaillant peut créer un arc électrique et provoquer un incendie

## Coût du contrôle OIBT pour une installation PV

Le contrôle d'une installation PV résidentielle standard (6-10 kWc) coûte entre **380 et 680 CHF**. Ce tarif inclut l'inspection, le rapport de sécurité et la transmission au GRD.`,
    contentDE: `## Warum Solaranlagen eine spezifische NIV-Kontrolle erfordern

Der PV-Boom in der Schweiz schafft neue Herausforderungen für die Elektrosicherheit. Jede neue Photovoltaikanlage muss nach NIV Art. 36 kontrolliert werden.

## Was bei einer PV-Anlage geprüft wird

### DC-Seite (Gleichstrom — Panels)
- DC-Verkabelung und Anschlusskästen
- DC-Sicherungen und Schutzeinrichtungen
- Erdung der Tragstrukturen
- Lichtbogen-Schutz (Arc-Fault)

### AC-Seite (Wechselstrom — Netz)
- Wechselrichter und Anschluss
- Netzschutzschalter
- Zweifach-Zähler
- Überstrom- und Isolierfehlerschutz

## Inbetriebnahmekontrolle ist Pflicht

Jede neue PV-Anlage braucht eine Inbetriebnahmekontrolle bevor der VNB den Zweifach-Zähler aktiviert. Ohne SiNa kein Einspeisevertrag.

## Kosten der NIV-Kontrolle für PV-Anlage

CHF 380–680 für eine Standard-Hausanlage (6–10 kWp).`,
    contentIT: `## Perché gli impianti fotovoltaici richiedono un controllo OIBT specifico

Il boom del fotovoltaico in Svizzera crea nuove sfide per la sicurezza elettrica. Ogni nuovo impianto PV deve essere controllato secondo l'Art. 36 OIBT.

## Cosa viene verificato

### Lato DC
- Cablaggio DC e cassette di giunzione
- Fusibili e protezioni DC
- Messa a terra delle strutture

### Lato AC
- Inverter e collegamento
- Interruttore di protezione rete
- Contatore bidirezionale

## Il controllo di messa in servizio è obbligatorio

Ogni nuovo impianto PV richiede un RaSi prima che il GRD attivi il contatore bidirezionale.`,
    faqFR: [
      { q: "Mon installation PV existante doit-elle être recontrolée ?", a: "Oui. Les installations PV résidentielles doivent être recontrolées tous les 20 ans. Si des modifications importantes ont été apportées (ajout de panneaux, remplacement onduleur), un nouveau contrôle de mise en service est nécessaire." },
      { q: "Le contrôle OIBT est-il inclus dans l'installation PV ?", a: "Non. L'installateur solaire réalise les travaux, mais le contrôle OIBT doit être effectué par un organe de contrôle accrédité indépendant. Certaines entreprises proposent les deux services, mais ce n'est pas automatique." },
    ],
    faqDE: [
      { q: "Muss meine bestehende PV-Anlage neu kontrolliert werden?", a: "Ja. Wohngebäude-PV-Anlagen müssen alle 20 Jahre kontrolliert werden. Bei wesentlichen Änderungen (Paneelerweiterung, Wechselrichtertausch) ist eine neue Inbetriebnahmekontrolle nötig." },
    ],
    faqIT: [
      { q: "Il mio impianto PV esistente deve essere ricontrollato?", a: "Sì. Gli impianti PV residenziali devono essere ricontrollati ogni 20 anni." },
    ],
  },

  // ─── Article 12 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-borne-recharge-vehicule',
    titleFR: 'Contrôle OIBT pour borne de recharge : obligations et procédure complète',
    titleDE: 'NIV-Kontrolle für Ladestationen: Pflichten und vollständiges Verfahren',
    titleIT: 'Controllo OIBT per stazioni di ricarica: obblighi e procedura completa',
    descFR: 'L\'installation d\'une borne de recharge EV nécessite un contrôle OIBT obligatoire. Découvrez la procédure, les exigences techniques et les coûts.',
    descDE: 'Die Installation einer EV-Ladestation erfordert eine obligatorische NIV-Kontrolle. Erfahren Sie das Verfahren, die technischen Anforderungen und die Kosten.',
    descIT: 'L\'installazione di una stazione di ricarica EV richiede un controllo OIBT obbligatorio. Scoprite la procedura, i requisiti tecnici e i costi.',
    category: 'technique',
    publishDate: '2026-02-10',
    contentFR: `## La borne de recharge : une installation électrique à part entière

Avec plus de 200'000 véhicules électriques en circulation en Suisse, l'installation de bornes de recharge privées explose. Qu'il s'agisse d'un wallbox de 11 kW dans un garage ou d'une borne de 22 kW dans un parking d'immeuble, chaque installation est soumise au contrôle OIBT.

## Pourquoi les bornes de recharge sont-elles particulièrement risquées ?

### Puissance élevée
Une borne de 11 kW représente le même appel de puissance qu'une dizaine de cuisinières électriques. Le circuit dédié et les protections doivent être dimensionnés en conséquence.

### Risque d'incendie
- 60% des incendies de véhicules électriques en parking surviennent lors de la recharge
- Un câble sous-dimensionné ou une protection inadaptée peut provoquer un incendie
- L'installation doit être protégée par un disjoncteur différentiel de type B

### Impact sur l'assurance
Sans contrôle OIBT conforme, l'assureur peut refuser l'indemnisation en cas d'incendie lié à la borne.

## Ce qui est contrôlé

1. **Disjoncteur dédié** : calibre adapté à la puissance de la borne
2. **Câble de liaison** : section minimale 2.5 mm² pour 11 kW, 6 mm² pour 22 kW
3. **Protection différentielle type B** : obligatoire pour les bornes DC et CA
4. **Mise à la terre et équipotentialité**
5. **Marquage et schéma électrique mis à jour**
6. **Protection incendie** (pour bornes en parkings collectifs)

## Cas particulier : borne en PPE ou parking collectif

En copropriété, l'installation d'une borne nécessite en plus :
- L'accord de l'assemblée des copropriétaires (ou du gérant)
- Un sous-compteur individuel
- Une étude de charge globale du bâtiment
- Un contrôle OIBT des parties communes impactées

## Coût du contrôle OIBT pour borne de recharge

| Type | Coût estimé |
|------|-------------|
| Borne résidentielle (11 kW) | CHF 280 – 450 |
| Borne collective (22 kW) | CHF 380 – 650 |
| Contrôle complet installation + borne | CHF 550 – 900 |`,
    contentDE: `## Ladestationen: vollwertige Elektroinstallationen

Mit über 200'000 Elektrofahrzeugen in der Schweiz boomt die Installation privater Ladestationen. Jede Installation ist nach NIV Art. 36 kontrollpflichtig.

## Besondere Risiken von Ladestationen

### Hohe Leistung
Eine 11-kW-Station entspricht dem Verbrauch von zehn Elektroherd. Die Schutzeinrichtungen müssen entsprechend dimensioniert sein.

### Brandrisiko
- 60% der Brände in EV-Parkings entstehen beim Laden
- Ein unterdimenioniertes Kabel kann einen Brand verursachen
- Typ-B-Differentialschutz ist Pflicht

## Was geprüft wird

1. Dedizierter Unterbrecher (korrekte Dimensionierung)
2. Kabelquerschnitt (min. 2.5 mm² für 11 kW, 6 mm² für 22 kW)
3. Typ-B-Differentialschutz
4. Erdung und Potentialausgleich
5. Aktuelle Elektropläne`,
    contentIT: `## Le stazioni di ricarica: impianti elettrici a pieno titolo

Con oltre 200'000 veicoli elettrici in Svizzera, l'installazione di stazioni di ricarica private è in forte crescita. Ogni installazione è soggetta al controllo OIBT Art. 36.

## Rischi particolari delle stazioni di ricarica

### Alta potenza
Una stazione da 11 kW equivale a dieci piani di cottura. Le protezioni devono essere dimensionate di conseguenza.

### Rischio incendio
- Il 60% degli incendi in parcheggi EV avviene durante la ricarica
- Protezione differenziale di tipo B obbligatoria

## Costo del controllo OIBT per stazione di ricarica

| Tipo | Costo stimato |
|------|---------------|
| Stazione residenziale (11 kW) | CHF 280–450 |
| Stazione collettiva (22 kW) | CHF 380–650 |`,
    faqFR: [
      { q: "Faut-il un contrôle OIBT même pour une simple prise renforcée de 3.7 kW ?", a: "Techniquement, une prise renforcée (NEMA 14-50 ou prise T23 16A) installée spécifiquement pour la recharge est considérée comme une installation électrique et nécessite un contrôle. En pratique, si le circuit existant est déjà conforme, l'organe de contrôle peut valider l'ensemble lors du prochain contrôle périodique." },
      { q: "Qui peut installer une borne de recharge en Suisse ?", a: "Seul un électricien agréé (certificat de capacité ou de compétence selon NIV) peut installer une borne de recharge. L'installation doit ensuite être contrôlée par un organe de contrôle indépendant." },
    ],
    faqDE: [
      { q: "Brauche ich eine NIV-Kontrolle für eine einfache verstärkte Steckdose?", a: "Ja. Jede spezifisch für das Laden installierte Steckdose gilt als Elektroinstallation und muss kontrolliert werden." },
    ],
    faqIT: [
      { q: "Serve un controllo OIBT anche per una semplice presa rinforzata?", a: "Sì. Qualsiasi presa installata specificamente per la ricarica è considerata un impianto elettrico e deve essere controllata." },
    ],
  },

  // ─── Article 13 ──────────────────────────────────────────────────────────────
  {
    slug: 'guide-proprietaire-controle-oibt',
    titleFR: 'Guide complet du propriétaire : tout savoir sur le contrôle OIBT de votre maison',
    titleDE: 'Vollständiger Eigentümerratgeber: Alles über die NIV-Kontrolle Ihres Hauses',
    titleIT: 'Guida completa per il proprietario: tutto sul controllo OIBT della vostra casa',
    descFR: 'Propriétaire d\'une maison ou d\'un appartement en Suisse ? Ce guide complet répond à toutes vos questions sur l\'obligation de contrôle OIBT, les délais et la procédure.',
    descDE: 'Hausbesitzer in der Schweiz? Dieser vollständige Ratgeber beantwortet alle Ihre Fragen zur NIV-Kontrollpflicht, Fristen und Verfahren.',
    descIT: 'Proprietario di casa o appartamento in Svizzera? Questa guida completa risponde a tutte le vostre domande sul controllo OIBT obbligatorio.',
    category: 'guide',
    publishDate: '2026-01-25',
    contentFR: `## Vous venez de recevoir une convocation de contrôle OIBT ?

Pas de panique. Ce guide vous explique tout ce que vous devez savoir en tant que propriétaire.

## L'essentiel à retenir

- Le contrôle OIBT est **obligatoire par la loi** (Art. 36 OIBT)
- Il est à la charge du **propriétaire** (pas du locataire)
- Il doit être effectué par un **organe de contrôle accrédité** indépendant
- La périodicité est de **20 ans** pour les logements privés
- Le rapport de sécurité (RdS) est transmis au **GRD** (gestionnaire de réseau)

## Comment se passe le contrôle ?

### 1. La convocation
Le GRD vous envoie une convocation environ 1 an avant l'échéance de votre installation. Vous avez alors **12 mois** pour mandater un organe de contrôle et lui remettre le rapport.

### 2. L'inspection
L'inspecteur accrédité visite votre installation pendant **1 à 3 heures** selon la taille. Il vérifie :
- Tableau électrique (disjoncteurs, différentiels, marquage)
- Câblage et prises de courant
- Éclairage et circuits spéciaux
- Mise à la terre et équipotentialité
- Cuisine, salle de bain (zones humides)
- Cave et extérieur

### 3. Le rapport de sécurité
Après l'inspection, vous recevez un rapport détaillant les éventuels défauts classés en :
- **Schéma I** : recommandations (aucune obligation)
- **Schéma II** : travaux à effectuer (délai 3-6 mois)
- **Schéma III** : danger immédiat (mise hors service possible)

### 4. Transmission au GRD
L'organe de contrôle transmet le rapport directement au GRD. Vous n'avez rien à faire.

## Combien coûte un contrôle OIBT pour une maison individuelle ?

| Surface | Coût estimé | Durée inspection |
|---------|-------------|-----------------|
| Appartement 2-3 pièces | CHF 280 – 420 | 1h |
| Appartement 4-5 pièces | CHF 350 – 520 | 1.5h |
| Maison individuelle | CHF 450 – 750 | 2-3h |
| Maison avec atelier/dépendance | CHF 600 – 950 | 3-4h |

## Que se passe-t-il si je ne fais pas contrôler ?

1. **Relance du GRD** : après 12 mois sans rapport, le GRD relance
2. **Désignation d'office** : le GRD peut désigner un organe de contrôle
3. **Frais à votre charge** : vous payez l'organe désigné d'office + frais administratifs
4. **Coupure possible** : en dernier recours pour les défauts graves
5. **Invalidation assurance** : en cas de sinistre, l'assureur peut refuser d'indemniser

## Conseils pratiques avant le contrôle

✓ Regroupez tous les documents électriques (schéma tableau, anciens rapports)
✓ Assurez l'accès à tous les locaux (cave, garage, combles)
✓ Signalez les modifications récentes (travaux, PV, borne recharge)
✓ Préparez une liste des questions à poser à l'inspecteur`,
    contentDE: `## Sie haben eine NIV-Kontrollvorladung erhalten?

Keine Panik. Dieser Ratgeber erklärt alles, was Hausbesitzer wissen müssen.

## Das Wichtigste in Kürze

- NIV-Kontrolle ist **gesetzlich vorgeschrieben** (NIV Art. 36)
- Kostenpflicht liegt beim **Eigentümer**
- Muss von einem **akkreditierten Kontrollorgan** durchgeführt werden
- **20 Jahre** Periodizität für Wohngebäude
- Sicherheitsnachweis (SiNa) geht an den VNB

## Ablauf der Kontrolle

1. **Vorladung**: VNB sendet ca. 1 Jahr vor Ablauf eine Vorladung
2. **Inspektion**: 1–3 Stunden je nach Grösse
3. **SiNa**: Mängelbericht mit Schema I/II/III
4. **Weiterleitung**: Kontrollorgan sendet SiNa direkt an VNB

## Kosten NIV-Kontrolle Einfamilienhaus

| Typ | Kosten |
|-----|--------|
| 2-3 Zi-Wohnung | CHF 280–420 |
| Einfamilienhaus | CHF 450–750 |`,
    contentIT: `## Avete ricevuto una convocazione per il controllo OIBT?

Nessun panico. Questa guida spiega tutto quello che i proprietari devono sapere.

## L'essenziale

- Il controllo OIBT è **obbligatorio per legge** (Art. 36 OIBT)
- Il costo è a carico del **proprietario**
- Deve essere effettuato da un **organo di controllo accreditato**
- **20 anni** di periodicità per le abitazioni
- Il RaSi viene trasmesso al GRD

## Come si svolge il controllo

1. **Convocazione**: il GRD invia una convocazione ~1 anno prima della scadenza
2. **Ispezione**: 1–3 ore secondo la dimensione
3. **RaSi**: rapporto con difetti Schema I/II/III
4. **Trasmissione**: l'organo di controllo invia il RaSi direttamente al GRD`,
    faqFR: [
      { q: "Est-ce le locataire ou le propriétaire qui doit payer le contrôle OIBT ?", a: "Le contrôle OIBT est toujours à la charge du propriétaire. Le locataire n'est pas responsable du contrôle, même s'il occupe le logement. Le propriétaire peut intégrer ce coût dans la gestion locative, mais ne peut pas le facturer directement au locataire en sus du loyer." },
      { q: "Mon installation a 15 ans, est-elle déjà en retard ?", a: "Pas nécessairement. La périodicité est de 20 ans pour une installation résidentielle standard. Si votre installation date de 2010, elle doit être contrôlée avant 2030. Vérifiez votre dernier rapport de sécurité pour connaître l'échéance exacte." },
    ],
    faqDE: [
      { q: "Wer zahlt die NIV-Kontrolle, Mieter oder Eigentümer?", a: "Immer der Eigentümer. Der Mieter ist nicht für die Kontrolle verantwortlich." },
    ],
    faqIT: [
      { q: "Chi paga il controllo OIBT, l'inquilino o il proprietario?", a: "Sempre il proprietario. L'inquilino non è responsabile del controllo." },
    ],
  },

  // ─── Article 14 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-batiment-historique',
    titleFR: 'Contrôle OIBT dans un bâtiment historique : défis et solutions',
    titleDE: 'NIV-Kontrolle in historischen Gebäuden: Herausforderungen und Lösungen',
    titleIT: 'Controllo OIBT negli edifici storici: sfide e soluzioni',
    descFR: 'Les bâtiments historiques ou classés posent des défis spécifiques pour le contrôle OIBT. Découvrez comment concilier patrimoine et conformité électrique.',
    descDE: 'Historische Gebäude stellen besondere Herausforderungen für die NIV-Kontrolle dar. Erfahren Sie, wie Sie Denkmalschutz und elektrische Konformität in Einklang bringen.',
    descIT: 'Gli edifici storici o vincolati pongono sfide specifiche per il controllo OIBT. Scoprite come conciliare il patrimonio e la conformità elettrica.',
    category: 'technique',
    publishDate: '2026-01-15',
    contentFR: `## Les bâtiments historiques et l'OIBT : une cohabitation délicate

La Suisse compte des dizaines de milliers de bâtiments protégés ou d'intérêt patrimonial. Ces édifices — maisons bourgeoises du 18e siècle, fermes traditionnelles, immeubles Belle Époque — posent des défis uniques lors du contrôle OIBT.

## Les défis spécifiques

### 1. Installations électriques vétustes
Beaucoup de bâtiments historiques ont conservé tout ou partie de leur installation d'origine :
- **Câblage en plomb** (1920-1960) : conducteurs isolés au plomb, dangereux et non conformes
- **Câblage en aluminium** (1960-1980) : risque de connexions défaillantes
- **Tableaux à fusibles à cartouches** : souvent non conformes aux normes actuelles
- **Absence de protection différentielle**

### 2. Contraintes architecturales
- Impossibilité de faire passer des conduits dans des murs en pierre ou en bois précieux
- Charpentes protégées ne pouvant pas être percées
- Décors intérieurs classés qui ne peuvent pas être dégradés

### 3. Les zones spéciales
- Caves et sous-sols humides souvent non conformes
- Combles avec câblage aérien apparent
- Granges et dépendances avec installations rudimentaires

## Comment l'organe de contrôle traite ces cas

L'inspecteur accrédité dispose d'une marge d'interprétation pour les bâtiments historiques. Il peut :

1. **Tolérer certains non-conformités mineures** si le risque est faible et la mise en conformité entraînerait des dégradations patrimoniales disproportionnées
2. **Documenter les dérogations** avec justification
3. **Exiger une mise en conformité progressive** sur plusieurs années
4. **Classer certains défauts en schéma I** (recommandation) plutôt qu'en schéma II (obligation)

## Solutions techniques adaptées aux bâtiments historiques

| Problème | Solution adaptée |
|----------|-----------------|
| Câblage vétuste impossible à remplacer | Ajout d'un disjoncteur différentiel en amont |
| Goulotte impossible | Câblage apparent avec conduits rétro en métal |
| Tableau ancien | Remplacement par un tableau moderne intégrable |
| Prises insuffisantes | Extension avec câblage apparent assorti |

## Le rôle de l'architecte du patrimoine

Pour les bâtiments classés ou inscrits, il est recommandé de consulter l'architecte du patrimoine cantonal **avant** le contrôle OIBT. Certains cantons ont des accords spécifiques entre le service des monuments historiques et l'ESTI.`,
    contentDE: `## Historische Gebäude und NIV: ein heikles Zusammenspiel

Die Schweiz hat Zehntausende geschützte oder denkmalgeschützte Gebäude. Diese stellen bei der NIV-Kontrolle besondere Herausforderungen dar.

## Spezifische Herausforderungen

1. **Veraltete Installationen**: Bleiverkabelung (1920-1960), Aluminiumkabel (1960-1980), alte Sicherungskästen
2. **Architektonische Einschränkungen**: Keine Leitungsverlegung in geschütztem Mauerwerk möglich
3. **Fehlende Differentialschutzgeräte**

## Lösungen für historische Gebäude

| Problem | Lösung |
|---------|--------|
| Veraltete Verkabelung | Differentialschutz vorschalten |
| Sichtbare Leitungen unvermeidbar | Retrometallrohre |
| Alter Verteiler | Moderner Ersatzverteiler |`,
    contentIT: `## Edifici storici e OIBT: una convivenza delicata

La Svizzera ha decine di migliaia di edifici protetti o di interesse patrimoniale. Questi edifici presentano sfide uniche durante il controllo OIBT.

## Sfide specifiche

1. **Impianti vetusti**: cablaggio in piombo (1920-1960), cablaggio in alluminio (1960-1980)
2. **Vincoli architettonici**: impossibilità di passare conduit in murature protette
3. **Assenza di protezioni differenziali**

## Soluzioni adattate agli edifici storici

| Problema | Soluzione |
|----------|-----------|
| Cablaggio obsoleto | Aggiungere interruttore differenziale a monte |
| Canale impossibile | Conduit a vista in metallo retro |`,
    faqFR: [
      { q: "Mon bâtiment classé est-il dispensé du contrôle OIBT ?", a: "Non. Le classement au patrimoine ne dispense pas du contrôle OIBT. En revanche, l'organe de contrôle peut adapter ses exigences aux contraintes patrimoniales, notamment pour les mises en conformité. Le dialogue avec la commission cantonale des monuments historiques est recommandé." },
      { q: "Mon installation électrique date des années 1950, est-elle forcément non conforme ?", a: "Une installation de 1950 n'est pas automatiquement non conforme, mais elle présente souvent des défauts par rapport aux normes actuelles. L'absence de protection différentielle et le câblage en plomb sont les points les plus fréquemment relevés. Un contrôle OIBT permettra d'identifier précisément les défauts." },
    ],
    faqDE: [
      { q: "Ist mein Denkmalschutzgebäude von der NIV-Kontrolle befreit?", a: "Nein. Der Denkmalschutz befreit nicht von der NIV-Kontrolle, aber das Kontrollorgan kann seine Anforderungen an die Denkmalbeschränkungen anpassen." },
    ],
    faqIT: [
      { q: "Il mio edificio vincolato è esente dal controllo OIBT?", a: "No. Il vincolo patrimoniale non esime dal controllo OIBT, ma l'organo di controllo può adattare le proprie esigenze ai vincoli del patrimonio." },
    ],
  },

  // ─── Article 15 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-immeuble-locatif-guide',
    titleFR: 'Contrôle OIBT en immeuble locatif : qui paie, qui est responsable ?',
    titleDE: 'NIV-Kontrolle im Mietgebäude: Wer zahlt, wer ist verantwortlich?',
    titleIT: 'Controllo OIBT in un edificio in affitto: chi paga, chi è responsabile?',
    descFR: 'La responsabilité du contrôle OIBT dans un immeuble locatif est souvent source de confusion. Cet article clarifie les obligations du propriétaire, du gérant et du locataire.',
    descDE: 'Die Verantwortung für die NIV-Kontrolle in Mietgebäuden ist oft unklar. Dieser Artikel klärt die Pflichten von Eigentümer, Verwalter und Mieter.',
    descIT: 'La responsabilità del controllo OIBT in un edificio in affitto è spesso fonte di confusione. Questo articolo chiarisce gli obblighi del proprietario, del gestore e dell\'inquilino.',
    category: 'juridique',
    publishDate: '2026-01-05',
    contentFR: `## La règle de base : le propriétaire est responsable

En Suisse, le contrôle OIBT est **toujours sous la responsabilité du propriétaire** de l'installation électrique. Dans un immeuble locatif, cela signifie que c'est le propriétaire de l'immeuble — et non le locataire — qui doit mandater et payer le contrôle OIBT.

## Tableau des responsabilités

| Zone | Propriétaire responsable | Locataire concerné |
|------|-------------------------|-------------------|
| Appartement | Propriétaire immeuble | Doit donner l'accès |
| Caves individuelles | Propriétaire immeuble | Doit donner l'accès |
| Parties communes | Propriétaire immeuble | Non |
| Locaux commerciaux | Propriétaire immeuble | Peut être délégataire |
| Ascenseur | Propriétaire immeuble | Non |

## Rôle du gérant d'immeuble

Dans la pratique, c'est souvent la **régie immobilière** qui gère les convocations OIBT pour le compte du propriétaire. La régie :
- Reçoit la convocation du GRD
- Mandate l'organe de contrôle
- Coordonne les rendez-vous avec les locataires
- Gère les travaux de mise en conformité

## Obligations du locataire

Le locataire n'est pas responsable du contrôle OIBT, mais il a des obligations :
1. **Donner l'accès** à son logement pour l'inspection (obligation légale)
2. **Informer** le propriétaire de tout défaut électrique connu
3. **Ne pas modifier** l'installation électrique sans autorisation

## Peut-on refacturer le contrôle OIBT au locataire ?

**Non, directement non.** Le contrôle OIBT est un entretien obligatoire à la charge du propriétaire au titre des charges de propriété. Il ne peut pas être refacturé directement au locataire.

En revanche, le coût peut être intégré dans les charges de copropriété ou dans le loyer lors du prochain renouvellement, dans le respect de l'indice des loyers.

## Cas pratique : refus d'accès du locataire

Si un locataire refuse de donner accès pour le contrôle OIBT, le propriétaire peut :
1. **Notifier formellement** par courrier recommandé
2. **Demander une injonction** par voie judiciaire si nécessaire
3. **Informer le GRD** de la situation

Le refus d'accès injustifié peut entraîner des conséquences pour le locataire (résiliation du bail dans les cas extrêmes).`,
    contentDE: `## Die Grundregel: Der Eigentümer ist verantwortlich

In der Schweiz liegt die Verantwortung für die NIV-Kontrolle immer beim **Eigentümer** der Elektroinstallation. In Mietgebäuden bedeutet das der Gebäudeeigentümer.

## Verantwortungstabelle

| Bereich | Verantwortlicher | Mieter betroffen |
|---------|-----------------|-----------------|
| Wohnung | Gebäudeeigentümer | Muss Zutritt gewähren |
| Gemeinschaftsräume | Gebäudeeigentümer | Nein |
| Geschäftsräume | Gebäudeeigentümer | Kann delegiert werden |

## Pflichten des Mieters

Der Mieter muss den **Zutritt zur Inspektion** gewähren und den Eigentümer über bekannte Mängel informieren.`,
    contentIT: `## La regola di base: il proprietario è responsabile

In Svizzera, il controllo OIBT è sempre responsabilità del **proprietario** dell'impianto. In un edificio in affitto, è il proprietario dell'immobile che deve mandatare e pagare il controllo.

## Tabella delle responsabilità

| Zona | Proprietario responsabile | Inquilino coinvolto |
|------|--------------------------|---------------------|
| Appartamento | Proprietario immobile | Deve dare accesso |
| Parti comuni | Proprietario immobile | No |
| Locali commerciali | Proprietario immobile | Può essere delegatario |

## Obblighi dell'inquilino

L'inquilino deve **concedere l'accesso** all'ispezione e informare il proprietario di eventuali difetti noti.`,
    faqFR: [
      { q: "Qui doit payer le contrôle OIBT dans un immeuble locatif ?", a: "Le propriétaire de l'immeuble, toujours. Le contrôle OIBT est une charge de propriété au même titre que la maintenance de la chaudière ou des ascenseurs. Elle ne peut pas être transférée au locataire directement." },
      { q: "Mon locataire refuse l'accès pour le contrôle OIBT, que faire ?", a: "Notifiez formellement par courrier recommandé en expliquant l'obligation légale. Proposez plusieurs dates. Si le refus persiste, vous pouvez saisir le tribunal des baux. Informez également votre GRD de la situation pour éviter des sanctions." },
    ],
    faqDE: [
      { q: "Wer zahlt die NIV-Kontrolle im Mietgebäude?", a: "Immer der Eigentümer. Die Kontrolle ist eine Eigentümerpflicht wie die Wartung der Heizung." },
    ],
    faqIT: [
      { q: "Chi paga il controllo OIBT in un edificio in affitto?", a: "Sempre il proprietario. Il controllo è un obbligo del proprietario come la manutenzione della caldaia." },
    ],
  },

  // ─── Article 16 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-construction-neuve',
    titleFR: 'Contrôle OIBT pour construction neuve : les étapes clés',
    titleDE: 'NIV-Kontrolle für Neubauten: Die wichtigsten Schritte',
    titleIT: 'Controllo OIBT per nuova costruzione: le fasi principali',
    descFR: 'Lors d\'une construction neuve en Suisse, plusieurs contrôles électriques sont obligatoires avant la mise en service. Voici la procédure complète.',
    descDE: 'Bei einem Neubau in der Schweiz sind mehrere Elektrokontrollen vor der Inbetriebnahme obligatorisch. Hier ist das vollständige Verfahren.',
    descIT: 'Per una nuova costruzione in Svizzera, diversi controlli elettrici sono obbligatori prima della messa in servizio. Ecco la procedura completa.',
    category: 'technique',
    publishDate: '2025-12-20',
    contentFR: `## Le contrôle OIBT pour construction neuve : une procédure en 5 étapes

Pour toute construction neuve en Suisse, le processus de contrôle électrique est différent d'un contrôle périodique standard. Il implique plusieurs intervenants et plusieurs étapes.

## Étape 1 : L'annonce de travaux au GRD

Avant le début des travaux électriques, l'électricien chargé du chantier doit annoncer les travaux au GRD local. Cette annonce est obligatoire et déclenche la procédure de suivi.

## Étape 2 : Le contrôle de chantier (optionnel mais recommandé)

Lors de travaux importants, un contrôle intermédiaire peut être effectué pendant le chantier. Il permet de :
- Valider les chemins de câbles avant fermeture des cloisons
- Vérifier le dimensionnement du tableau principal
- Identifier les problèmes potentiels en cours de construction

## Étape 3 : Le contrôle final de mise en service

**C'est l'étape cruciale.** Avant que le GRD ne raccorde définitivement le bâtiment au réseau électrique, un organe de contrôle accrédité doit effectuer le contrôle de mise en service. Il vérifie :

- L'intégralité de l'installation électrique
- La conformité à la norme NIBT (NIN) en vigueur
- Les protections différentielles et contre les surintensités
- Les mises à la terre et équipotentialité
- Les installations spéciales (PV, borne recharge, domotique)

## Étape 4 : Le rapport de mise en service (RMS)

L'organe de contrôle émet un rapport de mise en service. Ce rapport est :
- Transmis au GRD
- Conservé par le propriétaire
- Constitue le point de départ du cycle de 20 ans

**Sans ce rapport, le GRD ne raccorde pas le bâtiment au réseau.**

## Étape 5 : Le premier contrôle périodique

20 ans après la mise en service (ou 10 ans pour les bâtiments commerciaux), le premier contrôle périodique aura lieu.

## Qui peut effectuer le contrôle de mise en service ?

Un **organe de contrôle accrédité par l'ESTI**, indépendant de l'électricien qui a réalisé les travaux. Cette indépendance est obligatoire : l'électricien ne peut pas auto-certifier son propre travail.

## Délais et coûts typiques

| Phase | Délai | Coût estimé |
|-------|-------|-------------|
| Contrôle intermédiaire | Pendant travaux | CHF 300 – 500 |
| Contrôle mise en service (villa) | Après travaux | CHF 600 – 1'200 |
| Contrôle mise en service (immeuble) | Après travaux | CHF 1'500 – 5'000 |`,
    contentDE: `## NIV-Kontrolle für Neubauten: 5 Schritte

Bei Neubauten unterscheidet sich das elektrische Kontrollverfahren von einer periodischen Kontrolle.

## Die 5 Schritte

1. **Arbeitsanmeldung beim VNB** — obligatorisch vor Beginn der Elektroarbeiten
2. **Bauzeitkontrolle** — optional aber empfehlenswert
3. **Inbetriebnahmekontrolle** — obligatorisch vor Netzanschluss
4. **SiNa Inbetriebnahme** — geht an VNB, Startpunkt 20-Jahres-Zyklus
5. **Erste periodische Kontrolle** — nach 20 Jahren

## Wer darf die Inbetriebnahmekontrolle durchführen?

Ein **ESTI-akkreditiertes Kontrollorgan**, unabhängig vom ausführenden Elektriker.`,
    contentIT: `## Controllo OIBT per nuova costruzione: 5 passi

Per le nuove costruzioni, il processo di controllo elettrico è diverso da un controllo periodico standard.

## I 5 passi

1. **Annuncio lavori al GRD** — obbligatorio prima dell'inizio
2. **Controllo di cantiere** — opzionale ma raccomandato
3. **Controllo di messa in servizio** — obbligatorio prima del collegamento alla rete
4. **RaSi di messa in servizio** — trasmesso al GRD, inizio ciclo 20 anni
5. **Primo controllo periodico** — dopo 20 anni`,
    faqFR: [
      { q: "Peut-on emménager dans un bâtiment neuf sans contrôle OIBT ?", a: "Non. Le raccordement définitif au réseau électrique — et donc la possibilité d'utiliser l'électricité — nécessite un rapport de mise en service conforme. Sans ce rapport transmis au GRD, le compteur ne sera pas activé." },
      { q: "Qui paie le contrôle OIBT de mise en service d'un immeuble neuf ?", a: "Le maître de l'ouvrage (futur propriétaire ou promoteur). Ce coût est généralement intégré dans le budget de construction. Il peut être imposé par la banque finançant le projet comme condition à la libération des fonds." },
    ],
    faqDE: [
      { q: "Kann man in einen Neubau einziehen ohne NIV-Kontrolle?", a: "Nein. Der definitive Netzanschluss erfordert einen konformen SiNa. Ohne diesen aktiviert der VNB den Zähler nicht." },
    ],
    faqIT: [
      { q: "Si può traslocare in un nuovo edificio senza controllo OIBT?", a: "No. Il collegamento definitivo alla rete richiede un RaSi conforme. Senza di esso il GRD non attiva il contatore." },
    ],
  },

  // ─── Article 17 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-vente-achat-maison',
    titleFR: 'Contrôle OIBT lors de la vente d\'une maison : ce que vendeur et acheteur doivent savoir',
    titleDE: 'NIV-Kontrolle beim Hausverkauf: Was Verkäufer und Käufer wissen müssen',
    titleIT: 'Controllo OIBT in caso di vendita di casa: cosa devono sapere venditore e acquirente',
    descFR: 'La vente d\'un bien immobilier en Suisse soulève des questions importantes sur le contrôle OIBT. Qui est responsable ? Y a-t-il obligation ? Quels sont les risques ?',
    descDE: 'Der Verkauf einer Immobilie in der Schweiz wirft wichtige Fragen zur NIV-Kontrolle auf. Wer ist verantwortlich? Ist es Pflicht? Welche Risiken gibt es?',
    descIT: 'La vendita di un immobile in Svizzera pone importanti domande sul controllo OIBT. Chi è responsabile? È obbligatorio? Quali sono i rischi?',
    category: 'juridique',
    publishDate: '2025-12-01',
    contentFR: `## Contrôle OIBT et vente immobilière : la règle fondamentale

En Suisse, **il n'existe pas d'obligation légale expresse d'effectuer un contrôle OIBT spécifiquement lors d'une vente immobilière**. Le contrôle OIBT suit une périodicité (20 ans pour les habitations) indépendamment des transactions.

Cependant, la réalité pratique est beaucoup plus nuancée.

## Ce que le vendeur doit faire

### Vérifier l'état du contrôle OIBT
- Retrouver le dernier rapport de sécurité
- Vérifier que tous les défauts schéma II ont été corrigés
- S'assurer que le contrôle n'est pas en retard par rapport à l'échéance

### Divulguer les défauts connus
Le vendeur a une **obligation de révélation** des défauts cachés. Si le vendeur sait que l'installation électrique présente des défauts non corrigés et ne les divulgue pas, il peut être tenu responsable après la vente (art. 197 CO).

## Ce que l'acheteur doit demander

1. **Le dernier rapport de sécurité** (date, défauts répertoriés, résolution)
2. **Les travaux électriques réalisés** depuis le dernier contrôle
3. **La date de la prochaine échéance** de contrôle

## Le contrôle OIBT comme outil de négociation

De plus en plus d'acheteurs demandent un contrôle OIBT frais comme condition de la vente. Si l'installation présente des défauts :
- Les travaux peuvent être déduits du prix de vente
- Un délai de mise en conformité peut être négocié
- Une retenue de prix peut être convenue jusqu'à la résolution des défauts

## Cas pratique : installation hors délai au moment de la vente

Si l'installation n'a pas été contrôlée depuis plus de 20 ans au moment de la vente, la situation devient délicate :
- Le GRD peut déclencher une procédure de contrôle d'office
- L'acheteur hérite de la responsabilité du contrôle dès la signature
- Les banques financant l'achat peuvent exiger un contrôle préalable

## Notre recommandation

Pour sécuriser une transaction immobilière, nous recommandons de faire effectuer un contrôle OIBT **dans les 12 mois précédant la vente**. Les coûts sont modestes (CHF 450 – 750 pour une maison individuelle) et permettent d'éviter les contentieux post-vente.`,
    contentDE: `## NIV-Kontrolle und Immobilienverkauf

In der Schweiz gibt es keine ausdrückliche gesetzliche Pflicht, beim Hausverkauf eine spezifische NIV-Kontrolle durchzuführen. Die Kontrolle folgt einer 20-jährigen Periodizität.

Dennoch hat der Verkäufer eine **Offenbarungspflicht** für bekannte Mängel (Art. 197 OR).

## Was der Verkäufer tun sollte

1. Letzten SiNa vorlegen
2. Korrigierte Schema-II-Mängel nachweisen
3. Nächste Fälligkeit kennen

## Was der Käufer fragen sollte

- Letzter SiNa (Datum, Mängel, Behebung)
- Seit der letzten Kontrolle durchgeführte Elektroarbeiten
- Datum der nächsten Kontrollfälligkeit`,
    contentIT: `## Controllo OIBT e vendita immobiliare

In Svizzera non esiste un obbligo legale espresso di effettuare un controllo OIBT specificamente in caso di vendita. Il controllo segue una periodicità di 20 anni.

Tuttavia, il venditore ha un **obbligo di rivelazione** dei difetti nascosti (art. 197 CO).

## Cosa deve fare il venditore

1. Fornire l'ultimo RaSi
2. Dimostrare la correzione dei difetti Schema II
3. Conoscere la prossima scadenza

## Cosa deve chiedere l'acquirente

- Ultimo RaSi (data, difetti, risoluzione)
- Lavori elettrici eseguiti dall'ultimo controllo
- Data della prossima scadenza`,
    faqFR: [
      { q: "L'acheteur peut-il exiger un contrôle OIBT avant la signature ?", a: "Oui. L'acheteur peut tout à fait conditionner la vente à la réalisation d'un contrôle OIBT et à la correction de tous les défauts schéma II et III. Cette condition doit être inscrite dans le compromis de vente ou la promesse de vente chez le notaire." },
      { q: "Le notaire vérifie-t-il le contrôle OIBT lors de la vente ?", a: "Le notaire ne vérifie généralement pas le contrôle OIBT. Son rôle est de valider la transaction juridique et le transfert de propriété. La responsabilité de vérifier l'état électrique incombe aux parties (vendeur et acheteur)." },
    ],
    faqDE: [
      { q: "Kann der Käufer eine NIV-Kontrolle vor der Unterzeichnung verlangen?", a: "Ja. Der Käufer kann den Kauf von einer NIV-Kontrolle und der Behebung aller Schema-II/III-Mängel abhängig machen." },
    ],
    faqIT: [
      { q: "L'acquirente può esigere un controllo OIBT prima della firma?", a: "Sì. L'acquirente può condizionare la vendita a un controllo OIBT e alla correzione di tutti i difetti Schema II e III." },
    ],
  },

  // ─── Article 18 ──────────────────────────────────────────────────────────────
  {
    slug: 'controle-oibt-renovation-travaux',
    titleFR: 'Contrôle OIBT lors d\'une rénovation : quand est-il obligatoire ?',
    titleDE: 'NIV-Kontrolle bei Renovationen: Wann ist sie obligatorisch?',
    titleIT: 'Controllo OIBT durante una ristrutturazione: quando è obbligatorio?',
    descFR: 'Pas toutes les rénovations ne déclenchent un contrôle OIBT. Ce guide précis vous explique quels travaux l\'imposent et comment planifier votre mise en conformité.',
    descDE: 'Nicht jede Renovation löst eine NIV-Kontrolle aus. Dieser präzise Leitfaden erklärt, welche Arbeiten sie erfordern und wie Sie Ihre Konformität planen.',
    descIT: 'Non tutte le ristrutturazioni richiedono un controllo OIBT. Questa guida precisa spiega quali lavori lo impongono e come pianificare la conformità.',
    category: 'guide',
    publishDate: '2025-11-15',
    contentFR: `## Rénovation et OIBT : pas toujours obligatoire, mais souvent recommandé

La règle de base est simple : **tout travail sur l'installation électrique déclenche l'obligation de contrôle OIBT pour la partie concernée**. Mais la frontière entre "travail sur l'installation" et "travail ordinaire" n'est pas toujours évidente.

## Travaux qui déclenchent obligatoirement un contrôle OIBT

### Modifications importantes de l'installation
- Remplacement ou extension du tableau électrique
- Création de nouveaux circuits (cuisine, salle de bain, bureau)
- Installation d'une cuisinière électrique ou d'un chauffe-eau électrique
- Ajout d'une borne de recharge EV
- Installation photovoltaïque
- Domotique et basse tension (dans certains cas)

### Travaux de gros œuvre touchant l'électricité
- Réfection complète de l'électricité d'un appartement ou d'une maison
- Transformation d'un grenier ou sous-sol (création de locaux habitables)
- Extension ou surélévation

## Travaux qui ne déclenchent PAS de contrôle OIBT

- Remplacement de prises ou d'interrupteurs à l'identique
- Changement d'ampoules et de luminaires (sans modification du câblage)
- Remplacement d'un chauffe-eau électrique à l'identique
- Peintures, parquets, carrelages (sans toucher au câblage)
- Remplacement d'appareils électroménagers

## La règle des 30% : mythe ou réalité ?

On entend souvent parler d'une "règle des 30%" selon laquelle une rénovation touchant plus de 30% de l'installation déclencherait un contrôle complet. Cette règle n'est **pas inscrite dans l'OIBT** mais est souvent appliquée en pratique par les GRD comme seuil indicatif.

## Comment planifier le contrôle lors d'une rénovation ?

1. **Avant les travaux** : Contactez un organe de contrôle pour évaluer si les travaux prévus déclenchent un contrôle
2. **Pendant les travaux** : Un contrôle intermédiaire peut valider les chemins de câbles avant fermeture
3. **Après les travaux** : Contrôle de mise en service de la partie rénovée
4. **Coordination** : Si l'installation entière est proche de l'échéance (< 5 ans), profitez de la rénovation pour faire le contrôle complet

## Coût du contrôle OIBT lors d'une rénovation

| Étendue des travaux | Coût estimé |
|--------------------|-------------|
| Cuisine seule | CHF 250 – 380 |
| Appartement complet | CHF 380 – 580 |
| Maison complète | CHF 550 – 850 |
| Immeuble (par logement) | CHF 280 – 450 |`,
    contentDE: `## Renovation und NIV: nicht immer Pflicht, aber oft empfehlenswert

Die Grundregel: **Jede Arbeit an der Elektroinstallation löst eine Kontrollpflicht für den betroffenen Teil aus**.

## Arbeiten, die eine NIV-Kontrolle auslösen

- Erweiterung oder Ersatz des Verteilerkastens
- Neue Stromkreise (Küche, Bad, Büro)
- Ladestation, PV-Anlage
- Vollständige Sanierung

## Arbeiten ohne NIV-Kontrollpflicht

- Steckdosen und Schalter 1:1 ersetzen
- Leuchten tauschen (ohne Kabelveränderung)
- Farben, Böden, Fliesen

## Kosten NIV-Kontrolle bei Renovation

| Umfang | Kosten |
|--------|--------|
| Küche | CHF 250–380 |
| Ganze Wohnung | CHF 380–580 |
| Ganzes Haus | CHF 550–850 |`,
    contentIT: `## Ristrutturazione e OIBT: non sempre obbligatorio

La regola di base: **ogni lavoro sull'impianto elettrico scatena l'obbligo di controllo OIBT per la parte interessata**.

## Lavori che richiedono un controllo OIBT

- Sostituzione o ampliamento del quadro elettrico
- Nuovi circuiti (cucina, bagno, ufficio)
- Stazione di ricarica, impianto FV
- Ristrutturazione completa

## Lavori che NON richiedono il controllo

- Sostituzione 1:1 di prese e interruttori
- Sostituzione di lampadine (senza modifiche al cablaggio)
- Tinteggiatura, parquet, piastrelle

## Costo del controllo OIBT durante ristrutturazione

| Estensione | Costo stimato |
|------------|---------------|
| Solo cucina | CHF 250–380 |
| Appartamento completo | CHF 380–580 |
| Casa completa | CHF 550–850 |`,
    faqFR: [
      { q: "J'ai refait ma cuisine, dois-je faire un contrôle OIBT ?", a: "Si la réfection de la cuisine a impliqué des modifications électriques (nouveau circuit, déplacement de prises, ajout d'une cuisinière électrique), oui. Si seule la cuisine a été redécorée sans toucher à l'électricité, non." },
      { q: "Mon architecte doit-il se charger du contrôle OIBT lors d'une rénovation ?", a: "L'architecte peut coordonner le contrôle OIBT mais ne peut pas le réaliser lui-même (sauf s'il est aussi organe de contrôle accrédité). Il est de la responsabilité du maître de l'ouvrage de mandater un organe de contrôle accrédité indépendant." },
    ],
    faqDE: [
      { q: "Ich habe meine Küche renoviert, brauche ich eine NIV-Kontrolle?", a: "Wenn elektrische Änderungen vorgenommen wurden (neuer Stromkreis, Steckdosenumsetzung, Elektroherd): Ja. Wenn nur dekoriert wurde: Nein." },
    ],
    faqIT: [
      { q: "Ho ristrutturato la cucina, devo fare un controllo OIBT?", a: "Se sono state apportate modifiche elettriche (nuovo circuito, spostamento prese, piano cottura elettrico): sì. Se è stato solo ridecorate: no." },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
