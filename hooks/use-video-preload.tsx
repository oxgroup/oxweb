"use client"

import { useEffect, useState } from "react"
import { preloadVideos } from "@/utils/video-preloader"

interface UseVideoPreloadProps {
  sources: string[]
  onComplete?: () => void
}

export function useVideoPreload({ sources, onComplete }: UseVideoPreloadProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!sources.length) {
      setIsLoading(false)
      setProgress(100)
      onComplete?.()
      return
    }

    let isMounted = true

    const loadVideos = async () => {
      try {
        // Load videos one by one to track progress
        let loadedCount = 0

        for (const src of sources) {
          await preloadVideos([src])
          loadedCount++

          if (isMounted) {
            const newProgress = Math.round((loadedCount / sources.length) * 100)
            setProgress(newProgress)
          }
        }

        if (isMounted) {
          setIsLoading(false)
          onComplete?.()
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error)
          setIsLoading(false)
        }
      }
    }

    loadVideos()

    return () => {
      isMounted = false
    }
  }, [sources, onComplete])

  return { isLoading, progress, error }
}
