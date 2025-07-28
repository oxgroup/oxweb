"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function EventosModelo3() {
  const essentials = [
    {
      number: "01",
      title: "Menu",
      subtitle: "Culinária excepcional",
      description: "Pratos exclusivos criados pelo Chef Bruno Faro para impressionar."
    },
    {
      number: "02", 
      title: "Agilidade",
      subtitle: "Serviço impecável",
      description: "Timing perfeito e coordenação profissional em cada momento."
    },
    {
      number: "03",
      title: "Versatilidade", 
      subtitle: "Espaços adaptáveis",
      description: "Ambientes que se transformam conforme suas necessidades."
    },
    {
      number: "04",
      title: "Elegância",
      subtitle: "Design sofisticado", 
      description: "Atmosfera refinada que eleva qualquer ocasião."
    }
  ]

  const eventTypes = [
    {
      type: "Corporativo",
      capacity: "50-120",
      image: "/images/ox-corporate-events.png"
    },
    {
      type: "Celebrações",
      capacity: "30-80", 
      image: "/images/ox-special-celebrations.png"
    },
    {
      type: "Privativos",
      capacity: "80-200",
      image: "/images/ox-private-events.png"
    }
  ]

  return (
    <div className="relative bg-white text-zinc-900 min-h-screen">
      <MainNavigation />

      {/* Hero Section - Ultra Clean */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center space-y-8">
            <AnimatedSection direction="up">
              <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-zinc-900 leading-none">
                Eventos
              </h1>
              <div className="w-32 h-1 bg-amber-500 mx-auto mt-8"></div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
                Transformamos ocasiões em experiências memoráveis através da simplicidade sofisticada.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <AnimatedButton className="bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 text-base font-medium tracking-wide transition-all duration-300">
                  Iniciar Conversa
                </AnimatedButton>
                <AnimatedButton className="border border-zinc-300 hover:border-zinc-900 text-zinc-900 px-12 py-4 text-base font-medium tracking-wide transition-all duration-300">
                  Ver Portfolio
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <AnimatedSection className="mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <AnimatedImage
              src="/images/ox-interior.png"
              alt="Interior da OX Steakhouse"
              width={1200}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Essentials Section */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 mb-8">
              Essenciais
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {essentials.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="space-y-4">
                  <div className="text-6xl font-extralight text-zinc-200">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-medium uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <p className="text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Event Types - Minimal Grid */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 mb-8">
              Formatos
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="group">
                <div className="space-y-6">
                  <div className="relative overflow-hidden bg-zinc-50">
                    <AnimatedImage
                      src={event.image}
                      alt={event.type}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-light text-zinc-900">
                      {event.type}
                    </h3>
                    <p className="text-zinc-600">
                      {event.capacity} pessoas
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 mb-8">
              Processo
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-amber-600 font-medium">01</span>
                </div>
                <h3 className="text-xl font-light text-zinc-900">Conversa</h3>
                <p className="text-zinc-600 text-sm">
                  Entendemos sua visão e necessidades específicas
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-amber-600 font-medium">02</span>
                </div>
                <h3 className="text-xl font-light text-zinc-900">Planejamento</h3>
                <p className="text-zinc-600 text-sm">
                  Criamos uma proposta personalizada e detalhada
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-amber-600 font-medium">03</span>
                </div>
                <h3 className="text-xl font-light text-zinc-900">Execução</h3>
                <p className="text-zinc-600 text-sm">
                  Realizamos com excelência e atenção aos detalhes
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quote Section */}
        <AnimatedSection className="mb-32 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-extralight text-zinc-900 leading-relaxed mb-8">
              "A verdadeira elegância está na simplicidade que toca a alma"
            </blockquote>
            <footer className="text-zinc-600 font-medium">
              Chef Bruno Faro
            </footer>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <AnimatedSection className="mb-32">
          <div className="relative h-80 md:h-[400px] overflow-hidden">
            <AnimatedImage
              src="/images/chef-bruno-faro.png"
              alt="Chef Bruno Faro"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extralight text-zinc-900">500+</div>
              <div className="text-zinc-600 text-sm uppercase tracking-wider">Eventos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extralight text-zinc-900">50k+</div>
              <div className="text-zinc-600 text-sm uppercase tracking-wider">Convidados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extralight text-zinc-900">98%</div>
              <div className="text-zinc-600 text-sm uppercase tracking-wider">Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extralight text-zinc-900">10</div>
              <div className="text-zinc-600 text-sm uppercase tracking-wider">Anos</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="mb-32 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900">
              Vamos Conversar
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-light">
              Cada evento é único. Vamos descobrir juntos como criar 
              uma experiência memorável para sua ocasião especial.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <AnimatedButton className="bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 text-base font-medium tracking-wide transition-all duration-300">
                Solicitar Proposta
              </AnimatedButton>
              <AnimatedButton className="border border-zinc-300 hover:border-zinc-900 text-zinc-900 px-12 py-4 text-base font-medium tracking-wide transition-all duration-300">
                Agendar Visita
              </AnimatedButton>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  )
}