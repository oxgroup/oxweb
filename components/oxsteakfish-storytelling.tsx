"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function OxSteakFishStorytellingSection() {
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
              OX Steak & Fish
            </motion.h2>

            <motion.p
              className="text-base md:text-lg mb-6 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Uma nova abordagem da culinária de carnes e peixes, o OX Steak & Fish combina a tradição do churrasco com a leveza dos frutos do mar. 
              Oferecemos uma experiência gastronômica única com <strong className="text-amber-500">ingredientes frescos e selecionados</strong>.
            </motion.p>

            <motion.p
              className="text-base md:text-lg mb-8 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nosso ambiente moderno e aconchegante é perfeito para qualquer ocasião. 
              Com um menu diversificado que agrada a todos os paladares, o OX Steak & Fish é o lugar ideal para 
             <strong className="text-amber-500"> almoços de negócios e jantares memoráveis</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/oxsteakfish/nossahistoriacwb">
                <AnimatedButton className="bg-amber-600 hover:bg-cyan-700 text-white rounded-full py-3 px-8 text-sm md:text-base font-medium inline-flex items-center">
                  Descubra Nossa Proposta
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-xl z-10" />
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
                poster="/images/ox-steak-fish-ambience.jpg"
              >
                <source src="http://www.oxsteakfish.com.br/img/bcvideo.mov" type="video/mp4" />
                {/* Fallback message for browsers that don't support video */}
                Seu navegador não suporta reprodução de vídeo .
              </video>
            </motion.div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full z-20">
              <p className="text-xs text-white font-medium">Carnes e Peixes Frescos</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
