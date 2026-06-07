# The Orchard Program — Whitepaper 2
## Beacon One — The Phase 1 Pilot
### A Buildable Interstellar Beacon Using Today's Technology
*Version 1.0*

---

## Abstract

Beacon One is a near-term, fully fundable program to build and operate a deliberately detectable, repeatable, well-documented interstellar beacon aimed at the nearest ~100–1,000 star systems, carrying a message designed to be rebroadcast. It requires **no new physics** and sits within the cost envelope of an ambitious radio-astronomy facility: **$70M–$250M** for the recommended configuration. This paper specifies three build options, a recommended configuration, a costed bill of materials, a schedule, and the measurable success criteria.

---

## 1. Objective

> Prove that humanity can transmit a deliberately detectable, repeatable, decodable, and self-replicating signal to the nearest 100–1,000 star systems, and establish the open protocol that all later phases inherit.

Beacon One is explicitly **not** "cover the universe." It is the minimum viable demonstration of the WP-1 strategy.

---

## 2. Transmission Strategy

Per WP-1: **targeted beams**, not isotropic broadcast.

- Band: **1–10 GHz**, primary **1.42–1.66 GHz** (water hole).
- Waveform: narrowband artificial carrier + repeating mathematical pulse train, followed by a wideband data packet once a detection marker is established.
- Cadence: scheduled minutes-per-target, revisited weekly, sustained ≥10 years, with predictable timing.

**Reachability of the target set.** From WP-1, an Arecibo-class beam (EIRP ~2×10¹³ W) is detectable by a large dish out to ~1,500 ly with hours of integration. The nearest stars lie at 4–10 ly, so even a **70 m dish + ~100 kW–1 MW transmitter** (EIRP ~10¹¹–10¹² W) provides enormous link margin to the Phase 1 target list.

Light-travel (one-way) to representative targets:

| Target | Distance | Signal time |
|---|---|---|
| Proxima Centauri | 4.25 ly | 4.25 yr |
| Alpha Centauri A/B | ~4.37 ly | 4.37 yr |
| Barnard's Star | 5.96 ly | 5.96 yr |
| 100 ly sphere edge | 100 ly | 100 yr |
| Milky Way far side | ~100,000 ly | ~100,000 yr |

---

## 3. Target List (Phase 1)

Proxima Centauri · Alpha Centauri A/B · Barnard's Star · Wolf 359 · Lalande 21185 · Sirius · Tau Ceti · Epsilon Eridani · nearby red dwarfs · confirmed exoplanet systems within 100 ly.

---

## 4. Build Options

### Option A — Minimum Viable Beacon (lease existing dishes)
**$5M–$25M.** Use existing observatories for scheduled transmission windows.
- *Includes:* scientific/ethics review board, message-design team, transmitter access, signal encoder, public archive, target scheduler, regulatory clearance.
- *Pros:* fastest, cheapest, proves the protocol. *Cons:* limited power and schedule; no permanent beacon; political friction over shared-facility METI.

### Option B — Dedicated Earth Beacon Station (recommended core)
**$75M–$300M.** Build or retrofit a large steerable dish with a high-power transmitter.
- 30–70 m dish; 100 kW–1 MW transmitter; cryogenic receiver for self-verification; atomic-clock timing; software-defined-radio backend; automated scheduler; public message repository.
- Comparable in ambition to large radio-astronomy infrastructure but far smaller than SKA-scale (SKA Phase 1 ≈ €2B incl. early operations).

### Option C — Distributed Phased Array (bridge to Phase 2)
**$300M–$1.5B.** Many small antennas phased together.
- Hundreds–thousands of small dishes; phase synchronization; distributed power; timing network; beamforming compute; sky-sweep software.
- *Pros:* scalable, fault-tolerant, grows over decades, eventually exceeds a single dish. *Cons:* complex, costly, harder to regulate. The best long-term Phase-1→Phase-2 bridge.

---

## 5. Recommended Configuration & Costed Bill of Materials

A dedicated dish (Option B core) with a leased-dish pathfinder (Option A) to retire risk early.

