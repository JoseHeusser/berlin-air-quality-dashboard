const API_BASE = 'https://luftdaten.berlin.de/api';

const pollutantConfig = {
  pm10: { apiCore: 'pm10', name: 'PM10', threshold: 45, unit: 'µg/m³', color: '#11866f' },
  pm25: { apiCore: 'pm2', name: 'PM2.5', threshold: 15, unit: 'µg/m³', color: '#2d6fa3' },
  no2: { apiCore: 'no2', name: 'NO₂', threshold: 200, unit: 'µg/m³', color: '#c88921' },
  o3: { apiCore: 'o3', name: 'O₃', threshold: 180, unit: 'µg/m³', color: '#be4141' },
  nox: { apiCore: 'nox', name: 'NOₓ', threshold: 300, unit: 'µg/m³', color: '#7063aa' },
  no: { apiCore: 'no', name: 'NO', threshold: 200, unit: 'µg/m³', color: '#6a8f2d' },
  co: { apiCore: 'co', name: 'CO', threshold: 10, unit: 'mg/m³', color: '#8c6c3d' }
};

const periodConfig = {
  hour: { apiPeriod: '1h', timespan: 'currentday', maxPoints: 18 },
  day: { apiPeriod: '24h', timespan: 'currentmonth', maxPoints: 31 },
  month: { apiPeriod: '1m', timespan: 'currentyear', maxPoints: 12 }
};

const weatherConfig = {
  mhtemp: {
    name: 'Container temperature',
    unit: '°C',
    icon: 'TEMP',
    path: '/components/mhtemp_1h/data?timespan=currentday&stationgroup=all'
  },
  rfe: {
    name: 'Relative humidity',
    unit: '%',
    icon: 'RFE',
    path: '/cores/rfe/data?period=24h&timespan=currentmonth&stationgroup=all'
  },
  wig: {
    name: 'Wind speed',
    unit: 'm/s',
    icon: 'WIG',
    path: '/cores/wig/data?period=24h&timespan=currentmonth&stationgroup=all'
  },
  wir: {
    name: 'Wind direction',
    unit: '°',
    icon: 'WIR',
    path: '/cores/wir/data?period=24h&timespan=currentmonth&stationgroup=all'
  }
};

const pageCopy = {
  overview: ['page.overview.eyebrow', 'page.overview.title', 'page.overview.subtitle'],
  stations: ['page.stations.eyebrow', 'page.stations.title', 'page.stations.subtitle'],
  trends: ['page.trends.eyebrow', 'page.trends.title', 'page.trends.subtitle'],
  limits: ['page.limits.eyebrow', 'page.limits.title', 'page.limits.subtitle'],
  weather: ['page.weather.eyebrow', 'page.weather.title', 'page.weather.subtitle'],
  alerts: ['page.alerts.eyebrow', 'page.alerts.title', 'page.alerts.subtitle']
};

