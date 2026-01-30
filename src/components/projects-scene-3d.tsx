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
  geometry: 'box' | 'torusKnot' | 'octahedron' | 'tetrahedron'
  position: [number, number, number]
  color: string
  speed: number
  scale?: number
}) {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed
      meshRef.current.rotation.y += delta * speed * 0.8
      meshRef.current.rotation.z += delta * speed * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'box' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {geometry === 'torusKnot' && <torusKnotGeometry args={[0.45, 0.12, 64, 8]} />}
      {geometry === 'octahedron' && <octahedronGeometry args={[0.6, 0]} />}
      {geometry === 'tetrahedron' && <tetrahedronGeometry args={[0.55, 0]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.75}
      />
    </mesh>
  )
}

function ProjectsSceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1} />
      <pointLight position={[-6, -6, 4]} intensity={0.6} color="#2dd4bf" />
      <pointLight position={[6, -4, 4]} intensity={0.6} color="#22d3ee" />
      <FloatingShape geometry="box" position={[-2, 0.5, -2]} color="#14b8a6" speed={0.22} scale={0.9} />
      <FloatingShape geometry="torusKnot" position={[2, -0.5, -1.8]} color="#06b6d4" speed={0.28} scale={0.75} />
      <FloatingShape geometry="octahedron" position={[-1, -1, -2.2]} color="#0d9488" speed={0.25} scale={0.7} />
      <FloatingShape geometry="tetrahedron" position={[1.2, 0.8, -2]} color="#22d3ee" speed={0.2} scale={0.65} />
      <FloatingShape geometry="box" position={[0, 1.3, -2.5]} color="#5eead4" speed={0.18} scale={0.5} />
    </>
  )
}

export function ProjectsScene3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <ProjectsSceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
