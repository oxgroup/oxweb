"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Table, TimeSlot, LocationType } from "@/types/reservation"
import DateTimePicker from "./date-time-picker"
import InteractiveTableMap from "./interactive-table-map"
import { checkAvailability, makeReservation } from "@/app/theoxroom/reserva/actions"

interface ReservationFormProps {
  locationId: LocationType
}

export default function ReservationForm({ locationId }: ReservationFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [time, setTime] = useState("")
  const [partySize, setPartySize] = useState(2)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [availableTables, setAvailableTables] = useState<Table[]>([])
  const [selectedTableIds, setSelectedTableIds] = useState<string[]>([])
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Busca horários disponíveis quando a data ou o número de pessoas muda
  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true)
      setError("")

      const formData = new FormData()
      formData.append("date", date)
      formData.append("partySize", partySize.toString())

      try {
        const result = await checkAvailability(formData)

        if (result.error) {
          setError(result.error)
        } else if (result.availability) {
          setAvailableTimeSlots(result.availability.timeSlots)
        }
      } catch (err) {
        setError("Erro ao verificar disponibilidade")
      } finally {
        setLoading(false)
      }
    }

    fetchAvailability()
  }, [date, partySize])

  // Manipula a seleção de mesa
  const handleTableSelect = (tableId: string) => {
    setSelectedTableIds((prev) => {
      if (prev.includes(tableId)) {
        return prev.filter((id) => id !== tableId)
      } else {
        return [...prev, tableId]
      }
    })
  }

  // Avança para o próximo passo
  const handleNextStep = () => {
    if (step === 1 && (!date || !time)) {
      setError("Por favor, selecione uma data e um horário")
      return
    }

    if (step === 2 && selectedTableIds.length === 0) {
      setError("Por favor, selecione pelo menos uma mesa")
      return
    }

    if (step === 3 && (!customerName || !customerEmail || !customerPhone)) {
      setError("Por favor, preencha todos os campos obrigatórios")
      return
    }

    setError("")
    setStep((prev) => prev + 1)
  }

  // Volta para o passo anterior
  const handlePreviousStep = () => {
    setError("")
    setStep((prev) => prev - 1)
  }

  // Envia o formulário de reserva
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData()
    formData.append("customerName", customerName)
    formData.append("customerEmail", customerEmail)
    formData.append("customerPhone", customerPhone)
    formData.append("date", date)
    formData.append("time", time)
    formData.append("partySize", partySize.toString())
    formData.append("specialRequests", specialRequests)
    formData.append("tableIds", selectedTableIds.join(","))

    try {
      const result = await makeReservation(formData)

      if (result.error) {
        setError(result.error)
      } else if (result.reservation) {
        router.push(`/theoxroom/reserva/confirmacao?id=${result.reservation.id}`)
      }
    } catch (err) {
      setError("Erro ao fazer reserva")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-zinc-800 rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-amber-500">Faça sua Reserva</h2>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-amber-600 text-white" : "bg-gray-200"}`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-amber-600" : "bg-gray-200"}`}></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-amber-600 text-white" : "bg-gray-200"}`}
            >
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-amber-600" : "bg-gray-200"}`}></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-amber-600 text-white" : "bg-gray-200"}`}
            >
              3
            </div>
            <div className={`w-16 h-1 ${step >= 4 ? "bg-amber-600" : "bg-gray-200"}`}></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-amber-600 text-white" : "bg-gray-200"}`}
            >
              4
            </div>
          </div>
        </div>

        {error && <div className="bg-red-900/20 border-red-700 text-red-400 px-4 py-3 rounded mb-4">{error}</div>}

        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Escolha a Data e Horário</h3>
            <div className="mb-4">
              <label className="block text-zinc-300 mb-2">Número de pessoas</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number.parseInt(e.target.value))}
                className="w-full bg-zinc-700 text-white border-zinc-600 rounded-md p-2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
              </select>
            </div>

            {loading ? (
              <div className="flex justify-center my-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
              </div>
            ) : (
              <DateTimePicker
                availableTimeSlots={availableTimeSlots}
                selectedDate={date}
                selectedTime={time}
                onDateChange={setDate}
                onTimeChange={setTime}
              />
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Escolha sua Mesa</h3>
            <p className="mb-4 text-zinc-400">
              Selecione uma mesa disponível para sua reserva. As mesas verdes estão disponíveis para seleção. Use o
              botão direito do mouse ou Shift+clique para mover o mapa. Use a roda do mouse para zoom.
            </p>

            <div className="h-[600px] mb-6 border border-gray-300 rounded-lg overflow-hidden">
              <InteractiveTableMap
                selectedTableIds={selectedTableIds}
                onTableSelect={handleTableSelect}
                date={date}
                time={time}
              />
            </div>

            <div className="mt-4">
              <p className="font-medium">
                Mesas selecionadas: {selectedTableIds.length > 0 ? selectedTableIds.join(", ") : "Nenhuma"}
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Seus Dados</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-zinc-300 mb-2">Nome completo *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-zinc-700 text-white border-zinc-600 rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">E-mail *</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-zinc-700 text-white border-zinc-600 rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Telefone *</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-zinc-700 text-white border-zinc-600 rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Solicitações especiais</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-zinc-700 text-white border-zinc-600 rounded-md p-2"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Confirme sua Reserva</h3>
            <div className="bg-zinc-700 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-zinc-400">Data</p>
                  <p className="font-medium">{new Date(date).toLocaleDateString("pt-BR")}</p>
                </div>

                <div>
                  <p className="text-zinc-400">Horário</p>
                  <p className="font-medium">{time}</p>
                </div>

                <div>
                  <p className="text-zinc-400">Número de pessoas</p>
                  <p className="font-medium">{partySize}</p>
                </div>

                <div>
                  <p className="text-zinc-400">Mesas</p>
                  <p className="font-medium">{selectedTableIds.join(", ")}</p>
                </div>

                <div className="col-span-2">
                  <p className="text-zinc-400">Nome</p>
                  <p className="font-medium">{customerName}</p>
                </div>

                <div>
                  <p className="text-zinc-400">E-mail</p>
                  <p className="font-medium">{customerEmail}</p>
                </div>

                <div>
                  <p className="text-zinc-400">Telefone</p>
                  <p className="font-medium">{customerPhone}</p>
                </div>

                {specialRequests && (
                  <div className="col-span-2">
                    <p className="text-zinc-400">Solicitações especiais</p>
                    <p className="font-medium">{specialRequests}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-zinc-400">Ao confirmar sua reserva, você concorda com nossos termos e condições.</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        {step > 1 ? (
          <button
            onClick={handlePreviousStep}
            className="px-6 py-2 bg-gray-200 text-zinc-100 rounded-md hover:bg-gray-300 transition-colors"
          >
            Voltar
          </button>
        ) : (
          <div></div>
        )}

        {step < 4 ? (
          <button
            onClick={handleNextStep}
            className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Continuar
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors disabled:bg-amber-300"
          >
            {loading ? "Processando..." : "Confirmar Reserva"}
          </button>
        )}
      </div>
    </div>
  )
}
