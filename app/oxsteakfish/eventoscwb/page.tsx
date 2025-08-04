"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function EventosCWB() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      <MainNavigation />

      {/* Hero Section - Storytelling */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ox-corporate-events.png"
        >
          <source src="http://www.administrative.com.br/Amb.mov" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90 z-10"></div>
        
        <AnimatedSection direction="up" className="relative z-20 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block text-amber-400 text-lg font-medium mb-4 tracking-wider">
              ONDE HISTÓRIAS SE TORNAM LENDAS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent leading-tight">
              Eventos que<br />Marcam Épocas
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl text-slate-200 mb-12 leading-relaxed font-light"
          >
            Na OX Steak & Fish, cada evento é uma narrativa única.<br />
            Criamos experiências que se tornam memórias eternas, unindo o melhor da terra e do mar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <AnimatedButton className="premium-gradient text-white rounded-full py-4 px-12 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
              Conte Sua História
            </AnimatedButton>
            
            <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-full py-4 px-12 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300">
              Descobrir Mais
            </AnimatedButton>
          </motion.div>
        </AnimatedSection>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Storytelling Section */}
        <AnimatedSection className="py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">
              Cada Evento, Uma Jornada
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-16">
              Há mais de uma década, a OX Steak & Fish tem sido o palco de momentos decisivos. 
              Negócios que mudaram o rumo de empresas, celebrações que uniram famílias, 
              e encontros que criaram laços eternos. Aqui, não servimos apenas pratos excepcionais da terra e do mar - 
              servimos o cenário perfeito para suas histórias mais importantes.
            </p>
          </div>
        </AnimatedSection>

        {/* Experiências Narrativas */}
        <AnimatedSection className="py-24">
          <div className="space-y-32">
            {/* História 1 - Corporativo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <AnimatedImage
                  src="/images/ox-corporate-events.png"
                  alt="Evento corporativo na OX Steak & Fish"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                  Capítulo I: Negócios
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ambientes <br />que encantam os olhos
                </h3>
                <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                  A The Ox Room Steakhouse oferece <strong className="text-amber-400">ambientes extraordinários que transformam 
                  qualquer evento em uma experiência inesquecível</strong>. Localizada em um dos restaurantes 
                  mais deslumbrantes do mundo, premiado internacionalmente por sua 
                  decoração sofisticada e iluminação impecável, a casa disponibiliza espaços 
                  equipados com   <strong className="text-amber-400">infraestrutura completa </strong>de última geração, incluindo telas de 
                  alta definição e sistema de som profissional. Cada detalhe foi cuidadosamente 
                  pensado para criar uma atmosfera única e elegante, onde a <strong className="text-amber-400">beleza arquitetônica 
                  se harmoniza perfeitamente com a funcionalidade moderna</strong>, garantindo que seu evento
                   encante e impressione todos os convidados, proporcionando momentos memoráveis em
                   um cenário verdadeiramente espetacular. 
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    50-120 pessoas
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Ambiente executivo
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Serviço premium
                  </span>
                </div>
              </div>
            </div>

            {/* História 2 - Celebrações */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                  Capítulo II: Celebrações
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Momentos que<br />Ficam na Alma
                </h3>
                <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                  Bodas de ouro. Cinquenta anos de amor celebrados onde tudo começou - 
                  na mesa ao lado da janela, agora reservada para a família inteira. 
                  O <strong className="text-amber-400">menu degustação especial de carnes e frutos do mar, 
                  ambiente intimista e elegante</strong> criaram a atmosfera perfeita 
                  para uma celebração que nenhum neto jamais esquecerá.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    30-80 pessoas
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Atmosfera íntima
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Personalização total
                  </span>
                </div>
              </div>
              <div>
                <AnimatedImage
                  src="/images/ox-special-celebrations.png"
                  alt="Celebração especial na OX Steak & Fish"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* História 3 - Eventos Privativos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <AnimatedImage
                  src="/images/ox-private-events.png"
                  alt="Evento privativo na OX Steak & Fish"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                  Capítulo III: Exclusividade
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Quando o Extraordinário<br />Encontra o Exclusivo
                </h3>
                <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                  O restaurante inteiro reservado para uma noite. 
                  O chef dedicado, o sommelier exclusivo, cada detalhe 
                  pensado para impressionar com o melhor da terra e do mar. <strong className="text-amber-400">
                  Versatilidade total do espaço, elegância sofisticada 
                  e serviço impecável</strong> - quando apenas o melhor 
                  é suficiente para seus convidados mais importantes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    80-200 pessoas
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Espaço privativo
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm">
                    Experiência exclusiva
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Nossos Pilares */}
        <AnimatedSection className="py-24 text-center">
          <div className="glass-effect rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-500">
              Os Pilares da Excelência
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Menu Excepcional</h3>
                <p className="text-zinc-300 text-sm">
                  Cada prato é uma obra-prima do Chef Bruno Faro, 
                  combinando carnes premium e frutos do mar para sua ocasião especial.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Agilidade Premium</h3>
                <p className="text-zinc-300 text-sm">
                  Serviço sincronizado e eficiente que antecipa 
                  necessidades e supera expectativas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Versatilidade Total</h3>
                <p className="text-zinc-300 text-sm">
                  Ambientes que se transformam para criar 
                  a atmosfera perfeita para cada momento.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Elegância Atemporal</h3>
                <p className="text-zinc-300 text-sm">
                  Design sofisticado que impressiona e 
                  cria o cenário ideal para seus convidados.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action Final */}
        <AnimatedSection className="py-24 text-center">
          <div className="relative overflow-hidden rounded-3xl p-16 md:p-24">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-amber-400/20"></div>
            <div className="absolute inset-0 animate-shimmer"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Escreva Sua História
              </h2>
              
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Todo grande momento merece um cenário à sua altura. 
                Permita que a OX Steak & Fish seja o pano de fundo da sua próxima história inesquecível, 
                onde terra e mar se encontram para criar experiências únicas.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <AnimatedButton className="premium-gradient text-white rounded-full py-5 px-16 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                  <span className="mr-3">Começar Minha História</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </AnimatedButton>

                <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-full py-5 px-16 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300">
                  <span className="mr-3">Conhecer o Espaço</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  )
}