/**
 * Preloads a video by creating a video element and loading its metadata
 * @param src The source URL of the video to preload
 * @returns A promise that resolves when the video metadata is loaded
 */
export function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video")
    video.preload = "metadata"
    video.muted = true

    video.onloadedmetadata = () => {
      resolve()
    }

    video.onerror = (error) => {
      reject(error)
    }

    video.src = src
  })
}

/**
 * Preloads multiple videos in parallel
 * @param sources Array of video source URLs to preload
 * @returns A promise that resolves when all videos have been preloaded
 */
export function preloadVideos(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map((src) => preloadVideo(src)))
}
