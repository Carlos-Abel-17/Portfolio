import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function FloatingShape({
  geometry,
  position,
  color,
  speed,
  scale = 1,
}: {
  geometry: 'torus' | 'icosahedron' | 'torusKnot'
  position: [number, number, number]
  color: string
  speed: number
  scale?: number
}) {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed
      meshRef.current.rotation.y += delta * speed * 0.7
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
      {geometry === 'icosahedron' && <icosahedronGeometry args={[0.8, 0]} />}
      {geometry === 'torusKnot' && <torusKnotGeometry args={[0.5, 0.15, 64, 8]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-8, -8, 5]} intensity={0.5} color="#a78bfa" />
      <pointLight position={[8, -6, 5]} intensity={0.5} color="#60a5fa" />
      <FloatingShape geometry="torusKnot" position={[-2.5, 0.5, -2]} color="#a78bfa" speed={0.3} scale={1.2} />
      <FloatingShape geometry="icosahedron" position={[2.2, -0.3, -1.5]} color="#60a5fa" speed={0.2} scale={0.9} />
      <FloatingShape geometry="torus" position={[0, 1.2, -2.5]} color="#c084fc" speed={0.25} scale={0.7} />
    </>
  )
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
