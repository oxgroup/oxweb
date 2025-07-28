"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { type Table, TableStatus } from "@/types/reservation"

interface TableCanvasProps {
  tables: Table[]
  selectedTableIds?: string[]
  onTableSelect?: (tableId: string) => void
  readOnly?: boolean
  width?: number
  height?: number
}

const statusColors = {
  [TableStatus.AVAILABLE]: "#4CAF50",
  [TableStatus.RESERVED]: "#FFC107",
  [TableStatus.OCCUPIED]: "#F44336",
  [TableStatus.UNAVAILABLE]: "#9E9E9E",
  [TableStatus.MAINTENANCE]: "#607D8B",
}

export default function TableCanvas({
  tables,
  selectedTableIds = [],
  onTableSelect,
  readOnly = false,
  width = 800,
  height = 600,
}: TableCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredTable, setHoveredTable] = useState<Table | null>(null)

  // Desenha as mesas no canvas
  const drawTables = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Desenha o fundo
    ctx.fillStyle = "#18181b"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Desenha as mesas
    tables.forEach((table) => {
      ctx.save()

      // Aplica rotação se necessário
      if (table.rotation) {
        ctx.translate(table.x + table.width / 2, table.y + table.height / 2)
        ctx.rotate((table.rotation * Math.PI) / 180)
        ctx.translate(-(table.x + table.width / 2), -(table.y + table.height / 2))
      }

      // Define a cor com base no status
      ctx.fillStyle = selectedTableIds.includes(table.id)
        ? "#2196F3" // Azul para mesas selecionadas
        : statusColors[table.status]

      // Desenha a forma da mesa
      if (table.shape === "circle") {
        const radius = Math.min(table.width, table.height) / 2
        ctx.beginPath()
        ctx.arc(table.x + table.width / 2, table.y + table.height / 2, radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
      } else {
        ctx.fillRect(table.x, table.y, table.width, table.height)
        ctx.strokeRect(table.x, table.y, table.width, table.height)
      }

      // Adiciona o número da mesa
      ctx.fillStyle = "#fff"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(table.number.toString(), table.x + table.width / 2, table.y + table.height / 2)

      // Adiciona a capacidade
      ctx.font = "12px Arial"
      ctx.fillText(`(${table.capacity})`, table.x + table.width / 2, table.y + table.height / 2 + 20)

      // Adiciona indicador VIP se aplicável
      if (table.isVIP) {
        ctx.fillStyle = "#FFD700"
        ctx.font = "bold 12px Arial"
        ctx.fillText("VIP", table.x + table.width / 2, table.y + table.height / 2 - 20)
      }

      ctx.restore()
    })

    // Desenha tooltip para mesa com hover
    if (hoveredTable) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.fillRect(hoveredTable.x + hoveredTable.width + 5, hoveredTable.y, 150, 80)
      ctx.fillStyle = "#000"
      ctx.font = "12px Arial"
      ctx.textAlign = "left"
      ctx.fillText(`Mesa: ${hoveredTable.number}`, hoveredTable.x + hoveredTable.width + 10, hoveredTable.y + 20)
      ctx.fillText(
        `Capacidade: ${hoveredTable.capacity}`,
        hoveredTable.x + hoveredTable.width + 10,
        hoveredTable.y + 40,
      )
      ctx.fillText(`Status: ${hoveredTable.status}`, hoveredTable.x + hoveredTable.width + 10, hoveredTable.y + 60)
    }
  }

  // Manipula cliques nas mesas
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (readOnly || !onTableSelect) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Verifica se o clique foi em alguma mesa
    const clickedTable = tables.find((table) => {
      if (table.shape === "circle") {
        const centerX = table.x + table.width / 2
        const centerY = table.y + table.height / 2
        const radius = Math.min(table.width, table.height) / 2
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        return distance <= radius
      } else {
        return x >= table.x && x <= table.x + table.width && y >= table.y && y <= table.y + table.height
      }
    })

    if (clickedTable && clickedTable.status === TableStatus.AVAILABLE) {
      onTableSelect(clickedTable.id)
    }
  }

  // Manipula movimento do mouse para mostrar tooltip
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Verifica se o mouse está sobre alguma mesa
    const table = tables.find((table) => {
      if (table.shape === "circle") {
        const centerX = table.x + table.width / 2
        const centerY = table.y + table.height / 2
        const radius = Math.min(table.width, table.height) / 2
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        return distance <= radius
      } else {
        return x >= table.x && x <= table.x + table.width && y >= table.y && y <= table.y + table.height
      }
    })

    setHoveredTable(table || null)
  }

  // Redesenha o canvas quando as props mudam
  useEffect(() => {
    drawTables()
  }, [tables, selectedTableIds, hoveredTable])

  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleCanvasClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredTable(null)}
        className="cursor-pointer"
      />
      <div className="absolute bottom-4 right-4 bg-zinc-800 p-2 rounded-md shadow-md">
        <div className="flex flex-col gap-2 text-zinc-300 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
            <span>Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FFC107] rounded-full"></div>
            <span>Reservada</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#F44336] rounded-full"></div>
            <span>Ocupada</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#9E9E9E] rounded-full"></div>
            <span>Indisponível</span>
          </div>
          {selectedTableIds.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#2196F3] rounded-full"></div>
              <span>Selecionada</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
