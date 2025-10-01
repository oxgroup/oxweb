"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import "./freeflow-carousel.css"

export interface Slide {
  src: string
  alt: string
  title: string
  subtitle: string
}

interface FreeflowCarouselProps {
  slides: Slide[]
  className?: string
}

export function FreeflowCarousel({ slides, className }: FreeflowCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const x = useMotionValue(0)

  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setSlideWidth(containerWidth * 0.8) // 80% of container width
      }
    }

    updateSlideWidth()
    window.addEventListener("resize", updateSlideWidth)
    return () => window.removeEventListener("resize", updateSlideWidth)
  }, [])

  useEffect(() => {
    const newX = -currentIndex * slideWidth
    animate(x, newX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
    })
  }, [currentIndex, slideWidth])

  const startAutoPlay = () => {
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
  }

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [slides.length])

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    const direction = offset < 0 ? 1 : -1

    let targetSlide = currentIndex + direction

    if (Math.abs(velocity) > 500) {
      targetSlide = currentIndex + (velocity > 0 ? -1 : 1)
    }

    targetSlide = Math.max(0, Math.min(slides.length - 1, targetSlide))

    setCurrentIndex(targetSlide)

    // Restart autoplay after drag
    stopAutoPlay()
    startAutoPlay()
  }

  return (
    <div ref={containerRef} className={cn("freeflow-carousel", className)}>
      <motion.div
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: -(slideWidth * (slides.length - 1)), right: 0 }}
        style={{ x }}
        onDragStart={stopAutoPlay}
        onDragEnd={handleDragEnd}
      >
        {slides.map((slide, index) => (
          <motion.div key={index} className="carousel-slide" style={{ width: slideWidth }}>
            <div className="slide-content">
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                className="slide-image"
              />
              <div className="slide-overlay">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}