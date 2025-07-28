"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface StaggeredListProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
}

export function StaggeredList({ children, className, itemClassName, staggerDelay = 0.1 }: StaggeredListProps) {
  const { ref, isIntersecting } = useIntersectionObserver()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref as any}
      className={cn(className)}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} className={itemClassName} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
