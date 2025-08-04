"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function StorytellingSection() {
  return (
    <AnimatedSection direction="up" className="mb-16 md:mb-24 overflow-hidden">
      <div className="relative bg-zinc-800 rounded-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-amber-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-60 md:h-60 bg-amber-500/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 px-6 py-12 md:p-16 md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-6 text-amber-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              The OX Room Steakhouse
            </motion.h2>

            <motion.p
              className="text-base md:text-lg mb-6 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Localizada no Batel em Curitiba desde 2017, é considerada uma das mais belas e charmosas steakhouses do Brasil. 
              Inspirada nas melhores casas de carne americanas, especializamo-nos em <strong className="text-amber-500"> cortes altos 100% Angus e Wagyu Certificado</strong>.
            </motion.p>

            <motion.p
              className="text-base md:text-lg mb-8 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Seguimos o conceito farm to table com carnes de no máximo 90 dias do abate, desossadas em nosso açougue central. 
              Com atendimento de excelência, serviço de manobrista, hostess e American Bar, oferecemos o ambiente ideal para 
             <strong className="text-amber-500"> jantares especiais ou almoços executivos</strong>, complementando nossa seleção premium com opções de frutos do mar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/theoxroom/nossahistoriacwb">
                <AnimatedButton className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-3 px-8 text-sm md:text-base font-medium inline-flex items-center">
                  Conheça Nossa História
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
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-xl z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full md:h-[500px] object-cover"
                poster="/images/ox-ambience.jpg"
              >
                <source src="/images/cwbVideo.mov" type="video/mp4" />
                {/* Fallback message for browsers that don't support video */}
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </motion.div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full z-20">
              <p className="text-xs text-white font-medium">Ambiente Exclusivo</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
