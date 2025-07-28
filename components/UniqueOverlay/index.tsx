"use client"

import type React from "react"

import { Container, Header, Burger, Footer } from "./styles"
import { BurgerSVG } from "./IconSVG"

export const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        {/* Logo removido */}
        <Burger>
          <BurgerSVG />
        </Burger>
      </Header>

      <Footer>
        <ul>{/* Textos removidos */}</ul>
      </Footer>
    </Container>
  )
}
