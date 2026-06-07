import { resourceImages } from '../../lib/resource-images'
import type { OrchardWhitepaper } from './types'

export const orchardWhitepapers: OrchardWhitepaper[] = [
  {
    slug: 'wp-0-program-architecture',
    number: 0,
    title: 'The Orchard Program',
    subtitle: 'Program architecture, roadmap & opportunity',
    version: '1.0',
    abstract:
      'A staged, century-to-megayear architecture for placing human-originated information into the galactic environment in a form that survives the death of its senders. It replaces conversation between civilizations with communication between epochs — and positions SpaceRadio as the cultural layer that seeds Layer 3 of every beacon message.',
    heroImage: resourceImages.portalFutureCity,
    heroImageAlt: 'Portal between worlds — the Orchard Program vision',
    relatedSlugs: [
      'wp-1-beacon-strategy',
      'wp-2-beacon-one',
      'wp-3-solar-gravitational-lens',
      'wp-4-orchard-network',
    ],
    sections: [
      {
        id: 'temporal-isolation',
        title: 'The problem: temporal isolation',
        paragraphs: [
          'The Milky Way is ~13.6 billion years old. A technological civilization may persist for centuries or millennia — still less than 0.01% of galactic history. Two civilizations sharing the galaxy are overwhelmingly likely to miss each other in time.',
          'Real-time dialogue is the wrong design target. The right target is persistence and propagation — infrastructure that does not require the founders to be alive. Music, mathematics, and layered archives are how SpaceRadio participates in that persistence on Earth while the Orchard Program extends it outward.',
        ],
        chart: {
          caption: 'Coexistence probability (illustrative)',
          bars: [
            { label: '10? yr civilization lifetime', value: 2, display: '2×10??' },
            { label: '10? yr civilization lifetime', value: 200, display: '2×10??' },
            { label: 'Target: epoch-scale archive', value: 10000, display: '? 1 (design goal)' },
          ],
        },
      },
      {
        id: 'principles',
        title: 'Design principles',
        paragraphs: [
          'Every phase of the Orchard Program inherits the same message grammar SpaceRadio uses on-air: tier honesty, layered disclosure, and cultural payload that teaches replication.',
        ],
        table: {
          caption: 'Core principles',
          headers: ['Principle', 'Statement'],
          rows: [
            ['Persistence over presence', 'The network must survive the death of any contributor.'],
            ['Maximize detectability per joule', 'Never radiate isotropically when a beam will do.'],
            ['Repetition beats luck', 'Receivers need not listen at the lucky instant.'],
            ['Teach replication', 'Every message ends with instructions to build the next node.'],
            ['Layered disclosure', 'Math ? physics ? engineering ? culture, gated by readiness.'],
            ['Inheritability', 'No civilization owns the network; each adds one layer of a cathedral.'],
          ],
        },
      },
      {
        id: 'roadmap',
        title: 'Phased roadmap',
        paragraphs: [
          'Phases overlap. Phase 1 hardware and protocols are reused by every later phase. SpaceRadio Originals and transmission registry entries map to Layer 3 cultural archive in the beacon message standard.',
        ],
        table: {
          caption: 'Five phases of increasing ambition',
          headers: ['Phase', 'System', 'Horizon', 'Indicative cost', 'Capability'],
          rows: [
            ['1', 'Beacon One (Earth)', '0–10 yr', '$70M–$250M', 'Targeted beams; protocol proof'],
            ['2', 'Lunar farside array', '10–30 yr', '$2B–$10B', 'Radio-quiet; large aperture TX/RX'],
            ['3', 'Solar-orbit phased array', '30–80 yr', '$10B–$100B', 'Continuous sky access'],
            ['4', 'SGL relays (>550 AU)', '50–150 yr', '$1B–$5B / probe', 'Sun-as-antenna links'],
            ['5', 'Orchard seed probes', '100 yr–10? yr', 'Civilizational', 'Self-replication; deep-time archive'],
          ],
        },
        chart: {
          caption: 'Relative phase cost (log scale, normalized)',
          bars: [
            { label: 'Phase 1 — Beacon One', value: 1, display: '$70M–$250M' },
            { label: 'Phase 2 — Lunar array', value: 15, display: '$2B–$10B' },
            { label: 'Phase 3 — Solar array', value: 50, display: '$10B–$100B' },
            { label: 'Phase 4 — SGL probe', value: 8, display: '$1B–$5B each' },
            { label: 'Phase 5 — Orchard seeds', value: 100, display: 'Civilizational' },
          ],
        },
      },
      {
        id: 'opportunity',
        title: 'The opportunity',
        paragraphs: [
          'A dedicated transmitter is also a world-class radar and radio-science instrument. The deepest value is not being heard but not forgetting — and music is the most durable cultural signal humans have ever produced.',
          'Phase 1 sits inside the envelope of Breakthrough Listen (~$100M/10 yr), FAST (~$170M), and SKA Phase 1 (~€2B).',
        ],
        callout:
          'We are one civilization in one era. We may not survive to hear you; you may not survive to hear others. But if you receive this — build another beacon, add your archive, and send it onward.',
      },
    ],
    references:
      'Arecibo planetary radar (~2×10¹³ W EIRP); Breakthrough Listen; SKA Phase 1; FAST; Voyager 1 (>160 AU); solar gravitational lens (~550 AU, Eshleman 1979). Order-of-magnitude estimates.',
  },
  {
    slug: 'wp-1-beacon-strategy',
    number: 1,
    title: 'The Beacon Strategy',
    subtitle: 'Maximizing detectability per joule across deep space',
    version: '1.0',
    abstract:
      'The most efficient way to broadcast into deep space is not isotropic radiation — it is narrow high-gain beams, repeated on a predictable cadence, in quiet microwave bands, carrying a layered self-replicating message. SpaceRadio encodes Layer 3 culture as music and metadata riding the same waveform grammar.',
    heroImage: resourceImages.beaconDishSun,
    heroImageAlt: 'Earth-based dish transmitting a signal beam toward the Sun',
    relatedSlugs: ['wp-0-program-architecture', 'wp-2-beacon-one'],
    sections: [
      {
        id: 'link-budget',
        title: 'Link-budget physics',
        paragraphs: [
          'A circular aperture of diameter D at wavelength ? achieves gain G ? ?(?D/?)². Arecibo-class planetary radar already demonstrates ~2×10¹³ W EIRP from a 1 MW transmitter — proof that detectable interstellar beacons are within reach of existing technology.',
          'Detection range grows with the square root of EIRP and receiver area, and the fourth root of integration time. Patience buys range cheaply.',
        ],
        table: {
          caption: 'Detection range — Arecibo-class beam, 100 m receiver, SNR = 10',
          headers: ['Integration ?', 'Range'],
          rows: [
            ['1 s', '~155 ly'],
            ['100 s', '~490 ly'],
            ['3 hr', '~1,550 ly'],
            ['12 days', '~5,000 ly'],
          ],
        },
        chart: {
          caption: 'Detection range vs. integration time',
          bars: [
            { label: '1 second', value: 155, unit: 'ly' },
            { label: '100 seconds', value: 490, unit: 'ly' },
            { label: '3 hours', value: 1550, unit: 'ly' },
            { label: '12 days', value: 5000, unit: 'ly' },
          ],
        },
      },
      {
        id: 'eirp-targets',
        title: 'Required EIRP by range',
        paragraphs: [
          'Nearby stars are trivially reachable; galaxy-crossing detection requires civilization-scale apertures. SpaceRadio Tier 1–4 transmission program maps onto this ladder with explicit honesty at each step.',
        ],
        table: {
          caption: 'EIRP for SNR = 10 (SKA/Arecibo-class receiver, 3-hr integration)',
          headers: ['Target', 'Distance', 'EIRP required'],
          rows: [
            ['Proxima Centauri', '4.25 ly', '~10¹? W'],
            ['100 ly sphere', '100 ly', '~6×10¹² W'],
            ['Galactic center', '~26,000 ly', '~4×10¹? W'],
          ],
        },
      },
      {
        id: 'message-layers',
        title: 'Message architecture (layered)',
        paragraphs: [
          'Layer 4 is the load-bearing innovation: turn receivers into transmitters. SpaceRadio contributes Layer 3 — language, culture, and music — as the emotional and mathematical bridge any intelligence can test for artificiality before decoding prose.',
        ],
        table: {
          caption: 'Five-layer message stack',
          headers: ['Layer', 'Content', 'Purpose'],
          rows: [
            ['1', 'Primes, H-line reference, binary counting', 'Pass the not-natural test'],
            ['2', 'Grammar, units, coordinates, time standards', 'Make the rest decodable'],
            ['3', 'Biology, Earth, language, culture, music', 'The archive — SpaceRadio core'],
            ['4', 'Beacon construction instructions', 'Turn receivers into transmitters'],
            ['5', '(Orchard) Replication & seed templates', 'Epoch-scale propagation'],
          ],
        },
      },
      {
        id: 'frequency',
        title: 'Frequency & cadence',
        paragraphs: [
          'Primary band: the water hole (~1.42–1.66 GHz), bracketed by neutral hydrogen and hydroxyl — the dissociation products of water. A serious beacon is multi-band: narrowband carrier for detectability, wideband channel for payload.',
          'Transmit in scheduled cycles — minutes per target, revisited weekly, sustained for decades. Repetition converts a one-in-a-million timing problem into near-certainty.',
        ],
      },
    ],
    references:
      'Friis & radiometer equations; Arecibo S-band radar; water-hole rationale (Oliver & Billingham, 1971); Breakthrough Listen target catalogs.',
  },
  {
    slug: 'wp-2-beacon-one',
    number: 2,
    title: 'Beacon One',
    subtitle: 'The Phase 1 pilot — a buildable interstellar beacon',
    version: '1.0',
    abstract:
      'Beacon One is a near-term, fully fundable program to transmit a deliberately detectable, repeatable, decodable, self-replicating signal to the nearest ~100–1,000 star systems. No new physics. $70M–$250M for the recommended configuration. SpaceRadio provides the cultural payload and public archive.',
    heroImage: resourceImages.beamBlackholeCubesats,
    heroImageAlt: 'Beam from Earth through a constellation of cubesats toward deep space',
    relatedSlugs: ['wp-1-beacon-strategy', 'wp-3-solar-gravitational-lens'],
    sections: [
      {
        id: 'objective',
        title: 'Objective',
        paragraphs: [
          'Prove that humanity can transmit a deliberately detectable, repeatable, decodable, and self-replicating signal to the nearest 100–1,000 star systems, and establish the open protocol all later phases inherit.',
          'Beacon One is explicitly not "cover the universe." It is the minimum viable demonstration of the WP-1 strategy — with SpaceRadio as the living studio that curates what enters the archive.',
        ],
        callout:
          'Objective: prove the protocol, not wait for a reply. Light-travel time alone forecloses confirmation in Phase 1.',
      },
      {
        id: 'targets',
        title: 'Target list & light-travel',
        table: {
          caption: 'Phase 1 targets (representative)',
          headers: ['Target', 'Distance', 'One-way signal time'],
          rows: [
            ['Proxima Centauri', '4.25 ly', '4.25 yr'],
            ['Alpha Centauri A/B', '~4.37 ly', '4.37 yr'],
            ["Barnard's Star", '5.96 ly', '5.96 yr'],
            ['100 ly edge', '100 ly', '100 yr'],
            ['Milky Way far side', '~100,000 ly', '~100,000 yr'],
          ],
        },
      },
      {
        id: 'options',
        title: 'Build options',
        table: {
          caption: 'Three funding paths',
          headers: ['Option', 'Cost', 'Summary'],
          rows: [
            ['A — Lease existing dishes', '$5M–$25M', 'Fastest; proves protocol on shared facilities'],
            ['B — Dedicated station (recommended)', '$75M–$300M', '30–70 m dish; 100 kW–1 MW TX'],
            ['C — Distributed phased array', '$300M–$1.5B', 'Bridge to Phase 2; fault-tolerant scale'],
          ],
        },
        chart: {
          caption: 'Recommended bill of materials (Option B core)',
          bars: [
            { label: 'Planning & governance', value: 5, display: '$2M–$5M' },
            { label: 'Message / protocol design', value: 3, display: '$1M–$3M' },
            { label: 'Pathfinder leasing', value: 20, display: '$5M–$20M' },
            { label: 'Transmitter + encoder', value: 40, display: '$10M–$40M' },
            { label: 'Dedicated dish', value: 100, display: '$30M–$100M' },
            { label: '10-year operations', value: 80, display: '$20M–$80M' },
          ],
          maxValue: 100,
        },
      },
      {
        id: 'schedule',
        title: 'Schedule (10-year baseline)',
        table: {
          caption: 'Milestones',
          headers: ['Year', 'Milestone'],
          rows: [
            ['0–1', 'Governance seated; message v1 frozen; regulatory filings'],
            ['1–2', 'Pathfinder on leased dishes; self-reception validated'],
            ['2–4', 'Dish procurement; transmitter build'],
            ['4–5', 'First dedicated beam to Proxima / Alpha Cen'],
            ['5–10', 'Full target-list cadence; public archive live'],
            ['4.25+', 'Earliest signal arrival at Proxima (in flight)'],
          ],
        },
      },
      {
        id: 'success',
        title: 'Success criteria',
        paragraphs: [
          'Engineering success — not extraterrestrial confirmation. SpaceRadio transmission registry entries document every beam with tier honesty.',
        ],
        table: {
          headers: ['#', 'Criterion'],
          rows: [
            ['1', 'Independent receiver decodes full layered message end-to-end'],
            ['2', 'Open frequency plan, grammar, replication instructions published'],
            ['3', '?10 years scheduled transmission to full target list'],
            ['4', 'Standard adopted by a second independent actor'],
          ],
        },
      },
    ],
    references:
      'Breakthrough Listen ($100M/10 yr); SKA Phase 1; FAST (~$170M); ATA (~$50M partial). Order-of-magnitude estimates.',
  },
  {
    slug: 'wp-3-solar-gravitational-lens',
    number: 3,
    title: 'The Solar Gravitational Lens Relay',
    subtitle: 'Using the Sun as a ~25-kilometer antenna',
    version: '1.0',
    abstract:
      'A spacecraft beyond ~550 AU can use the Sun as a natural lens, achieving effective gains of order 10¹¹ at microwave wavelengths. The SGL is not a broadcasting tool — it is a deep-space relay amplifier. Mission Helios Relay and SpaceRadio Tier 4 photonic pathways align with this geometry.',
    heroImage: resourceImages.solarLensRing,
    heroImageAlt: 'Gravitational lens ring against the starfield',
    relatedSlugs: ['wp-2-beacon-one', 'wp-4-orchard-network'],
    sections: [
      {
        id: 'geometry',
        title: 'Focal geometry — 550 AU',
        paragraphs: [
          'Light grazing the solar limb is deflected by ? ? 4GM?/(c²R?) ? 1.75 arcseconds. Rays cross the axis at d_min ? R?/? ? 549 AU — about 14× Pluto\'s orbit and 3.3× Voyager 1\'s current distance.',
          'The focus is a half-line extending outward; a probe anywhere beyond 550 AU stays in focus along one axis at a time.',
        ],
      },
      {
        id: 'gain',
        title: 'Gain of the solar lens',
        paragraphs: [
          'At the hydrogen line (21 cm), literature-derived effective gains reach ~10¹¹ — equivalent to a conventional dish of ~25 km diameter. At optical wavelengths the effective aperture grows further.',
          'A modest watt-class probe at the focus achieves EIRP comparable to planetary radar — but only along the Earth?Sun?target axis.',
        ],
        chart: {
          caption: 'Equivalent dish diameter at 21 cm (illustrative)',
          bars: [
            { label: '70 m Earth dish', value: 70, unit: 'm' },
            { label: '305 m Arecibo', value: 305, unit: 'm' },
            { label: 'Solar lens equivalent', value: 25000, unit: 'm' },
          ],
        },
      },
      {
        id: 'propulsion',
        title: 'Getting there',
        table: {
          caption: 'Time to 550 AU by propulsion class',
          headers: ['Propulsion', 'Speed', 'Time to 550 AU'],
          rows: [
            ['Voyager-class', '~3.5 AU/yr', '~150 yr'],
            ['Solar-sail Oberth', '~20–30 AU/yr', '~20–50 yr'],
            ['Advanced nuclear-electric', '>40 AU/yr', '<15 yr'],
          ],
        },
        chart: {
          caption: 'Transit time comparison',
          bars: [
            { label: 'Chemical / gravity assist', value: 150, unit: 'yr' },
            { label: 'Solar Oberth sail', value: 35, unit: 'yr' },
            { label: 'Advanced electric', value: 12, unit: 'yr' },
          ],
        },
      },
      {
        id: 'cost',
        title: 'Cost & placement',
        paragraphs: [
          'Per-probe total ~$1B–$5B. Schedule: ~5–10 yr development, ~20–50 yr cruise, then decades of operation. SGL is Phase 3–4 — it amplifies selected point-to-point links after beacons find and invite.',
        ],
        table: {
          caption: 'Per-probe cost elements',
          headers: ['Element', 'Estimate'],
          rows: [
            ['Probe + SGL instrument', '$0.5B–$2B'],
            ['Solar-sail / sundiver stage', '$0.3B–$1B'],
            ['Launch', '$0.2B–$0.5B'],
            ['Operations (25–50 yr)', '$0.3B–$1.5B'],
          ],
        },
      },
    ],
    references:
      'Eshleman (Science, 1979); Maccone, Deep Space Flight and Communications; JPL solar-sail SGL concepts; Voyager 1 trajectory.',
  },
  {
    slug: 'wp-4-orchard-network',
    number: 4,
    title: 'The Orchard Network',
    subtitle: 'Self-propagating communication infrastructure on galactic timescales',
    version: '1.0',
    abstract:
      'The end-state: autonomous communication seeds that lie dormant, self-repair, replicate, and invite nearby intelligences to join and extend the network. Mission Mnemosyne Cube and the Eternity Archive are Earth-local precursors. The deepest function is preservation — music included — across cosmic time.',
    heroImage: resourceImages.portalDesertMoons,
    heroImageAlt: 'Portal to another world — epoch-scale communication',
    relatedSlugs: ['wp-0-program-architecture', 'wp-3-solar-gravitational-lens'],
    sections: [
      {
        id: 'seeds',
        title: 'From beacons to seeds',
        paragraphs: [
          'Where a beacon shouts, a seed waits, listens, and teaches the next builder. The Autonomous Interstellar Communication Seed (AICS) carries power, AI stewardship, sensors, manufacturing templates, and an invitation beacon.',
          'Mass class: 10 kg – 1 ton. Deployment: millions of seeds over millennia — most never find intelligence, and that is expected.',
        ],
        table: {
          caption: 'AICS subsystems',
          headers: ['Subsystem', 'Function'],
          rows: [
            ['Long-life power', 'Radioisotope / advanced nuclear'],
            ['AI stewardship', 'Fault management over millennia'],
            ['Astronomical sensors', 'Detect emerging technosignatures'],
            ['Manufacturing templates', 'Replicate from local material'],
            ['Comms hardware', 'Invitation beacon + join channel'],
            ['Resource extraction', 'Mine for self-repair and replication'],
          ],
        },
      },
      {
        id: 'propagation',
        title: 'Propagation model',
        paragraphs: [
          'With d ? 5 ly between systems, v = 0.01c, and T_dwell = 1,000 yr, the wavefront crosses the galaxy in ~15 Myr. Beyond ~0.05c, replication speed dominates cruise speed.',
        ],
        chart: {
          caption: 'Galaxy crossing time vs. cruise speed (T_dwell = 1,000 yr)',
          bars: [
            { label: 'v = 0.01c', value: 15, unit: 'Myr' },
            { label: 'v = 0.05c', value: 12, unit: 'Myr' },
            { label: 'v = 0.10c', value: 10, unit: 'Myr' },
          ],
        },
      },
      {
        id: 'survival',
        title: 'Deep-time survival',
        paragraphs: [
          'A single seed with hazard p = 10?? yr?¹ has survival s ? 0.37 over 10? yr. Redundancy is mandatory: S_net = 1 ? (1?s)^N.',
        ],
        table: {
          caption: 'Network survival after 10? yr (s = 0.37 per node)',
          headers: ['Nodes N', 'Network survival'],
          rows: [
            ['1', '37%'],
            ['10', '99%'],
            ['100', '>99.9999%'],
          ],
        },
        chart: {
          caption: 'Network survival probability',
          bars: [
            { label: '1 node', value: 37, display: '37%' },
            { label: '10 nodes', value: 99, display: '99%' },
            { label: '100 nodes', value: 100, display: '>99.99%' },
          ],
        },
      },
      {
        id: 'disclosure',
        title: 'Governance: layered disclosure',
        table: {
          caption: 'Release tiers',
          headers: ['Level', 'Content', 'Released when'],
          rows: [
            ['1', 'Mathematics, astronomy', 'Immediately'],
            ['2', 'Science', 'Basic protocol established'],
            ['3', 'Engineering', 'Demonstrated comprehension'],
            ['4', 'Cultural archives (incl. music)', 'Sustained engagement'],
            ['5', 'Unrestricted historical records', 'Full participation'],
          ],
        },
        callout:
          'We will probably die. Our descendants may vanish. Our planet may disappear. But intelligence itself need not forget.',
      },
      {
        id: 'endgame',
        title: 'Cosmological endgame',
        table: {
          headers: ['Timescale', 'State'],
          rows: [
            ['~10? yr', 'Galaxy populated with dormant nodes'],
            ['~10? yr', 'Most star systems contain archives'],
            ['~10? yr', 'Distributed nervous system for intelligence'],
          ],
        },
      },
    ],
    references:
      'von Neumann probes; Tipler (1980); Hart/Fermi-paradox literature; standard reliability theory for survival statistics.',
  },
]

export function getOrchardWhitepaper(slug: string) {
  return orchardWhitepapers.find((p) => p.slug === slug)
}
