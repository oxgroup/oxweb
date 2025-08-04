"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { MainNavigation } from "@/components/main-navigation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function DryAgingPage() {
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
            Dry Aging
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Arte de Transformar Carnes e Frutos do Mar em Obras-Primas
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection direction="up" className="mb-12">
          <motion.div
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12 mb-16">
              <p className="text-lg text-zinc-300">
                Na{" "}
                <strong className="text-amber-500">OX Steak & Fish</strong>, a arte de
                elevar carnes e frutos do mar à categoria de verdadeiras obras-primas
                começa com uma técnica centenária, refinada com precisão científica:
                o <strong className="text-amber-500">dry aging</strong>. Especialistas
                em cortes Angus de excelência e frutos do mar premium, somos pioneiros em aplicar essa
                técnica não apenas ao bovino, mas também aos melhores pescados selecionados,
                criando experiências sensoriais inesquecíveis para os paladares mais
                exigentes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              O Que é Dry Aging?
            </h2>
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <p className="text-zinc-300">
                O dry aging é um processo de maturação natural em ambiente
                controlado, onde temperatura, umidade e ventilação são monitorados
                rigorosamente. Durante semanas (de 21 a 45 dias para o bovino),
                enzimas naturais quebram fibras musculares, intensificando a{" "}
                <strong className="text-amber-500">tenacidade</strong> e
                concentrando sabores únicos. A superfície externa forma uma crosta
                rica em <strong className="text-amber-500">umami</strong>, que é
                removida antes do cozimento, deixando uma carne mais macia, complexa
                e profundamente saborosa.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              O Milagre do Angus Dry Aged
            </h2>
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <p className="text-zinc-300">
                Nossa escolha pelo <strong className="text-amber-500">Angus</strong>{" "}
                não é à toa: sua marmoreização generosa é o segredo para um dry aging
                excepcional. O entrelaçamento de gordura intramuscular garante
                suculência mesmo após a perda de umidade, resultando em cortes que
                equilibram terroir, doçura e um perfil defumado sutil.
              </p>
            </div>

            <h3 className="text-xl font-bold text-amber-500 mt-8 mb-4">
              Cortes que se Transformam em Lendas:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">
                  Tomahawk Dry Aged
                </h4>
                <p className="text-zinc-300">
                  Um espetáculo visual e gustativo. Com 45 dias de maturação, sua
                  crosta caramelizada e sabor concentrado tornam cada garfada um
                  hino à intensidade. Ideal para quem busca boldness e uma
                  textura "melt-in-mouth".
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">
                  Butter Steak Dry Aged
                </h4>
                <p className="text-zinc-300">
                  Maciez em estado puro. Após 30 dias de processo, sua textura
                  sedosa e notas de manteiga derretida são apropriadas por um toque
                  de sal marinho, realçando sua riqueza natural.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">T-Bone Dry Aged</h4>
                <p className="text-zinc-300">
                  A harmonia entre dois mundos. O contrafilé (firme e saboroso) e o
                  filé (buttery) ganham personalidade extra com 35 dias de dry
                  aging, unindo força e elegância em um único corte.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Dry Aging nos Frutos do Mar: Uma Revolução Gourmet
            </h2>
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <p className="text-zinc-300">
                Na OX Steak & Fish, desafiamos convenções ao aplicar o dry aging aos mais nobres frutos do mar
                como{" "}
                <strong className="text-amber-500">
                  salmão selvagem do Alasca
                </strong>,{" "}
                <strong className="text-amber-500">atum vermelho</strong> e{" "}
                <strong className="text-amber-500">robalo premium</strong>. Em um
                processo mais curto (7 a 14 dias), controlamos a degradação
                enzimática para realçar a{" "}
                <strong className="text-amber-500">doçura natural</strong> e firmar
                a textura, criando uma crosta dourada que lembra um "crème brûlée"
                marinho. O resultado? Um sabor mais pronunciado, com notas de nozes
                e um acabamento sedoso, servido como sashimi seco ou grelhado com
                manteiga clarificada e ervas finas.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              A Experiência OX Steak & Fish: Onde Ciência Encontra Arte
            </h2>
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <p className="text-zinc-300">
                Na OX Steak & Fish, cada prato é uma celebração da precisão e paixão.
                Nossos chefs dominam o equilíbrio entre tradição e inovação,
                garantindo que cada fatia de dry aged seja uma revelação. Do aroma
                terroso da carne envelhecida ao brilho metálico de um peixe
                "rejuvenescido", cada detalhe é pensado para elevar sua jornada
                gastronômica através dos sabores do mar e da terra.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Por Que Escolher OX Steak & Fish?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Exclusividade:</strong>
                <p className="text-zinc-300">
                  Cortes limitados e frutos do mar selecionados, devido ao desperdício natural do processo
                  (15-20% de perda).
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Controle Total:</strong>
                <p className="text-zinc-300">
                  Câmaras de maturação customizadas para carnes e frutos do mar, com monitoramento 24/7.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Curadoria:</strong>
                <p className="text-zinc-300">
                  Parcerias diretas com fazendas Angus certificadas e fornecedores
                  de frutos do mar sustentáveis.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Conclusão: Um Convite à Excelência
            </h2>
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <p className="text-zinc-300">
                Na OX Steak & Fish, o dry aging não é apenas uma técnica — é um
                manifesto de respeito à matéria-prima e ao prazer de comer bem.
                Venha descobrir por que nossa carne e nossos frutos do mar são descritos como
                "uma explosão de sabor antiga e nova ao mesmo tempo". Reserve sua
                mesa e experimente a diferença de um verdadeiro mestre no dry aged.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 mb-8 text-center">
              <p className="text-2xl font-bold text-amber-500 mb-4">
                OX Steak & Fish: O Templo do Dry Age e Frutos do Mar no Brasil.
              </p>
              <p className="text-lg text-zinc-400 italic">
                Onde o tempo transforma carnes e frutos do mar em histórias para serem
                saboreadas.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-500">
              Experimente Nossa Seleção Dry Aged
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Descubra por que somos referência em dry aging de carnes e frutos do mar. Cada corte e cada peixe é uma obra de arte 
              que representa anos de aperfeiçoamento técnico e paixão pela excelência.
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