"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion, AnimatePresence } from "framer-motion"
import { useTouchSwipe } from "@/hooks/use-touch-swipe"

export function MenuHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % menuItems.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)
  }

  const handleSwipeLeft = () => handleNext()
  const handleSwipeRight = () => handlePrev()

  const [swipeHandlers] = useTouchSwipe({
    threshold: 50,
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  })

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

  const menuItems = [
    {
      name: "Festival de Dry Aged",
      description: "Nosso tradicional festival Anual",
      image: "/images/ox-tomahawk-premium.png",
      category: "festival",
    },
    {
      name: "TOUR 2025",
      description: "Conheça os pratos do programa de benefícios",
      image: "/images/ox-ancho-angus.png",
      category: "benefits",
    },
    {
      name: "Vibe Dinner",
      description: "Um charmoso menu do chef para o jantar",
      image: "/images/ox-fish-special.png",
      category: "menu",
    },
    {
      name: "ESQUENTA DIA DOS PAIS",
      description: "Veja o que preparamos para você comemorar este dia especial",
      image: "/images/ox-wagyu-experience.png",
      category: "celebration",
    },
  ]

  return (
    <AnimatedSection direction="up" className="mb-16 md:mb-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Experiência Culinária</h2>
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          Descubra o sabor excepcional de nossos pratos, preparados com cortes premium e técnicas exclusivas para uma
          experiência gastronômica inigualável.
        </p>
      </div>

      {/* Desktop Layout - Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {menuItems.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.1} direction="up" className="group">
            <MenuCard item={item} />
          </AnimatedSection>
        ))}
      </div>

      {/* Mobile Layout - Carousel */}
      <div className="md:hidden relative" {...swipeHandlers}>
        <div className="relative overflow-hidden rounded-2xl">
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
              className="w-full"
            >
              <MenuCard item={menuItems[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect border border-amber-400/30 text-amber-400 hover:border-amber-400/60 hover:bg-amber-400/10 transition-all duration-300 flex items-center justify-center z-10"
            aria-label="Previous item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect border border-amber-400/30 text-amber-400 hover:border-amber-400/60 hover:bg-amber-400/10 transition-all duration-300 flex items-center justify-center z-10"
            aria-label="Next item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {menuItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-500 w-8 shadow-lg shadow-amber-500/50"
                  : "bg-zinc-600 hover:bg-amber-400/50"
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <AnimatedButton className="bg-transparent border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 rounded-full py-3 px-8 text-base md:text-lg font-medium inline-flex items-center">
          Ver Menu Completo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </AnimatedButton>
      </div>
    </AnimatedSection>
  )
}

// Componente separado para o card do menu
function MenuCard({ item }: { item: any }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg group">
      <AnimatedImage
        src={item.image}
        alt={item.name}
        width={800}
        height={500}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute top-4 left-4">
        <span
          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            item.category === "festival" 
              ? "bg-amber-600" 
              : item.category === "benefits" 
              ? "bg-green-600" 
              : item.category === "menu" 
              ? "bg-blue-600" 
              : "bg-purple-600"
          } text-white`}
        >
          {item.category === "festival" 
            ? "Festival" 
            : item.category === "benefits" 
            ? "BENEFÍCIOS" 
            : item.category === "menu" 
            ? "MENU" 
            : "COMEMORAÇÕES"}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.name}</h3>
        <p className="text-zinc-300 mb-4">{item.description}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          <AnimatedButton className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-2 px-6 text-sm font-medium inline-flex items-center">
            Saiba Mais
          </AnimatedButton>
        </motion.div>
      </div>
    </div>
  )
}