const translations = {
  en: {
    'brand.subtitle': 'Official monitoring dashboard',
    'nav.overview': 'Overview',
    'nav.stations': 'Stations',
    'nav.trends': 'Trends',
    'nav.limits': 'Limits',
    'nav.weather': 'Weather',
    'nav.alerts': 'Alerts',
    'source.label': 'Live data',
    'source.note': 'Berliner Luftgütemessnetz, SenMVKU. Map tiles by OpenStreetMap.',
    'controls.pollutant': 'Pollutant',
    'controls.period': 'Period',
    'controls.stationType': 'Station type',
    'controls.language': 'Language',
    'period.hour': 'Hourly today',
    'period.day': 'Daily this month',
    'period.month': 'Monthly this year',
    'periodRisk.hour': 'Hours',
    'periodRisk.day': 'Days',
    'periodRisk.month': 'Months',
    'type.all': 'All',
    'type.traffic': 'Traffic',
    'type.background': 'Urban background',
    'type.suburb': 'Suburban',
    'status.loading': 'Loading official measurements...',
    'status.loadingShort': 'Loading',
    'status.feed': 'Official API feed · {period} · Latest {latest} · {count} active stations',
    'status.apiError': 'Could not load the official Berlin air-quality API.',
    'page.overview.eyebrow': 'Live public data',
    'page.overview.title': 'Berlin Air Quality Monitor',
    'page.overview.subtitle': 'Official station readings, air-quality index, weather context, exceedances and alerts in one operational view.',
    'page.stations.eyebrow': 'Station map',
    'page.stations.title': 'Monitoring Stations',
    'page.stations.subtitle': 'Explore the official Berlin monitoring network, station metadata and latest values.',
    'page.trends.eyebrow': 'Time series',
    'page.trends.title': 'Pollution Trends',
    'page.trends.subtitle': 'Compare hourly, daily or monthly averages across the selected station group.',
    'page.limits.eyebrow': 'Compliance',
    'page.limits.title': 'Exceedance Limits',
    'page.limits.subtitle': 'Review official exceedance counters by station and pollutant for 2026.',
    'page.weather.eyebrow': 'Meteorology',
    'page.weather.title': 'Weather Context',
    'page.weather.subtitle': 'Use wind, humidity and temperature to interpret pollutant patterns.',
    'page.alerts.eyebrow': 'Official notices',
    'page.alerts.title': 'Alerts and Reports',
    'page.alerts.subtitle': 'Read public notices published by the Berlin air-quality monitoring network.',
    'overview.eyebrow': 'Environmental operations',
    'overview.heroTitle': 'Turn official station feeds into a city-level risk view.',
    'overview.heroBody': "The dashboard combines pollutant readings, the official air-quality index, exceedance data, weather context and station metadata from Berlin's public API.",
    'alerts.officialTitle': 'Official Alerts',
    'alerts.latestNotices': 'Latest notices from the Berlin monitoring network.',
    'alerts.pageTitle': 'Official Alerts and Notices',
    'alerts.pageSubtitle': 'Messages published by the Berlin air-quality network.',
    'kpi.average': 'Average level',
    'kpi.highest': 'Highest station',
    'kpi.risk': 'Risk periods',
    'kpi.trend': 'Trend',
    'signals.title': 'Action Signals',
    'signals.subtitle': 'What the current filters imply for an urban operations team.',
    'mix.title': 'Pollutant Mix',
    'mix.subtitle': 'Latest average concentration by pollutant.',
    'map.clickHint': 'Click a marker or row to isolate it',
    'map.allStations': 'All stations',
    'time.noTimestamp': 'No timestamp',
    'stations.detailTitle': 'Station Detail',
    'stations.detailSubtitle': 'Metadata, components and latest readings.',
    'stations.rankingTitle': 'Station Ranking',
    'stations.rankingSubtitle': 'Latest value by monitoring station.',
    'trends.title': 'Trend',
    'trends.snapshotTitle': 'Period Snapshot',
    'trends.snapshotSubtitle': 'Distribution and data completeness.',
    'limits.annualTitle': 'Annual Exceedances',
    'limits.annualSubtitle': 'Official exceedance counters for 2026.',
    'limits.summaryTitle': 'Limit Summary',
    'limits.summarySubtitle': 'Stations and pollutants needing attention.',
    'weather.contextTitle': 'Meteorology Context',
    'weather.contextSubtitle': 'Temperature, humidity, wind speed and wind direction from active stations.',
    'weather.impactTitle': 'Air Impact',
    'weather.impactSubtitle': 'How weather can change interpretation.',
    'group.background': 'Urban background',
    'group.traffic': 'Traffic',
    'group.suburb': 'Suburban',
    'group.ozone': 'Ozone',
    'group.meteorology': 'Meteorology',
    'lqi.none': 'No index',
    'lqi.veryGood': 'Very good',
    'lqi.good': 'Good',
    'lqi.moderate': 'Moderate',
    'lqi.poor': 'Poor',
    'lqi.veryPoor': 'Very poor',
    'unit.average': '{unit} average {name}',
    'kpi.noStation': 'No station value',
    'kpi.notEnoughData': 'Not enough data',
    'kpi.increasing': 'Increasing',
    'kpi.improving': 'Improving',
    'kpi.riskLabel': '{periods} above {threshold} {unit}',
    'station.count': '{count} station{plural}',
    'empty.measurements': 'No current measurements for this filter.',
    'empty.trend': 'No trend data available for this filter.',
    'empty.stationMetadata': 'No station metadata available.',
    'empty.exceedances': 'No exceedance counters reported for 2026 in the current API response.',
    'empty.alerts': 'No official alerts are currently published.',
    'signal.exposureAlert': 'Exposure alert',
    'signal.stable': 'Stable monitoring',
    'signal.exposureBody': '{name} is above the reference threshold in the current filter. Prioritize hotspot review and communication.',
    'signal.stableBody': '{name} is below the reference threshold in the current filter. Keep watching station-level hotspots.',
    'signal.trafficEffect': 'Traffic corridor effect',
    'signal.balanced': 'Balanced station profile',
    'signal.trafficBody': 'Traffic stations are driving the current average compared with the selected network.',
    'signal.balancedBody': 'The selected stations do not show a strong traffic premium for this pollutant right now.',
    'signal.aqiUnavailable': 'AQI unavailable',
    'signal.aqiBody': 'Average official air-quality grade across this filter is {grade}.',
    'signal.aqiMissingBody': 'No official air-quality index values are available for this filter.',
    'signal.feedTimestamp': 'Official feed timestamp',
    'signal.measurementGap': 'Measurement gap',
    'signal.feedBody': 'Latest reading in this view: {time}.',
    'signal.measurementGapBody': 'No current reading is available for the selected filter.',
    'aqi.average': 'Average official index',
    'aqi.highest': 'Highest index station',
    'detail.latest': 'Latest {name} · {time}',
    'detail.officialAqi': 'Official AQI · {label}',
    'detail.started': 'Started {time}',
    'detail.components': 'Measured components',
    'detail.noComponents': 'No component list',
    'snapshot.points': 'Data points in chart',
    'snapshot.latest': 'Latest period average',
    'snapshot.highest': 'Highest period · {time}',
    'snapshot.lowest': 'Lowest period · {time}',
    'limits.stations': 'Stations with reported exceedances',
    'limits.total': 'Total official exceedance count',
    'limits.highest': 'Highest reported station',
    'weather.unavailable': 'Not available in the current API feed',
    'weather.detail': '{count} stations · high {high}{unit} at {station} · low {low}{unit}',
    'weather.tempLiveTitle': 'Temperature is live',
    'weather.tempMissing': 'The API did not return live temperature readings for the current request.',
    'weather.tempLiveBody': 'Latest average container temperature is {value} °C across {count} stations.',
    'weather.coverageTitle': 'Weather feed coverage',
    'weather.coverageBody': '{available} of {total} configured meteorology feeds currently return values. Empty feeds are shown explicitly instead of hidden.',
    'weather.airImpactTitle': 'Air impact',
    'weather.airImpactBody': 'Warmer conditions can support ozone formation, while wind and humidity help explain how particulates disperse or persist.',
    'alert.notice': 'Official notice',
    'alert.noSummary': 'No summary available.'
  },
  de: {
    'brand.subtitle': 'Offizielles Messnetz-Dashboard',
    'nav.overview': 'Überblick',
    'nav.stations': 'Stationen',
    'nav.trends': 'Trends',
    'nav.limits': 'Grenzwerte',
    'nav.weather': 'Wetter',
    'nav.alerts': 'Meldungen',
    'source.label': 'Live-Daten',
    'source.note': 'Berliner Luftgütemessnetz, SenMVKU. Kartenkacheln von OpenStreetMap.',
    'controls.pollutant': 'Schadstoff',
    'controls.period': 'Zeitraum',
    'controls.stationType': 'Stationstyp',
    'controls.language': 'Sprache',
    'period.hour': 'Stündlich heute',
    'period.day': 'Täglich diesen Monat',
    'period.month': 'Monatlich dieses Jahr',
    'periodRisk.hour': 'Stunden',
    'periodRisk.day': 'Tage',
    'periodRisk.month': 'Monate',
    'type.all': 'Alle',
    'type.traffic': 'Verkehr',
    'type.background': 'Städtischer Hintergrund',
    'type.suburb': 'Stadtrand',
    'status.loading': 'Offizielle Messwerte werden geladen...',
    'status.loadingShort': 'Lädt',
    'status.feed': 'Offizieller API-Feed · {period} · Letzter Stand {latest} · {count} aktive Stationen',
    'status.apiError': 'Die offizielle Berliner Luftqualitäts-API konnte nicht geladen werden.',
    'page.overview.eyebrow': 'Öffentliche Live-Daten',
    'page.overview.title': 'Berliner Luftqualitätsmonitor',
    'page.overview.subtitle': 'Offizielle Stationswerte, Luftqualitätsindex, Wetterkontext, Überschreitungen und Meldungen in einer operativen Ansicht.',
    'page.stations.eyebrow': 'Stationskarte',
    'page.stations.title': 'Messstationen',
    'page.stations.subtitle': 'Erkunde das offizielle Berliner Messnetz, Stationsdaten und aktuelle Werte.',
    'page.trends.eyebrow': 'Zeitreihen',
    'page.trends.title': 'Schadstofftrends',
    'page.trends.subtitle': 'Vergleiche stündliche, tägliche oder monatliche Mittelwerte der ausgewählten Stationsgruppe.',
    'page.limits.eyebrow': 'Überwachung',
    'page.limits.title': 'Grenzwertüberschreitungen',
    'page.limits.subtitle': 'Prüfe offizielle Überschreitungszähler nach Station und Schadstoff für 2026.',
    'page.weather.eyebrow': 'Meteorologie',
    'page.weather.title': 'Wetterkontext',
    'page.weather.subtitle': 'Nutze Wind, Luftfeuchte und Temperatur zur Einordnung von Schadstoffmustern.',
    'page.alerts.eyebrow': 'Offizielle Hinweise',
    'page.alerts.title': 'Meldungen und Berichte',
    'page.alerts.subtitle': 'Lies öffentliche Hinweise des Berliner Luftgütemessnetzes.',
    'overview.eyebrow': 'Umweltbetrieb',
    'overview.heroTitle': 'Offizielle Stationsdaten als Risikoblick auf die Stadt.',
    'overview.heroBody': 'Das Dashboard kombiniert Schadstoffmessungen, den offiziellen Luftqualitätsindex, Überschreitungen, Wetterkontext und Stationsdaten aus der Berliner API.',
    'alerts.officialTitle': 'Offizielle Meldungen',
    'alerts.latestNotices': 'Aktuelle Hinweise des Berliner Messnetzes.',
    'alerts.pageTitle': 'Offizielle Meldungen und Hinweise',
    'alerts.pageSubtitle': 'Nachrichten des Berliner Luftgütemessnetzes.',
    'kpi.average': 'Durchschnitt',
    'kpi.highest': 'Höchste Station',
    'kpi.risk': 'Risikoperioden',
    'kpi.trend': 'Trend',
    'signals.title': 'Handlungssignale',
    'signals.subtitle': 'Was die aktuellen Filter für ein städtisches Betriebsteam bedeuten.',
    'mix.title': 'Schadstoffmix',
    'mix.subtitle': 'Aktuelle Durchschnittskonzentration je Schadstoff.',
    'map.clickHint': 'Marker oder Zeile anklicken, um zu isolieren',
    'map.allStations': 'Alle Stationen',
    'time.noTimestamp': 'Kein Zeitstempel',
    'stations.detailTitle': 'Stationsdetails',
    'stations.detailSubtitle': 'Metadaten, Komponenten und aktuelle Messwerte.',
    'stations.rankingTitle': 'Stationsranking',
    'stations.rankingSubtitle': 'Aktueller Wert je Messstation.',
    'trends.title': 'Trend',
    'trends.snapshotTitle': 'Zeitraum-Snapshot',
    'trends.snapshotSubtitle': 'Verteilung und Datenvollständigkeit.',
    'limits.annualTitle': 'Jährliche Überschreitungen',
    'limits.annualSubtitle': 'Offizielle Überschreitungszähler für 2026.',
    'limits.summaryTitle': 'Grenzwertübersicht',
    'limits.summarySubtitle': 'Stationen und Schadstoffe mit Aufmerksamkeit.',
    'weather.contextTitle': 'Meteorologischer Kontext',
    'weather.contextSubtitle': 'Temperatur, Luftfeuchte, Windgeschwindigkeit und Windrichtung aktiver Stationen.',
    'weather.impactTitle': 'Einfluss auf Luftqualität',
    'weather.impactSubtitle': 'Wie Wetter die Interpretation verändern kann.',
    'group.background': 'Städtischer Hintergrund',
    'group.traffic': 'Verkehr',
    'group.suburb': 'Stadtrand',
    'group.ozone': 'Ozon',
    'group.meteorology': 'Meteorologie',
    'lqi.none': 'Kein Index',
    'lqi.veryGood': 'Sehr gut',
    'lqi.good': 'Gut',
    'lqi.moderate': 'Mäßig',
    'lqi.poor': 'Schlecht',
    'lqi.veryPoor': 'Sehr schlecht',
    'unit.average': '{unit} Durchschnitt {name}',
    'kpi.noStation': 'Kein Stationswert',
    'kpi.notEnoughData': 'Nicht genug Daten',
    'kpi.increasing': 'Steigend',
    'kpi.improving': 'Verbesserung',
    'kpi.riskLabel': '{periods} über {threshold} {unit}',
    'station.count': '{count} Station{plural}',
    'empty.measurements': 'Keine aktuellen Messwerte für diesen Filter.',
    'empty.trend': 'Keine Trenddaten für diesen Filter verfügbar.',
    'empty.stationMetadata': 'Keine Stationsmetadaten verfügbar.',
    'empty.exceedances': 'Keine Überschreitungszähler für 2026 in der aktuellen API-Antwort.',
    'empty.alerts': 'Aktuell sind keine offiziellen Meldungen veröffentlicht.',
    'signal.exposureAlert': 'Belastungswarnung',
    'signal.stable': 'Stabile Überwachung',
    'signal.exposureBody': '{name} liegt im aktuellen Filter über dem Referenzwert. Hotspots und Kommunikation priorisieren.',
    'signal.stableBody': '{name} liegt im aktuellen Filter unter dem Referenzwert. Hotspots weiter beobachten.',
    'signal.trafficEffect': 'Verkehrskorridor-Effekt',
    'signal.balanced': 'Ausgewogenes Stationsprofil',
    'signal.trafficBody': 'Verkehrsstationen treiben den aktuellen Durchschnitt gegenüber dem ausgewählten Netz.',
    'signal.balancedBody': 'Die ausgewählten Stationen zeigen derzeit keinen starken Verkehrsaufschlag für diesen Schadstoff.',
    'signal.aqiUnavailable': 'LQI nicht verfügbar',
    'signal.aqiBody': 'Der durchschnittliche offizielle Luftqualitätsgrad in diesem Filter beträgt {grade}.',
    'signal.aqiMissingBody': 'Für diesen Filter sind keine offiziellen Luftqualitätsindex-Werte verfügbar.',
    'signal.feedTimestamp': 'Zeitstempel des offiziellen Feeds',
    'signal.measurementGap': 'Messlücke',
    'signal.feedBody': 'Aktuellster Wert in dieser Ansicht: {time}.',
    'signal.measurementGapBody': 'Für den ausgewählten Filter ist kein aktueller Messwert verfügbar.',
    'aqi.average': 'Durchschnittlicher offizieller Index',
    'aqi.highest': 'Station mit höchstem Index',
    'detail.latest': 'Aktuell {name} · {time}',
    'detail.officialAqi': 'Offizieller LQI · {label}',
    'detail.started': 'Messbeginn {time}',
    'detail.components': 'Gemessene Komponenten',
    'detail.noComponents': 'Keine Komponentenliste',
    'snapshot.points': 'Datenpunkte im Diagramm',
    'snapshot.latest': 'Aktueller Periodendurchschnitt',
    'snapshot.highest': 'Höchste Periode · {time}',
    'snapshot.lowest': 'Niedrigste Periode · {time}',
    'limits.stations': 'Stationen mit gemeldeten Überschreitungen',
    'limits.total': 'Gesamtzahl offizieller Überschreitungen',
    'limits.highest': 'Station mit höchster Meldung',
    'weather.unavailable': 'Im aktuellen API-Feed nicht verfügbar',
    'weather.detail': '{count} Stationen · hoch {high}{unit} bei {station} · niedrig {low}{unit}',
    'weather.tempLiveTitle': 'Temperatur ist live',
    'weather.tempMissing': 'Die API hat für diese Anfrage keine Live-Temperaturwerte geliefert.',
    'weather.tempLiveBody': 'Die aktuelle Durchschnittstemperatur am Messcontainer beträgt {value} °C über {count} Stationen.',
    'weather.coverageTitle': 'Abdeckung des Wetter-Feeds',
    'weather.coverageBody': '{available} von {total} konfigurierten Meteorologie-Feeds liefern aktuell Werte. Leere Feeds werden explizit angezeigt.',
    'weather.airImpactTitle': 'Einfluss auf Luftqualität',
    'weather.airImpactBody': 'Wärmere Bedingungen können Ozonbildung begünstigen; Wind und Feuchte helfen zu erklären, wie Partikel sich verteilen oder halten.',
    'alert.notice': 'Offizielle Meldung',
    'alert.noSummary': 'Keine Zusammenfassung verfügbar.'
  }
};

