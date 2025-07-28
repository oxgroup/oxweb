"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NossaHistoriaModelo1() {
  const timelineEvents = [
    {
      year: "2017",
      title: "O Início de Tudo",
      description: "Desde 2017, no charmoso bairro do Batel em Curitiba, a The OX Room Steakhouse nasceu com uma missão clara: redefinir a experiência gastronômica premium no Brasil. Inspirados nas melhores steakhouses americanas, criamos um espaço onde elegância e tradição se encontram para proporcionar momentos únicos.",
      image: "/images/restaurant-entrance.jpg",
      highlight: "Nascimento da The OX Room"
    },
    {
      year: "Farm to Table",
      title: "Revolucionando o Conceito",
      description: "Nossa paixão por excelência vai muito além de servir uma boa refeição. Somos pioneiros no conceito farm to table no segmento de steakhouses brasileiras, garantindo que cada corte servido em nossa mesa tenha no máximo 90 dias do abate. Esta filosofia nos permite oferecer carnes com frescor e sabor incomparáveis.",
      image: "/images/ox-chef.png",
      highlight: "Pioneiros em Farm to Table"
    },
    {
      year: "Açougue Central",
      title: "Artesania e Qualidade",
      description: "Em nosso açougue central, realizamos toda a desossa do boi, um processo artesanal que nos permite selecionar apenas os melhores cortes. Especializamo-nos em cortes altos – aquelas peças especiais que você não encontra em açougues convencionais, preparadas exclusivamente para o assador na brasa.",
      image: "/images/ox-signature-steak.png",
      highlight: "Processo Artesanal Exclusivo"
    },
    {
      year: "Premium",
      title: "Excelência em Cada Detalhe",
      description: "Trabalhamos exclusivamente com carnes 100% Angus e Wagyu Certificado, garantindo qualidade superior em cada prato. Para complementar nossa seleção premium de carnes, oferecemos também opções refinadas com frutos do mar. Nosso compromisso com a excelência se estende ao atendimento de alto nível.",
      image: "/images/ox-wagyu-experience.png",
      highlight: "Angus & Wagyu Certificado"
    },
    {
      year: "Hoje",
      title: "Um Novo Conceito de Experiência",
      description: "A The OX Room foi pensada para ser o destino ideal tanto para jantares especiais quanto para almoços executivos de negócios. Nosso American Bar oferece o ambiente perfeito para momentos agradáveis em boa companhia. Acreditamos que criamos mais do que um restaurante – desenvolvemos um novo conceito de como curtir e apreciar os melhores momentos da vida.",
      image: "/images/ox-interior.png",
      highlight: "Experiência Completa"
    }
  ]

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Section com vídeo */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
        
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-3xl p-12 md:p-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nossa Jornada
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Uma história de paixão, tradição e excelência gastronômica
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-amber-400 text-lg"
            >
              Desde 2017 • Batel, Curitiba
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-500 hidden md:block"></div>
          
          {timelineEvents.map((event, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.2} className="relative mb-16 md:mb-24">
              <div className={`flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                {/* Conteúdo */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} mb-8 md:mb-0`}>
                  <div className="glass-effect rounded-2xl p-8 md:p-10">
                    <div className="inline-block bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full px-4 py-2 mb-4">
                      <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
                        {event.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-500">
                      {event.title}
                    </h3>
                    
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="inline-block bg-amber-500/10 rounded-full px-4 py-2">
                      <span className="text-amber-400 text-sm font-medium">
                        {event.highlight}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Imagem */}
                <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="glass-effect rounded-2xl p-4">
                    <AnimatedImage
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
                
                {/* Indicador da timeline (apenas desktop) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:block z-10">
                  <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-zinc-900 shadow-lg shadow-amber-500/50"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <AnimatedSection direction="up" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect rounded-3xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
              Faça Parte da Nossa História
            </h3>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Cada capítulo da nossa jornada foi escrito pensando em proporcionar momentos únicos. 
              Venha descobrir por que somos uma das mais belas steakhouses do Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.button
                  className="premium-gradient text-white rounded-2xl py-4 px-10 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mr-3">Viver Esta Experiência</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </a>
              
              <Link href="/theoxroom">
                <motion.button
                  className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-10 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voltar ao Início
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}