"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { ExecutivoCarousel } from "@/components/executivo-carousel"
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Menu do Chef</h2>
              <h3 className="text-lg md:text-xl font-medium mb-6 text-zinc-100">O Executivo Perfeito</h3>

              <p className="text-base md:text-lg mb-6 text-zinc-100">
                O Menu Executivo "Sugestões do Chef" da The Ox Room Steakhouse oferece uma experiência gastronômica completa de segunda a sexta, das 11h30 às 15h30. Com opções que vão do suculento Assado de Tiras na brasa ao refinado Ribeye à Cavalo e o delicado Peixe Branco grelhado, cada prato é cuidadosamente elaborado pelo chef.
              </p>

              <p className="text-base md:text-lg mb-8 text-zinc-100">
                 As sobremesas artesanais, como a Panacota com fava tonka e pêssegos na brasa ou o intenso Mousse de Chocolate, finalizam perfeitamente a refeição. Com preços de R$ 79 a R$ 99, este menu representa a harmonia ideal entre qualidade, criatividade e valor.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* <AnimatedButton className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full py-3 px-8 text-base font-medium inline-flex items-center">
                  Adquirir Vale-Presente
                </AnimatedButton>

                <AnimatedButton className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full py-3 px-8 text-base font-medium inline-flex items-center">
                  Saiba Mais
                </AnimatedButton> */}
              </div>
            </motion.div>
          </div>

          <div className="relative md:order-1">
            <div className="w-full h-[400px] relative">
              <ExecutivoCarousel className="w-full h-full shadow-lg" />
              <div className="absolute top-4 left-4 bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold z-20">
                Sugestão do Chef
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
