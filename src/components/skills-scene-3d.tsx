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
  geometry: 'torus' | 'icosahedron' | 'torusKnot' | 'dodecahedron' | 'octahedron'
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
      meshRef.current.rotation.z += delta * speed * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'torus' && <torusGeometry args={[0.5, 0.15, 16, 32]} />}
      {geometry === 'icosahedron' && <icosahedronGeometry args={[0.6, 0]} />}
      {geometry === 'torusKnot' && <torusKnotGeometry args={[0.4, 0.12, 64, 8]} />}
      {geometry === 'dodecahedron' && <dodecahedronGeometry args={[0.5, 0]} />}
      {geometry === 'octahedron' && <octahedronGeometry args={[0.55, 0]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function SkillsSceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1} />
      <pointLight position={[-6, -6, 4]} intensity={0.6} color="#818cf8" />
      <pointLight position={[6, -4, 4]} intensity={0.6} color="#38bdf8" />
      <FloatingShape geometry="torusKnot" position={[-2.2, 0.8, -2]} color="#818cf8" speed={0.25} scale={0.9} />
      <FloatingShape geometry="dodecahedron" position={[2, -0.5, -1.8]} color="#38bdf8" speed={0.2} scale={0.85} />
      <FloatingShape geometry="icosahedron" position={[-1, -1.2, -2.2]} color="#a78bfa" speed={0.3} scale={0.7} />
      <FloatingShape geometry="octahedron" position={[1.5, 0.5, -2]} color="#c084fc" speed={0.22} scale={0.65} />
      <FloatingShape geometry="torus" position={[0, 1.5, -2.5]} color="#60a5fa" speed={0.28} scale={0.5} />
    </>
  )
}

export function SkillsScene3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <SkillsSceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
