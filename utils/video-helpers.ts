/**
 * Verifica se o navegador suporta reprodução automática de vídeo
 * @returns Promise que resolve para true se o navegador suportar autoplay
 */
export async function checkAutoplaySupport(): Promise<boolean> {
  // Cria um elemento de vídeo temporário
  const video = document.createElement("video")
  video.muted = true
  video.setAttribute("playsinline", "")
  video.src =
    "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAFAAAAAtAAAAAABwG1kaWEAAAAgbWRoZAAAAADSxD+V0sQ/lQAAVcQAAK+IVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAPttaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAC7c3RibAAAAJdzdHNkAAAAAAAAAAEAAACHYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAFAALQBIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAIABBcm0AABDyVBLAI+EDQS6KPQACCgoAAADAI+EEQnYcMQAAAABhbHJtAAAAAAAQc2MyAAAAAAAAAQAAAAEAAAEUAAAAKHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAKHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAEAAADDQAAAAsAAAALAAAACgAAAAoAAAAKAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="

  try {
    // Tenta reproduzir o vídeo
    await video.play()
    return true
  } catch (err) {
    console.log("Autoplay não suportado:", err)
    return false
  } finally {
    // Limpa o elemento de vídeo
    video.remove()
  }
}

/**
 * Pré-carrega um vídeo para melhorar o tempo de carregamento
 * @param src URL do vídeo
 * @returns Promise que resolve quando o vídeo estiver pré-carregado
 */
export function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = src
    link.as = "video"
    link.type = "video/mp4"

    link.onload = () => resolve()
    link.onerror = (err) => reject(err)

    document.head.appendChild(link)
  })
}

/**
 * Otimiza a reprodução de vídeo em dispositivos móveis
 * @param videoElement Elemento de vídeo HTML
 */
export function optimizeVideoForMobile(videoElement: HTMLVideoElement): void {
  // Configurações para melhorar a performance em dispositivos móveis
  videoElement.setAttribute("playsinline", "")
  videoElement.setAttribute("webkit-playsinline", "")
  videoElement.setAttribute("x5-playsinline", "")
  videoElement.setAttribute("x5-video-player-type", "h5")
  videoElement.setAttribute("x5-video-player-fullscreen", "true")
  videoElement.setAttribute("x5-video-orientation", "portraint")

  // Reduz a qualidade em dispositivos móveis para melhorar performance
  if (window.matchMedia("(max-width: 768px)").matches) {
    videoElement.setAttribute("data-quality", "low")
  }
}

/**
 * Verifica se o dispositivo está em uma conexão lenta
 * @returns Promise que resolve para true se a conexão for lenta
 */
export async function isSlowConnection(): Promise<boolean> {
  if ("connection" in navigator) {
    const connection = (navigator as any).connection

    if (connection) {
      // Verifica se o usuário ativou o modo de economia de dados
      if (connection.saveData) {
        return true
      }

      // Verifica o tipo de conexão
      const slowConnectionTypes = ["slow-2g", "2g", "3g"]
      if (connection.effectiveType && slowConnectionTypes.includes(connection.effectiveType)) {
        return true
      }
    }
  }

  // Se não conseguir determinar, faz um teste rápido de velocidade
  try {
    const startTime = Date.now()
    const response = await fetch("https://www.google.com/favicon.ico", {
      method: "HEAD",
      cache: "no-store",
    })
    const endTime = Date.now()

    // Se demorar mais de 500ms para carregar um favicon, considera conexão lenta
    return endTime - startTime > 500
  } catch (error) {
    // Se houver erro na requisição, assume que é uma conexão lenta
    return true
  }
}

/**
 * Calcula o tamanho aproximado do vídeo em MB com base na duração e qualidade
 * @param duration Duração do vídeo em segundos
 * @param quality Qualidade do vídeo (baixa, média, alta)
 * @returns Tamanho aproximado em MB
 */
export function estimateVideoSize(duration: number, quality: "low" | "medium" | "high" = "medium"): number {
  // Taxas de bits aproximadas em Mbps
  const bitrates = {
    low: 1, // 1 Mbps
    medium: 3, // 3 Mbps
    high: 6, // 6 Mbps
  }

  // Cálculo: (bitrate em Mbps * duração em segundos) / 8 = tamanho em MB
  return (bitrates[quality] * duration) / 8
}

/**
 * Registra métricas de carregamento de vídeo para análise de performance
 * @param videoElement Elemento de vídeo HTML
 * @param videoId Identificador único do vídeo
 */
export function trackVideoPerformance(videoElement: HTMLVideoElement, videoId: string): void {
  if (!videoElement) return

  const metrics: Record<string, number> = {}

  const startTime = performance.now()
  metrics.startTime = startTime

  const trackEvent = (eventName: string) => {
    metrics[eventName] = performance.now() - startTime

    // Se estiver em ambiente de desenvolvimento, loga as métricas
    if (process.env.NODE_ENV === "development") {
      console.log(`[Video ${videoId}] ${eventName}: ${Math.round(metrics[eventName])}ms`)
    }
  }

  videoElement.addEventListener("loadstart", () => trackEvent("loadStart"))
  videoElement.addEventListener("loadedmetadata", () => trackEvent("loadedMetadata"))
  videoElement.addEventListener("loadeddata", () => trackEvent("loadedData"))
  videoElement.addEventListener("canplay", () => trackEvent("canPlay"))
  videoElement.addEventListener("canplaythrough", () => trackEvent("canPlayThrough"))
  videoElement.addEventListener("playing", () => trackEvent("playing"))

  // Registra métricas quando o vídeo terminar de carregar completamente
  videoElement.addEventListener(
    "canplaythrough",
    () => {
      // Calcula métricas adicionais
      const totalLoadTime = metrics.canPlayThrough - metrics.startTime

      // Envia métricas para análise (em um ambiente real, você enviaria para um serviço de analytics)
      console.log(`[Video Performance] ${videoId}: Total load time: ${Math.round(totalLoadTime)}ms`)

      // Exemplo de como enviar para um serviço de analytics (comentado)
      /*
    if (window.gtag) {
      window.gtag('event', 'video_performance', {
        'video_id': videoId,
        'load_time': totalLoadTime,
        'connection_type': (navigator as any).connection?.effectiveType || 'unknown'
      });
    }
    */
    },
    { once: true },
  )
}
