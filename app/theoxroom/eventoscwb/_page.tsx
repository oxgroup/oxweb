import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function EventosCWB() {
  const eventFeatures = [
    {
      title: "Menu Exclusivo",
      description: "Cardápio personalizado com cortes premium e opções para todos os gostos",
      icon: "🍽️",
      highlight: "Pratos assinados pelo Chef Bruno Faro"
    },
    {
      title: "Agilidade Premium",
      description: "Serviço eficiente e coordenado para garantir o timing perfeito do seu evento",
      icon: "⚡",
      highlight: "Equipe especializada em eventos"
    },
    {
      title: "Versatilidade Total",
      description: "Ambientes adaptáveis para diferentes formatos e tamanhos de evento",
      icon: "🎯",
      highlight: "Configurações personalizadas"
    },
    {
      title: "Elegância Sofisticada",
      description: "Design premium e atmosfera refinada para impressionar seus convidados",
      icon: "✨",
      highlight: "Ambiente award-winning"
    }
  ]

  const eventTypes = [
    {
      title: "Eventos Corporativos",
      description: "Reuniões executivas, confraternizações e lançamentos de produtos em ambiente sofisticado",
      image: "/images/ox-corporate-events.png",
      capacity: "50-120 pessoas",
      setup: "Configuração executiva",
      features: ["Apresentação audiovisual", "Menu executivo", "Serviço premium"]
    },
    {
      title: "Celebrações Especiais",
      description: "Aniversários, noivados, bodas e marcos importantes com todo requinte",
      image: "/images/ox-special-celebrations.png",
      capacity: "30-80 pessoas",
      setup: "Atmosfera íntima",
      features: ["Decoração personalizada", "Menu degustação", "Drinks autorais"]
    },
    {
      title: "Eventos Privativos",
      description: "Privatização completa para experiências exclusivas e totalmente personalizadas",
      image: "/images/ox-private-events.png",
      capacity: "80-200 pessoas",
      setup: "Espaço exclusivo",
      features: ["Ambiente privativo", "Chef dedicado", "Sommelier exclusivo"]
    }
  ]

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Header com navegação */}
      <MainNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] mb-20 md:mb-32 overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <AnimatedImage
              src="/images/ox-interior.png"
              alt="Interior elegante da OX Steakhouse para eventos"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-amber-800/30 z-10"></div>

          <AnimatedSection
            direction="down"
            className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col justify-center h-full"
          >
            <div className="max-w-4xl glass-effect p-8 md:p-12 rounded-2xl animate-float">
              <div className="inline-block bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full px-6 py-3 mb-6">
                <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Eventos Premium</span>
              </div>

              <h1 className="font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Eventos Corporativos & Celebrações
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                Transforme seu evento em uma experiência inesquecível. A OX oferece o ambiente perfeito, 
                com requinte, versatilidade e um serviço impecável para eventos corporativos e celebrações especiais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                  <span className="mr-3">Solicitar Orçamento</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </AnimatedButton>

                <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5">
                  <span className="mr-3">Falar com Especialista</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </AnimatedButton>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Diferenciais Section */}
        <AnimatedSection delay={0.2} className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Nossos Diferenciais</h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              O que torna a OX o local ideal para seus eventos mais importantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up" className="group">
                <div className="glass-effect rounded-2xl p-6 h-full hover:bg-amber-400/5 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">{feature.title}</h3>
                  <p className="text-zinc-300 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="mt-auto">
                    <span className="text-sm text-amber-500 font-medium">{feature.highlight}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Tipos de Eventos Section */}
        <AnimatedSection delay={0.3} className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Tipos de Eventos</h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Espaços versáteis e configurações personalizadas para cada ocasião
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up" className="group">
                <div className="glass-effect rounded-2xl overflow-hidden h-full hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <AnimatedImage
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-3">{event.title}</h3>
                    <p className="text-zinc-300 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-zinc-400">
                        <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {event.capacity}
                      </div>
                      <div className="flex items-center text-sm text-zinc-400">
                        <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {event.setup}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {event.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-zinc-300">
                          <svg className="w-3 h-3 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <AnimatedButton className="bg-transparent border border-amber-600 hover:bg-amber-600/10 text-amber-500 rounded-full py-2 px-6 text-sm font-medium w-full transition-all duration-300">
                      Solicitar Proposta
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Processo de Planejamento */}
        <AnimatedSection delay={0.4} className="mb-20 md:mb-32">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Processo de Planejamento</h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
                Nossa equipe especializada cuida de cada detalhe para garantir o sucesso do seu evento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-500">1</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Consultoria Inicial</h3>
                <p className="text-zinc-300">Entendemos suas necessidades e definimos o formato ideal para seu evento</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-500">2</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Planejamento Detalhado</h3>
                <p className="text-zinc-300">Criamos um plano completo com menu, decoração e cronograma personalizado</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-500">3</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Execução Premium</h3>
                <p className="text-zinc-300">Nossa equipe garante que tudo ocorra perfeitamente no dia do evento</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action Final */}
        <AnimatedSection direction="up" className="mb-16 md:mb-24 text-center">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-400/10"></div>
            <div className="absolute inset-0 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full px-6 py-3 mb-6">
                <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Transforme Seu Evento</span>
              </div>
              
              <h2 className="font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Realize Seu Evento dos Sonhos
              </h2>
              
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Entre em contato com nossa equipe de eventos e descubra como podemos criar uma experiência 
                única e memorável para você e seus convidados. Cada detalhe é pensado para superar suas expectativas.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-12 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                  <span className="mr-3">Solicitar Orçamento</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </AnimatedButton>

                <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-12 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5">
                  <span className="mr-3">Agendar Visita</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}