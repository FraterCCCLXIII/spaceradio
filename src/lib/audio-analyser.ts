type AudioElementWithSource = HTMLAudioElement & {
  __spaceradioSource?: MediaElementAudioSourceNode
}

let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null
let frequencyData: Uint8Array | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null

  const AudioCtx = window.AudioContext
    ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

  if (!AudioCtx) return null

  if (!audioContext) {
    audioContext = new AudioCtx()
  }

  return audioContext
}

function getOrCreateSource(
  ctx: AudioContext,
  element: HTMLAudioElement,
): MediaElementAudioSourceNode | null {
  const tagged = element as AudioElementWithSource

  if (tagged.__spaceradioSource) {
    return tagged.__spaceradioSource
  }

  try {
    const source = ctx.createMediaElementSource(element)
    tagged.__spaceradioSource = source
    return source
  } catch {
    return tagged.__spaceradioSource ?? null
  }
}

export function bindAudioAnalyser(element: HTMLAudioElement): void {
  const ctx = getAudioContext()
  if (!ctx) return

  const source = getOrCreateSource(ctx, element)
  if (!source) return

  if (!analyser) {
    analyser = ctx.createAnalyser()
    analyser.fftSize = 1024
    analyser.smoothingTimeConstant = 0.25
    frequencyData = new Uint8Array(analyser.frequencyBinCount)
    source.connect(analyser)
    analyser.connect(ctx.destination)
  }

}

export async function resumeAudioAnalyser(): Promise<void> {
  const ctx = getAudioContext()
  if (!ctx) return
  if (ctx.state === 'suspended') {
    await ctx.resume()
  }
}

export function isAudioAnalyserActive(): boolean {
  return analyser !== null && frequencyData !== null
}

/**
 * Frequency-driven wave samples in [-1, 1].
 * Vibration originates at the center and radiates outward; amplitude tapers at both ends.
 */
export function readAudioWaveform(sampleCount: number, phase = 0): number[] {
  if (!analyser || !frequencyData || sampleCount <= 0) {
    return Array.from({ length: sampleCount }, () => 0)
  }

  analyser.getByteFrequencyData(frequencyData)

  const binMax = Math.max(1, Math.floor(frequencyData.length * 0.72))
  let energySum = 0
  for (let b = 0; b < binMax; b++) {
    energySum += frequencyData[b]
  }
  const centerEnergy = Math.pow(energySum / (binMax * 255), 0.75)

  const samples: number[] = []

  for (let i = 0; i < sampleCount; i++) {
    const t = i / Math.max(1, sampleCount - 1)
    const distFromCenter = Math.abs(t - 0.5) * 2
    const envelope = Math.pow(Math.cos((distFromCenter * Math.PI) / 2), 1.35)

    const bin = Math.min(binMax - 1, Math.floor(distFromCenter * binMax))
    const localEnergy = Math.pow(frequencyData[bin] / 255, 0.75)
    const energy = centerEnergy * 0.55 + localEnergy * 0.45

    const outward = distFromCenter - phase
    const carrier = Math.sin(outward * Math.PI * 14)
    const ripple = Math.sin(outward * Math.PI * 22) * 0.28
    samples.push((carrier + ripple) * energy * envelope)
  }

  return samples
}
