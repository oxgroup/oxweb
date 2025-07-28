"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function FarmToTableModelo2() {
  const [activeTab, setActiveTab] = useState("filosofia")

  const tabs = [
    {
      id: "filosofia",
      title: "Filosofia",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: "processo",
      title: "Processo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: "qualidade",
      title: "Qualidade",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "rastreabilidade",
      title: "Rastreabilidade",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
          <div className="space-y-4">
            <AnimatedImage
              src="/images/ox-farm-1.png"
              alt="Farm to table process"
              width={400}
              height={600}
              className="w-full h-64 object-cover rounded-lg opacity-30"
            />
            <AnimatedImage
              src="/images/ox-butcher-1.png"
              alt="Butcher process"
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-lg opacity-30"
            />
          </div>
          <div className="space-y-4 mt-8">
            <AnimatedImage
              src="/images/ox-meat-1.png"
              alt="Premium meat"
              width={400}
              height={500}
              className="w-full h-56 object-cover rounded-lg opacity-30"
            />
            <AnimatedImage
              src="/images/ox-farm-2.png"
              alt="Farm landscape"
              width={400}
              height={500}
              className="w-full h-56 object-cover rounded-lg opacity-30"
            />
          </div>
          <div className="space-y-4">
            <AnimatedImage
              src="/images/ox-meat-2.png"
              alt="Quality meat"
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-lg opacity-30"
            />
            <AnimatedImage
              src="/images/ox-final-1.png"
              alt="Final dish"
              width={400}
              height={600}
              className="w-full h-64 object-cover rounded-lg opacity-30"
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Farm to Table
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Uma filosofia que vai além do conceito gastronômico
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                <span>Máximo 90 dias do abate</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                <span>Açougue próprio</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                <span>Rastreabilidade total</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Interactive Tabs Section */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">
              Explore Nossa Filosofia
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Descubra cada aspecto do nosso compromisso com a excelência gastronômica
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-zinc-900'
                    : 'glass-effect text-slate-300 hover:text-amber-400 hover:bg-amber-500/10'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.title}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "filosofia" && (
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">
                      Muito Mais que uma Tendência
                    </h3>
                    <div className="space-y-4 text-lg text-slate-300">
                      <p>
                        Na The OX Room Steakhouse, o conceito Farm to Table não é apenas uma tendência – é o coração da nossa operação. 
                        Acreditamos que a verdadeira experiência gastronômica começa muito antes do prato chegar à sua mesa.
                      </p>
                      <p>
                        Ela nasce na fazenda, percorre cada etapa do processo produtivo e culmina no momento em que você saboreia cada garfada. 
                        É assim que transformamos a simplicidade de uma refeição na sofisticação de uma experiência inesquecível.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-philosophy.png"
                      alt="Filosofia Farm to Table"
                      width={600}
                      height={400}
                      className="w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              )}
              
              {activeTab === "processo" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-amber-400 text-center">
                    Nosso Açougue Central: O Diferencial da OX
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">Padronizar</h4>
                      <p className="text-sm text-slate-300">Qualidade consistente em cada corte</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">Controlar</h4>
                      <p className="text-sm text-slate-300">Maciez através de técnicas especializadas</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">Preservar</h4>
                      <p className="text-sm text-slate-300">Sabor único de cada tipo de carne</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">Uniformizar</h4>
                      <p className="text-sm text-slate-300">Tamanho consistente para cocção perfeita</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "qualidade" && (
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="order-2 md:order-1 mt-8 md:mt-0">
                    <AnimatedImage
                      src="/images/ox-quality-meat.png"
                      alt="Qualidade premium"
                      width={600}
                      height={400}
                      className="w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">
                      Excelência em Cada Detalhe
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-amber-400 mb-2">Tempo da Natureza</h4>
                          <p className="text-slate-300">Respeitamos os ciclos naturais de criação e maturação</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-amber-400 mb-2">Qualidade da Origem</h4>
                          <p className="text-slate-300">Fazendas parceiras que compartilham nossos valores</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-amber-400 mb-2">Processo Artesanal</h4>
                          <p className="text-slate-300">Tradição e técnica em cada corte</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "rastreabilidade" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-amber-400 text-center">
                    Transparência Total
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-effect rounded-2xl p-6">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-3 text-center">Data Exata</h4>
                      <p className="text-sm text-slate-300 text-center">
                        Controle total sobre a data de cada lote, garantindo frescor máximo de 90 dias do abate
                      </p>
                    </div>
                    
                    <div className="glass-effect rounded-2xl p-6">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-3 text-center">Origem Conhecida</h4>
                      <p className="text-sm text-slate-300 text-center">
                        Rastreabilidade completa da procedência de cada animal e sua criação
                      </p>
                    </div>
                    
                    <div className="glass-effect rounded-2xl p-6">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-400 mb-3 text-center">Histórico Completo</h4>
                      <p className="text-sm text-slate-300 text-center">
                        Documentação completa desde a fazenda até o seu prato
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Statistics Section */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-500 text-center">
              Números que Falam por Si
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">90</div>
                <div className="text-slate-300">Dias máximos do abate</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-slate-300">Angus e Wagyu certificados</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-slate-300">Controle de qualidade</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">1</div>
                <div className="text-slate-300">Açougue central exclusivo</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Message */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
              Uma Promessa de Excelência
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 max-w-4xl mx-auto">
              O resultado deste processo meticuloso é o que chamamos de "mistura de qualidade e essência" – 
              cada prato que servimos carrega consigo não apenas sabor excepcional, mas também a história, 
              o cuidado e a paixão que envolveram sua criação.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-500">
              Viva a Experiência Farm to Table
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Faça parte desta jornada gastronômica única. Prove a diferença que o verdadeiro 
              conceito Farm to Table pode fazer em sua experiência culinária.
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
              
              <Link href="/theoxroom">
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