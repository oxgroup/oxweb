"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { TableStatus } from "@/types/reservation"

// Definição dos tipos para as mesas
interface TableData {
  id: string
  number: number
  x: number
  y: number
  width: number
  height: number
  shape: "rectangle" | "circle" | "ellipse"
  rotation?: number
  capacity: number
  status: TableStatus
  area: string
  type?: string
}

// Definição das áreas do restaurante
interface Area {
  id: string
  name: string
  color: string
  tables: TableData[]
}

// Props do componente
interface InteractiveTableMapProps {
  selectedTableIds?: string[]
  onTableSelect?: (tableId: string) => void
  readOnly?: boolean
  showInfo?: boolean
  date?: string
  time?: string
}

// Cores para os diferentes status das mesas
const statusColors = {
  [TableStatus.AVAILABLE]: "#4CAF50", // Verde
  [TableStatus.RESERVED]: "#FFC107", // Amarelo
  [TableStatus.OCCUPIED]: "#F44336", // Vermelho
  [TableStatus.UNAVAILABLE]: "#9E9E9E", // Cinza
  [TableStatus.MAINTENANCE]: "#607D8B", // Azul acinzentado
}

// Cores para as diferentes áreas
const areaColors = {
  bar: "rgba(0, 150, 255, 0.2)",
  main: "rgba(255, 193, 7, 0.2)",
  window: "rgba(255, 152, 0, 0.2)",
  private: "rgba(233, 30, 99, 0.2)",
  lounge: "rgba(156, 39, 176, 0.2)",
}

// Dados das mesas baseados na imagem fornecida
const tableData: TableData[] = [
  // Mesas do bar (área azul no canto superior direito)
  {
    id: "b1",
    number: 1,
    x: 850,
    y: 150,
    width: 60,
    height: 60,
    shape: "rectangle",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "bar",
    type: "bar",
  },
  {
    id: "b2",
    number: 2,
    x: 850,
    y: 250,
    width: 60,
    height: 60,
    shape: "rectangle",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "bar",
    type: "bar",
  },
  {
    id: "b3",
    number: 3,
    x: 850,
    y: 350,
    width: 60,
    height: 60,
    shape: "rectangle",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "bar",
    type: "bar",
  },

  // Mesas redondas (área central)
  {
    id: "r1",
    number: 13,
    x: 650,
    y: 150,
    width: 80,
    height: 80,
    shape: "circle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "main",
  },
  {
    id: "r2",
    number: 14,
    x: 650,
    y: 250,
    width: 80,
    height: 80,
    shape: "circle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "main",
  },
  {
    id: "r3",
    number: 15,
    x: 650,
    y: 350,
    width: 80,
    height: 80,
    shape: "circle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "main",
  },
  {
    id: "r4",
    number: 16,
    x: 650,
    y: 450,
    width: 80,
    height: 80,
    shape: "circle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "main",
  },

  // Mesas retangulares (área central-direita)
  {
    id: "t1",
    number: 7,
    x: 750,
    y: 150,
    width: 100,
    height: 60,
    shape: "rectangle",
    capacity: 4,
    status: TableStatus.AVAILABLE,
    area: "private",
  },
  {
    id: "t2",
    number: 8,
    x: 750,
    y: 250,
    width: 100,
    height: 60,
    shape: "rectangle",
    capacity: 4,
    status: TableStatus.AVAILABLE,
    area: "private",
  },
  {
    id: "t3",
    number: 9,
    x: 750,
    y: 350,
    width: 100,
    height: 60,
    shape: "rectangle",
    capacity: 4,
    status: TableStatus.AVAILABLE,
    area: "private",
  },
  {
    id: "t4",
    number: 10,
    x: 750,
    y: 450,
    width: 100,
    height: 60,
    shape: "rectangle",
    capacity: 4,
    status: TableStatus.AVAILABLE,
    area: "private",
  },

  // Mesas retangulares grandes (área central)
  {
    id: "g1",
    number: 5,
    x: 550,
    y: 600,
    width: 120,
    height: 80,
    shape: "rectangle",
    capacity: 8,
    status: TableStatus.AVAILABLE,
    area: "private",
  },
  {
    id: "g2",
    number: 6,
    x: 700,
    y: 600,
    width: 120,
    height: 80,
    shape: "rectangle",
    capacity: 8,
    status: TableStatus.AVAILABLE,
    area: "private",
  },

  // Mesas do lado esquerdo (área da janela)
  {
    id: "w1",
    number: 21,
    x: 400,
    y: 150,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w2",
    number: 22,
    x: 400,
    y: 220,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w3",
    number: 23,
    x: 400,
    y: 290,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w4",
    number: 24,
    x: 400,
    y: 360,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w5",
    number: 25,
    x: 400,
    y: 430,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w6",
    number: 26,
    x: 400,
    y: 500,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w7",
    number: 27,
    x: 400,
    y: 570,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w8",
    number: 28,
    x: 400,
    y: 640,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w9",
    number: 29,
    x: 400,
    y: 710,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "w10",
    number: 30,
    x: 400,
    y: 780,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },

  // Mesas do lado esquerdo (segunda coluna)
  {
    id: "l1",
    number: 31,
    x: 320,
    y: 150,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l2",
    number: 32,
    x: 320,
    y: 220,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l3",
    number: 33,
    x: 320,
    y: 290,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l4",
    number: 34,
    x: 320,
    y: 360,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l5",
    number: 35,
    x: 320,
    y: 430,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l6",
    number: 36,
    x: 320,
    y: 500,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l7",
    number: 37,
    x: 320,
    y: 570,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l8",
    number: 38,
    x: 320,
    y: 640,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l9",
    number: 39,
    x: 320,
    y: 710,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },
  {
    id: "l10",
    number: 40,
    x: 320,
    y: 780,
    width: 60,
    height: 60,
    shape: "ellipse",
    capacity: 2,
    status: TableStatus.AVAILABLE,
    area: "window",
  },

  // Mesa grande central (mesa do chef)
  {
    id: "chef",
    number: 50,
    x: 500,
    y: 400,
    width: 150,
    height: 80,
    shape: "rectangle",
    capacity: 10,
    status: TableStatus.AVAILABLE,
    area: "main",
    type: "chef",
  },

  // Mesas de lounge
  {
    id: "lounge1",
    number: 60,
    x: 850,
    y: 600,
    width: 120,
    height: 60,
    shape: "rectangle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "lounge",
    type: "lounge",
  },
  {
    id: "lounge2",
    number: 61,
    x: 850,
    y: 700,
    width: 120,
    height: 60,
    shape: "rectangle",
    capacity: 6,
    status: TableStatus.AVAILABLE,
    area: "lounge",
    type: "lounge",
  },
]

