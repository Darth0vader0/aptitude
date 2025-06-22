"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { ParticleBackground } from "../components/particle-background"
import { GradientBackground } from "../components/gradient-background"

export default function Home() {
  const [particlesError, setParticlesError] = useState(false)

  useEffect(() => {
    // Add error handling for particles
    const handleError = (event) => {
      if (event.message.includes("tsparticles")) {
        setParticlesError(true)
      }
    }

    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Background Animation */}
      <div className="relative w-full md:w-1/2 h-full">
        {particlesError ? <GradientBackground /> : <ParticleBackground />}
      </div>

    <div className="hidden md:flex w-1/2 h-full bg-background flex-col justify-center items-start p-12 relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/metaverse-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="max-w-md relative z-20">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Step up into your aptitude level</h1>
        <p className="text-muted-foreground mb-8">Learn, understand, and be ready for your exams</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button >Learn</Button>
          <Button variant="outline">
            About
          </Button>
          
        </div>
      </div>
    </div>

      {/* Mobile view - Content overlay */}
      <div className="absolute inset-0 flex md:hidden flex-col justify-center items-center p-6 bg-black/50 text-white">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Step up into your aptitude level</h1>
          <p className="mb-8">Learn, understand, and be ready for your exams</p>
          <div className="flex flex-col gap-4">
            <Button className="w-full">
              Learn
            </Button>
            <Button variant="outline" className="w-full">
              About
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
