"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function ChefSection() {
  return (
    <AnimatedSection direction="right" className="mb-16 md:mb-24">
      <div className="bg-zinc-800 rounded-2xl overflow-hidden">
        <div className="md:grid md:grid-cols-2">
          <div className="relative h-[300px] md:h-auto">
            <AnimatedImage
              src="/images/dry-aged-showcase.png"
              alt="Dry Aged Showcase"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
              <h3 className="text-2xl font-bold text-white">Dry Aging</h3>
            </div>
          </div>

          <div className="p-6 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-500">Dry Aging</h3>
              <h4 className="text-lg md:text-xl font-medium mb-6 text-zinc-300">A Arte de Elevar Carnes e Peixes à Perfeição</h4>

              <p className="text-base md:text-lg mb-6 text-zinc-300">
                Na <strong className="text-amber-500">Ox Steakhouse</strong>, dominamos a técnica centenária do dry aging, 
                aplicando-a não apenas aos nossos <strong className="text-amber-500">cortes Angus de excelência</strong>, mas também a peixes selecionados. Este processo 
                de maturação natural em ambiente controlado transforma carnes e peixes em verdadeiras obras-primas gastronômicas, 
                concentrando <strong className="text-amber-500">sabores únicos e criando texturas incomparáveis</strong> que elevam cada refeição a uma experiência sensorial inesquecível.
              </p>

              <div className="mb-6">
                <a href="/theoxroom/dry-aging">
                  <AnimatedButton className="premium-gradient text-white rounded-full py-3 px-8 text-sm md:text-base font-medium inline-flex items-center">
                    Mais Sobre Dry Aging
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </AnimatedButton>
                </a>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
                <p className="text-amber-400 italic">"O tempo transforma carnes e peixes em histórias para serem saboreadas."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
