import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The OX Room Steakhouse",
  description: "descricao do site the ox room",
}

export default function TheOxRoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
