"use client"

import { useState, useEffect } from "react"
import { AnimatedButton } from "@/components/animated-button"
import { ResponsiveLogo } from "@/components/responsive-logo"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { label: "Início", href: "/theoxroom" },
    { label: "Menu", href: "https://drive.google.com/file/d/1y8EtRdkCbgftQYCf4-crh7a38dWEGhT-/view" },
    { label: "Vinhos", href: "https://livemenu.app/menu/5bfeb704fa271c9ee3c5ee51" },
    { label: "Eventos", href: "/theoxroom/eventoscwb" },
    { label: "Delivery", href: "https://delivery.lexsis.com.br/oxsteak/index/26" },
    { label: "Contato", href: "/theoxroom/contato" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass-effect shadow-2xl shadow-black/20" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            <div className="flex items-center flex-shrink-0">
              <Link href="/theoxroom">
                <ResponsiveLogo className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href === "https://livemenu.app/menu/5bfeb704fa271c9ee3c5ee51" ? "https://livemenu.app/menu/5bfeb704fa271c9ee3c5ee51" : item.href}
                  target={item.href === "https://livemenu.app/menu/5bfeb704fa271c9ee3c5ee51" ? "_blank" : "_self"}
                  rel={item.href === "https://livemenu.app/menu/5bfeb704fa271c9ee3c5ee51" ? "noopener noreferrer" : undefined}
                  className="relative text-slate-300 hover:text-amber-400 transition-all duration-300 font-medium group py-2 px-2 rounded-lg hover:bg-amber-400/5 text-sm"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            {/* Botão Reservar separado */}
            <div className="hidden md:block flex-shrink-0">
              <a 
                href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton className="premium-gradient text-white rounded-full py-2 px-6 text-sm font-semibold shadow-lg hover:shadow-amber-500/25">
                  Reservar
                </AnimatedButton>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-zinc-300 hover:text-amber-500 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg z-40 shadow-xl md:hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-4 px-4 text-slate-300 hover:text-amber-400 transition-all duration-300 font-medium rounded-xl hover:bg-amber-400/5 border-b border-zinc-800/50 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <a 
                  href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-8 text-base font-semibold w-full shadow-lg">
                    Reservar Mesa
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
