"use client"

import { useState } from "react"
import type { TimeSlot } from "@/types/reservation"
import { Calendar } from "lucide-react"

interface DateTimePickerProps {
  availableTimeSlots: TimeSlot[]
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
}

export default function DateTimePicker({
  availableTimeSlots,
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: DateTimePickerProps) {
  const [calendarOpen, setCalendarOpen] = useState(false)

  // Gera datas para os próximos 14 dias
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const formattedDate = date.toISOString().split("T")[0]
      const dayOfWeek = new Intl.DateTimeFormat("pt-BR", { weekday: "short" }).format(date)
      const dayOfMonth = date.getDate()

      dates.push({
        date: formattedDate,
        dayOfWeek,
        dayOfMonth,
      })
    }

    return dates
  }

  const dates = generateDates()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-lg font-medium">Selecione uma data</label>
        <div className="relative">
          <div className="flex overflow-x-auto pb-2 gap-2">
            {dates.map((date) => (
              <button
                key={date.date}
                onClick={() => onDateChange(date.date)}
                className={`flex flex-col items-center justify-center min-w-[70px] h-20 p-2 rounded-lg transition-colors ${
                  selectedDate === date.date ? "bg-amber-600 text-white" : "bg-zinc-700 hover:bg-zinc-600"
                }`}
              >
                <span className="text-xs uppercase">{date.dayOfWeek}</span>
                <span className="text-xl font-bold">{date.dayOfMonth}</span>
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <button
              onClick={() => setCalendarOpen(!calendarOpen)}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
            >
              <Calendar size={16} />
              <span>Escolher outra data</span>
            </button>
            {calendarOpen && (
              <div className="absolute top-full left-0 mt-2 bg-zinc-800 shadow-lg rounded-lg p-4 z-10">
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    onDateChange(e.target.value)
                    setCalendarOpen(false)
                  }}
                  className="bg-zinc-700 text-white border-zinc-600 border rounded-md p-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium">Selecione um horário</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {availableTimeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => onTimeChange(slot.time)}
              disabled={!slot.available}
              className={`py-3 px-4 rounded-lg text-center transition-colors ${
                selectedTime === slot.time
                  ? "bg-amber-600 text-white"
                  : slot.available
                    ? "bg-zinc-700 hover:bg-zinc-600"
                    : "bg-gray-100 text-zinc-500 cursor-not-allowed"
              }`}
            >
              <span className="block">{slot.time}</span>
              {slot.available && (
                <span className="text-xs">
                  {slot.availableTables} {slot.availableTables === 1 ? "mesa" : "mesas"}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
