"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  theme?: "dark" | "light" | null;
  particleCount?: number;
}

// Enhanced Shooting Star component with trail effect
const ShootingStar = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute bg-gradient-to-r from-white via-white to-transparent"
    style={{
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      width: "30px",
      height: "2px",
      borderRadius: "40%",
    }}
    animate={{
      x: [0, 200, 1000],
      y: [0, 200, 300],
      opacity: [1, 0.7, 0],
      scale: [1, 0.8, 0.2],
    }}
    transition={{
      delay: delay,
      duration: Math.random() * 1.5 + 1.5,
      repeat: Infinity,
      repeatDelay: Math.random() * 3 + 2,
    }}
  />
);

// New Star Twinkle Component for dark mode
const TwinklingStar = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "white",
      boxShadow: size > 2 ? `0 0 ${size * 2}px ${size/2}px rgba(255, 255, 255, 0.9)` : "0 0 2px #fff",
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

export function FloatingParticles({ theme = "dark", particleCount = 80 }: FloatingParticlesProps) {
  const isDark = theme === "dark";
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Stars for dark mode (more stars with varied sizes and brightness)
  const stars = isDark
    ? Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.8 ? Math.random() * 2 + 1 : Math.random() * 4 + 3,
        delay: Math.random() * 5,
        isBright: Math.random() > 0.7,
      }))
    : [];

  // Particles (dust for light mode, additional ambient particles for dark)
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 300,
    size: isDark ? Math.random() * 3 + 1 : Math.random() * 8 + 4,
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 4,
    glow: Math.random() > 0.3,
    color: isDark
      ? ["#FFFFFF", "#E3E3E3", "#C5D5FF", "#B0C4DE", "#ADD8E6"][Math.floor(Math.random() * 5)]
      : ["#FFD700", "#A7F3D0", "#E0BBE4", "#93C5FD", "#FDE68A"][Math.floor(Math.random() * 5)],
  }));

  // Clouds (light and dark)
  const clouds = Array.from({ length: isDark ? 3 : 5 }).map((_, i) => ({
    id: i,
    top: Math.random() * 50,
    left: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.75,
    duration: Math.random() * 40 + 30,
  }));

  // Shooting stars (enhanced for night mode)
  const shootingStars = isDark
    ? Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 10,
      }))
    : [];

  // Nebulae (dark mode only)
  const nebulae = isDark
    ? Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        width: Math.random() * 400 + 200,
        height: Math.random() * 400 + 200,
        color: [
          "rgba(138, 43, 226, 0.15)", // Purple
          "rgba(75, 0, 130, 0.15)",   // Indigo
          "rgba(70, 130, 180, 0.15)", // Steel Blue
          "rgba(0, 100, 0, 0.15)",    // Dark Green
          "rgba(255, 69, 0, 0.08)",   // Red-Orange
        ][Math.floor(Math.random() * 5)],
        duration: Math.random() * 20 + 30,
        delay: Math.random() * 5,
      }))
    : [];

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none h-[300vh] overflow-visible">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-20 transition-all duration-1000"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)" // Deep space gradient with purple tones
            : "linear-gradient(to bottom, #87ceeb, #fca17d)", // Soft blue to sunset orange
        }}
      />

      {/* Sun (Day Mode) */}
      {!isDark && (
        <motion.div
          className="absolute rounded-full"
          style={{
            top: "15%",
            left: "80%",
            width: "120px",
            height: "120px",
            backgroundColor: "#FFD700", // Golden sun
            boxShadow: "0 0 80px 25px #FFD700", // Larger glowing effect
          }}
          animate={{ scale: [1, 1.05, 1] }} // Pulsing effect
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Moon (Night Mode) */}
      {isDark && (
        <motion.div
          className="absolute rounded-full"
          style={{
            top: "12%",
            right: "15%",
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle at 30% 30%, #FFFFFF, #CCCCCC)",
            boxShadow: "0 0 40px 5px rgba(255, 255, 255, 0.4)",
          }}
          animate={{ opacity: [0.85, 0.95, 0.85] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Stars (Night Mode) */}
      {isDark && stars.map((star) => (
        <TwinklingStar 
          key={`star-${star.id}`}
          x={star.x}
          y={star.y}
          size={star.size}
          delay={star.delay}
        />
      ))}

      {/* Shooting Stars (Night Mode) */}
      {shootingStars.map((s) => (
        <ShootingStar key={`shooting-${s.id}`} delay={s.delay} />
      ))}

      {/* Clouds (Both Modes) */}
      {clouds.map((cloud) => (
        <motion.div
          key={`cloud-${cloud.id}`}
          className="absolute rounded-full blur-md"
          style={{
            width: "250px",
            height: "80px",
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            backgroundColor: isDark ? "#444" : "#ffffff", // Darker clouds for night
            opacity: isDark ? 0.25 : 0.5, // Lighter opacity for day
            transform: `scale(${cloud.scale})`,
          }}
          animate={{ x: [0, 100] }} // Slow drifting effect
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: p.glow ? `0 0 ${isDark ? "6px" : "12px"} 2px ${p.color}` : "none",
            opacity: isDark ? 0.8 : 0.4, // Higher opacity for night particles
            filter: isDark ? "blur(1px)" : "blur(2px)", // Blur for night
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Galaxy Nebula Effect (enhanced for dark mode) */}
      {isDark && nebulae.map((nebula) => (
        <motion.div
          key={`nebula-${nebula.id}`}
          className="absolute rounded-full"
          style={{
            width: nebula.width,
            height: nebula.height,
            top: `${nebula.top}%`,
            left: `${nebula.left}%`,
            background: `radial-gradient(circle, ${nebula.color} 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: nebula.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: nebula.delay,
          }}
        />
      ))}
      
      {/* Small stars cluster (dark mode only) */}
      {isDark && (
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute w-[800px] h-[400px] opacity-50"
            style={{
              top: "40%",
              left: "30%",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255, 255, 255, 0) 70%)",
              transform: "rotate(-15deg)",
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}
    </div>
  );
}