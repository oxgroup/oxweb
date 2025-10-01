"use client"

import { Page } from "@/components/Page"
import { ModelsWrapper } from "@/components/Model/ModelsWrapper"
import { ModelSection } from "@/components/Model/ModelSection"
import { DefaultOverlayContent } from "@/components/DefaultOverlayContent"
import { UniqueOverlay } from "@/components/UniqueOverlay"

export default function Home() {
  return (
    <Page>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            linkTo="/theoxroom"
            $backgroundImage="/images/restaurant-ambience.jpeg"
            overlayNode={
              <DefaultOverlayContent
                label=""
                description="Clique para entrar"
                showLogo={true}
                logoPath="/images/TheOx_logo_Amarelo.png"
                cardapioLink="/theoxroom/cardapio1"
                reservaLink="/theoxroom/reserva1"
              />
            }
          />

          <ModelSection
            modelName="Model Two"
            linkTo="/oxsteakfish"
            $backgroundImage="/images/premium-steak-dish.jpeg"
            overlayNode={
              <DefaultOverlayContent
                label=""
                description="Clique para entrar"
                showLogo={true}
                logoPath="/images/ox-steak-fish-logo.png"
                cardapioLink="/oxsteakfish/cardapio1"
                reservaLink="/oxsteakfish/reserva1"
              />
            }
          />
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Page>
  )
}
