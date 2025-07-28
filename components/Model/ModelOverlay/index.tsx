"use client"

import type React from "react"
import { useCallback, useLayoutEffect, useState } from "react"
import { useTransform } from "framer-motion"

import { Container } from "./styles"
import type { CarModel } from "@/components/Model/ModelsContext"
import { useWrapperScroll } from "@/components/Model/useWrapperScroll"

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">

export const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: model.sectionRef.current?.offsetHeight ?? 0,
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(getSectionDimensions())

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [getSectionDimensions, model.sectionRef])

  // Garante que o progresso de rolagem seja um número válido
  const safeScrollProgress = useTransform(scrollY, (y) => {
    const progress = (y - dimensions.offsetTop) / dimensions.offsetHeight
    return isNaN(progress) ? 0 : progress
  })

  const sectionScrollProgress = safeScrollProgress
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0],
    { clamp: true }, // Garante que os valores estejam entre 0 e 1
  )
  const pointerEvents = useTransform(opacity, (value) => (value > 0 ? "auto" : "none"))

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>
}
