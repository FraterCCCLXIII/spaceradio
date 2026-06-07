# SpaceRadio

The first radio station sponsored by large space projects — original AI space music, 24/7 broadcast, and a transmission program that logs music sent toward the stars.

## For AI agents

Start with **[AGENTS.md](AGENTS.md)** — entry point, priorities, and doc index.

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/VISION.md](docs/VISION.md) | Mission, pillars, success criteria |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phased projects and milestones |
| [docs/BRAND.md](docs/BRAND.md) | Voice, visual direction, copy rules |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Systems, data models, MVP scope |
| [docs/CONTENT.md](docs/CONTENT.md) | Shows, Sound DNA, curation |
| [docs/SPONSORSHIPS.md](docs/SPONSORSHIPS.md) | Partner tiers and packages |
| [docs/TRANSMISSION.md](docs/TRANSMISSION.md) | Off-Earth tiers and registry |
| [docs/WEB_EXPERIENCE.md](docs/WEB_EXPERIENCE.md) | Website + player design (taste-skill) |

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (e.g. `http://localhost:5173`). Demo uses placeholder stream audio with mock now-playing metadata.

```bash
npm run build          # local / Vercel (base /)
npm run build:pages    # GitHub Pages (base /spaceradio/)
npm run preview        # preview local build at /
npm run preview:pages  # preview Pages build at /spaceradio/
```

**Important:** Do not enable GitHub Pages “deploy from branch /root” on source files — that serves unbuilt `index.html` and the app will be blank. Use the GitHub Actions workflow instead.

### GitHub Pages

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (workflow in `.github/workflows/deploy.yml` runs `build:pages`)
3. Open `https://fraterccclxiii.github.io/spaceradio/` (note the `/spaceradio/` path)

## Status

Vite + React + TypeScript demo site with 24/7 player, missions, originals catalog, and transmission registry.
