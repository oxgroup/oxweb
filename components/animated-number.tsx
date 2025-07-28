"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedNumberProps {
  value: number
  className?: string
  prefix?: string
  suffix?: string
  duration?: number
}

export function AnimatedNumber({ value, className, prefix = "", suffix = "", duration = 1.5 }: AnimatedNumberProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [hasAnimated, setHasAnimated] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayValue = useTransform(rounded, (latest) => `${prefix}${latest}${suffix}`)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const animation = animate(count, value, { duration })
      setHasAnimated(true)
      return animation.stop
    }
  }, [count, value, duration, isIntersecting, hasAnimated])

  return (
    <motion.span ref={ref as any} className={cn(className)}>
      {displayValue}
    </motion.span>
  )
}
