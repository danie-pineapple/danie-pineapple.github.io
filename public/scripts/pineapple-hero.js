// ============================================================
// Piña 3D — hero centerpiece
// Three.js cargado desde CDN (jsdelivr) en el navegador del
// visitante — no requiere instalación ni build step.
//
// Comportamiento:
// 1. Busca un .glb real en /models/pineapple.glb (exportado
//    desde Maya). Si existe, lo usa.
// 2. Si no existe (o falla la carga), genera una piña
//    procedural de bajo poligonaje a juego con el logo/marca,
//    con degradado azul → coral en los vértices.
// 3. Si el CDN no carga (sin internet, bloqueado, etc.) deja
//    el fallback CSS (ícono del logo flotando) intacto —
//    el hero nunca se ve roto.
// ============================================================

const THREE_VERSION = '0.160.0'
const CDN_BASE = `https://cdn.jsdelivr.net/npm/three@${THREE_VERSION}`
const GLB_PATH = '/models/pineapple.glb'

const COLOR_TOP = 0x4453e8 // indigo
const COLOR_MID = 0x8a4fd8 // violet
const COLOR_BOTTOM = 0xf2784a // coral

function waitForElement(id, timeout = 6000) {
  return new Promise((resolve) => {
    const start = performance.now()
    const tick = () => {
      const el = document.getElementById(id)
      if (el) return resolve(el)
      if (performance.now() - start > timeout) return resolve(null)
      requestAnimationFrame(tick)
    }
    tick()
  })
}

async function init() {
  const stage = await waitForElement('pineapple-stage')
  const canvas = await waitForElement('pineapple-canvas')
  const fallback = document.getElementById('pineapple-fallback')
  if (!stage || !canvas) return

  let THREE
  try {
    THREE = await import(/* @vite-ignore */ `${CDN_BASE}/build/three.module.js`)
  } catch (err) {
    console.warn('[pineapple-hero] three.js no disponible, se mantiene el fallback CSS.', err)
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0.2, 6)

  scene.add(new THREE.AmbientLight(0x404060, 1.4))
  const warmLight = new THREE.DirectionalLight(0xffd9b3, 1.1)
  warmLight.position.set(3, 4, 5)
  scene.add(warmLight)
  const coolLight = new THREE.PointLight(0x5a7bff, 18, 20)
  coolLight.position.set(-4, 2, 3)
  scene.add(coolLight)

  const group = new THREE.Group()
  scene.add(group)

  function buildProceduralPineapple() {
    const body = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        flatShading: true,
        roughness: 0.4,
        metalness: 0.12,
      })
    )
    body.scale.set(0.82, 1.28, 0.82)

    const geo = body.geometry
    const posAttr = geo.attributes.position
    const colors = []
    const top = new THREE.Color(COLOR_TOP)
    const mid = new THREE.Color(COLOR_MID)
    const bottom = new THREE.Color(COLOR_BOTTOM)
    let minY = Infinity
    let maxY = -Infinity
    for (let i = 0; i < posAttr.count; i++) {
      const y = posAttr.getY(i)
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
    for (let i = 0; i < posAttr.count; i++) {
      const y = posAttr.getY(i)
      const t = (y - minY) / (maxY - minY)
      const c = new THREE.Color()
      if (t > 0.55) c.copy(mid).lerp(top, (t - 0.55) / 0.45)
      else c.copy(bottom).lerp(mid, t / 0.55)
      colors.push(c.r, c.g, c.b)
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    group.add(body)

    const leafMat = new THREE.MeshStandardMaterial({
      color: COLOR_TOP,
      flatShading: true,
      roughness: 0.45,
      metalness: 0.1,
    })
    const leafCount = 7
    for (let i = 0; i < leafCount; i++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.15, 4), leafMat)
      const angle = (i / leafCount) * Math.PI * 2
      const tilt = 0.55
      leaf.position.set(Math.cos(angle) * 0.18, 1.32, Math.sin(angle) * 0.18)
      leaf.rotation.set(Math.cos(angle) * tilt, angle, Math.sin(angle) * -tilt)
      leaf.rotation.z += Math.PI
      group.add(leaf)
    }

    return group
  }

  buildProceduralPineapple()

  function tryLoadGLB() {
    import(/* @vite-ignore */ `${CDN_BASE}/examples/jsm/loaders/GLTFLoader.js`)
      .then(({ GLTFLoader }) => {
        const loader = new GLTFLoader()
        loader.load(
          GLB_PATH,
          (gltf) => {
            group.clear()
            const model = gltf.scene
            const box = new THREE.Box3().setFromObject(model)
            const size = new THREE.Vector3()
            box.getSize(size)
            const scale = 2.4 / Math.max(size.x, size.y, size.z, 0.001)
            model.scale.setScalar(scale)
            const center = new THREE.Vector3()
            box.getCenter(center)
            model.position.sub(center.multiplyScalar(scale))
            group.add(model)
          },
          undefined,
          () => {
            /* no hay modelo real todavía — se mantiene el procedural */
          }
        )
      })
      .catch(() => {})
  }
  tryLoadGLB()

  function resize() {
    const rect = stage.getBoundingClientRect()
    const w = Math.max(rect.width, 1)
    const h = Math.max(rect.height, 1)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(stage)

  let mouseX = 0
  let mouseY = 0
  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1
    mouseY = (e.clientY / window.innerHeight) * 2 - 1
  })

  let visible = true
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
  })
  io.observe(stage)

  let revealed = false
  let raf = null
  const clock = new THREE.Clock()

  function tick() {
    raf = requestAnimationFrame(tick)
    if (!visible || document.hidden) return

    const t = clock.getElapsedTime()
    if (!prefersReducedMotion) {
      group.rotation.y += 0.0035
      group.position.y = Math.sin(t * 0.9) * 0.12
      group.rotation.x += (mouseY * 0.25 - group.rotation.x) * 0.04
      group.rotation.z += (-mouseX * 0.15 - group.rotation.z) * 0.04
    }

    renderer.render(scene, camera)

    if (!revealed) {
      revealed = true
      canvas.style.opacity = '1'
      if (fallback) fallback.style.opacity = '0'
    }
  }
  tick()

  window.addEventListener('beforeunload', () => {
    if (raf) cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
  })
}

init()
