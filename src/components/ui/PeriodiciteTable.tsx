import { useLocale } from 'next-intl';

export default function PeriodiciteTable() {
  const locale = useLocale();

  const rows = [
    {
      type: { fr: 'Habitations (maisons, appartements, immeubles)', de: 'Wohngebäude (Häuser, Wohnungen)', it: 'Abitazioni (case, appartamenti)' },
      period: { fr: '20 ans', de: '20 Jahre', it: '20 anni' },
      highlight: false,
    },
    {
      type: { fr: 'Bureaux, commerces, ateliers artisanaux', de: 'Büros, Gewerbe, Handwerksbetriebe', it: 'Uffici, negozi, laboratori artigianali' },
      period: { fr: '10 ans', de: '10 Jahre', it: '10 anni' },
      highlight: false,
    },
    {
      type: { fr: 'Installations photovoltaïques', de: 'Photovoltaikanlagen', it: 'Impianti fotovoltaici' },
      period: { fr: '10 ans', de: '10 Jahre', it: '10 anni' },
      highlight: false,
    },
    {
      type: { fr: 'Bornes de recharge VE', de: 'EV-Ladestationen', it: 'Stazioni di ricarica VE' },
      period: { fr: '10 ans', de: '10 Jahre', it: '10 anni' },
      highlight: false,
    },
    {
      type: { fr: 'Hôtels, cinémas, théâtres, hôpitaux, écoles', de: 'Hotels, Kinos, Theater, Spitäler, Schulen', it: 'Hotel, cinema, teatri, ospedali, scuole' },
      period: { fr: '5 ans', de: '5 Jahre', it: '5 anni' },
      highlight: true,
    },
    {
      type: { fr: 'Grandes industries, entrepôts', de: 'Große Industrie, Lager', it: 'Grandi industrie, magazzini' },
      period: { fr: '5 ans', de: '5 Jahre', it: '5 anni' },
      highlight: true,
    },
    {
      type: { fr: 'Installations Schéma III (câblage ancien sans PE)', de: 'Schema-III-Installationen (ohne Schutzleiter)', it: 'Installazioni Schema III (senza PE)' },
      period: { fr: '5 ans', de: '5 Jahre', it: '5 anni' },
      highlight: true,
    },
    {
      type: { fr: 'Stations-service, ateliers véhicules', de: 'Tankstellen, Fahrzeugwerkstätten', it: 'Stazioni di servizio, officine veicoli' },
      period: { fr: '5 ans', de: '5 Jahre', it: '5 anni' },
      highlight: true,
    },
    {
      type: { fr: 'Locaux à danger d\'explosion (zones 0,1,2)', de: 'Explosionsgefährdete Räume (Zonen 0,1,2)', it: 'Locali a rischio esplosione (zone 0,1,2)' },
      period: { fr: '1 an', de: '1 Jahr', it: '1 anno' },
      highlight: true,
    },
  ];

  const headers = {
    fr: ['Type d\'installation', 'Périodicité', 'Organe'],
    de: ['Anlagentyp', 'Kontrollfrist', 'Organ'],
    it: ['Tipo di impianto', 'Periodicità', 'Organo'],
  };

  const organe = {
    fr: 'Indépendant',
    de: 'Unabhängig',
    it: 'Indipendente',
  };

  const h = headers[locale as keyof typeof headers] || headers.fr;
  const o = organe[locale as keyof typeof organe] || organe.fr;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary-700 text-white">
            <th className="text-left px-4 py-3 font-semibold">{h[0]}</th>
            <th className="text-center px-4 py-3 font-semibold">{h[1]}</th>
            <th className="text-center px-4 py-3 font-semibold">{h[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-gray-100 ${row.highlight ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <td className="px-4 py-3 text-gray-800">
                {row.type[locale as keyof typeof row.type] || row.type.fr}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`font-semibold ${row.highlight ? 'text-amber-700' : 'text-primary-700'}`}>
                  {row.period[locale as keyof typeof row.period] || row.period.fr}
                </span>
              </td>
              <td className="px-4 py-3 text-center text-gray-600">{o}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