let stations = [];
let alerts = [];
let lqiByStation = new Map();
let exceedancesByStation = new Map();
let weatherByCore = new Map();
let measurementCache = new Map();
let lastMapStationIds = '';
const MAP_SOUTH_OFFSET_PX = 60;
let selectedStation = 'all';
let activePage = 'overview';
let currentLang = 'en';
let map;
let markerLayer;

const pollutantSelect = document.getElementById('pollutantSelect');
const periodSelect = document.getElementById('periodSelect');
const typeSelect = document.getElementById('typeSelect');
const languageSelect = document.getElementById('languageSelect');
const rankingList = document.getElementById('rankingList');
const trendChart = document.getElementById('trendChart');
const signalList = document.getElementById('signalList');
const mixLegend = document.getElementById('mixLegend');
const mixDonut = document.getElementById('mixDonut');
const dataStamp = document.getElementById('dataStamp');

function t(key, values = {}) {
  const template = translations[currentLang]?.[key] || translations.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
}

function groupLabel(type) {
  return t(`group.${type}`);
}

function periodLabel(periodKey) {
  return t(`period.${periodKey}`);
}

function periodRiskLabel(periodKey) {
  return t(`periodRisk.${periodKey}`);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function getJson(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) throw new Error(`Berlin air API returned ${response.status}`);
  return response.json();
}

