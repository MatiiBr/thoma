'use client'

import { useRef, useMemo, useCallback } from 'react'
import type { RootState } from '@react-three/fiber'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function Polyhedron() {
  const groupRef = useRef<THREE.Group>(null!)
  const solidRef = useRef<THREE.Mesh>(null!)
  const wireframeMeshRef = useRef<THREE.Mesh>(null!)

  const baseGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.8, 1), [])

  // Clone geometry for both meshes so they share the same vertex structure
  const solidGeo = useMemo(() => baseGeometry.clone(), [baseGeometry])
  const wireGeo = useMemo(() => baseGeometry.clone(), [baseGeometry])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    // Slow rotation on the group (both meshes rotate together)
    groupRef.current.rotation.y += delta * 0.15
    groupRef.current.rotation.x += delta * 0.08

    // Gentle floating motion
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.15

    // Vertex displacement for morphing effect — apply to both geometries
    const original = baseGeometry.attributes.position

    for (let i = 0; i < original.count; i++) {
      const ox = original.getX(i)
      const oy = original.getY(i)
      const oz = original.getZ(i)

      const noise =
        Math.sin(t * 0.8 + ox * 2) * 0.06 +
        Math.cos(t * 0.6 + oy * 2) * 0.06 +
        Math.sin(t * 0.7 + oz * 2) * 0.04

      const nx = ox + ox * noise
      const ny = oy + oy * noise
      const nz = oz + oz * noise

      solidGeo.attributes.position.setXYZ(i, nx, ny, nz)
      wireGeo.attributes.position.setXYZ(i, nx, ny, nz)
    }

    solidGeo.attributes.position.needsUpdate = true
    wireGeo.attributes.position.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      {/* Solid faces with low opacity */}
      <mesh ref={solidRef} geometry={solidGeo}>
        <meshStandardMaterial
          color="#6C5CE7"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Wireframe overlay — same geometry, always in sync */}
      <mesh ref={wireframeMeshRef} geometry={wireGeo}>
        <meshBasicMaterial
          color="#6C5CE7"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

function GlowParticles() {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, count } = useMemo(() => {
    const count = 120
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return { positions, count }
  }, [])

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00E5A0"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function WireframeScene() {
  // Force correct sizing after Canvas mounts
  const handleCreated = useCallback((state: RootState) => {
    state.gl.setSize(
      state.gl.domElement.parentElement!.clientWidth,
      state.gl.domElement.parentElement!.clientHeight
    )
    state.camera.updateProjectionMatrix()
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      resize={{ debounce: 0 }}
      onCreated={handleCreated}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#6C5CE7" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00E5A0" />
      <Polyhedron />
      <GlowParticles />
    </Canvas>
  )
}
