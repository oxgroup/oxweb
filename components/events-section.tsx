"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import Link from "next/link"

export function EventsSection() {
  const eventTypes = [
    {
      title: "Eventos Corporativos",
      description: "Espaços exclusivos para reuniões e confraternizações empresariais",
      image: "/images/ox-corporate-events.png",
    },
    {
      title: "Celebrações Especiais",
      description: "O ambiente perfeito para aniversários, noivados e outras comemorações",
      image: "/images/ox-special-celebrations.png",
    },
    {
      title: "Eventos Privativos",
      description: "Privatize nossos espaços para uma experiência exclusiva e personalizada",
      image: "/images/ox-private-events.png",
    },
  ]

  return (
    <AnimatedSection direction="up" className="mb-16 md:mb-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Produção de Eventos</h2>
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          A OX se destaca na produção de eventos, oferecendo uma experiência única e personalizada com menus e pacotes
          de bebidas à escolha, onde cada detalhe é pensado para surpreender.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventTypes.map((event, index) => (
          <AnimatedSection key={index} delay={index * 0.1} direction="up" className="group">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-full bg-zinc-800">
              <div className="h-48">
                <AnimatedImage
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">{event.title}</h3>
                <p className="text-zinc-300 mb-4">{event.description}</p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-auto"
                >
                  <Link href="/theoxroom/eventoscwb">
                    <AnimatedButton className="bg-transparent border border-amber-600 hover:bg-amber-600/10 text-amber-500 rounded-full py-2 px-4 text-sm font-medium inline-flex items-center">
                      Saiba Mais
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-12 bg-zinc-800 rounded-xl p-6 md:p-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-2">Planeje Seu Evento</h3>
            <p className="text-zinc-300">
              Entre em contato com nossa equipe especializada para criar um evento personalizado e inesquecível.
            </p>
          </div>

          <Link href="/theoxroom/eventoscwb">
            <AnimatedButton className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-3 px-8 text-base font-medium w-full md:w-auto">
              Solicitar Orçamento
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
