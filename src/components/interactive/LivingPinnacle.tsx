"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Target } from "lucide-react"

interface PinnacleModelProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
}

function PinnacleModel({ position = [0, 0, 0], rotation = [0, 0, 0] }: PinnacleModelProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <octahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#008080"
        wireframe
        emissive="#008080"
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export function LivingPinnacle() {
  return (
    <div className="relative w-full h-screen bg-canvas-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Suspense fallback={null}>
            <PinnacleModel />
          </Suspense>
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl text-center px-4 sm:px-6 lg:px-8">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 backdrop-blur-sm border border-[#008080]/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-[#008080] rounded-full animate-pulse"></div>
            <span className="font-inter text-sm text-[#008080] font-medium">Exclusive to Shivamogga&apos;s Master Craftsmen</span>
          </div>

          <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-foundation-charcoal mb-6 leading-tight tracking-tight-architectural">
            <span className="block">Stop Chasing</span>
            <span className="block text-[#008080]">Clients.</span>
            <span className="block">Start Attracting Them.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-inter text-accent-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your business from unpredictable word-of-mouth to a steady stream of high-value clients with our Local Growth Engine—designed exclusively for Interior Designers, Architects, and Premium Contractors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-focus-blue hover:bg-focus-blue/90 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Link href="#contact" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Book Your Strategy Call
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-foundation-charcoal text-foundation-charcoal hover:bg-foundation-charcoal/5 font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Link href="#system" className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="w-12 h-12 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-[#008080]" />
              </div>
              <h3 className="font-montserrat font-semibold text-foundation-charcoal mb-2">Local Focus</h3>
              <p className="font-inter text-sm text-accent-gray">Exclusively serving Shivamogga&apos;s premium market</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-[#007BFF] rounded-sm"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-foundation-charcoal mb-2">Proven System</h3>
              <p className="font-inter text-sm text-accent-gray">3-pillar growth engine for consistent results</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A0A0] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-foundation-charcoal mb-2">High-Value Clients</h3>
              <p className="font-inter text-sm text-accent-gray">Attract premium projects, not price shoppers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
