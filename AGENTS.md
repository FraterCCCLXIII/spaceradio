# SpaceRadio — Agent Context

This file is the entry point for AI agents working in this repository. Read it first, then follow links to detailed docs.

## What is SpaceRadio?

SpaceRadio is a startup building the first radio station sponsored by large space projects. The core product combines:

1. **A 24/7 radio station** — live and on-demand space-themed programming
2. **An AI Space Music Lab** — original compositions with a recognizable cosmic aesthetic
3. **Space transmission** — music encoded and sent off Earth via RF, orbital payloads, and deep-space comms
4. **An eternity archive** — redundant, institution-backed preservation of the catalog

## Repository state

Vite + React + TypeScript demo app in `src/`. Documentation in `docs/` defines vision, roadmap, brand, and architecture. Run `npm run dev` for local preview.

## Agent priorities

When implementing features, align with these principles:

- **Credibility over hype** — transmission claims must be technically verifiable and logged
- **Sound before scale** — curate AI music quality before volume
- **Reuse and conventions** — match existing patterns as code is added; prefer extension over duplication
- **Minimal scope** — implement the smallest correct change for the requested task
- **Provenance** — every track needs metadata: model, seed, license, sponsor attribution

## Documentation index

| Doc | Purpose |
|-----|---------|
| [docs/VISION.md](docs/VISION.md) | Mission, pillars, audience, success criteria |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phased projects, milestones, sprint plan |
| [docs/BRAND.md](docs/BRAND.md) | Voice, visual direction, naming, content tone |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technical systems, stacks, data models |
| [docs/CONTENT.md](docs/CONTENT.md) | Programming formats, show types, music guidelines |
| [docs/SPONSORSHIPS.md](docs/SPONSORSHIPS.md) | Partner tiers, packages, outreach framing |
| [docs/TRANSMISSION.md](docs/TRANSMISSION.md) | Off-Earth broadcast tiers, registry, protocols |
| [docs/WEB_EXPERIENCE.md](docs/WEB_EXPERIENCE.md) | Site + player UX (taste-skill aligned) |

## Suggested build order

1. Landing site + waitlist (Phase 0)
2. 24/7 stream MVP + CMS (Phase 1)
3. AI music pipeline + curator workflow (Phase 2)
4. Transmission registry + Tier 1 symbolic beam (Phase 3)

## Key terms

| Term | Meaning |
|------|---------|
| **Mission** | A themed programming block or sponsor package (e.g. Artemis Hour) |
| **Transmission** | A logged event where content is sent off Earth or symbolically beamed |
| **Sound DNA** | SpaceRadio's defined musical aesthetic and generation constraints |
| **Tier 1–4** | Transmission levels from symbolic digital beam to deep-space comms |
| **Provenance** | Full lineage of how a track was created and who owns it |
| **Eternity Archive** | Multi-institution, redundant long-term storage of masters and metadata |

## When unsure

- Default to **listener-first** UX for station features
- Default to **verifiable logs** for transmission features
- Default to **human curation** for AI music going public
- Do not invent sponsor relationships or transmission claims — use placeholder copy marked `[TBD]`
