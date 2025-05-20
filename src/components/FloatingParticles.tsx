"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type FloatingParticlesProps = {}

const ShootingStar: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
      style={{
        width: Math.random() * 150 + 50,
        top: `${Math.random() * 70}%`,
        left: "-10%",
        rotate: `${Math.random() * 20 + 10}deg`,
      }}
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: "120vw",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 15 + 10,
      }}
    />
  )
}


export function FloatingParticles() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [mounted, setMounted] = useState(false)

  // Only show after first render to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerRef = useRef(null)
  interface Star {
    id: number
    size: number
    top: number
    left: number
    animationDuration: number
    delay: number
    pulse: boolean
  }

  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<{ id: number; delay: number }[]>([])

  useEffect(() => {
    // Generate stars with varying properties
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      size: Math.random() < 0.8 ? Math.random() * 2 + 0.5 : Math.random() * 4 + 2, // Occasionally larger stars
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      pulse: Math.random() > 0.7, // Some stars pulse more visibly
    }))

    // Generate shooting stars
    const newShootingStars = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15,
    }))

    setStars(newStars)
    setShootingStars(newShootingStars)
  }, [])

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(containerScrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5])

  if (!mounted || !isDark) return null

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #050520 100%)",
          backgroundSize: "cover",
        }}
      />

      {/* Star field */}
      <div className="absolute inset-0 w-full h-full">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)` : "0 0 2px #fff",
            }}
            animate={
              star.pulse
                ? {
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: star.animationDuration,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {shootingStars.map((star) => (
          <ShootingStar key={star.id} delay={star.delay} />
        ))}
      </div>

      {/* Galaxy nebulas/clusters - fewer, more subtle */}
      <div className="absolute inset-0 w-full h-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`galaxy-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(75, 0, 130, 0.05) 50%, rgba(0, 0, 0, 0) 70%)`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Add a subtle blue nebula */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "30%",
            right: "10%",
            background: `radial-gradient(circle, rgba(30, 144, 255, 0.05) 0%, rgba(0, 0, 139, 0.03) 50%, rgba(0, 0, 0, 0) 70%)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </div>
  )
}
