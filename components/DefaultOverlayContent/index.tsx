import type React from "react"
import { Container, Heading, Buttons, Logo } from "./styles"
import Image from "next/image"
import Link from "next/link"

interface Props {
  label: string
  description: string
  showLogo?: boolean
  logoPath?: string
  cardapioLink?: string
  reservaLink?: string
}

export const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  showLogo = false,
  logoPath = "/images/ox-logo.png",
  cardapioLink,
  reservaLink,
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
        {cardapioLink ? (
          <Link href={cardapioLink}>
            <button>Cardápio</button>
          </Link>
        ) : (
          <button>Cardápio</button>
        )}
        {reservaLink ? (
          <Link href={reservaLink}>
            <button className="white">Faça sua Reserva</button>
          </Link>
        ) : (
          <button className="white">Faça sua Reserva</button>
        )}
      </Buttons>
    </Container>
  )
}
