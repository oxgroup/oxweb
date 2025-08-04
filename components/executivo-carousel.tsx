"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTouchSwipe } from "@/hooks/use-touch-swipe"

interface ExecutivoCarouselProps {
  autoPlayInterval?: number
  className?: string
}

export function ExecutivoCarousel({
  autoPlayInterval = 4000,
  className,
}: ExecutivoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Generate executivo images array
  const executivoImages = Array.from({ length: 7 }, (_, i) => ({
    src: `/images/executivo${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Executivo ${i + 1} - Vale-Presente OX`,
  }))

  const handleSwipeLeft = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % executivoImages.length)
    pauseAutoPlay()
    setTimeout(resumeAutoPlay, 1000)
  }

  const handleSwipeRight = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + executivoImages.length) % executivoImages.length)
    pauseAutoPlay()
    setTimeout(resumeAutoPlay, 1000)
  }

  const [swipeHandlers] = useTouchSwipe({
    threshold: 50,
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  })

  // Handle auto-play
  useEffect(() => {
    if (autoPlayInterval > 0) {
      startAutoPlay()
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [autoPlayInterval, currentIndex])

  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }

    autoPlayTimerRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % executivoImages.length)
    }, autoPlayInterval)
  }

  const pauseAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }

  const resumeAutoPlay = () => {
    if (autoPlayInterval > 0 && !autoPlayTimerRef.current) {
      startAutoPlay()
    }
  }

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      handleSwipeRight()
    } else if (info.offset.x < -threshold) {
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
      className={cn("relative w-full h-full overflow-hidden rounded-xl", className)}
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
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={executivoImages[currentIndex].src}
              alt={executivoImages[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10" 
          onClick={handlePrev} 
          aria-label="Imagem anterior"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10" 
          onClick={handleNext} 
          aria-label="Próxima imagem"
        >
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {executivoImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              index === currentIndex 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}