import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { PremiumCarousel } from "@/components/premium-carousel"
import { StorytellingSection } from "@/components/storytelling-section"
import { MainNavigation } from "@/components/main-navigation"
import { ChefSection } from "@/components/chef-section"
import { MenuHighlights } from "@/components/menu-highlights"
import { WineExperience } from "@/components/wine-experience"
import { EventsSection } from "@/components/events-section"
import { GiftCardSection } from "@/components/gift-card-section"
import { Footer } from "@/components/footer"
import { VideoBackground } from "@/components/video-background"
import { PerformanceMonitor } from "@/components/performance-monitor"
import Link from "next/link"

export default function TheOxRoom() {
  // Carousel content com imagens e vídeos da OX Steakhouse
  const carouselContent = [
    {
      type: "image" as const,
      src: "/images/ox-interior.png",
      alt: "Interior elegante da OX Steakhouse",
      caption: "Um ambiente sofisticado para momentos inesquecíveis",
    },
    {
      type: "image" as const,
      src: "/images/chef-flame.jpg",
      alt: "Menu do Chef - Experiência Executiva",
      caption: "Menu do Chef - Uma experiência gastronômica única",
      link: "/menu-do-chef",
    },
    {
      type: "image" as const,
      src: "/images/ox-tomahawk.png",
      alt: "Tomahawk premium da OX Steakhouse",
      caption: "Nosso emblemático corte Tomahawk, preparado com técnicas exclusivas",
    },
    {
      type: "image" as const,
      src: "/images/ox-drinks.png",
      alt: "Carta de drinks autorais da OX Steakhouse",
      caption: "Drinks autorais que elevam sua experiência gastronômica",
    },
    {
      type: "image" as const,
      src: "/images/ox-wine-selection.png",
      alt: "Seleção de vinhos da OX Steakhouse",
      caption: "Uma impressionante carta de vinhos de mais de 15 países",
    },
    {
      type: "image" as const,
      src: "/images/ox-chef.png",
      alt: "Chef Bruno Faro preparando um prato especial",
      caption: "Chef Bruno Faro: maestria e paixão em cada prato",
    },
    {
      type: "image" as const,
      src: "/images/ox-lounge.png",
      alt: "Área lounge da OX Steakhouse",
      caption: "Lounge chic para momentos de descontração e prazer",
    },
  ]

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Monitor de performance - remover em produção */}
      <PerformanceMonitor visible={false} />

      {/* Header com navegação */}
      <MainNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section premium com vídeo de fundo */}
        <div className="relative min-h-[80vh] mb-20 md:mb-32 overflow-hidden rounded-3xl">
          {/* Vídeo de fundo otimizado */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/ox-interior.png"
          >
            <source src="http://www.administrative.com.br/Amb.mov" type="video/mp4" />
          </video>
          
          {/* Overlay premium com gradientes sofisticados */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-800/20 z-10"></div>

          {/* Conteúdo hero premium com glass effect */}
          <AnimatedSection
            direction="down"
            className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col justify-center h-full"
          >
            <div className="max-w-3xl glass-effect p-8 md:p-12 rounded-2xl animate-float">
              <div className="mb-6">
                <h1 className="font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Meat's Art
                </h1>
              </div>

              <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed">
                Mais do que apenas um restaurante, a OX é um conceito que combina artisticamente a steakhouse moderna,
                entretenimento, american bar e lounge chic.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                    <span className="mr-3">Faça sua Reserva</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </AnimatedButton>
                </a>

                <a 
                  href="https://drive.google.com/file/d/1y8EtRdkCbgftQYCf4-crh7a38dWEGhT-/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5">
                    Ver Menu Completo
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Carousel premium com espaçamento otimizado */}
        <AnimatedSection delay={0.2} className="relative mb-20 md:mb-32 group">
         <div className="text-center mb-12">
             <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">Experiência Culinária</h2>
             <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          Descubra o sabor excepcional de nossos pratos, preparados com cortes premium e técnicas exclusivas para uma
          experiência gastronômica inigualável.
             </p>
         </div>
          <div className="glass-effect rounded-3xl p-2 md:p-4">
            <PremiumCarousel
              slides={carouselContent}
              className="w-full h-[450px] md:h-[650px] rounded-2xl shadow-2xl overflow-hidden"
              pauseOnVideo={true}
            />
          </div>
        </AnimatedSection>

        {/* Seções com espaçamento premium 
        <MenuHighlights />
        */}
        <div className="space-y-20 md:space-y-32">
          
          <StorytellingSection />
          <ChefSection />
          <WineExperience />
          <GiftCardSection />
          <EventsSection />
        </div>       

        {/* Seção CTA Premium */}
        <AnimatedSection direction="up" className="mt-20 md:mt-32 mb-16 md:mb-24 text-center">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16">
            {/* Background com gradiente sofisticado */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-400/10"></div>
            <div className="absolute inset-0 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full px-6 py-3 mb-6">
                <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Experiência Única</span>
              </div>
              
              <h2 className="font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Viva a Experiência OX
              </h2>
              
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Descubra por que a OX Steakhouse se tornou um destino obrigatório para os amantes da boa gastronomia. 
                Faça sua reserva e prepare-se para uma jornada sensorial inesquecível onde cada detalhe foi pensado 
                para criar momentos memoráveis.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-12 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                    <span className="mr-3">Reservar Mesa</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </AnimatedButton>
                </a>

                <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-12 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5">
                  <span className="mr-3">Fale Conosco</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
