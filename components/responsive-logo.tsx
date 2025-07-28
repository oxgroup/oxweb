"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveLogoProps {
  className?: string
  darkMode?: boolean
}

export function ResponsiveLogo({ className, darkMode = false }: ResponsiveLogoProps) {
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

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src="/images/TheOx_logo_Amarelo.png"
        alt="THE OX ROOM STEAKHOUSE"
        width={isMobile ? 120 : 200}
        height={isMobile ? 60 : 100}
        className={cn("object-contain transition-all duration-300", darkMode ? "brightness-0 invert" : "")}
        priority
      />
    </div>
  )
}
