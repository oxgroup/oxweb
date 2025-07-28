"use client"

import { ChefMenuSection } from "@/components/chef-menu-section"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ChefMenuPage() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      <MainNavigation />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">Menu do Chef</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
            Uma experiência gastronômica exclusiva preparada pelo Chef Bruno Faro,
            combinando técnicas clássicas com toques contemporâneos.
          </p>
        </motion.div>

        <ChefMenuSection />
      </div>

      <Footer />
    </div>
  )
}
