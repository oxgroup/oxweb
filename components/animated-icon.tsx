"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedIcon({ children, className, delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}
