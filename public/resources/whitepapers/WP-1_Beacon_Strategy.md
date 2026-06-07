# The Orchard Program — Whitepaper 1
## The Beacon Strategy
### Maximizing Detectability per Joule Across Deep Space
*Version 1.0*

---

## Abstract

The most efficient way to broadcast into deep space is **not** to radiate equally in all directions — that wastes essentially all of the energy. This paper develops the link-budget physics that favors a hybrid strategy: **narrow high-gain beams**, aimed at selected targets, **repeated** on a predictable cadence, in **quiet microwave bands**, with a **layered, self-replicating message**. We derive the detection range as a function of transmitter power, antenna size, receiver sensitivity, and integration time, and show that nearby stars are trivially reachable while galaxy-crossing detection requires civilization-scale apertures.

---

## 1. The Three Competing Goals

Any beacon trades off:

- **Coverage** — how much sky is illuminated,
- **Detectability** — received signal strength,
- **Efficiency** — useful range per joule.

Isotropic broadcasting covers $4\pi$ steradians but its flux falls as $1/R^2$ from a fixed total power, so it is faint everywhere. A pencil beam wastes nothing but illuminates one patch of sky at a time. The resolution is a **scanning lighthouse**: high-gain beams that revisit targets on a schedule, so a receiver does not need to be looking at the lucky instant.

---

## 2. Link-Budget Physics

### 2.1 Antenna gain and EIRP

A circular aperture of diameter $D$ at wavelength $\lambda$ has gain

$$G = \eta \left(\frac{\pi D}{\lambda}\right)^2,$$

where $\eta \approx 0.5\text{–}0.7$ is aperture efficiency. The transmitter's effective isotropic radiated power is

$$\text{EIRP} = P_t \, G_t.$$

**Worked example — Arecibo planetary radar.** $D = 305$ m, $f = 2.38$ GHz ($\lambda = 0.126$ m), $P_t = 1$ MW, $\eta = 0.6$:

$$G = 0.6\left(\frac{\pi \cdot 305}{0.126}\right)^2 \approx 3.5\times10^{7} \;(\approx 75\ \text{dBi}),$$
$$\text{EIRP} = 10^6 \times 3.5\times10^7 \approx 3\times10^{13}\ \text{W} \approx 20\ \text{TW}.$$

A single 1 MW transmitter on a large dish already radiates ~20 terawatts *in its beam direction* — proof that detectable interstellar beacons are within reach of existing technology.

### 2.2 Received power

Received power at range $R$ with receiver effective area $A_{\text{eff}}$:

$$P_r = \frac{\text{EIRP}\cdot A_{\text{eff}}}{4\pi R^2}, \qquad A_{\text{eff}} = \eta\,\frac{\pi D_r^2}{4}.$$

### 2.3 Detection threshold and range

By the radiometer equation, the minimum detectable power for a narrowband signal in channel bandwidth $B$, integration time $\tau$, at detection threshold $\text{SNR}$, against system temperature $T_{\text{sys}}$ is

$$P_{\min} = \text{SNR}\cdot k\,T_{\text{sys}}\sqrt{\frac{B}{\tau}}.$$

Setting $P_r = P_{\min}$ and solving for range:

$$\boxed{\,R_{\max} = \left(\frac{\text{EIRP}\cdot A_{\text{eff}}}{4\pi\,\text{SNR}\,k\,T_{\text{sys}}}\right)^{1/2}\left(\frac{\tau}{B}\right)^{1/4}\,}$$

The fourth-root dependence on integration time is the key lever: **patience buys range cheaply.**

### 2.4 Reference numbers

Take an Arecibo-class beam ($\text{EIRP}=2\times10^{13}$ W) detected by a 100 m dish ($A_{\text{eff}}\approx4.7\times10^3\ \text{m}^2$, $T_{\text{sys}}=25$ K), $\text{SNR}=10$, $B=1$ Hz:

| Integration time $\tau$ | $(\tau/B)^{1/4}$ | Detection range |
|---|---|---|
| 1 s (snapshot) | 1 | **~155 ly** |
| 100 s | 3.2 | ~490 ly |
| 3 hr (10⁴ s) | 10 | **~1,550 ly** |
| 12 days (10⁶ s) | 32 | ~5,000 ly |

To cross the galaxy (~50,000 ly to center, ~100,000 ly diameter) requires raising $\text{EIRP}\cdot A_{\text{eff}}\cdot\sqrt\tau$ by ~10³–10⁴ — i.e. phased arrays in the $10^{15}\text{–}10^{17}$ W range or kilometric receivers. Galaxy-scale signaling is a **civilizational monument**, not a pilot project.

### 2.5 Required EIRP by range (assuming an SKA/Arecibo-class receiver, 3-hr integration)

Inverting the range equation:

