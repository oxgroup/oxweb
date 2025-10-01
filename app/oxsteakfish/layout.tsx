import type React from "react"
import type { Metadata } from "next"
import "./styles.css"

export const metadata: Metadata = {
  title: "The OX Room Steakhouse",
  description: "descricao do site the ox room",
}

export default function TheOxRoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
