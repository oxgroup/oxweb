"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

import { Container } from "./styles"
import { useModel } from "../useModel"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
  backgroundImage?: string
  linkTo?: string
}

export const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  backgroundImage,
  linkTo,
  ...props
}) => {
  const { registerModel } = useModel(modelName)
  const router = useRouter()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  const handleClick = () => {
    if (linkTo) {
      router.push(linkTo)
    }
  }

  return (
    <Container
      ref={sectionRef}
      backgroundImage={backgroundImage}
      onClick={handleClick}
      style={{ cursor: linkTo ? "pointer" : "default" }}
      {...props}
    >
      {children}
    </Container>
  )
}
