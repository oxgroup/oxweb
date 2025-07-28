"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { VideoSlide } from "@/components/video-slide"
import { useTouchSwipe } from "@/hooks/use-touch-swipe"
import "./premium-carousel.css"

export interface CarouselSlide {
  type: "image" | "video"
  src: string
  alt: string
  caption?: string
  poster?: string // For video slides
}

interface PremiumCarouselProps {
  slides: CarouselSlide[]
  autoPlayInterval?: number
  className?: string
  pauseOnVideo?: boolean
}

export function PremiumCarousel({
  slides,
  autoPlayInterval = 5000,
  className,
  pauseOnVideo = true,
}: PremiumCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const currentSlide = slides[currentIndex]
  const isCurrentSlideVideo = currentSlide.type === "video"

  const handleSwipeLeft = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    pauseAutoPlay()
    setTimeout(resumeAutoPlay, 1000)
  }

  const handleSwipeRight = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    pauseAutoPlay()
    setTimeout(resumeAutoPlay, 1000)
  }

  const [swipeHandlers, swipeState] = useTouchSwipe({
    threshold: 50,
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  })

  // Handle auto-play
  useEffect(() => {
    if (autoPlayInterval > 0 && !(pauseOnVideo && isCurrentSlideVideo)) {
      startAutoPlay()
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [autoPlayInterval, currentIndex, pauseOnVideo, isCurrentSlideVideo])

  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }

    autoPlayTimerRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, autoPlayInterval)
  }

  const pauseAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }

  const resumeAutoPlay = () => {
    if (autoPlayInterval > 0 && !autoPlayTimerRef.current && !(pauseOnVideo && isCurrentSlideVideo)) {
      startAutoPlay()
    }
  }

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      // Swiped right
      handleSwipeRight()
    } else if (info.offset.x < -threshold) {
      // Swiped left
      handleSwipeLeft()
    }
  }

  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    pauseAutoPlay()
    setTimeout(resumeAutoPlay, 1000)
  }

  const handlePrev = () => {
    handleSwipeRight()
  }

  const handleNext = () => {
    handleSwipeLeft()
  }

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <div
      className={cn("premium-carousel", className)}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      {...swipeHandlers}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="premium-carousel-slide"
            drag={!isCurrentSlideVideo ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={!isCurrentSlideVideo ? handleDragEnd : undefined}
          >
            {currentSlide.type === "image" ? (
              <Image
                src={currentSlide.src || "/placeholder.svg"}
                alt={currentSlide.alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            ) : (
              <VideoSlide
                src={currentSlide.src}
                poster={currentSlide.poster}
                isActive={true}
                onLoadedData={handleVideoLoaded}
              />
            )}
            <div className="premium-carousel-overlay" />

            {currentSlide.caption && (
              <div className="premium-carousel-caption">
                <h3 className="text-lg md:text-xl font-bold">{currentSlide.caption}</h3>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Video controls indicator */}
        {isCurrentSlideVideo && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-md text-xs">Video</div>
        )}

        {/* Navigation arrows */}
        <button className="premium-carousel-arrow left" onClick={handlePrev} aria-label="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="premium-carousel-arrow right" onClick={handleNext} aria-label="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={cn(
              "premium-carousel-indicator",
              index === currentIndex && "active",
              slide.type === "video" && "premium-carousel-indicator-video",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
