"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  isActive: boolean
}

export function Confetti({ isActive }: ConfettiProps) {
  useEffect(() => {
    if (isActive) {
      const end = Date.now() + 1000

      const colors = ["#6366f1", "#8b5cf6", "#d946ef"]

      ;(function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
    }
  }, [isActive])

  return null
}

