"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface VideoSlideProps {
  src: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
  isActive?: boolean
  onLoadedData?: () => void
  showControls?: boolean
}

export function VideoSlide({
  src,
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  className,
  isActive = false,
  onLoadedData,
  showControls = false,
}: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      onLoadedData?.()
    }

    videoElement.addEventListener("loadeddata", handleLoadedData)
    videoElement.addEventListener("play", () => setIsPlaying(true))
    videoElement.addEventListener("pause", () => setIsPlaying(false))

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData)
      videoElement.removeEventListener("play", () => setIsPlaying(true))
      videoElement.removeEventListener("pause", () => setIsPlaying(false))
    }
  }, [onLoadedData])

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    if (isActive) {
      // Only attempt to play if the video is loaded
      if (isLoaded) {
        const playPromise = videoElement.play()

        // Handle the play promise to avoid the Uncaught (in promise) DOMException
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Auto-play was prevented:", error)
          })
        }
      }
    } else {
      videoElement.pause()
    }
  }, [isActive, isLoaded])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          isLoaded && isPlaying ? "opacity-100" : "opacity-0",
        )}
        poster={poster}
        autoPlay={autoPlay && isActive}
        muted={isMuted}
        loop={loop}
        playsInline
        preload="metadata"
        controls={showControls}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video controls overlay */}
      {isLoaded && !showControls && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
