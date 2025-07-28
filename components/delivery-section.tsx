"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export function DeliverySection() {
  const deliveryPlatforms = [
    { name: "iFood", logo: "/images/ifood-logo.png", link: "#" },
    { name: "Rappi", logo: "/images/rappi-logo.png", link: "#" },
    { name: "UberEats", logo: "/images/ubereats-logo.png", link: "#" },
  ]

  return (
    <AnimatedSection direction="right" className="mb-16 md:mb-24">
      <div className="bg-zinc-800 rounded-2xl overflow-hidden">
        <div className="md:grid md:grid-cols-2 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <AnimatedImage
              src="/images/ox-delivery.png"
              alt="OX Steakhouse Delivery"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-zinc-800/80 via-zinc-800/40 to-transparent md:bg-gradient-to-r" />
          </div>

          <div className="p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-amber-500">OX em Casa</h2>
              <h3 className="text-lg md:text-xl font-medium mb-6 text-zinc-300">Delivery Premium</h3>

              <p className="text-base md:text-lg mb-6 text-zinc-300">
                Além da vivência no local, a OX oferece a comodidade de delivery, permitindo que você saboreie nossas
                delícias em casa com rapidez e agilidade.
              </p>

              <p className="text-base md:text-lg mb-8 text-zinc-300">
                Mantemos o mesmo padrão de qualidade e excelência em nosso serviço de delivery, garantindo que a
                experiência OX chegue até você com todo o sabor e sofisticação.
              </p>

              <div className="mb-8">
                <h4 className="text-amber-400 font-medium mb-4">Disponível nas plataformas:</h4>
                <div className="flex items-center space-x-6">
                  {deliveryPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      className="bg-zinc-700 hover:bg-zinc-600 transition-colors duration-300 p-3 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={platform.logo || "/placeholder.svg"}
                        alt={`${platform.name} Logo`}
                        className="h-8 w-auto"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <AnimatedButton className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-3 px-8 text-base font-medium inline-flex items-center">
                Fazer Pedido
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
