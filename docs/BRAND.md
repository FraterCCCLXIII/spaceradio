# SpaceRadio Brand

Voice, visual direction, and content standards for humans and agents.

## Brand essence

**Tagline (working):** *Music for the stars.*

**One-liner:** The first radio station sponsored by space — broadcasting cosmic sound on Earth and beaming it into the universe.

**Tone:** Awe without arrogance. Technical without jargon. Eternal without empty promises.

## Voice principles

| Do | Don't |
|----|-------|
| Inspire wonder about space and time | Overpromise "forever" without registry or proof |
| Use precise language for transmissions | Say "sent to the universe" for a web animation only |
| Celebrate missions, crews, and science | Imply endorsement from agencies without agreement |
| Sound like mission control meets art house | Sound like generic sci-fi trailer stock |
| Acknowledge uncertainty and scale | Use hype-bro startup voice |

## Voice examples

**Good — homepage hero:**
> SpaceRadio plays original music for Earth — and logs every transmission toward the stars. Listen now. Follow the beam.

**Bad:**
> We're literally broadcasting your vibes to infinity!!! 🚀🌌

**Good — transmission page:**
> Tier 1 Symbolic Beam — June 12, 2026. Track checksum archived. Tier 2 RF window: [Date TBD].

**Bad:**
> Your song is now eternal in the cosmos.

## Naming conventions

| Entity | Convention |
|--------|------------|
| Brand | **SpaceRadio** (one word, camel case in code: `SpaceRadio`) |
| Catalog label | **SpaceRadio Originals** |
| Archive program | **Eternity Archive** |
| Transmission log | **Transmission Registry** |
| AI pipeline | **AI Space Music Lab** |
| Show prefix | Mission names: *Artemis Hour*, *Mars Relay*, *Deep Sky Sessions* |

## Visual direction

### Mood

Deep space, mission control, golden-age radio meets contemporary minimal UI. Not neon arcade sci-fi; not corporate aerospace gray.

### Color palette (design tokens — adjust in implementation)

| Token | Role | Direction |
|-------|------|-----------|
| `--color-void` | Background | Near-black with blue undertone (#0a0e17) |
| `--color-signal` | Primary accent | Warm gold / amber (#e8b84a) — "lock acquired" |
| `--color-beam` | Secondary accent | Soft cyan (#5ec8e8) — transmission active |
| `--color-orbit` | Tertiary | Muted violet (#6b5b95) |
| `--color-text` | Body | Off-white (#e8eaed) |
| `--color-muted` | Secondary text | Cool gray (#8b95a8) |

### Typography

- **Display:** Geometric or humanist sans with slightly wide tracking (evokes mission labels)
- **Body:** Highly readable sans
- **Mono:** For timestamps, frequencies, registry IDs, checksums

### Imagery

- Real astronomy (JWST, Apollo archives, dish arrays) over CGI planets
- Waveforms, spectrograms, star fields used sparingly
- Sponsor logos on neutral dark panels — never cluttered

### Motion

- Slow orbital drift, subtle signal pulses
- Transmission events: brief "lock" animation, not explosive particles
- Respect `prefers-reduced-motion`

## UI patterns

- **Now playing** — track, mission tag, optional sponsor credit
- **Transmission status** — tier badge: Symbolic | Terrestrial | Orbital | Deep Space
- **Registry entry** — ID, UTC timestamp, checksum, tier, linked track
- **Countdown** — for scheduled beams; clear timezone (UTC primary)

## Content types

| Type | Description |
|------|-------------|
| **Manifesto** | Why music should leave Earth |
| **Mission brief** | Sponsor or event context for a show block |
| **Transmission report** | Post-event summary with verifiable details |
| **Curator note** | Short liner for AI Originals |
| **Education snippet** | 60-second explainers for schools |

## Legal / disclaimer copy (templates)

**Stream footer:**
> SpaceRadio Originals. Composition and sound recording © SpaceRadio [Year]. AI-assisted production; see track provenance.

**Symbolic transmission:**
> This Tier 1 event registers your selection in the Transmission Registry and schedules a symbolic beam. It does not constitute a physical deep-space transmission unless labeled Tier 3+.

**Sponsor attribution:**
> [Sponsor Name] presents [Program Name]. Sponsorship does not imply government or agency endorsement unless explicitly stated.

## Words to use

- transmission, registry, catalog, mission, orbit, archive, beam, lock, window, provenance, original, cosmos, deep space, sol, pass

## Words to avoid

- vibes, epic, literally (informal), disrupt, web3 (unless product requires), official NASA/ESA (without permission), forever (without archive context)

## Agent copy rules

1. Match tone to **BRAND.md** voice principles
2. Use `[TBD]` for unknown sponsors, dates, frequencies
3. Always show transmission **tier** when describing off-Earth events
4. Hero copy ≤ 25 words; supporting line ≤ 15 words
5. UTC for all mission and transmission timestamps in product UI
