import type React from "react"
import { Container, Heading, Buttons, Logo } from "./styles"
import Image from "next/image"

interface Props {
  label: string
  description: string
  showLogo?: boolean
  logoPath?: string
}

export const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  showLogo = false,
  logoPath = "/images/ox-logo.png",
}) => {
  return (
    <Container>
      <Heading>
        {showLogo ? (
          <Logo>
            <Image src={logoPath || "/placeholder.svg"} alt="OX Logo" width={300} height={200} />
          </Logo>
        ) : (
          <h1>{label}</h1>
        )}
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Cardápio</button>
        <button className="white">Faça sua Reserva</button>
      </Buttons>
    </Container>
  )
}
