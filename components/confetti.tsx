"use client"

import { useEffect } from "react"

export default function Confetti() {
  useEffect(() => {
    const createConfetti = () => {
      const colors = ["rgba(97,162,188,0.6)", "rgba(97,162,188,0.4)", "rgba(97,162,188,0.3)", "rgba(97,162,188,0.2)"]

      for (let i = 0; i < 200; i++) {
        const confetti = document.createElement("div")
        confetti.style.position = "fixed"
        confetti.style.width = "6px"
        confetti.style.height = "6px"
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.opacity = "0.6"
        confetti.style.left = Math.random() * window.innerWidth + "px"
        confetti.style.top = "-6px"
        confetti.style.borderRadius = "50%"
        confetti.style.zIndex = "9999"
        document.body.appendChild(confetti)

        const animation = confetti.animate(
          [
            {
              transform: `translate(${Math.random() * 200 - 100}px, ${
                window.innerHeight
              }px) rotate(${Math.random() * 360}deg)`,
            },
          ],
          {
            duration: Math.random() * 2000 + 2000,
            easing: "cubic-bezier(.37,0,.63,1)",
          },
        )

        animation.onfinish = () => confetti.remove()
      }
    }

    createConfetti()
  }, [])

  return null
}

