'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface ModelViewerProps {
  src: string
  alt?: string
}

export function ModelViewer({ src, alt = '3D Model' }: ModelViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current
    const w = el.clientWidth
    const h = el.clientHeight || 480

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    el.appendChild(renderer.domElement)

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 1000)
    camera.position.set(0, 1, 3)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambient)
    const dirLight = new THREE.DirectionalLight(0xffffff, 2)
    dirLight.position.set(5, 10, 7)
    dirLight.castShadow = true
    scene.add(dirLight)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
    fillLight.position.set(-5, 2, -5)
    scene.add(fillLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.2
    controls.enablePan = false
    controls.minDistance = 0.5
    controls.maxDistance = 10

    // Stop auto-rotate on interaction
    renderer.domElement.addEventListener('pointerdown', () => {
      controls.autoRotate = false
    })

    // Load GLB
    const loader = new GLTFLoader()
    loader.load(
      src,
      (gltf) => {
        const model = gltf.scene

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2 / maxDim
        model.scale.setScalar(scale)
        model.position.sub(center.multiplyScalar(scale))

        scene.add(model)

        // Fit camera
        camera.position.set(0, size.y * scale * 0.5, maxDim * scale * 2)
        controls.target.set(0, 0, 0)
        controls.update()
      },
      undefined,
      (err) => console.warn('GLB load error:', err)
    )

    // Resize handler
    const onResize = () => {
      const nw = el.clientWidth
      const nh = el.clientHeight || 480
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    // Animate
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [src])

  return (
    <div className="relative w-full h-full min-h-[480px]">
      <div ref={mountRef} className="w-full h-full min-h-[480px]" aria-label={alt} />
      <p className="absolute bottom-3 right-3 font-mono text-xs opacity-30 select-none pointer-events-none">
        drag to rotate · scroll to zoom
      </p>
    </div>
  )
}
