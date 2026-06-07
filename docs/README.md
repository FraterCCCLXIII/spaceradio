# SpaceRadio Documentation

Context and content for humans and AI agents building SpaceRadio.

## Quick start for agents

1. Read [../AGENTS.md](../AGENTS.md) at the repo root
2. Read [VISION.md](VISION.md) for mission and constraints
3. Use [ROADMAP.md](ROADMAP.md) for phase and milestone context
4. Consult domain docs as needed for the task at hand

## Document map

```
docs/
├── README.md           ← You are here
├── VISION.md           ← Why SpaceRadio exists
├── ROADMAP.md          ← What to build, when
├── BRAND.md            ← How it should look and sound (voice)
├── ARCHITECTURE.md     ← How systems fit together
├── CONTENT.md          ← Shows, playlists, music rules
├── SPONSORSHIPS.md     ← Partner model and packages
├── TRANSMISSION.md     ← Off-Earth broadcast program
└── WEB_EXPERIENCE.md   ← Company site + radio player (taste-skill)
```

## Using docs in implementation

| Task type | Read first |
|-----------|------------|
| Marketing site, copy, player UI | WEB_EXPERIENCE.md, BRAND.md |
| Streaming player, CMS | ARCHITECTURE.md, CONTENT.md |
| AI music features | CONTENT.md, ARCHITECTURE.md |
| Sponsor portal, decks | SPONSORSHIPS.md, BRAND.md |
| Beam/transmission UI | TRANSMISSION.md, ARCHITECTURE.md |
| Planning, prioritization | ROADMAP.md |

## Content conventions

- Placeholder sponsor names: `[Sponsor TBD]`
- Placeholder dates: `[Date TBD]`
- Unverified transmission claims must be labeled **symbolic** or **planned**
- Public-facing copy should feel awe-inspired but technically honest