| Component | Estimated cost |
|---|---|
| Scientific & legal planning | $2M–$5M |
| Message / protocol design | $1M–$3M |
| Observatory leasing & on-sky testing (pathfinder) | $5M–$20M |
| Custom high-power transmitter + encoder | $10M–$40M |
| Small dedicated dish or retrofit (30–70 m) | $30M–$100M |
| Operations, 10 years | $20M–$80M |
| Public archive + governance | $2M–$10M |
| **Total** | **$70M–$250M** |

**Funding context.** This is realistically backed by a government agency, a single patron, or a Breakthrough-style consortium. Breakthrough Listen committed ~$100M over 10 years for SETI infrastructure and telescope time — a direct benchmark for a serious privately funded program. FAST (~$170M) and the Allen Telescope Array (~$50M partial build) bracket the hardware scale.

---

## 6. Technology Readiness

Every subsystem is TRL 8–9 (flight/field-proven):

| Subsystem | State of the art |
|---|---|
| High-power microwave TX | Klystron/solid-state amplifiers, 100 kW–1 MW, routine in radar |
| Steerable dish | 34–100 m dishes operate worldwide (DSN, GBT) |
| Timing | Hydrogen-maser / optical-clock standards |
| Backend | Software-defined radio, GPU beamforming |
| Encoding | Mature error-correction and self-describing formats |

No technology development is on the critical path — only integration, siting, and governance.

---

## 7. Message Design (per WP-1, Layers 1–4)

- **L1 Artificiality:** primes, hydrogen-line reference, binary counting, simple ratios.
- **L2 Decode key:** mathematics, units, time, frequency, coordinate system.
- **L3 Human archive:** biology, chemistry, astronomy, Earth's location, languages, culture, honest statements of uncertainty.
- **L4 Replication request:** *Build your own beacon. Add your archive. Send it onward.*

The archive is compressed and forward-error-corrected; the carrier + pulse train act as an acquisition aid so a recipient can lock on before attempting to decode the wideband payload.

---

## 8. Schedule (illustrative, 10-year baseline)

| Year | Milestone |
|---|---|
| 0–1 | Governance board seated; ethics/METI review; message v1 frozen; regulatory filings |
| 1–2 | Pathfinder transmissions on leased dishes; protocol validated by self-reception |
| 2–4 | Dish procurement/retrofit; transmitter + encoder build |
| 4–5 | Integration; first dedicated beam to Proxima/Alpha Centauri |
| 5–10 | Operational cadence across full target list; public archive live; data released |
| 4.25+ | Earliest possible arrival at Proxima (signal in flight) |

---

## 9. Success Criteria

1. **Self-detection:** an independent receiver recovers and decodes the full layered message end-to-end.
2. **Protocol publication:** open frequency plan, grammar, and replication instructions released.
3. **Cadence:** ≥10 years of scheduled, predictable transmission to the full target list.
4. **Inheritability:** the standard is adopted/extensible by a second independent actor.

Note these are *engineering* success criteria. Confirmation of reception by another civilization is explicitly **not** a Phase 1 deliverable — light-travel time alone forecloses it.

---

## 10. Risks

- **METI ethics & policy.** Active transmission is contested; the program funds an explicit review board and operates transparently with a public archive.
- **Shared-facility politics (Option A).** Mitigated by moving to a dedicated asset (Option B).
- **Regulatory/spectrum.** Coordination for high-power transmission in protected radio-astronomy bands; budgeted under planning.
- **Cost growth.** Phased commitment: prove on leased dishes before committing to dedicated hardware.

---

## 11. Conclusion

A **$70M–$250M** Earth-based targeted beacon, repeated over a decade toward the nearest ~100–1,000 stars, is buildable now and establishes the protocol every later phase reuses. It is the on-ramp to the lunar array (Phase 2), the solar array (Phase 3), the SGL relays (WP-3), and ultimately the self-replicating Orchard Network (WP-4).

---

### References & Benchmarks
Breakthrough Listen ($100M/10 yr); SKA Phase 1 (~€2B incl. early ops); FAST (~$170M); Allen Telescope Array (~$50M partial); DSN/GBT dish engineering. All costs are order-of-magnitude estimates for planning, not quotations.