// Agrupamento das mesas por área
const areas: Area[] = [
  { id: "bar", name: "Bar", color: areaColors.bar, tables: tableData.filter((t) => t.area === "bar") },
  { id: "main", name: "Salão Principal", color: areaColors.main, tables: tableData.filter((t) => t.area === "main") },
  {
    id: "window",
    name: "Área da Janela",
    color: areaColors.window,
    tables: tableData.filter((t) => t.area === "window"),
  },
  {
    id: "private",
    name: "Salas Privativas",
    color: areaColors.private,
    tables: tableData.filter((t) => t.area === "private"),
  },
  { id: "lounge", name: "Lounge", color: areaColors.lounge, tables: tableData.filter((t) => t.area === "lounge") },
]

export default function InteractiveTableMap({
  selectedTableIds = [],
  onTableSelect,
  readOnly = false,
  showInfo = true,
  date,
  time,
}: InteractiveTableMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredTable, setHoveredTable] = useState<TableData | null>(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null)

  // Função para redimensionar o canvas
  const resizeCanvas = () => {
    if (canvasRef.current && containerRef.current) {
      const container = containerRef.current
      const canvas = canvasRef.current

      // Ajusta o tamanho do canvas para preencher o container
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight

      // Calcula a escala para ajustar o mapa ao canvas
      const mapWidth = 1000
      const mapHeight = 800
      const scaleX = canvas.width / mapWidth
      const scaleY = canvas.height / mapHeight
      const newScale = Math.min(scaleX, scaleY) * 0.9

      setScale(newScale)

      // Centraliza o mapa
      setOffset({
        x: (canvas.width - mapWidth * newScale) / 2,
        y: (canvas.height - mapHeight * newScale) / 2,
      })

      drawMap()
    }
  }

  // Função para desenhar o mapa
  const drawMap = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Aplica transformações para escala e deslocamento
    ctx.save()
    ctx.translate(offset.x, offset.y)
    ctx.scale(scale, scale)

    // Desenha o fundo
    ctx.fillStyle = "#18181b"
    ctx.fillRect(0, 0, 1000, 800)

    // Desenha as paredes
    ctx.strokeStyle = "#a1a1aa"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(250, 100)
    ctx.lineTo(250, 800)
    ctx.moveTo(250, 100)
    ctx.lineTo(900, 100)
    ctx.moveTo(900, 100)
    ctx.lineTo(900, 800)
    ctx.stroke()

    // Desenha as áreas
    areas.forEach((area) => {
      // Encontra os limites da área
      const tables = area.tables
      if (tables.length === 0) return

      const minX = Math.min(...tables.map((t) => t.x - t.width / 2))
      const maxX = Math.max(...tables.map((t) => t.x + t.width / 2))
      const minY = Math.min(...tables.map((t) => t.y - t.height / 2))
      const maxY = Math.max(...tables.map((t) => t.y + t.height / 2))

      // Desenha o fundo da área
      ctx.fillStyle = area.color
      ctx.fillRect(minX - 20, minY - 20, maxX - minX + 40, maxY - minY + 40)

      // Adiciona o nome da área
      ctx.fillStyle = "#a1a1aa"
      ctx.font = "bold 14px Arial"
      ctx.fillText(area.name, minX, minY - 5)
    })

    // Desenha as mesas
    tableData.forEach((table) => {
      ctx.save()

      // Aplica rotação se necessário
      if (table.rotation) {
        ctx.translate(table.x, table.y)
        ctx.rotate((table.rotation * Math.PI) / 180)
        ctx.translate(-table.x, -table.y)
      }

      // Define a cor com base no status e seleção
      ctx.fillStyle = selectedTableIds.includes(table.id)
        ? "#2196F3" // Azul para mesas selecionadas
        : table === hoveredTable
          ? "#64B5F6" // Azul claro para hover
          : statusColors[table.status]

      ctx.strokeStyle = "#212529"
      ctx.lineWidth = 1

      // Desenha a forma da mesa
      if (table.shape === "circle") {
        const radius = Math.min(table.width, table.height) / 2
        ctx.beginPath()
        ctx.arc(table.x, table.y, radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
      } else if (table.shape === "ellipse") {
        ctx.beginPath()
        ctx.ellipse(table.x, table.y, table.width / 2, table.height / 2, 0, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
      } else {
        // Retângulo
        ctx.fillRect(table.x - table.width / 2, table.y - table.height / 2, table.width, table.height)
        ctx.strokeRect(table.x - table.width / 2, table.y - table.height / 2, table.width, table.height)
      }

      // Adiciona o número da mesa
      ctx.fillStyle = "#fff"
      ctx.font = "bold 16px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(table.number.toString(), table.x, table.y)

      ctx.restore()
    })

    ctx.restore()
  }

  // Função para verificar se um ponto está dentro de uma mesa
  const isPointInTable = (x: number, y: number, table: TableData): boolean => {
    // Converte as coordenadas do canvas para coordenadas do mapa
    const mapX = (x - offset.x) / scale
    const mapY = (y - offset.y) / scale

    if (table.shape === "circle") {
      const radius = Math.min(table.width, table.height) / 2
      const distance = Math.sqrt(Math.pow(mapX - table.x, 2) + Math.pow(mapY - table.y, 2))
      return distance <= radius
    } else if (table.shape === "ellipse") {
      // Para elipses, usamos a equação da elipse
      const rx = table.width / 2
      const ry = table.height / 2
      const dx = mapX - table.x
      const dy = mapY - table.y
      return (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1
    } else {
      // Retângulo
      return (
        mapX >= table.x - table.width / 2 &&
        mapX <= table.x + table.width / 2 &&
        mapY >= table.y - table.height / 2 &&
        mapY <= table.y + table.height / 2
      )
    }
  }

  // Manipulador de clique no canvas
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (readOnly) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Verifica se o clique foi em alguma mesa
    const clickedTable = tableData.find((table) => isPointInTable(x, y, table))

    if (clickedTable) {
      setSelectedTable(clickedTable)
      if (onTableSelect && clickedTable.status === TableStatus.AVAILABLE) {
        onTableSelect(clickedTable.id)
      }
    } else {
      setSelectedTable(null)
    }
  }

  // Manipulador de movimento do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Se estiver arrastando, move o mapa
    if (isDragging) {
      setOffset({
        x: offset.x + (x - dragStart.x),
        y: offset.y + (y - dragStart.y),
      })
      setDragStart({ x, y })
      drawMap()
      return
    }

    // Verifica se o mouse está sobre alguma mesa
    const table = tableData.find((table) => isPointInTable(x, y, table))

    if (table !== hoveredTable) {
      setHoveredTable(table || null)
      drawMap()
    }
  }

  // Manipulador de início de arrasto
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // Apenas inicia o arrasto com o botão direito ou se pressionar Shift
    if (e.button === 2 || e.shiftKey) {
      e.preventDefault()
      setIsDragging(true)
      setDragStart({
        x: e.clientX - canvasRef.current!.getBoundingClientRect().left,
        y: e.clientY - canvasRef.current!.getBoundingClientRect().top,
      })
    }
  }

  // Manipulador de fim de arrasto
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Manipulador de roda do mouse para zoom
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()

    const delta = e.deltaY < 0 ? 1.1 : 0.9
    const newScale = scale * delta

    // Limita o zoom
    if (newScale < 0.5 || newScale > 3) return

    // Calcula o ponto sob o cursor em coordenadas do mapa
    const rect = canvasRef.current!.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const mapX = (x - offset.x) / scale
    const mapY = (y - offset.y) / scale

    // Ajusta o offset para manter o ponto sob o cursor no mesmo lugar
    setOffset({
      x: x - mapX * newScale,
      y: y - mapY * newScale,
    })

    setScale(newScale)
  }

  // Efeito para inicializar e redimensionar o canvas
  useEffect(() => {
    resizeCanvas()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Efeito para redesenhar o mapa quando as props mudam
  useEffect(() => {
    drawMap()
  }, [scale, offset, hoveredTable, selectedTableIds])

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onContextMenu={(e) => e.preventDefault()}
        className="cursor-pointer"
        style={{ touchAction: "none" }}
      />

      {/* Controles de zoom */}
      <div className="absolute top-4 right-4 bg-zinc-800 p-2 rounded-md shadow-md">
        <button
          onClick={() => {
            const newScale = scale * 1.2
            if (newScale <= 3) {
              setScale(newScale)
            }
          }}
          className="w-8 h-8 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-md mb-2"
        >
          +
        </button>
        <button
          onClick={() => {
            const newScale = scale / 1.2
            if (newScale >= 0.5) {
              setScale(newScale)
            }
          }}
          className="w-8 h-8 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-md"
        >
          -
        </button>
      </div>

      {/* Legenda */}
      <div className="absolute bottom-4 right-4 bg-zinc-800 p-2 rounded-md shadow-md">
        <div className="flex flex-col gap-2 text-sm">
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

      {/* Informações da mesa selecionada */}
      {showInfo && selectedTable && (
        <div className="absolute bottom-4 left-4 bg-zinc-800 p-4 rounded-md shadow-md max-w-xs">
          <h3 className="text-lg font-bold mb-2 text-zinc-100">Mesa {selectedTable.number}</h3>
          <div className="space-y-1 text-sm">
            <p className="text-zinc-300">
              <span className="font-medium">Capacidade:</span> {selectedTable.capacity} pessoas
            </p>
            <p className="text-zinc-300">
              <span className="font-medium">Área:</span> {areas.find((a) => a.id === selectedTable.area)?.name}
            </p>
            <p className="text-zinc-300">
              <span className="font-medium">Status:</span>{" "}
              {selectedTable.status === TableStatus.AVAILABLE
                ? "Disponível"
                : selectedTable.status === TableStatus.RESERVED
                  ? "Reservada"
                  : selectedTable.status === TableStatus.OCCUPIED
                    ? "Ocupada"
                    : selectedTable.status === TableStatus.UNAVAILABLE
                      ? "Indisponível"
                      : "Em manutenção"}
            </p>
            {selectedTable.type && (
              <p className="text-zinc-300">
                <span className="font-medium">Tipo:</span>{" "}
                {selectedTable.type === "bar"
                  ? "Mesa de Bar"
                  : selectedTable.type === "chef"
                    ? "Mesa do Chef"
                    : selectedTable.type === "lounge"
                      ? "Lounge"
                      : selectedTable.type}
              </p>
            )}
            {date && (
              <p className="text-zinc-300">
                <span className="font-medium">Data:</span> {new Date(date).toLocaleDateString("pt-BR")}
              </p>
            )}
            {time && (
              <p className="text-zinc-300">
                <span className="font-medium">Horário:</span> {time}
              </p>
            )}
          </div>
          {!readOnly && selectedTable.status === TableStatus.AVAILABLE && (
            <button
              onClick={() => onTableSelect && onTableSelect(selectedTable.id)}
              className="mt-3 w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              {selectedTableIds.includes(selectedTable.id) ? "Remover Seleção" : "Selecionar Mesa"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
