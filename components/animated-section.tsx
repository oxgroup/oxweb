"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ freezeOnceVisible: once })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
        return {}
      default:
        return { y: distance }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.section
      ref={ref as any}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.section>
  )
}
