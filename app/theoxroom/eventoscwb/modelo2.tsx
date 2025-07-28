"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function EventosModelo2() {
  const featuredEvents = [
    {
      category: "CORPORATIVO",
      title: "Summit Executivo 2024",
      description: "150 líderes empresariais reunidos para redefinir o futuro dos negócios",
      image: "/images/ox-corporate-events.png",
      stats: ["150 participantes", "Menu assinado", "Espaço privativo"]
    },
    {
      category: "CELEBRAÇÃO",
      title: "Bodas de Diamante",
      description: "Uma festa de 60 anos de casamento que tocou o coração de todos os presentes",
      image: "/images/ox-special-celebrations.png",
      stats: ["80 convidados", "Menu degustação", "Decoração especial"]
    },
    {
      category: "EXCLUSIVO",
      title: "Lançamento Premium",
      description: "Evento privativo para o lançamento da nova linha de produtos de luxo",
      image: "/images/ox-private-events.png",
      stats: ["200 VIPs", "Chef exclusivo", "Experiência única"]
    }
  ]

  const serviceHighlights = [
    {
      title: "Menu Executivo",
      subtitle: "Gastronomia de alto nível",
      description: "Pratos exclusivos do Chef Bruno Faro, criados especialmente para impressionar seus convidados mais exigentes.",
      image: "/images/chef-bruno-faro.png",
      features: ["Cardápio personalizado", "Ingredientes premium", "Apresentação impecável"]
    },
    {
      title: "Serviço Ágil",
      subtitle: "Excelência em cada detalhe",
      description: "Equipe altamente treinada que garante fluidez e elegância durante todo o evento.",
      image: "/images/ox-chef.png",
      features: ["Timing perfeito", "Serviço discreto", "Coordenação profissional"]
    },
    {
      title: "Versatilidade",
      subtitle: "Ambientes que se transformam",
      description: "Espaços modulares que se adaptam perfeitamente às necessidades do seu evento.",
      image: "/images/ox-interior.png",
      features: ["Layouts flexíveis", "Capacidade variável", "Tecnologia integrada"]
    },
    {
      title: "Elegância",
      subtitle: "Sofisticação em cada elemento",
      description: "Design premiado que cria a atmosfera perfeita para ocasiões especiais.",
      image: "/images/ox-lounge.png",
      features: ["Decoração sofisticada", "Iluminação premium", "Acústica perfeita"]
    }
  ]

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      <MainNavigation />

      {/* Magazine Hero - Editorial Style */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Column - Editorial Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold tracking-wider uppercase">
                  REVISTA EXCLUSIVA
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">EVENTOS</span><br />
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    PREMIUM
                  </span>
                </h1>
                <p className="text-xl text-zinc-300 max-w-xl">
                  Descubra como a OX Steakhouse redefine o conceito de eventos corporativos 
                  e celebrações especiais através de uma abordagem única que combina 
                  gastronomia excepcional, serviço impecável e ambientes versáteis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton className="bg-amber-500 hover:bg-amber-600 text-black rounded-none py-4 px-8 text-base font-bold tracking-wider uppercase transition-all duration-300">
                  Explorar Eventos
                </AnimatedButton>
                <AnimatedButton className="border-2 border-amber-500 hover:bg-amber-500/10 text-amber-500 rounded-none py-4 px-8 text-base font-bold tracking-wider uppercase transition-all duration-300">
                  Portfolio
                </AnimatedButton>
              </div>
            </div>

            {/* Right Column - Featured Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <AnimatedImage
                  src="/images/ox-interior.png"
                  alt="Interior elegante da OX"
                  width={600}
                  height={800}
                  className="w-full h-[600px] object-cover rounded-none shadow-2xl"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2">
                  <span className="text-amber-400 text-sm font-bold">AMBIENTE SOFISTICADO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Events Section - Magazine Grid */}
        <AnimatedSection className="py-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold tracking-wider uppercase mb-4">
              CASOS DE SUCESSO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Eventos que Fizeram História
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Conheça alguns dos eventos mais marcantes já realizados na OX Steakhouse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="group">
                <article className="bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 text-xs font-bold tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-zinc-300 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.stats.map((stat, statIndex) => (
                        <span key={statIndex} className="bg-zinc-700 text-zinc-300 px-2 py-1 text-xs rounded">
                          {stat}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-amber-400 hover:text-amber-300 text-sm font-medium uppercase tracking-wider transition-colors duration-300">
                      Leia Mais →
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Service Highlights - Magazine Layout */}
        <AnimatedSection className="py-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold tracking-wider uppercase mb-4">
              NOSSOS DIFERENCIAIS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Excelência em Cada Detalhe
            </h2>
          </div>

          <div className="space-y-16">
            {serviceHighlights.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <AnimatedImage
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-none shadow-xl"
                    />
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <span className="inline-block bg-amber-500 text-black px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4">
                        {service.subtitle}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="text-amber-400 hover:text-amber-300 font-medium uppercase tracking-wider transition-colors duration-300">
                      Saiba Mais →
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Statistics Section - Magazine Infographic */}
        <AnimatedSection className="py-24">
          <div className="glass-effect rounded-none p-12 md:p-16">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold tracking-wider uppercase mb-4">
                NÚMEROS QUE IMPRESSIONAM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Uma Década de Excelência
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center border-r border-zinc-700 last:border-r-0">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">500+</div>
                <div className="text-zinc-300 uppercase tracking-wider text-sm">Eventos Realizados</div>
              </div>
              <div className="text-center border-r border-zinc-700 last:border-r-0">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">50k+</div>
                <div className="text-zinc-300 uppercase tracking-wider text-sm">Convidados Atendidos</div>
              </div>
              <div className="text-center border-r border-zinc-700 last:border-r-0">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-zinc-300 uppercase tracking-wider text-sm">Satisfação Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">10</div>
                <div className="text-zinc-300 uppercase tracking-wider text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Editorial Quote Section */}
        <AnimatedSection className="py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative">
              <div className="text-6xl text-amber-500 absolute -top-8 -left-8 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-light text-zinc-100 leading-relaxed mb-8 italic">
                Na OX, não organizamos apenas eventos. Criamos experiências que permanecem 
                na memória muito tempo depois que a última taça foi erguida.
              </p>
              <footer className="text-amber-400 font-medium">
                — Chef Bruno Faro, Diretor Culinário
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>

        {/* Call to Action - Magazine Style */}
        <AnimatedSection className="py-24">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-none p-12 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-black text-amber-400 px-4 py-2 text-sm font-bold tracking-wider uppercase mb-6">
                EDIÇÃO EXCLUSIVA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Sua História Merece um Cenário Especial
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto">
                Descubra como podemos transformar sua próxima celebração ou evento corporativo 
                em uma experiência verdadeiramente memorável.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <AnimatedButton className="bg-black hover:bg-zinc-800 text-amber-400 rounded-none py-4 px-12 text-base font-bold tracking-wider uppercase transition-all duration-300">
                  Solicitar Proposta
                </AnimatedButton>
                <AnimatedButton className="border-2 border-black hover:bg-black/10 text-black rounded-none py-4 px-12 text-base font-bold tracking-wider uppercase transition-all duration-300">
                  Agendar Visita
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