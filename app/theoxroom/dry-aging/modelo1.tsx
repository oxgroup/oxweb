"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { PremiumCarousel, type CarouselSlide } from "@/components/premium-carousel";

const bannerSlides: CarouselSlide[] = [
  {
    type: "image" as const,
    src: "/images/dry-aged-showcase.png",
    alt: "Dry Aged Experience - A arte da maturação perfeita",
    caption: "A arte da maturação perfeita",
  },
  {
    type: "image" as const,
    src: "/images/tomahawk-signature.jpg",
    alt: "Tomahawk Premium - 45 dias de maturação excepcional",
    caption: "45 dias de maturação excepcional",
  },
  {
    type: "image" as const,
    src: "/images/ox-fish-special.png",
    alt: "Dry Aged Fish - Inovação em peixes nobres",
    caption: "Inovação em peixes nobres",
  },
];

export default function DryAgedPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="h-[60vh] relative">
        <PremiumCarousel
          slides={bannerSlides}
          autoPlayInterval={6000}
          className="h-full"
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <AnimatedSection direction="up">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-amber-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           A Jornada da Carne e do Peixe no Processo Dry Aged
          </motion.h1>

          <motion.div
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-zinc-300">
              Na{" "}
              <strong className="text-amber-500">Ox Steakhouse</strong>, a arte de
              elevar a carne e o peixe à categoria de verdadeiras obras-primas
              começa com uma técnica centenária, refinada com precisão científica:
              o <strong className="text-amber-500">dry aging</strong>. Especializados
              em cortes Angus de excelência, somos pioneiros em aplicar essa
              técnica não apenas ao bovino, mas também a peixes selecionados,
              criando <strong className="text-amber-500">experiências sensoriais inesquecíveis</strong> para os paladares mais
              exigentes.
            </p>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              O Que é Dry Aging?
            </h2>
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

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              O Milagre do Angus Dry Aged
            </h2>
            <p className="text-zinc-300">
              Nossa escolha pelo <strong className="text-amber-500">Angus</strong>{" "}
              não é à toa: sua marmoreização generosa é o segredo para um dry aging
              excepcional. O entrelaçamento de gordura intramuscular garante
              suculência mesmo após a perda de umidade, resultando em cortes que
              equilibram terroir, doçura e um perfil defumado sutil.
            </p>

            <h3 className="text-xl font-bold text-amber-500 mt-8 mb-4">
              Cortes que se Transformam em Lendas:
            </h3>
            <ul className="list-none space-y-4">
              <li className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">
                  Tomahawk Dry Aged
                </h4>
                <p className="text-zinc-300">
                  Um espetáculo visual e gustativo. Com 45 dias de maturação, sua
                  crosta caramelizada e sabor concentrado tornam cada garfada um
                  hino à intensidade. Ideal para quem busca boldness e uma
                  textura "melt-in-mouth".
                </p>
              </li>
              <li className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">
                  Butter Steak Dry Aged
                </h4>
                <p className="text-zinc-300">
                  Maciez em estado puro. Após 30 dias de processo, sua textura
                  sedosa e notas de manteiga derretida são apropriadas por um toque
                  de sal marinho, realçando sua riqueza natural.
                </p>
              </li>
              <li className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">T-Bone Dry Aged</h4>
                <p className="text-zinc-300">
                  A harmonia entre dois mundos. O contrafilé (firme e saboroso) e o
                  filé (buttery) ganham personalidade extra com 35 dias de dry
                  aging, unindo força e elegância em um único corte.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Dry Aging no Peixe: Uma Revolução Gourmet
            </h2>
            <p className="text-zinc-300">
              Na Ox, desafiamos convenções ao aplicar o dry aging a peixes nobres
              como{" "}
              <strong className="text-amber-500">
                salmão selvagem do Alasca
              </strong>{" "}
              ou{" "}
              <strong className="text-amber-500">atum vermelho</strong>. Em um
              processo mais curto (7 a 14 dias), controlamos a degradação
              enzimática para realçar a{" "}
              <strong className="text-amber-500">doçura natural</strong> e firmar
              a textura, criando uma crosta dourada que lembra um "crème brûlée"
              marinho. O resultado? Um sabor mais pronunciado, com notas de nozes
              e um acabamento sedoso, servido como sashimi seco ou grelhado com
              manteiga clarificada.
            </p>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              A Experiência Ox: Onde Ciência Encontra Arte
            </h2>
            <p className="text-zinc-300">
              Na Ox Steakhouse, cada prato é uma celebração da precisão e paixão.
              Nossos chefs dominam o equilíbrio entre tradição e inovação,
              garantindo que cada fatia de dry aged seja uma revelação. Do aroma
              terroso da carne envelhecida ao brilho metálico de um peixe
              "rejuvenescido", cada detalhe é pensado para elevar sua jornada
              gastronômica.
            </p>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Por Que Escolher Ox?
            </h2>
            <ul className="list-none space-y-4">
              <li className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Exclusividade:</strong>
                <p className="text-zinc-300">
                  Cortes limitados, devido ao desperdício natural do processo
                  (15-20% de perda).
                </p>
              </li>
              <li className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Controle Total:</strong>
                <p className="text-zinc-300">
                  Câmaras de maturação customizadas, com monitoramento 24/7.
                </p>
              </li>
              <li className="bg-zinc-800 p-6 rounded-lg">
                <strong className="text-amber-500">Curadoria:</strong>
                <p className="text-zinc-300">
                  Parcerias diretas com fazendas Angus certificadas e fornecedores
                  de peixe sustentáveis.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-500 mt-12 mb-6">
              Conclusão: Um Convite à Excelência
            </h2>
            <p className="text-zinc-300">
              Na Ox Steakhouse, o dry aging não é apenas uma técnica — é um
              manifesto de respeito à matéria-prima e ao prazer de comer bem.
              Venha descobrir por que nossa carne e nosso peixe são descritos como
              "uma explosão de sabor antiga e nova ao mesmo tempo". Reserve sua
              mesa e experimente a diferença de um verdadeiro mestre no dry aged.
            </p>

            <div className="mt-12 mb-8 text-center">
              <p className="text-2xl font-bold text-amber-500">
                Ox Steakhouse: O Templo do Dry Age no Brasil.
              </p>
              <p className="text-lg text-zinc-400 italic">
                Onde o tempo transforma carnes e peixes em histórias para serem
                saboreadas.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
