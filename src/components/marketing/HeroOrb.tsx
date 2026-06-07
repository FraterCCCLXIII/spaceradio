import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { snoiseGlsl } from './hero-orb-noise.glsl'
import './HeroOrb.css'

const RADIUS = 2.2
const PARTICLE_SIZE_MIN = 0.015
const PARTICLE_SIZE_MAX = 0.11
const ORB_SCALE = 1.35
const ORB_COLOR = 0x101a88

function createDotTexture(size = 32, color = '#ffffff') {
  const half = size * 0.5
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const circle = new Path2D()
  circle.arc(half, half, half, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill(circle)

  return new THREE.CanvasTexture(canvas)
}

function setupShader(
  material: THREE.PointsMaterial,
  radius: number,
  particleSizeMin: number,
  particleSizeMax: number,
) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.time = { value: 0 }
    shader.uniforms.radius = { value: radius }
    shader.uniforms.particleSizeMin = { value: particleSizeMin }
    shader.uniforms.particleSizeMax = { value: particleSizeMax }

    shader.vertexShader =
      'uniform float particleSizeMax;\n' +
      'uniform float particleSizeMin;\n' +
      'uniform float radius;\n' +
      'uniform float time;\n' +
      snoiseGlsl +
      '\n' +
      shader.vertexShader

    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `
        vec3 p = position;
        float n = snoise(vec3(p.x * 0.6 + time * 0.2, p.y * 0.4 + time * 0.3, p.z * 0.2 + time * 0.2));
        p += n * 0.4;

        float l = radius / length(p);
        p *= l;
        float s = mix(particleSizeMin, particleSizeMax, n);
        vec3 transformed = vec3(p.x, p.y, p.z);
      `,
    )

    shader.vertexShader = shader.vertexShader.replace(
      'gl_PointSize = size;',
      'gl_PointSize = s;',
    )

    material.userData.shader = shader
  }
}

function createMolecule(detail: number) {
  const group = new THREE.Object3D()
  const texture = createDotTexture()
  if (!texture) return group

  const geometry = new THREE.IcosahedronGeometry(1, detail)
  const material = new THREE.PointsMaterial({
    map: texture,
    blending: THREE.AdditiveBlending,
    color: ORB_COLOR,
    depthTest: false,
    transparent: true,
  })

  setupShader(material, RADIUS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX)

  const mesh = new THREE.Points(geometry, material)
  group.add(mesh)

  return group
}

interface MoleculeHandle {
  group: THREE.Object3D
  material: THREE.PointsMaterial
  mesh: THREE.Points
}

function getMoleculeParts(group: THREE.Object3D): MoleculeHandle | null {
  const mesh = group.children[0]
  if (!(mesh instanceof THREE.Points)) return null
  const material = mesh.material
  if (!(material instanceof THREE.PointsMaterial)) return null
  return { group, material, mesh }
}

export function HeroOrb() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const detail = reduced ? 16 : 32

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 2.1

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const moleculeGroup = createMolecule(detail)
    moleculeGroup.scale.setScalar(ORB_SCALE)
    scene.add(moleculeGroup)
    const molecule = getMoleculeParts(moleculeGroup)

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    let frame = 0
    const tick = () => {
      frame = requestAnimationFrame(tick)
      const time = performance.now() * 0.001

      if (molecule && !reduced) {
        molecule.mesh.rotation.set(0, time * 0.2, 0)
        const shader = molecule.material.userData.shader as
          | { uniforms: { time: { value: number } } }
          | undefined
        if (shader) shader.uniforms.time.value = time
      }

      renderer.render(scene, camera)
    }

    tick()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      moleculeGroup.traverse((child) => {
        if (child instanceof THREE.Points) {
          child.geometry.dispose()
          const mat = child.material
          if (mat instanceof THREE.Material) {
            if ('map' in mat && mat.map instanceof THREE.Texture) mat.map.dispose()
            mat.dispose()
          }
        }
      })
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="hero-orb" aria-hidden />
}
