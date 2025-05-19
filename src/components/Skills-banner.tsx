"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Code,
  Layers,
  FileCode,
  Braces,
  Server,
  Database,
  Palette,
  Figma,
  LayoutGrid,
  Workflow,
  Boxes,
} from "lucide-react";

export default function SkillsBannerClean() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 0.5]
  );

  // Define your skills with vibrant neon colors and matching icons
  const skills = [
    { name: "CODING", color: "#ff00ff", icon: <Code className="h-8 w-8" /> },
    {
      name: "FULLSTACK",
      color: "#00ffff",
      icon: <Layers className="h-8 w-8" />,
    },
    { name: "HTML5", color: "#ff8800", icon: <FileCode className="h-8 w-8" /> },
    { name: "CSS3", color: "#0088ff", icon: <Palette className="h-8 w-8" /> },
    { name: "REACT", color: "#61dafb", icon: <Workflow className="h-8 w-8" /> },
    {
      name: "NEXT",
      color: "#ffffff",
      icon: <LayoutGrid className="h-8 w-8" />,
    },
    { name: "NODE", color: "#00ff88", icon: <Server className="h-8 w-8" /> },
    { name: "EXPRESS", color: "#ffffff", icon: <Server className="h-8 w-8" /> },
    {
      name: "TAILWIND",
      color: "#38b2ac",
      icon: <Palette className="h-8 w-8" />,
    },
    { name: "FIGMA", color: "#ff00ff", icon: <Figma className="h-8 w-8" /> },
    {
      name: "MONGODB",
      color: "#00ff88",
      icon: <Database className="h-8 w-8" />,
    },
    {
      name: "POSTGRESQL",
      color: "#0088ff",
      icon: <Database className="h-8 w-8" />,
    },
    { name: "PRISMA", color: "#aa88ff", icon: <Boxes className="h-8 w-8" /> },
    {
      name: "JAVASCRIPT",
      color: "#ffff00",
      icon: <Braces className="h-8 w-8" />,
    },
    {
      name: "TYPESCRIPT",
      color: "#0088ff",
      icon: <Braces className="h-8 w-8" />,
    },
  ];

  // Duplicate the skills array to create a seamless loop
  const row = [...skills, ...skills, ...skills];

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1 },
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="relative py-28 overflow-hidden light:bg-transparent dark:bg-black"
      // style={{
      //   boxShadow: "0 0 70px rgba(0, 0, 0, 0.9) inset",
      // }}
    >
      {/* Radial gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        // style={
        //   {
        //     background:
        //       "radial-gradient(circle 500px at var(--x) var(--y), rgba(138, 43, 226, 0.15), transparent 80%)",
        //     "--x": `${mousePosition.x}px`,
        //     "--y": `${mousePosition.y}px`,
        //   } as any
        // }
      />

      {/* Animated particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: skills[i % skills.length].color,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -200],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Main skills row with enhanced effects */}
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -100 * skills.length],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            },
          }}
        >
          {row.map((skill, index) => (
            <motion.div
              key={index}
              className="mx-8 inline-block"
              whileHover={{
                scale: 1.2,
                y: -15,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="px-8 py-8 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: "rgba(0,0,0,0.7)",
                }}
                whileHover={{
                  boxShadow: `0 0 40px ${skill.color}70`,
                }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 z-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}50 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Animated border with gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl z-0"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${skill.color}, transparent)`,
                    backgroundSize: "200% 200%",
                    opacity: 0.5,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                <motion.div
                  className="absolute inset-0.5 rounded-2xl z-0"
                  style={{
                    background: "rgba(0,0,0,0.9)",
                  }}
                />

                {/* Icon with advanced animation */}
                <motion.div
                  className="relative z-10 mb-4 p-4 rounded-full"
                  style={{
                    color: skill.color,
                    background: `rgba(0,0,0,0.5)`,
                    border: `2px solid ${skill.color}60`,
                    boxShadow: `0 0 15px ${skill.color}50`,
                  }}
                  animate={{
                    filter: [
                      `drop-shadow(0 0 5px ${skill.color})`,
                      `drop-shadow(0 0 15px ${skill.color})`,
                      `drop-shadow(0 0 5px ${skill.color})`,
                    ],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    filter: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                    rotate: {
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Text with glitch effect on hover */}
                <motion.span
                  className="text-2xl font-mono font-bold tracking-widest relative z-10"
                  style={{
                    color: skill.color,
                    textShadow: `0 0 10px ${skill.color}`,
                  }}
                  whileHover={{
                    textShadow: [
                      `0 0 10px ${skill.color}`,
                      `2px 2px 10px ${skill.color}`,
                      `-2px -2px 10px ${skill.color}`,
                      `0 0 10px ${skill.color}`,
                    ],
                  }}
                  transition={{
                    textShadow: {
                      duration: 0.5,
                      repeat: 2,
                      repeatType: "reverse",
                    },
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>

              {/* Enhanced reflection effect */}
              <motion.div
                className="h-8 mt-1 rounded-b-md mx-auto blur-md"
                style={{
                  width: "90%",
                  background: `linear-gradient(to bottom, ${skill.color}60, transparent)`,
                  opacity: 0.6,
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Overlay gradient edges for smooth fade effect */}
      {/* <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div> */}
    </div>
  );
}
