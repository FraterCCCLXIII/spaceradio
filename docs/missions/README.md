# Mission concepts

Whitepaper-style mission specs for SpaceRadio transmission programs. These are **ideation documents** (v0.1) — not approved for implementation.

| Slug | Registry ID | Document |
|------|-------------|----------|
| `helios-relay` | SR-MIS-HEL-001 | [HELIOS_RELAY.md](HELIOS_RELAY.md) |
| `eidolon-mesh` | SR-MIS-EID-001 | [EIDOLON_MESH.md](EIDOLON_MESH.md) |
| `mnemosyne-cube` | SR-MIS-MNE-001 | [MNEMOSYNE_CUBE.md](MNEMOSYNE_CUBE.md) |

## Cross-mission map

| Mission | Primary tier | Station block | Archive role |
|---------|--------------|---------------|--------------|
| **Helios Relay** | 4 (photonic) | Helios Hour | Pointing + excerpt logs |
| **Eidolon Mesh** | 1–2 (trust/sync) | Eidolon Open Hour | Free open-beam masters |
| **Mnemosyne Cube** | 3 (orbital) | Mnemosyne Sol | Orbital provenance chain |

## Status

- Not yet registered in `src/lib/demo-data.ts`
- Not yet wired to `/missions` detail pages

When ready to surface on the site, add mission objects using the slugs above and link each page to its doc.
