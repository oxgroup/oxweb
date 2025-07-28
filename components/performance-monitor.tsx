"use client"

import { useEffect, useState } from "react"

interface PerformanceStats {
  fps: number
  memory?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
  }
  networkRequests: number
}

export function PerformanceMonitor({ visible = false }: { visible?: boolean }) {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    memory: undefined,
    networkRequests: 0,
  })

  useEffect(() => {
    if (!visible) return

    let frameCount = 0
    let lastTime = performance.now()
    let animationFrameId: number

    // Contador de FPS
    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime - lastTime >= 1000) {
        setStats((prev) => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
        }))

        frameCount = 0
        lastTime = currentTime
      }

      animationFrameId = requestAnimationFrame(measureFPS)
    }

    // Iniciar medição de FPS
    measureFPS()

    // Monitorar uso de memória (Chrome apenas)
    const memoryInterval = setInterval(() => {
      if ((performance as any).memory) {
        setStats((prev) => ({
          ...prev,
          memory: {
            usedJSHeapSize: Math.round((performance as any).memory.usedJSHeapSize / (1024 * 1024)),
            totalJSHeapSize: Math.round((performance as any).memory.totalJSHeapSize / (1024 * 1024)),
          },
        }))
      }
    }, 2000)

    // Monitorar requisições de rede
    const originalFetch = window.fetch
    let requestCount = 0

    window.fetch = function (...args) {
      requestCount++
      setStats((prev) => ({
        ...prev,
        networkRequests: requestCount,
      }))
      return originalFetch.apply(this, args)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearInterval(memoryInterval)
      window.fetch = originalFetch
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 bg-black/80 text-white p-2 text-xs z-50 font-mono">
      <div>FPS: {stats.fps}</div>
      {stats.memory && (
        <div>
          Memória: {stats.memory.usedJSHeapSize}MB / {stats.memory.totalJSHeapSize}MB
        </div>
      )}
      <div>Requisições: {stats.networkRequests}</div>
    </div>
  )
}
