const base = import.meta.env.BASE_URL

export const resourceImages = {
  beamBlackholeCubesats: `${base}resources/images/beam-blackhole-cubesats.png`,
  solarLensRing: `${base}resources/images/solar-lens-ring.png`,
  orbitalCubeEarth: `${base}resources/images/orbital-cube-earth.png`,
  beaconDishSun: `${base}resources/images/beacon-dish-sun.png`,
  portalFutureCity: `${base}resources/images/portal-future-city.png`,
  portalDesertMoons: `${base}resources/images/portal-desert-moons.png`,
} as const
