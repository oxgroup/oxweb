"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FarmToTableModelo1() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/images/ox-farm-landscape.png"
            alt="Fazenda parceira OX Steak & Fish"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-zinc-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-amber-400/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Farm & Sea to Table
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Da Fazenda e do Mar à Sua Mesa
          </motion.p>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Uma filosofia que conecta você diretamente com a origem dos ingredientes da terra e do mar através de um processo artesanal 
            que respeita o tempo da natureza e a tradição da melhor culinária.
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection direction="up" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              A Jornada da Excelência
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Acompanhe cada etapa do processo que garante a qualidade excepcional dos nossos cortes e frutos do mar
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="glass-effect rounded-3xl p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-zinc-900 font-bold text-xl">1</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Seleção da Fazenda & Mar</h3>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Escolhemos apenas fazendas que compartilham nossos valores de qualidade e sustentabilidade, além de fornecedores de frutos do mar comprometidos com práticas sustentáveis. 
                      Cada animal é criado e cada fruto do mar é capturado com o cuidado necessário para desenvolver as características únicas que tornam nossa experiência excepcional.
                    </p>
                  </div>
                  <div className="relative mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-farm-cattle.png"
                      alt="Gado Angus na fazenda e frutos do mar"
                      width={600}
                      height={400}
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="relative order-2 md:order-1 mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-transport.png"
                      alt="Transporte controlado para carnes e frutos do mar"
                      width={600}
                      height={400}
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-12 order-1 md:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-zinc-900 font-bold text-xl">2</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Controle de Origem</h3>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Mantemos rastreabilidade completa desde a fazenda e do porto. Conhecemos a procedência de cada animal e cada fruto do mar, 
                      garantindo que cada corte tenha no máximo 90 dias do abate e que os frutos do mar tenham frescor incomparável, preservando qualidade e sabor únicos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="glass-effect rounded-3xl p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-zinc-900 font-bold text-xl">3</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Preparo Especializado</h3>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Em nosso centro de preparo, realizamos toda a desossa do Angus e Wagyu e o preparo especializado dos frutos do mar. Este processo artesanal nos permite 
                      padronizar qualidade, maciez, sabor e tamanho de cada corte e peixe com precisão incomparável.
                    </p>
                  </div>
                  <div className="relative mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-butcher-work.png"
                      alt="Trabalho especializado em carnes e frutos do mar"
                      width={600}
                      height={400}
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="relative order-2 md:order-1 mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-final-dish.png"
                      alt="Prato final de carne e frutos do mar na mesa"
                      width={600}
                      height={400}
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-12 order-1 md:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-zinc-900 font-bold text-xl">4</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Sua Mesa</h3>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      O resultado final é uma experiência gastronômica única que carrega consigo não apenas sabor excepcional da terra e do mar, 
                      mas também a história, o cuidado e a paixão que envolveram sua criação, unindo o melhor dos dois mundos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-500 text-center">
              Os Benefícios do Nosso Processo
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Máximo 90 Dias do Abate</h3>
                <p className="text-slate-300">Garantia de frescor incomparável em cada corte e fruto do mar servido</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Rastreabilidade Total</h3>
                <p className="text-slate-300">Controle completo da origem até o seu prato, da fazenda ao mar</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Qualidade Premium</h3>
                <p className="text-slate-300">Apenas Angus e Wagyu certificados, frutos do mar sustentáveis</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Processo Artesanal</h3>
                <p className="text-slate-300">Preparo especializado de carnes e frutos do mar</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Padronização</h3>
                <p className="text-slate-300">Consistência em maciez, sabor e apresentação</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Experiência Única</h3>
                <p className="text-slate-300">Conexão direta com a origem dos ingredientes da terra e do mar</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Philosophy Quote */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="glass-effect rounded-3xl p-8 md:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-8 italic">
                "Na OX Steak & Fish, o Farm & Sea to Table não é apenas um conceito – é nossa promessa de que cada experiência gastronômica 
                seja autêntica, transparente e incomparável, unindo o melhor da terra e do mar."
              </blockquote>
              
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
              Prove a Diferença
            </h3>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Descubra o sabor incomparável da verdadeira filosofia Farm & Sea to Table. 
              Cada garfada conta uma história de qualidade, cuidado e excelência dos melhores produtos da terra e do mar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.button
                  className="premium-gradient text-white rounded-2xl py-5 px-10 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-4">Reserve Sua Mesa</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </a>
              
              <Link href="/oxsteakfish">
                <motion.button
                  className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-5 px-10 text-xl font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/10"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
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