function normalizeStation(station) {
  const group = station.stationgroups?.find((item) => ['traffic', 'background', 'suburb'].includes(item)) || station.stationgroups?.[0] || 'background';
  return {
    id: station.code,
    name: station.name.replace(/^\d+\s+/, ''),
    code: station.code.toUpperCase(),
    type: group,
    address: station.address,
    information: station.information || station.address,
    lat: Number(station.lat),
    lng: Number(station.lng),
    started: station.measuringStart,
    components: station.activeComponents || station.components || [],
    docsUrl: station.url,
    series: {},
    latestAt: null
  };
}

function normalizeMeasurements(rows) {
  const grouped = new Map();
  rows.forEach((row) => {
    if (!grouped.has(row.station)) grouped.set(row.station, []);
    grouped.get(row.station).push({
      datetime: row.datetime,
      value: Number.isFinite(row.value) ? row.value : null
    });
  });
  grouped.forEach((items) => items.sort((a, b) => new Date(a.datetime) - new Date(b.datetime)));
  return grouped;
}

function normalizeStationPayload(rows) {
  const grouped = new Map();
  rows.forEach((stationRow) => {
    grouped.set(stationRow.station, stationRow.data || []);
  });
  return grouped;
}

async function loadBaseData() {
  const [stationRows, lqiRows, exceedanceRows, alertRows, ...weatherRows] = await Promise.all([
    getJson('/stations?active=true'),
    getJson('/lqis/data'),
    getJson('/exceeds/data?year=2026'),
    getJson('/alerts'),
    ...Object.values(weatherConfig).map((config) => getJson(config.path).catch(() => []))
  ]);

  stations = stationRows
    .map(normalizeStation)
    .filter((station) => Number.isFinite(station.lat) && Number.isFinite(station.lng));
  lqiByStation = normalizeStationPayload(lqiRows);
  exceedancesByStation = normalizeStationPayload(exceedanceRows);
  alerts = alertRows;
  Object.keys(weatherConfig).forEach((core, index) => {
    weatherByCore.set(core, normalizeMeasurements(weatherRows[index]));
  });
}

