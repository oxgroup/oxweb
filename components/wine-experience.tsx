"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function WineExperience() {
  return (
    <AnimatedSection direction="left" className="mb-16 md:mb-24">
      <div className="bg-zinc-800 rounded-2xl overflow-hidden">
        <div className="md:grid md:grid-cols-2 items-center">
          <div className="p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Farm to Table</h2>
          

              <p className="text-base md:text-lg mb-8 text-zinc-300">
                O conceito Farm to Table da The OX Room Steakhouse vai além de uma filosofia 
                gastronômica – é nosso compromisso com a excelência. Através do nosso açougue 
                central, realizamos toda a desossa do Angus e Wagyu, <strong className="text-amber-500">permitindo padronizar 
                qualidade, maciez, sabor e tamanho de cada corte</strong>. Este processo nos 
                garante controle total sobre a data exata de cada lote e rastreabilidade 
                completa da origem, mantendo carnes com no máximo 90 dias do abate. 
                Assim, levamos até sua mesa uma mistura única de qualidade e essência, <strong className="text-amber-500">conectando 
                você diretamente com a origem dos ingredientes através de um processo artesanal 
                que respeita o tempo da natureza e a tradição</strong> da melhor culinária.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/theoxroom/farm-to-table">
                  <AnimatedButton className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-2 px-6 text-sm md:text-base font-medium inline-flex items-center">
                    Saiba Mais
                  </AnimatedButton>
                </a>

                
              </div>
            </motion.div>
          </div>

          <div className="relative h-[300px] md:h-[500px]">
            <AnimatedImage
              src="/images/farmtotable.png"
              alt="Seleção de vinhos da OX Steakhouse"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/80 via-zinc-800/40 to-transparent md:bg-gradient-to-l" />

            <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm p-4 rounded-lg max-w-xs hidden md:block">
              <p className="text-amber-400 font-medium mb-2">Harmonização Perfeita</p>
              <p className="text-zinc-300 text-sm">
                Nossos sommeliers estão à disposição para recomendar a harmonização perfeita para sua refeição.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
