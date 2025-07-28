"use client"

import type React from "react"
import { useCallback, useRef, useState } from "react"

import { Container, OverlaysRoot } from "./styles"
import { ModelsContext, type CarModel } from "../ModelsContext"
import { ModelOverlay } from "../ModelOverlay"

interface Props {
  children: React.ReactNode
}

export const ModelsWrapper: React.FC<Props> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) => state.filter((model) => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find((item) => item.modelName === modelName) || null
    },
    [registeredModels],
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}
