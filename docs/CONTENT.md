# SpaceRadio Content

Programming formats, music guidelines, and editorial standards.

## Programming philosophy

SpaceRadio is not background noise with a space wallpaper. Every hour should connect listeners to missions, science, or the feeling of scale — through music, voice, and metadata.

## Show formats

### Rotations (always-on)

| Rotation | Description | Tempo / mood |
|----------|-------------|----------------|
| **Deep Orbit** | Default ambient-space bed | Slow, expansive, minimal percussion |
| **Mission Pulse** | Rhythmic, forward motion | Mid-tempo, subtle drive — launch energy without EDM cliché |
| **Void Session** | Ultra-sparse, long-form | Very slow, high space, low density |
| **Docking** | Warm harmonic pieces | Resolving chords, "arrival" feeling |

### Scheduled shows (weekly+)

| Show | Format | Duration |
|------|--------|----------|
| **Mission Control** | Host + news-of-the-week + tracks | 60 min |
| **Launch Pad** | Pre-launch playlist + countdown sync | Event-based |
| **Deep Sky Sessions** | One mission deep dive | 45 min |
| **Data Sonification** | Science audio + explanation | 30 min |
| **Curator's Log** | Human picks from AI Lab drafts | 30 min |

### Sponsored blocks

Named hours tied to sponsor missions. See [SPONSORSHIPS.md](SPONSORSHIPS.md).

Template structure:

1. Sponsor sting (5 sec)
2. Mission brief voiceover (30 sec)
3. 45 min themed rotation
4. Closing attribution + registry CTA (15 sec)

## Mission objects

A **Mission** groups content for editorial and sponsor purposes.

**Examples:**

| Slug | Name | Tie-in |
|------|------|--------|
| `artemis` | Artemis Hour | Lunar program |
| `mars-relay` | Mars Relay | Mars missions |
| `jwst` | Deep Sky | JWST imagery releases |
| `commercial` | Commercial Space Weekly | Private launch sector |
| `voyager-tribute` | Voyager Tribute | Interstellar context |

Each mission has: description, hero image, optional sponsor, linked playlists, optional transmission schedule.

## Sound DNA (AI Space Music Lab)

Canonical aesthetic constraints for generation and curation.

### Sonic palette

**Encouraged:**

- Long reverb tails suggesting large spaces
- Subtle detuned pads, slow filter movement
- Low-frequency warmth (not club sub)
- Mallet, bowed glass, soft brass, tape-warped textures
- Occasional Morse-like rhythmic motifs (sparse)
- Field recordings: dish servo, cabin fan, EVA comm static (processed, legal)

**Discouraged:**

- Drop-build EDM, trap hats, generic lo-fi vinyl crackle
- Lyric vocals in default instrumental pipeline (exceptions curated)
- Cartoon "space" arpeggios and laser SFX
- Overcompressed brick-wall masters

### Tempo bands

| Band | BPM | Use |
|------|-----|-----|
| Drift | 50–70 | Sleep, deep work |
| Orbit | 70–95 | Default rotation |
| Ascent | 95–120 | Launch, sponsor stings |
| Burn | 120+ | Rare; event-only |

### Structure

- Prefer gradual evolution over sharp section changes
- 4–8 minute tracks for rotation; 10–20 min suites for specials
- Avoid radio-hostile hard endings; gentle fade or seamless loop points

### Metadata tags (required on publish)

```
genre: space-ambient | mission-pulse | void | docking | sonification
energy: 1-5
bpm: number
key: string (optional)
mission_slugs: string[]
ai_assisted: boolean
curator_approved: boolean
```

## Curator workflow

| Stage | Action |
|-------|--------|
| Intake | AI or human upload → `draft` |
| Review | Listen full track; check Sound DNA |
| Decision | Approve → `review` → `published`, or reject with reason |
| Reject reasons | `generic`, `mix_issue`, `off_brand`, `rights`, `duplicate` |
| Publish | Assign missions, write curator note (1–2 sentences) |

**Target:** <20% reject rate once pipeline matures; high reject rate early is acceptable.

## Voice / host guidelines

- Calm, precise, unhurried — mission control cadence
- Pronounce mission and craft names correctly
- Read timestamps in UTC on air
- No fake "live from orbit" unless literally true
- AI voice allowed for briefs; human host for flagship shows

## Sample curator notes

> *Orbital Decay* — Built from a 72 BPM pad stack tuned to Sound DNA "Void." Commissioned for JWST image release week.

> *Ridge Line* — Mission Pulse piece with ascent energy; licensed for Launch Pad rotation only.

## Legal / rights

- SpaceRadio Originals: default copyright SpaceRadio; AI assistance disclosed
- Third-party: explicit license on file before publish
- Public domain NASA audio: verify usage terms per asset
- No uncleared samples in AI training or output

## Editorial calendar (template)

| Cadence | Content |
|---------|---------|
| Daily | Rotation + now-playing mission tag |
| Weekly | Mission Control episode |
| Monthly | New Originals drop (10–20 tracks) |
| Event | Launch Pad + optional Tier 1 beam |
| Quarterly | Special transmission + registry report |

## Placeholder content for development

Use fictional missions until real sponsors exist:

- **Mission:** `demo-flight` — "Demonstration mission for SpaceRadio platform testing."
- **Track titles:** *Signal Lock*, *Apogee*, *Terminus*, *Goldstone Rain*
- **Host name:** Alex Chen (fictional)

Mark all demo content `status: draft` or `demo: true` in seed data.