async function loadMeasurementsForPeriod(periodKey) {
  if (measurementCache.has(periodKey)) return measurementCache.get(periodKey);
  const period = periodConfig[periodKey];
  const entries = Object.entries(pollutantConfig);
  const measurementSets = await Promise.all(entries.map(([, config]) => (
    getJson(`/cores/${config.apiCore}/data?period=${period.apiPeriod}&timespan=${period.timespan}&stationgroup=all`).catch(() => [])
  )));

  const seriesByPollutant = new Map();
  entries.forEach(([key], index) => {
    seriesByPollutant.set(key, normalizeMeasurements(measurementSets[index]));
  });
  measurementCache.set(periodKey, seriesByPollutant);
  return seriesByPollutant;
}

async function applyPeriodData(periodKey) {
  dataStamp.textContent = t('status.loading');
  const seriesByPollutant = await loadMeasurementsForPeriod(periodKey);
  const entries = Object.keys(pollutantConfig);
  stations = stations.map((station) => {
    entries.forEach((key) => {
      station.series[key] = seriesByPollutant.get(key).get(station.id) || [];
    });
    const latest = Object.values(station.series)
      .flat()
      .filter((item) => item.value !== null)
      .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))[0];
    station.latestAt = latest?.datetime || null;
    return station;
  });
  const latestAt = stations.map((station) => station.latestAt).filter(Boolean).sort().at(-1);
  dataStamp.textContent = t('status.feed', {
    period: periodLabel(periodKey),
    latest: formatDateTime(latestAt),
    count: stations.length
  });
  dataStamp.classList.add('loaded');
}

function stationSupportsPollutant(station, pollutant) {
  const apiCore = pollutantConfig[pollutant].apiCore;
  return station.components.some((item) => item.startsWith(`${apiCore}_`)) || station.series[pollutant]?.some((item) => item.value !== null);
}

function currentReading(station, pollutant) {
  return station.series[pollutant]?.filter((item) => item.value !== null).at(-1) || null;
}

function currentValue(station, pollutant) {
  return currentReading(station, pollutant)?.value ?? null;
}

function average(values) {
  const usable = values.filter((value) => Number.isFinite(value));
  if (!usable.length) return null;
  return Math.round((usable.reduce((sum, value) => sum + value, 0) / usable.length) * 10) / 10;
}

function getFilteredStations() {
  const type = typeSelect.value;
  const pollutant = pollutantSelect.value;
  return stations.filter((station) => {
    const matchesType = type === 'all' || station.type === type;
    const matchesStation = selectedStation === 'all' || station.id === selectedStation;
    return matchesType && matchesStation && stationSupportsPollutant(station, pollutant);
  });
}

function getStationsWithValues(filtered, pollutant) {
  return filtered.filter((station) => currentValue(station, pollutant) !== null);
}

function riskClass(value, threshold) {
  if (value >= threshold) return 'risk';
  if (value >= threshold * 0.65) return 'warn';
  return '';
}

function markerColor(value, threshold) {
  if (value === null) return '#87949a';
  if (value >= threshold) return '#be4141';
  if (value >= threshold * 0.65) return '#c88921';
  return '#11866f';
}

function formatDateTime(datetime) {
  if (!datetime) return t('time.noTimestamp');
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Berlin'
  }).format(new Date(datetime));
}

function formatShortDate(datetime, periodKey) {
  if (!datetime) return '-';
  const options = periodKey === 'hour'
    ? { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }
    : periodKey === 'day'
      ? { day: '2-digit', month: 'short', timeZone: 'Europe/Berlin' }
      : { month: 'short', timeZone: 'Europe/Berlin' };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(datetime));
}

function stripHtml(value) {
  const template = document.createElement('template');
  template.innerHTML = value || '';
  return template.content.textContent || '';
}

function buildPeriodAverage(filtered, pollutant) {
  const byTime = new Map();
  filtered.forEach((station) => {
    station.series[pollutant]?.forEach((item) => {
      if (item.value === null) return;
      if (!byTime.has(item.datetime)) byTime.set(item.datetime, []);
      byTime.get(item.datetime).push(item.value);
    });
  });

  return Array.from(byTime.entries())
    .map(([datetime, values]) => ({ datetime, value: average(values) }))
    .filter((item) => item.value !== null)
    .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
    .slice(-periodConfig[periodSelect.value].maxPoints);
}

function selectedOrFirstStation() {
  return stations.find((station) => station.id === selectedStation) || stations[0];
}

function lqiGradeLabel(grade) {
  if (grade === null || grade === undefined) return t('lqi.none');
  if (grade <= 1) return t('lqi.veryGood');
  if (grade <= 2) return t('lqi.good');
  if (grade <= 3) return t('lqi.moderate');
  if (grade <= 4) return t('lqi.poor');
  return t('lqi.veryPoor');
}

