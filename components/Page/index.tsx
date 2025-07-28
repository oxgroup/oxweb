"use client"

import type React from "react"
import { Container } from "./styles"

interface Props {
  children: React.ReactNode
}

export const Page: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}
