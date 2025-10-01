"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveLogoProps {
  className?: string
  darkMode?: boolean
  logoType: 'theoxroom' | 'oxsteakfish'
}

export function ResponsiveLogo({ className, darkMode = false, logoType }: ResponsiveLogoProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const logos = {
    theoxroom: {
      src: "/images/TheOx_logo_Amarelo.png",
      alt: "THE OX ROOM STEAKHOUSE",
      width: 200,
      height: 100,
    },
    oxsteakfish: {
      src: "/images/ox-steak-fish-logo.png",
      alt: "OX STEAK & FISH",
      width: 200,
      height: 100,
    },
  }

  const selectedLogo = logos[logoType]

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={selectedLogo.src}
        alt={selectedLogo.alt}
        width={isMobile ? selectedLogo.width * 0.6 : selectedLogo.width}
        height={isMobile ? selectedLogo.height * 0.6 : selectedLogo.height}
        className={cn("object-contain transition-all duration-300", darkMode ? "brightness-0 invert" : "")}
        priority
      />
    </div>
  )
}
