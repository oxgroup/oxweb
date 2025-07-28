"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function GiftCardSection() {
  return (
    <AnimatedSection direction="up" className="mb-16 md:mb-24">
      <div className="bg-amber-600 rounded-2xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-amber-500/30 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-amber-700/30 rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 p-6 md:p-12 md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Vale-Presente OX</h2>
              <h3 className="text-lg md:text-xl font-medium mb-6 text-zinc-100">O Presente Perfeito</h3>

              <p className="text-base md:text-lg mb-6 text-zinc-100">
                Procurando o presente perfeito? O Vale-Presente/Cartão Presente OX Room Steak House é uma opção
                irresistível, oferecendo não apenas uma refeição deliciosa, mas momentos inesquecíveis de prazer
                gastronômico e bem-estar.
              </p>

              <p className="text-base md:text-lg mb-8 text-zinc-100">
                Disponível em diferentes valores, é o presente ideal para aniversários, datas comemorativas ou
                simplesmente para surpreender alguém especial com uma experiência única.
              </p>

              <div className="flex flex-wrap gap-4">
                <AnimatedButton className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full py-3 px-8 text-base font-medium inline-flex items-center">
                  Adquirir Vale-Presente
                </AnimatedButton>

                <AnimatedButton className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full py-3 px-8 text-base font-medium inline-flex items-center">
                  Saiba Mais
                </AnimatedButton>
              </div>
            </motion.div>
          </div>

          <div className="relative md:order-1">
            <AnimatedImage
              src="/images/ox-gift-card.png"
              alt="Vale-Presente OX Steakhouse"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-lg object-cover"
            />
            <div className="absolute top-4 left-4 bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold">
              Presente Especial
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
