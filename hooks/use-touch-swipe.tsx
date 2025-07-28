"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void
  onTouchMove: (e: React.TouchEvent) => void
  onTouchEnd: (e: React.TouchEvent) => void
}

interface SwipeState {
  isSwiping: boolean
  direction: "left" | "right" | null
  distance: number
}

interface UseTouchSwipeProps {
  threshold?: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

export function useTouchSwipe({
  threshold = 50,
  onSwipeLeft,
  onSwipeRight,
}: UseTouchSwipeProps = {}): [SwipeHandlers, SwipeState] {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isSwiping: false,
    direction: null,
    distance: 0,
  })

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setSwipeState((prev) => ({ ...prev, isSwiping: true }))
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = touchStartX.current - currentX
    const diffY = touchStartY.current - currentY

    // Check if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Prevent default to stop scrolling when swiping horizontally
      e.preventDefault()

      const direction = diffX > 0 ? "left" : "right"
      setSwipeState({
        isSwiping: true,
        direction,
        distance: Math.abs(diffX),
      })
    }
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartX.current) return

      const currentX = e.changedTouches[0].clientX
      const diffX = touchStartX.current - currentX

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0 && onSwipeLeft) {
          onSwipeLeft()
        } else if (diffX < 0 && onSwipeRight) {
          onSwipeRight()
        }
      }

      // Reset
      touchStartX.current = null
      touchStartY.current = null
      setSwipeState({
        isSwiping: false,
        direction: null,
        distance: 0,
      })
    },
    [threshold, onSwipeLeft, onSwipeRight],
  )

  return [
    {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    swipeState,
  ]
}
