"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FarmToTable() {
  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen">
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
            Farm to Table
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Da Fazenda à Sua Mesa: Uma Filosofia de Excelência
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
              Na <span className="text-amber-400 font-semibold">The OX Room Steakhouse</span>, o conceito Farm to Table não é apenas uma tendência – é o coração da nossa operação. 
              Acreditamos que a verdadeira experiência gastronômica começa muito antes do prato chegar à sua mesa. 
              Ela nasce na fazenda, percorre cada etapa do processo produtivo e culmina no momento em que você saboreia cada garfada.
            </p>
          </div>
        </AnimatedSection>

        {/* Nosso Açougue Central */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
                Nosso Açougue Central: O Diferencial da OX
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  O que verdadeiramente nos distingue das demais steakhouses é nosso <span className="text-amber-400 font-semibold">açougue central</span>, 
                  onde realizamos todo o processo de desossa do Angus e Wagyu. Este não é apenas um processo técnico – é uma arte que nos permite 
                  ter controle total sobre cada aspecto da qualidade que servimos.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-4">
                <AnimatedImage
                  src="/images/ox-butcher-shop.png"
                  alt="Açougue central da The OX Room"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Controle de Qualidade */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-500 text-center">
              Controle de Qualidade Incomparável
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 text-center max-w-3xl mx-auto">
              Em nosso açougue, cada peça é cuidadosamente selecionada e processada, permitindo-nos:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Padronizar a Qualidade</h3>
                  <p className="text-sm text-slate-300">Garantimos que cada corte mantenha os mesmos padrões de excelência</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Controlar a Maciez</h3>
                  <p className="text-sm text-slate-300">Através de técnicas especializadas de maturação e corte</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Preservar o Sabor</h3>
                  <p className="text-sm text-slate-300">Mantendo as características únicas de cada tipo de carne</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Uniformizar o Tamanho</h3>
                  <p className="text-sm text-slate-300">Assegurando consistência na apresentação e cocção</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Rastreabilidade Total */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="relative order-2 md:order-1 mb-8 md:mb-0">
              <div className="glass-effect rounded-2xl p-4">
                <AnimatedImage
                  src="/images/ox-traceability.png"
                  alt="Rastreabilidade dos cortes"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
                Rastreabilidade Total
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Nosso compromisso com a transparência vai além do sabor. Mantemos um controle rigoroso sobre:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">Data exata de cada lote</h4>
                      <p className="text-sm">Garantindo frescor máximo de 90 dias do abate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">Rastreabilidade da origem</h4>
                      <p className="text-sm">Conhecemos a procedência de cada animal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">Histórico completo</h4>
                      <p className="text-sm">Desde a fazenda até o seu prato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* A Essência do Farm to Table */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-500 text-center">
              A Essência do Farm to Table na Prática
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 text-center max-w-3xl mx-auto">
              Quando você escolhe um corte na The OX Room, está escolhendo muito mais que uma refeição. 
              Está optando por uma experiência que conecta você diretamente com a origem dos ingredientes, respeitando:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">O Tempo da Natureza</h3>
                  <p className="text-sm text-slate-300">
                    Trabalhamos com os ciclos naturais de criação e maturação, sem pressa, respeitando o tempo necessário 
                    para que cada animal desenvolva as características que tornam nossa carne excepcional.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">A Qualidade da Origem</h3>
                  <p className="text-sm text-slate-300">
                    Selecionamos apenas fazendas que compartilham nossos valores de qualidade e sustentabilidade, 
                    garantindo que cada animal tenha sido criado com o cuidado necessário.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">O Processo Artesanal</h3>
                  <p className="text-sm text-slate-300">
                    Cada corte é trabalhado por mãos especializadas em nosso açougue, onde a tradição encontra a técnica 
                    para criar peças únicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Conclusão */}
        <AnimatedSection direction="up" className="mb-20">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500 text-center">
              Uma Mistura de Qualidade e Essência
            </h2>
            
            <p className="text-xl text-slate-200 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              O resultado deste processo meticuloso é o que chamamos de "mistura de qualidade e essência" – cada prato que servimos 
              carrega consigo não apenas sabor excepcional, mas também a história, o cuidado e a paixão que envolveram sua criação.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              Na The OX Room, o Farm to Table não é apenas um conceito – é nossa promessa de que cada experiência gastronômica 
              seja autêntica, transparente e incomparável. É assim que transformamos a simplicidade de uma refeição na 
              sofisticação de uma experiência inesquecível.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-500">
              Experimente Nossa Filosofia Farm to Table
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Descubra o sabor autêntico da carne com máximo 90 dias do abate, processada em nosso açougue central 
              e preparada com todo o cuidado que você merece.
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