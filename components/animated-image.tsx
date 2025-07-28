"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, className, priority = false }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={cn("overflow-hidden relative", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isLoaded ? 1 : 0,
        scale: isLoaded ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        onLoadingComplete={() => setIsLoaded(true)}
        priority={priority}
      />
    </motion.div>
  )
}
