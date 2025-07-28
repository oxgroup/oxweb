"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { checkAutoplaySupport, optimizeVideoForMobile, preloadVideo } from "@/utils/video-helpers"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface VideoBackgroundProps {
  src: string
  posterImage?: string
  className?: string
  overlayOpacity?: number
  priority?: boolean
  lazyLoadMargin?: string // Margem para iniciar o carregamento antes de entrar na viewport
}

export function VideoBackground({
  src,
  posterImage = "/images/ox-interior.png",
  className,
  overlayOpacity = 0.5,
  priority = true,
  lazyLoadMargin = "200px", // Carrega o vídeo quando estiver a 200px da viewport
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMountedRef = useRef(true) // Adicione esta linha
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [supportsAutoplay, setSupportsAutoplay] = useState<boolean | null>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null) // Inicialmente não carrega o vídeo

  // Usar o Intersection Observer para detectar quando o componente está próximo da viewport
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    rootMargin: lazyLoadMargin, // Carrega o vídeo antes de entrar completamente na viewport
    freezeOnceVisible: true, // Uma vez visível, mantém o estado mesmo se sair da viewport
  })

  // Função para forçar a reprodução do vídeo com verificações de segurança
  const attemptPlay = async () => {
    const videoElement = videoRef.current

    // Verificações de segurança antes de tentar reproduzir
    if (!videoElement) {
      console.log("Elemento de vídeo não encontrado")
      return
    }

    // Verifica se o elemento ainda está no DOM
    if (!document.contains(videoElement)) {
      console.log("Elemento de vídeo não está mais no DOM")
      return
    }

    // Verifica se o vídeo tem uma fonte válida
    if (!videoElement.src && !videoElement.currentSrc) {
      console.log("Vídeo não tem fonte válida")
      return
    }

    // Verifica se o vídeo está pronto para reprodução
    if (videoElement.readyState < 2) {
      // HAVE_CURRENT_DATA
      console.log("Vídeo ainda não está pronto para reprodução")
      return
    }

    try {
      // Verifica novamente se o elemento ainda está no DOM antes de reproduzir
      if (document.contains(videoElement)) {
        const playPromise = videoElement.play()

        if (playPromise !== undefined) {
          await playPromise
          setIsPlaying(true)
          console.log("Vídeo reproduzindo com sucesso")
        }
      }
    } catch (error) {
      // Verifica se o erro é devido ao elemento ter sido removido
      if (error.name === "AbortError" && !document.contains(videoElement)) {
        console.log("Reprodução cancelada: elemento removido do DOM")
      } else {
        console.error("Erro ao reproduzir vídeo:", error)
        setHasError(true)
      }
    }
  }

  // Quando o componente estiver próximo da viewport, carrega o vídeo
  useEffect(() => {
    if (isIntersecting && !videoSrc) {
      console.log("Componente de vídeo próximo da viewport, carregando vídeo...")
      setVideoSrc(src)
    }
  }, [isIntersecting, src, videoSrc])

  // Verifica suporte a autoplay quando o componente é montado e visível
  useEffect(() => {
    if (!videoSrc) return // Não faz nada se o vídeo ainda não foi carregado

    const checkSupport = async () => {
      const supported = await checkAutoplaySupport()
      setSupportsAutoplay(supported)

      // Pré-carrega o vídeo para melhorar o tempo de carregamento
      try {
        await preloadVideo(videoSrc)
      } catch (err) {
        console.warn("Erro ao pré-carregar vídeo:", err)
      }
    }

    checkSupport()
  }, [videoSrc])

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement || !videoSrc || !isMountedRef.current) return

    // Otimiza o vídeo para dispositivos móveis
    optimizeVideoForMobile(videoElement)

    // Eventos para monitorar o carregamento e reprodução do vídeo
    const handleCanPlay = () => {
      if (isMountedRef.current) {
        setIsLoaded(true)
        attemptPlay()
      }
    }

    const handleLoadedMetadata = () => {
      if (isMountedRef.current) {
        console.log("Metadados do vídeo carregados")
        // Em alguns navegadores, o vídeo já está pronto neste ponto
        if (videoElement.readyState >= 3) {
          setIsLoaded(true)
          attemptPlay()
        }
      }
    }

    const handlePlay = () => {
      if (isMountedRef.current) {
        setIsPlaying(true)
      }
    }

    const handlePause = () => {
      if (isMountedRef.current) {
        setIsPlaying(false)
        // Tenta reproduzir novamente se o vídeo pausar inesperadamente
        if (isLoaded && !hasError) {
          setTimeout(() => {
            if (isMountedRef.current) {
              attemptPlay()
            }
          }, 100)
        }
      }
    }

    const handleError = (e: Event) => {
      if (isMountedRef.current) {
        console.error("Erro de vídeo:", e)
        setHasError(true)
      }
    }

    const handleWaiting = () => {
      if (isMountedRef.current) {
        console.log("Vídeo em buffer...")
      }
    }

    const handleTimeUpdate = () => {
      if (isMountedRef.current) {
        // Se o vídeo está reproduzindo, mas não marcamos como playing
        if (!isPlaying && videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended) {
          setIsPlaying(true)
        }
      }
    }

    // Adiciona todos os event listeners
    videoElement.addEventListener("canplay", handleCanPlay)
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata)
    videoElement.addEventListener("play", handlePlay)
    videoElement.addEventListener("pause", handlePause)
    videoElement.addEventListener("error", handleError)
    videoElement.addEventListener("waiting", handleWaiting)
    videoElement.addEventListener("timeupdate", handleTimeUpdate)

    // Tenta iniciar a reprodução assim que o componente for montado
    if (videoElement.readyState >= 3 && isMountedRef.current) {
      attemptPlay()
    }

    // Cleanup function
    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay)
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata)
      videoElement.removeEventListener("play", handlePlay)
      videoElement.removeEventListener("pause", handlePause)
      videoElement.removeEventListener("error", handleError)
      videoElement.removeEventListener("waiting", handleWaiting)
      videoElement.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [hasError, isLoaded, videoSrc])

  // Cleanup quando o componente for desmontado
  useEffect(() => {
    return () => {
      isMountedRef.current = false

      // Para o vídeo se estiver reproduzindo
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause()
      }
    }
  }, [])

  // Tenta reproduzir novamente quando a página ganhar foco
  useEffect(() => {
    if (!videoSrc) return

    const handleVisibilityChange = () => {
      if (isMountedRef.current && document.visibilityState === "visible" && !isPlaying && isLoaded && !hasError) {
        attemptPlay()
      }
    }

    const handleWindowFocus = () => {
      if (isMountedRef.current && !isPlaying && isLoaded && !hasError) {
        attemptPlay()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("focus", handleWindowFocus)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("focus", handleWindowFocus)
    }
  }, [isPlaying, isLoaded, hasError, videoSrc])

  // Tenta reproduzir novamente após interação do usuário se o autoplay falhar
  useEffect(() => {
    if (!videoSrc) return

    if (supportsAutoplay === false && !isPlaying && !hasError && isMountedRef.current) {
      const handleUserInteraction = () => {
        if (isMountedRef.current) {
          attemptPlay()
        }
        // Remove os event listeners após a primeira interação
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
        document.removeEventListener("keydown", handleUserInteraction)
      }

      document.addEventListener("click", handleUserInteraction)
      document.addEventListener("touchstart", handleUserInteraction)
      document.addEventListener("keydown", handleUserInteraction)

      return () => {
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
        document.removeEventListener("keydown", handleUserInteraction)
      }
    }
  }, [supportsAutoplay, isPlaying, hasError, videoSrc])

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}
    >
      {/* Imagem de fallback/poster que aparece enquanto o vídeo carrega */}
      {(!isLoaded || hasError || !videoSrc) && (
        <Image
          src={posterImage || "/placeholder.svg"}
          alt="OX Steakhouse ambiente"
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      )}

      {/* Indicador de carregamento - mostrado quando o vídeo está sendo carregado */}
      {videoSrc && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Elemento de vídeo com atributos otimizados - só é renderizado quando próximo da viewport */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isLoaded && isPlaying ? "opacity-100" : "opacity-0",
          )}
          poster={posterImage}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}

      {/* Overlay para melhorar a legibilidade do texto sobreposto */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/80"
        style={{ opacity: typeof overlayOpacity === "number" ? overlayOpacity : 0.5 }}
        aria-hidden="true"
      ></div>
    </div>
  )
}
