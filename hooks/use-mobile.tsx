"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }

      // Initial check
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

      // Add event listener for resize
      mql.addEventListener("change", onChange)

      // Cleanup
      return () => mql.removeEventListener("change", onChange)
    }
  }, [])

  return isMobile
}
