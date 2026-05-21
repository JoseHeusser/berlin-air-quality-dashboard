# Berlin Air Quality Dashboard

Real-time air-quality monitoring dashboard for Berlin, built on top of the official **Berliner Luftgütemessnetz** (SenMVKU) public API.

> 🔗 **Live:** <https://berlin-air-quality-dashboard.vercel.app>

## What it shows

Six pages, all driven by live data from `luftdaten.berlin.de/api`:

| Page | What it does |
|---|---|
| **Overview** | Snapshot of current pollutants across all stations + city-wide AQI |
| **Stations** | Map + table of every monitoring station with live readings |
| **Trends** | Hourly / daily / monthly time-series for PM10, PM2.5, NO₂, O₃ |
| **Limits** | Annual exceedance counters vs. WHO / EU thresholds |
| **Weather** | Meteorological context (temperature, humidity, wind speed + direction) |
| **Alerts** | Active public health advisories from the official feed |

Bilingual (EN / DE), the toggle persists across sessions.

## Stack

- **Vanilla HTML + CSS + JavaScript** — no framework, no build step
- **Leaflet + OpenStreetMap** for the map
- Plain `fetch` → official Berliner Luftgütemessnetz REST API
- Custom i18n implementation with `data-i18n` attributes
- Deployed as a static site on Vercel

The whole app is ~70 KB of code (`index.html` + `app.js` + `styles.css`). No bundler, no dependencies.

## Pollutants tracked

| Code | Pollutant | WHO threshold (annual) |
|---|---|---|
| PM₁₀ | Particulate matter ≤10 µm | 15 µg/m³ |
| PM₂·₅ | Particulate matter ≤2.5 µm | 5 µg/m³ |
| NO₂ | Nitrogen dioxide | 10 µg/m³ |
| O₃ | Ozone | 60 µg/m³ (peak season) |
| NOₓ | Nitrogen oxides | — |
| NO | Nitrogen monoxide | — |
| CO | Carbon monoxide | 4 mg/m³ (24h) |

## Open locally

Serve the folder (browsers block some fetches when files are opened via `file://`):

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Data source

[luftdaten.berlin.de](https://luftdaten.berlin.de/) — Berliner Luftgütemessnetz, Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt Berlin (SenMVKU). Open data, no API key required.

Map tiles by [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

## License

MIT.

---

Built by [Jose Heusser](https://github.com/JoseHeusser).