function initMap() {
  const berlinBounds = L.latLngBounds([52.33, 13.08], [52.70, 13.78]);
  map = L.map('stationMap', {
    zoomControl: true,
    scrollWheelZoom: false,
    maxBounds: berlinBounds.pad(0.35),
    maxBoundsViscosity: 0.9,
    worldCopyJump: false
  }).setView([52.38, 13.405], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    bounds: berlinBounds.pad(0.8),
    minZoom: 9,
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  map.setMinZoom(9);
}

function fitMapToStations(filtered, force = false) {
  if (!map || !filtered.length) return;
  const stationIds = filtered.map((station) => station.id).sort().join('|');
  if (!force && stationIds === lastMapStationIds) return;
  lastMapStationIds = stationIds;
  const bounds = L.latLngBounds(filtered.map((station) => [station.lat, station.lng]));
  map.fitBounds(bounds.pad(0.08), {
    maxZoom: 12,
    animate: false,
    paddingTopLeft: [0, MAP_SOUTH_OFFSET_PX]
  });
  if (filtered.length > 1) {
    map.panBy([0, MAP_SOUTH_OFFSET_PX], { animate: false });
  }
}

function renderMap(filtered, pollutant) {
  if (!map) return;
  const config = pollutantConfig[pollutant];
  markerLayer.clearLayers();

  filtered.forEach((station) => {
    const value = currentValue(station, pollutant);
    const marker = L.marker([station.lat, station.lng], {
      icon: L.divIcon({
        className: '',
        html: `<span class="map-marker ${station.id === selectedStation ? 'active' : ''}" style="--marker-color: ${markerColor(value, config.threshold)}">${value ?? ''}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      })
    }).addTo(markerLayer);

    marker.bindPopup(`
      <strong>${escapeHtml(station.name)}</strong><br>
      ${escapeHtml(groupLabel(station.type) || station.type)} · ${escapeHtml(station.code)}<br>
      ${escapeHtml(config.name)}: ${value ?? 'No data'} ${value === null ? '' : config.unit}<br>
      <small>${escapeHtml(formatDateTime(currentReading(station, pollutant)?.datetime))}</small>
    `);
    marker.on('click', () => selectStation(station.id));
  });

  fitMapToStations(filtered);
}

function renderNavigation() {
  applyStaticTranslations();
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === activePage);
  });
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.toggle('active', page.dataset.view === activePage);
  });
  const [eyebrow, title, subtitle] = pageCopy[activePage];
  document.getElementById('pageEyebrow').textContent = t(eyebrow);
  document.getElementById('pageTitle').textContent = t(title);
  document.getElementById('pageSubtitle').textContent = t(subtitle);
  if (activePage === 'stations' && map) {
    setTimeout(() => {
      map.invalidateSize();
      fitMapToStations(getFilteredStations(), true);
    }, 120);
  }
}

function renderKpis(filtered, pollutant) {
  const config = pollutantConfig[pollutant];
  const withValues = getStationsWithValues(filtered, pollutant);
  const values = withValues.map((station) => currentValue(station, pollutant));
  const avg = average(values);
  const hotspot = withValues.slice().sort((a, b) => currentValue(b, pollutant) - currentValue(a, pollutant))[0];
  const periodAverage = buildPeriodAverage(withValues, pollutant);
  const midpoint = Math.ceil(periodAverage.length / 2);
  const firstHalf = average(periodAverage.slice(0, midpoint).map((item) => item.value));
  const secondHalf = average(periodAverage.slice(midpoint).map((item) => item.value));
  const trend = firstHalf !== null && secondHalf !== null ? Math.round((secondHalf - firstHalf) * 10) / 10 : null;

  document.getElementById('avgValue').textContent = avg ?? '-';
  document.getElementById('avgLabel').textContent = t('unit.average', { unit: config.unit, name: config.name });
  document.getElementById('hotspotValue').textContent = hotspot ? currentValue(hotspot, pollutant) : '-';
  document.getElementById('hotspotLabel').textContent = hotspot ? hotspot.name : t('kpi.noStation');
  document.getElementById('riskPeriods').textContent = periodAverage.filter((item) => item.value > config.threshold).length;
  document.getElementById('riskLabel').textContent = t('kpi.riskLabel', {
    periods: periodRiskLabel(periodSelect.value),
    threshold: config.threshold,
    unit: config.unit
  });
  document.getElementById('trendValue').textContent = trend === null ? '-' : trend > 0 ? `+${trend}` : `${trend}`;
  document.getElementById('trendLabel').textContent = trend === null ? t('kpi.notEnoughData') : trend > 0 ? t('kpi.increasing') : t('kpi.improving');
}

function renderRanking(filtered, pollutant) {
  const config = pollutantConfig[pollutant];
  const ranked = getStationsWithValues(filtered, pollutant).slice().sort((a, b) => currentValue(b, pollutant) - currentValue(a, pollutant));
  document.getElementById('stationCount').textContent = t('station.count', {
    count: ranked.length,
    plural: ranked.length === 1 ? '' : currentLang === 'en' ? 's' : 'en'
  });
  rankingList.innerHTML = ranked.length ? ranked.map((station) => {
    const value = currentValue(station, pollutant);
    const width = Math.min(100, Math.round((value / config.threshold) * 100));
    return `
      <button class="rank-row" data-station="${escapeHtml(station.id)}">
        <div>
          <strong>${escapeHtml(station.name)}</strong>
          <small>${escapeHtml(groupLabel(station.type) || station.type)} · ${escapeHtml(station.code)}</small>
        </div>
        <div class="track"><div class="fill ${riskClass(value, config.threshold)}" style="width: ${width}%"></div></div>
        <div class="value">${value} ${config.unit}</div>
      </button>
    `;
  }).join('') : `<div class="empty-state">${escapeHtml(t('empty.measurements'))}</div>`;
}

function renderTrend(filtered, pollutant) {
  const values = buildPeriodAverage(filtered, pollutant);
  const max = Math.max(...values.map((item) => item.value), 1);
  trendChart.style.gridTemplateColumns = `repeat(${Math.max(values.length, 1)}, minmax(0, 1fr))`;
  trendChart.innerHTML = values.length ? values.map((item) => `
    <div class="bar">
      <div style="height: ${Math.max(18, Math.round((item.value / max) * 290))}px" title="${formatShortDate(item.datetime, periodSelect.value)}: ${item.value}"></div>
      <span>${formatShortDate(item.datetime, periodSelect.value)}</span>
    </div>
  `).join('') : `<div class="empty-state">${escapeHtml(t('empty.trend'))}</div>`;
  document.getElementById('trendDescription').textContent = `${periodLabel(periodSelect.value)} · ${pollutantConfig[pollutant].name}`;
}

function renderSignals(filtered, pollutant) {
  const config = pollutantConfig[pollutant];
  const values = getStationsWithValues(filtered, pollutant).map((station) => currentValue(station, pollutant));
  const avg = average(values);
  const trafficAvg = average(filtered.filter((station) => station.type === 'traffic').map((station) => currentValue(station, pollutant)));
  const latestAt = filtered.map((station) => currentReading(station, pollutant)?.datetime).filter(Boolean).sort().at(-1);
  const lqiValues = filtered.map((station) => lqiByStation.get(station.id)?.find((item) => item.component === 'lqi')?.grade).filter(Number.isFinite);
  const lqiAverage = average(lqiValues);

  const signals = [
    {
      title: avg !== null && avg > config.threshold ? t('signal.exposureAlert') : t('signal.stable'),
      body: avg !== null && avg > config.threshold
        ? t('signal.exposureBody', { name: config.name })
        : t('signal.stableBody', { name: config.name })
    },
    {
      title: trafficAvg !== null && avg !== null && trafficAvg > avg ? t('signal.trafficEffect') : t('signal.balanced'),
      body: trafficAvg !== null && avg !== null && trafficAvg > avg
        ? t('signal.trafficBody')
        : t('signal.balancedBody')
    },
    {
      title: lqiAverage !== null ? `AQI: ${lqiGradeLabel(lqiAverage)}` : t('signal.aqiUnavailable'),
      body: lqiAverage !== null
        ? t('signal.aqiBody', { grade: lqiAverage })
        : t('signal.aqiMissingBody')
    },
    {
      title: latestAt ? t('signal.feedTimestamp') : t('signal.measurementGap'),
      body: latestAt ? t('signal.feedBody', { time: formatDateTime(latestAt) }) : t('signal.measurementGapBody')
    }
  ];

  signalList.innerHTML = renderCards(signals);
}

function renderMix(filtered) {
  const entries = Object.entries(pollutantConfig).slice(0, 5);
  const averages = entries.map(([key, config]) => ({
    label: config.name,
    value: average(filtered.map((station) => currentValue(station, key))),
    color: config.color
  }));
  const total = averages.reduce((sum, item) => sum + (item.value || 0), 0) || 1;
  let cursor = 0;
  const stops = averages.map((item) => {
    const start = cursor;
    cursor += ((item.value || 0) / total) * 100;
    return `${item.color} ${start}% ${cursor}%`;
  });
  mixDonut.style.background = `conic-gradient(${stops.join(', ')})`;
  mixLegend.innerHTML = averages.map((item) => `
    <div class="legend-row" style="--color: ${item.color}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${item.value ?? '-'} ${item.label === 'CO' ? 'mg/m³' : 'µg/m³'}</strong>
    </div>
  `).join('');
}

function renderAqiSummary(filtered) {
  const rows = filtered.map((station) => {
    const lqi = lqiByStation.get(station.id)?.find((item) => item.component === 'lqi');
    return { station, grade: lqi?.grade ?? null };
  }).filter((item) => Number.isFinite(item.grade));
  const avg = average(rows.map((item) => item.grade));
  const worst = rows.slice().sort((a, b) => b.grade - a.grade)[0];

  document.getElementById('aqiSummary').innerHTML = `
    <div class="mini-card">
      <span>${escapeHtml(t('aqi.average'))}</span>
      <strong>${avg ?? '-'}</strong>
      <small>${lqiGradeLabel(avg)}</small>
    </div>
    <div class="mini-card">
      <span>${escapeHtml(t('aqi.highest'))}</span>
      <strong>${escapeHtml(worst?.station.name || '-')}</strong>
      <small>${worst ? lqiGradeLabel(worst.grade) : t('lqi.none')}</small>
    </div>
  `;
}

function renderStationDetail() {
  const station = selectedOrFirstStation();
  if (!station) {
    document.getElementById('stationDetail').innerHTML = `<div class="empty-state">${escapeHtml(t('empty.stationMetadata'))}</div>`;
    return;
  }
  const pollutant = pollutantSelect.value;
  const config = pollutantConfig[pollutant];
  const lqi = lqiByStation.get(station.id)?.find((item) => item.component === 'lqi');
  const reading = currentReading(station, pollutant);
  const components = station.components.filter((item) => /^(pm|no|nox|o3|co|tmp|rfe|wig|wir)/.test(item)).slice(0, 10);

  document.getElementById('selectedStationName').textContent = selectedStation === 'all' ? t('map.allStations') : station.name;
  document.getElementById('selectedStationDetail').textContent = selectedStation === 'all' ? t('map.clickHint') : `${groupLabel(station.type) || station.type} · ${station.code}`;
  document.getElementById('stationDetail').innerHTML = `
    <div class="detail-row"><strong>${escapeHtml(station.name)}</strong><span>${escapeHtml(station.address)}</span></div>
    <div class="detail-row"><strong>${reading?.value ?? '-'} ${config.unit}</strong><span>${escapeHtml(t('detail.latest', { name: config.name, time: formatDateTime(reading?.datetime) }))}</span></div>
    <div class="detail-row"><strong>${lqi?.grade ?? '-'}</strong><span>${escapeHtml(t('detail.officialAqi', { label: lqiGradeLabel(lqi?.grade) }))}</span></div>
    <div class="detail-row"><strong>${escapeHtml(groupLabel(station.type) || station.type)}</strong><span>${escapeHtml(t('detail.started', { time: formatDateTime(station.started) }))}</span></div>
    <div class="detail-row"><strong>${escapeHtml(t('detail.components'))}</strong><span>${escapeHtml(components.join(', ') || t('detail.noComponents'))}</span></div>
  `;
}

function renderPeriodSnapshot(filtered, pollutant) {
  const values = buildPeriodAverage(filtered, pollutant);
  const latest = values.at(-1);
  const max = values.slice().sort((a, b) => b.value - a.value)[0];
  const min = values.slice().sort((a, b) => a.value - b.value)[0];
  document.getElementById('periodSnapshot').innerHTML = `
    <div class="metric-row"><strong>${values.length}</strong><span>${escapeHtml(t('snapshot.points'))}</span></div>
    <div class="metric-row"><strong>${latest?.value ?? '-'}</strong><span>${escapeHtml(t('snapshot.latest'))}</span></div>
    <div class="metric-row"><strong>${max?.value ?? '-'}</strong><span>${escapeHtml(t('snapshot.highest', { time: formatShortDate(max?.datetime, periodSelect.value) }))}</span></div>
    <div class="metric-row"><strong>${min?.value ?? '-'}</strong><span>${escapeHtml(t('snapshot.lowest', { time: formatShortDate(min?.datetime, periodSelect.value) }))}</span></div>
  `;
}

function renderExceedances() {
  const rows = stations.map((station) => {
    const total = (exceedancesByStation.get(station.id) || []).reduce((sum, item) => sum + (Number.isFinite(item.value) ? item.value : 0), 0);
    return { station, total, items: exceedancesByStation.get(station.id) || [] };
  }).filter((row) => row.total > 0).sort((a, b) => b.total - a.total);

  document.getElementById('exceedanceList').innerHTML = rows.length ? rows.map((row) => {
    const label = row.items
      .filter((item) => Number.isFinite(item.value) && item.value > 0)
      .map((item) => `${item.core?.toUpperCase() || item.component}: ${item.value}`)
      .join(' · ');
    return `
      <button class="rank-row" data-station="${escapeHtml(row.station.id)}">
        <div><strong>${escapeHtml(row.station.name)}</strong><small>${escapeHtml(row.station.code)} · ${escapeHtml(label || groupLabel(row.station.type) || row.station.type)}</small></div>
        <div class="track"><div class="fill warn" style="width: ${Math.min(100, row.total * 8)}%"></div></div>
        <div class="value">${row.total}</div>
      </button>
    `;
  }).join('') : `<div class="empty-state">${escapeHtml(t('empty.exceedances'))}</div>`;

  document.getElementById('limitSummary').innerHTML = `
    <div class="metric-row"><strong>${rows.length}</strong><span>${escapeHtml(t('limits.stations'))}</span></div>
    <div class="metric-row"><strong>${rows.reduce((sum, row) => sum + row.total, 0)}</strong><span>${escapeHtml(t('limits.total'))}</span></div>
    <div class="metric-row"><strong>${escapeHtml(rows[0]?.station.name || '-')}</strong><span>${escapeHtml(t('limits.highest'))}</span></div>
  `;
}

function getLatestWeatherRows(core) {
  return Array.from(weatherByCore.get(core)?.entries() || [])
    .map(([stationId, items]) => {
      const latest = items.filter((item) => item.value !== null).at(-1);
      return latest ? { station: stations.find((item) => item.id === stationId), ...latest } : null;
    })
    .filter(Boolean);
}

function renderWeather() {
  const weatherRows = Object.entries(weatherConfig).map(([core, config]) => {
    const latestRows = getLatestWeatherRows(core);
    const avg = average(latestRows.map((item) => item.value));
    const high = latestRows.slice().sort((a, b) => b.value - a.value)[0];
    const low = latestRows.slice().sort((a, b) => a.value - b.value)[0];
    return { core, config, latestRows, avg, high, low };
  });

  const cards = weatherRows.map(({ config, latestRows, avg, high, low }) => {
    const detail = avg === null
      ? t('weather.unavailable')
      : t('weather.detail', {
        count: latestRows.length,
        high: high.value,
        unit: config.unit,
        station: high.station?.name || high.station,
        low: low.value
      });
    return `
      <div class="weather-card">
        <span>${escapeHtml(config.icon)}</span>
        <strong>${avg ?? '-'} ${avg === null ? '' : escapeHtml(config.unit)}</strong>
        <small>${escapeHtml(config.name)} · ${escapeHtml(detail)}</small>
      </div>
    `;
  }).join('');
  document.getElementById('weatherGrid').innerHTML = cards || '<div class="empty-state">No meteorology readings available.</div>';
  const temp = weatherRows.find((item) => item.core === 'mhtemp');
  const availability = weatherRows.filter((item) => item.avg !== null).length;
  document.getElementById('weatherSignals').innerHTML = renderCards([
    {
      title: t('weather.tempLiveTitle'),
      body: temp?.avg === null
        ? t('weather.tempMissing')
        : t('weather.tempLiveBody', { value: temp.avg, count: temp.latestRows.length })
    },
    {
      title: t('weather.coverageTitle'),
      body: t('weather.coverageBody', { available: availability, total: weatherRows.length })
    },
    {
      title: t('weather.airImpactTitle'),
      body: t('weather.airImpactBody')
    }
  ]);
}

function renderAlerts() {
  const cards = alerts.length ? alerts.map((alert) => `
    <article class="alert-card">
      <strong>${escapeHtml(alert.title || t('alert.notice'))}</strong>
      <p>${escapeHtml(alert.summary || stripHtml(alert.body) || t('alert.noSummary'))}</p>
      <small>${escapeHtml(alert.level || 'info')}</small>
    </article>
  `).join('') : `<div class="empty-state">${escapeHtml(t('empty.alerts'))}</div>`;
  document.getElementById('alertList').innerHTML = cards;
  document.getElementById('alertPreview').innerHTML = alerts.slice(0, 2).length ? alerts.slice(0, 2).map((alert) => `
    <div class="signal"><strong>${escapeHtml(alert.title || t('alert.notice'))}</strong><p>${escapeHtml(alert.summary || stripHtml(alert.body))}</p></div>
  `).join('') : `<div class="empty-state">${escapeHtml(t('empty.alerts'))}</div>`;
}

function renderCards(cards) {
  return cards.map((card) => `
    <div class="signal">
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.body)}</p>
    </div>
  `).join('');
}

function selectStation(stationId) {
  selectedStation = selectedStation === stationId ? 'all' : stationId;
  activePage = 'stations';
  render();
}

function render() {
  const pollutant = pollutantSelect.value;
  const filtered = getFilteredStations();
  renderNavigation();
  renderKpis(filtered, pollutant);
  renderRanking(filtered, pollutant);
  renderTrend(filtered, pollutant);
  renderSignals(filtered, pollutant);
  renderMix(filtered);
  renderAqiSummary(filtered);
  renderStationDetail();
  renderPeriodSnapshot(filtered, pollutant);
  renderExceedances();
  renderWeather();
  renderAlerts();
  renderMap(filtered, pollutant);
}

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => {
      activePage = button.dataset.page;
      render();
    });
  });
  pollutantSelect.addEventListener('change', render);
  typeSelect.addEventListener('change', () => {
    selectedStation = 'all';
    render();
  });
  languageSelect.addEventListener('change', () => {
    currentLang = languageSelect.value;
    render();
    const latestAt = stations.map((station) => station.latestAt).filter(Boolean).sort().at(-1);
    if (latestAt) {
      dataStamp.textContent = t('status.feed', {
        period: periodLabel(periodSelect.value),
        latest: formatDateTime(latestAt),
        count: stations.length
      });
    }
  });
  periodSelect.addEventListener('change', async () => {
    await applyPeriodData(periodSelect.value);
    render();
  });
  document.body.addEventListener('click', (event) => {
    const row = event.target.closest('[data-station]');
    if (row) selectStation(row.dataset.station);
  });
}

async function start() {
  bindEvents();
  initMap();
  try {
    await loadBaseData();
    await applyPeriodData(periodSelect.value);
    render();
  } catch (error) {
    dataStamp.textContent = t('status.apiError');
    dataStamp.classList.remove('loaded');
    document.querySelectorAll('.ranking, .signal-list, .metric-list, .detail-panel, .alert-list').forEach((node) => {
      node.innerHTML = `<div class="empty-state error-state">${escapeHtml(error.message)}</div>`;
    });
    console.error(error);
  }
}

start();
