"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import Link from "next/link"

export function EventsSection() {
  return (
    <AnimatedSection direction="up" className="mb-16 md:mb-24">
      {/* Background with gradient overlay */}
      <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-amber-500/10 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-amber-600/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 p-8 md:p-16">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full px-6 py-3 mb-6"
            >
              <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Eventos Exclusivos</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Produção de Eventos
            </motion.h2>
            
            <motion.p 
              className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A OX se destaca na produção de eventos, oferecendo uma experiência única e personalizada com menus e pacotes
              de bebidas à escolha, onde cada detalhe é pensado para surpreender.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Eventos Corporativos</h3>
                    <p className="text-zinc-300">Espaços exclusivos para reuniões de negócios, confraternizações e lançamentos empresariais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Celebrações Especiais</h3>
                    <p className="text-zinc-300">O ambiente perfeito para aniversários, noivados, casamentos e outras comemorações íntimas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Eventos Privativos</h3>
                    <p className="text-zinc-300">Privatize nossos espaços para uma experiência completamente exclusiva e personalizada.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/theoxroom/eventoscwb">
                  <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                    <span className="mr-3">Solicitar Orçamento</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl z-10" />
              <div className="relative overflow-hidden rounded-2xl">
                <AnimatedImage
                  src="/images/ox-corporate-events.png"
                  alt="Eventos Exclusivos OX Steakhouse"
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating card overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg">Ambiente Sofisticado</h4>
                      <p className="text-zinc-300 text-sm">Capacidade para até 120 pessoas</p>
                    </div>
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
