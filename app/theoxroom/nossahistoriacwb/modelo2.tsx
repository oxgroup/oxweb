"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NossaHistoriaModelo2() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Section - Estilo Magazine Cover */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3">
          <div className="bg-gradient-to-br from-amber-600/20 to-transparent"></div>
          <div className="bg-gradient-to-br from-transparent via-zinc-800/50 to-transparent"></div>
          <div className="bg-gradient-to-br from-transparent to-amber-400/20 hidden md:block"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block bg-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Edição Especial
              </span>
              <div className="text-amber-400 text-lg font-medium mb-2">Desde 2017 • Batel, Curitiba</div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold leading-none mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">THE</span><br/>
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">OX ROOM</span><br/>
              <span className="text-zinc-400 text-4xl md:text-5xl">STORY</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A história por trás da steakhouse que redefiniu a gastronomia premium no Brasil
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">7+</div>
                <div className="text-sm text-zinc-400">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">100%</div>
                <div className="text-sm text-zinc-400">Angus & Wagyu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">90</div>
                <div className="text-sm text-zinc-400">Dias Farm to Table</div>
              </div>
            </motion.div>
          </div>
          
          {/* Imagem Principal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-effect rounded-3xl p-4 transform rotate-2">
              <AnimatedImage
                src="/images/ox-interior.png"
                alt="The OX Room Interior"
                width={600}
                height={800}
                className="w-full rounded-2xl object-cover"
              />
              <div className="absolute top-8 left-8 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                EXCLUSIVE
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Body - Estilo Editorial */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Quote Destacada */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="text-center">
            <motion.blockquote 
              className="text-4xl md:text-6xl font-bold text-amber-500 leading-tight mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              "Redefinir a experiência gastronômica premium no Brasil"
            </motion.blockquote>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* Artigo Principal */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Parágrafo de Abertura */}
          <AnimatedSection direction="up" className="mb-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <p className="text-2xl leading-relaxed text-slate-200 font-light">
                  <span className="text-6xl text-amber-500 font-bold float-left mr-4 leading-none">D</span>
                  esde 2017, no charmoso bairro do Batel em Curitiba, a <strong className="text-amber-400">The OX Room Steakhouse</strong> nasceu 
                  com uma missão clara: redefinir a experiência gastronômica premium no Brasil. Inspirados nas melhores steakhouses americanas, 
                  criamos um espaço onde elegância e tradição se encontram para proporcionar momentos únicos.
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-amber-500 font-bold mb-4">DESTAQUES</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Batel, Curitiba - 2017</li>
                  <li>• Conceito Farm to Table</li>
                  <li>• Açougue Central Próprio</li>
                  <li>• Cortes Premium Exclusivos</li>
                  <li>• American Bar & Lounge</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Seção Farm to Table */}
          <AnimatedSection direction="up" className="mb-16">
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-amber-500 mb-6">
                    Pioneiros em Farm to Table
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    Nossa paixão por excelência vai muito além de servir uma boa refeição. Somos <strong className="text-amber-400">pioneiros no conceito farm to table</strong> no segmento de steakhouses brasileiras, 
                    garantindo que cada corte servido em nossa mesa tenha no máximo 90 dias do abate.
                  </p>
                  <div className="bg-amber-500/10 rounded-2xl p-6">
                    <h4 className="text-amber-400 font-bold mb-3">O Processo</h4>
                    <p className="text-slate-300">
                      Em nosso açougue central, realizamos toda a desossa do boi, um processo artesanal que nos permite 
                      selecionar apenas os melhores cortes. Especializamo-nos em cortes altos – aquelas peças especiais 
                      que você não encontra em açougues convencionais.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <AnimatedImage
                    src="/images/ox-chef.png"
                    alt="Processo artesanal"
                    width={500}
                    height={400}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Grid de Excelência */}
          <AnimatedSection direction="up" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-500">
              Excelência em Cada Detalhe
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-amber-500 text-4xl mb-4">🥩</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Carnes Premium</h3>
                <p className="text-slate-300 leading-relaxed">
                  Trabalhamos exclusivamente com carnes <strong className="text-amber-400">100% Angus e Wagyu Certificado</strong>, 
                  garantindo qualidade superior em cada prato. Para complementar nossa seleção premium de carnes, 
                  oferecemos também opções refinadas com frutos do mar.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-amber-500 text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Atendimento de Excelência</h3>
                <p className="text-slate-300 leading-relaxed">
                  Nosso compromisso com a excelência se estende ao atendimento de alto nível, criando uma experiência completa 
                  que vai desde a recepção com nossa hostess até o serviço de manobrista.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Ambiente e Experiência - Full Width */}
          <AnimatedSection direction="up" className="mb-16">
            <div className="relative rounded-3xl overflow-hidden">
              <AnimatedImage
                src="/images/ox-interior.png"
                alt="Ambiente da The OX Room"
                width={1200}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl mx-auto px-8 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Um Novo Conceito de Experiência
                  </h2>
                  <p className="text-xl text-slate-200 leading-relaxed">
                    A <strong className="text-amber-400">The OX Room</strong> foi pensada para ser o destino ideal tanto para jantares especiais 
                    quanto para almoços executivos de negócios. Nosso <strong className="text-amber-400">American Bar</strong> oferece o ambiente 
                    perfeito para momentos agradáveis em boa companhia, seja para iniciar a noite ou encerrar uma reunião de negócios.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Final - Estilo Magazine */}
      <AnimatedSection direction="up" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-effect rounded-3xl p-12 md:p-16 text-center">
            <div className="mb-8">
              <span className="inline-block bg-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Continue Lendo
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Sua História</span><br/>
              <span className="text-amber-500">Começa Aqui</span>
            </h3>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Acreditamos que criamos mais do que um restaurante – desenvolvemos um novo conceito de como curtir e apreciar 
              os melhores momentos da vida, sempre acompanhados da mais alta qualidade gastronômica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.button
                  className="premium-gradient text-white rounded-2xl py-5 px-12 text-xl font-bold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 uppercase tracking-wider"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mr-3">Reserve Sua Mesa</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </a>
              
              <Link href="/theoxroom">
                <motion.button
                  className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-5 px-12 text-xl font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5 uppercase tracking-wider"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Página Inicial
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}