"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function AnimatedButton({ children, className, onClick }: AnimatedButtonProps) {
  return (
    <motion.button
      className={cn(className)}
      onClick={onClick}
      whileHover={{ 
        scale: 1.03,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ 
        scale: 0.97,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      {children}
    </motion.button>
  )
}
