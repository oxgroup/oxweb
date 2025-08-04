"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NossaHistoria() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      <MainNavigation />
      
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-400/10"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa História
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Uma jornada de excelência gastronômica que começou em 2017, unindo terra e mar
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
              Desde 2017, no charmoso bairro do Batel em Curitiba, a <span className="text-amber-400 font-semibold">OX Steak & Fish</span> nasceu 
              com uma missão clara: redefinir a experiência gastronômica premium no Brasil. Inspirados nas melhores steakhouses americanas 
              e nas tradições culinárias marítimas, criamos um espaço onde elegância e tradição se encontram para proporcionar momentos únicos, 
              celebrando tanto os sabores da terra quanto do mar.
            </p>
          </div>
        </AnimatedSection>

        {/* O Que Nos Torna Únicos */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
                O Que Nos Torna Únicos
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Nossa paixão por excelência vai muito além de servir uma boa refeição. Somos pioneiros no conceito 
                  <span className="text-amber-400 font-semibold"> farm & sea to table</span> no segmento de steakhouses brasileiras, 
                  garantindo que cada corte servido em nossa mesa tenha no máximo 90 dias do abate e que nossos frutos do mar 
                  tenham o frescor incomparável do mar.
                </p>
                
                <p>
                  Esta filosofia nos permite oferecer carnes com frescor e sabor incomparáveis, complementadas por frutos do mar 
                  da mais alta qualidade. Em nosso centro de preparo especializado, realizamos toda a desossa do boi e o preparo 
                  artesanal dos pescados, um processo que nos permite selecionar apenas os melhores produtos.
                </p>
                
                <p>
                  Especializamo-nos em <span className="text-amber-400 font-semibold">cortes altos e frutos do mar premium</span> – 
                  aquelas peças especiais que você não encontra em estabelecimentos convencionais, preparadas exclusivamente 
                  para proporcionar uma experiência gastronômica única que une o melhor da terra e do mar.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-4">
                <video
                  src="/images/cwbVideo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl object-cover"
                >
                  <source src="/images/cwbVideo.mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Excelência em Cada Detalhe */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="relative order-2 md:order-1 mb-8 md:mb-0">
              <div className="glass-effect rounded-2xl p-4">
                <AnimatedImage
                  src="/images/ox-fish-special.png"
                  alt="Cortes premium Angus, Wagyu e frutos do mar"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
                Excelência em Cada Detalhe
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Trabalhamos exclusivamente com carnes <span className="text-amber-400 font-semibold">100% Angus e Wagyu Certificado</span>, 
                  complementadas por uma seleção refinada dos melhores frutos do mar, garantindo qualidade superior em cada prato. 
                  Nossa curadoria inclui pescados frescos, crustáceos premium e uma variedade de especialidades marinhas.
                </p>
                
                <p>
                  Nosso compromisso com a excelência se estende ao atendimento de alto nível, criando uma experiência completa 
                  que vai desde a recepção com nossa hostess até o serviço de manobrista, sempre prezando pela perfeita 
                  harmonia entre os sabores da terra e do mar.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Ambiente e Experiência */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-500 text-center">
              Ambiente e Experiência
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <span className="text-amber-400 font-semibold">OX Steak & Fish</span> foi pensada para ser o destino ideal tanto para 
                  jantares especiais quanto para almoços executivos de negócios, oferecendo uma experiência gastronômica 
                  que celebra tanto os melhores cortes quanto os frutos do mar mais frescos.
                </p>
                
                <p>
                  Nosso <span className="text-amber-400 font-semibold">American Bar</span> oferece o ambiente perfeito para momentos 
                  agradáveis em boa companhia, seja para iniciar a noite com drinks autorais ou encerrar uma reunião de negócios 
                  degustando nossa seleção de vinhos que harmonizam perfeitamente com carnes e frutos do mar.
                </p>
                
                <p>
                  Acreditamos que criamos mais do que um restaurante – desenvolvemos um novo conceito de como curtir e apreciar 
                  os melhores momentos da vida, sempre acompanhados da mais alta qualidade gastronômica que une terra e mar 
                  em perfeita harmonia.
                </p>
              </div>
              
              <div className="relative">
                <AnimatedImage
                  src="/images/ox-interior.png"
                  alt="Ambiente elegante da OX Steak & Fish"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
                <div className="absolute bottom-4 right-4 glass-effect px-4 py-2 rounded-full">
                  <p className="text-sm text-amber-400 font-medium">Ambiente Exclusivo</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-500">
              Venha Viver Esta Experiência
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Descubra por que somos considerados uma das mais belas e charmosas steakhouses do Brasil, 
              onde a tradição da terra encontra a elegância do mar. Faça sua reserva e seja parte da nossa história.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.button
                  className="premium-gradient text-white rounded-2xl py-4 px-8 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mr-3">Reservar Mesa</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </a>
              
              <Link href="/oxsteakfish">
                <motion.button
                  className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-8 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voltar ao Início
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}