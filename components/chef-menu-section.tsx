"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedImage } from "@/components/animated-image"
import { motion } from "framer-motion"

export function ChefMenuSection() {
  const menuItems = [
    {
      category: "Entradas Especiais",
      items: [
        {
          name: "Tártaro de Atum Vermelho",
          description: "Atum vermelho nobre com abacate, wasabi e molho ponzu especial",
          price: "R$ 89,00"
        },
        {
          name: "Carpaccio de Angus",
          description: "Finas fatias de contrafilé com rúcula, parmesão e mostarda dijon",
          price: "R$ 76,00"
        },
        {
          name: "Ostras Gratinadas",
          description: "Ostras frescas com queijo gruyère e ervas finas",
          price: "R$ 95,00"
        }
      ]
    },
    {
      category: "Cortes Premium",
      items: [
        {
          name: "Tomahawk Premium 1.2kg",
          description: "Corte especial dry aged 45 dias, para compartilhar",
          price: "R$ 380,00"
        },
        {
          name: "Wagyu A5 200g",
          description: "Autêntico wagyu japonês grelhado na perfeição",
          price: "R$ 450,00"
        },
        {
          name: "Picanha Angus Premium",
          description: "Picanha selecionada com temperos especiais do chef",
          price: "R$ 150,00"
        }
      ]
    },
    {
      category: "Frutos do Mar",
      items: [
        {
          name: "Salmão Grelhado",
          description: "Filé de salmão com crosta de ervas e risotto de limão siciliano",
          price: "R$ 125,00"
        },
        {
          name: "Lagosta Thermidor",
          description: "Lagosta brasileira com molho especial e queijo gratinado",
          price: "R$ 285,00"
        },
        {
          name: "Moqueca de Camarão Premium",
          description: "Camarões gigantes com leite de coco e dendê artesanal",
          price: "R$ 165,00"
        }
      ]
    },
    {
      category: "Sobremesas Autorais",
      items: [
        {
          name: "Petit Gateau de Chocolate Belga",
          description: "Com sorvete de baunilha e calda de frutas vermelhas",
          price: "R$ 32,00"
        },
        {
          name: "Crème Brûlée de Doce de Leite",
          description: "Versão brasileira do clássico francês",
          price: "R$ 28,00"
        },
        {
          name: "Cheesecake de Frutas Tropicais",
          description: "Com base de biscoito de macadâmia e frutas da estação",
          price: "R$ 35,00"
        }
      ]
    }
  ]

  return (
    <div className="space-y-16">
      {/* Apresentação do Chef */}
      <AnimatedSection direction="up" className="mb-16">
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
                Chef Bruno Faro
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Com mais de 15 anos de experiência em alta gastronomia, o Chef Bruno Faro 
                criou um menu especial que representa sua visão única da culinária contemporânea, 
                combinando técnicas clássicas francesas com sabores brasileiros autênticos.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Cada prato é cuidadosamente preparado com ingredientes selecionados e técnicas 
                refinadas, proporcionando uma experiência gastronômica inesquecível que celebra 
                a excelência em cada detalhe.
              </p>
            </div>
            <div className="relative">
              <AnimatedImage
                src="/images/chef-bruno-faro.png"
                alt="Chef Bruno Faro"
                width={500}
                height={600}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Sections */}
      {menuItems.map((section, sectionIndex) => (
        <AnimatedSection key={section.category} direction="up" delay={sectionIndex * 0.1}>
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-500 mb-8 text-center">
              {section.category}
            </h3>
            
            <div className="grid gap-8">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="border-b border-amber-500/20 pb-6 last:border-b-0"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-amber-400 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-amber-500">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Wine Pairing Section */}
      <AnimatedSection direction="up">
        <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6">
              Harmonização com Vinhos
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Nosso sommelier preparou uma seleção especial de vinhos que harmonizam perfeitamente 
              com cada prato do menu do chef. Consulte nossa equipe para recomendações personalizadas 
              que elevarão ainda mais sua experiência gastronômica.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">Vinhos Tintos</h4>
                <p className="text-zinc-300 text-sm">
                  Seleção de rótulos que complementam nossos cortes premium
                </p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">Vinhos Brancos</h4>
                <p className="text-zinc-300 text-sm">
                  Opções refinadas para acompanhar frutos do mar
                </p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">Espumantes</h4>
                <p className="text-zinc-300 text-sm">
                  Para celebrar momentos especiais com elegância
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="up">
        <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6">
            Reserve Sua Mesa
          </h3>
          <p className="text-lg text-zinc-300 mb-8 max-w-3xl mx-auto">
            Viva uma experiência gastronômica única com o menu especial do Chef Bruno Faro. 
            Faça sua reserva e prepare-se para uma jornada culinária inesquecível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://reservation-widget.tagme.com.br/smartlink/5bfeb704fa271c9ee3c5ee51"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <AnimatedButton className="premium-gradient text-white rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25">
                <span className="mr-3">Reservar Mesa</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </AnimatedButton>
            </a>
            
            <AnimatedButton className="glass-effect border-2 border-amber-400/30 hover:border-amber-400/60 text-slate-100 rounded-2xl py-4 px-10 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5">
              <span className="mr-3">Falar com Sommelier</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}