| Target | Distance | EIRP for SNR = 10 |
|---|---|---|
| Proxima Centauri | 4.25 ly | ~10¹⁰ W (a few MW on a 70 m dish) |
| 100 ly sphere | 100 ly | ~6×10¹² W (Arecibo-class) |
| Galactic center | ~26,000 ly | ~4×10¹⁷ W (phased array) |

Nearby stars are *easy*; the difficulty scales as $R^2$.

---

## 3. Beam Geometry: Why You Target, Not Sweep Blindly

Beamwidth (half-power) for a circular aperture: $\theta \approx 1.22\,\lambda/D$. For a 70 m dish at 1.5 GHz ($\lambda=0.2$ m):

$$\theta \approx 1.22\cdot\frac{0.2}{70} \approx 3.5\times10^{-3}\ \text{rad} \approx 0.2^\circ.$$

Solid angle $\Omega \approx \theta^2 \approx 1.2\times10^{-5}$ sr. Tiling the whole sky requires

$$N_{\text{beams}} = \frac{4\pi}{\Omega} \approx 1.05\times10^{6}\ \text{pointings.}$$

A million pointings cannot all be revisited often. Hence **target selection** (Section 5) and **galactic-plane sweeps** rather than uniform all-sky coverage.

The same beam comfortably illuminates a target system. At Proxima ($R = 4.02\times10^{16}$ m) the beam footprint is

$$w = \theta R \approx 3.5\times10^{-3}\cdot4.02\times10^{16} \approx 1.4\times10^{14}\ \text{m} \approx 940\ \text{AU},$$

far larger than a planetary system — so pointing accuracy is forgiving.

---

## 4. Frequency Choice

**Primary band — the "water hole," ~1.42–1.66 GHz.** Bracketed by the neutral-hydrogen line (1420 MHz) and the hydroxyl line (1612–1720 MHz), this microwave window is galactically quiet (low synchrotron and quantum noise) and "obvious" to any radio astronomer — H and OH frame the dissociation products of water. It is the natural meeting place.

**Secondary bands:** higher microwave windows; **pulsed optical/IR lasers** (extremely high gain from modest apertures, excellent for point-to-point); wideband data bursts after a detection marker is acknowledged.

A serious beacon is **multi-band**: a narrowband carrier for detectability, plus a wideband channel for payload.

---

## 5. Target Selection (priority order)

1. Nearest stars (Proxima, Alpha Cen A/B, Barnard's, Wolf 359, Lalande 21185, Sirius, Tau Ceti, Epsilon Eridani).
2. Confirmed exoplanet systems within ~100 ly.
3. Long-lived red dwarfs (common; multi-Gyr stable; large habitable-time budgets).
4. The galactic plane (most stars per beam).
5. Dense fields — globular clusters, the galactic center — for maximum "stars illuminated per pointing."

---

## 6. Message Architecture (layered)

| Layer | Content | Purpose |
|---|---|---|
| **1 — "This is artificial"** | Primes, hydrogen-line reference, binary counting, simple ratios | Pass the "not-natural" test |
| **2 — "Here is the key"** | Symbolic grammar, units, time/frequency standards, coordinate system | Make the rest decodable |
| **3 — "Here is who sent this"** | Biology, chemistry, astronomy, Earth's location, language, culture, honest uncertainty | The archive |
| **4 — "Build your own beacon"** | Construction and protocol instructions | **Turn receivers into transmitters** |

Layer 4 is the load-bearing innovation: the goal is not to be heard once but to *create more broadcasters* (see WP-4).

---

## 7. Cadence and Persistence

Transmit in scheduled cycles — e.g. minutes per target, revisited on a weekly/monthly pattern, sustained for **decades to centuries**, with mathematically predictable timing (so a recipient who detects the carrier can predict the next transmission and integrate across many passes). Repetition converts a one-in-a-million timing problem into near-certainty over the beacon's lifetime.

---

## 8. Best Physical Sites (preview of Phases 2–4)

| Site | Advantage | Phase |
|---|---|---|
| Earth | Cheapest, existing dishes | 1 |
| Lunar farside | Radio-quiet, large apertures, solar power | 2 |
| Solar orbit | No atmosphere, continuous sky, distributed arrays | 3 |
| Beyond 550 AU | Sun-as-lens ultra-high gain (WP-3) | 4 |

---

## 9. Conclusion

The efficient strategy is unambiguous: **directed, repeated, multi-band beams** at **selected targets**, with a **self-replicating layered message**. Detection range grows as the square root of EIRP and receiver area and the fourth root of integration time; nearby stars are reachable with megawatt-class transmitters today, while galaxy-scale reach is a long-term, array-scale endeavor. The practical entry point is WP-2: *Beacon One*.

---

### References & Benchmarks
Friis transmission and radiometer equations (standard); Arecibo S-band planetary radar (~2×10¹³ W EIRP); water-hole rationale (Oliver & Billingham, Project Cyclops, 1971); Breakthrough Listen target catalogs for practical target selection. Figures are order-of-magnitude engineering estimates.
