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
  geometry: 'sphere' | 'torus' | 'ring'
  position: [number, number, number]
  color: string
  speed: number
  scale?: number
}) {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed
      meshRef.current.rotation.y += delta * speed * 0.6
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
      {geometry === 'torus' && <torusGeometry args={[0.4, 0.12, 16, 32]} />}
      {geometry === 'ring' && <torusGeometry args={[0.45, 0.08, 16, 48]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function ContactSceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={0.8} />
      <pointLight position={[-4, -4, 3]} intensity={0.4} color="#f0abfc" />
      <pointLight position={[4, -3, 3]} intensity={0.4} color="#a5b4fc" />
      <FloatingShape geometry="sphere" position={[-1.8, 0.3, -2]} color="#e879f9" speed={0.15} scale={0.8} />
      <FloatingShape geometry="torus" position={[1.5, -0.4, -1.8]} color="#a5b4fc" speed={0.2} scale={0.7} />
      <FloatingShape geometry="ring" position={[0, 1, -2.2]} color="#c4b5fd" speed={0.18} scale={0.6} />
      <FloatingShape geometry="sphere" position={[1, 0.8, -2.5]} color="#ddd6fe" speed={0.12} scale={0.45} />
    </>
  )
}

export function ContactScene3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <ContactSceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
