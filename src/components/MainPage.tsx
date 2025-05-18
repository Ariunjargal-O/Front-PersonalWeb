"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "./Info";

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
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 10,
      }}
    />
  );
};

export default function MainPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerRef = useRef(null);
  interface Star {
    id: number;
    size: number;
    top: number;
    left: number;
    animationDuration: number;
    delay: number;
    pulse: boolean;
  }

  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<
    { id: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate stars with varying properties
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      size:
        Math.random() < 0.8 ? Math.random() * 2 + 0.5 : Math.random() * 4 + 2, // Occasionally larger stars
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      pulse: Math.random() > 0.7, // Some stars pulse more visibly
    }));

    // Generate shooting stars
    const newShootingStars = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15,
    }));

    setStars(newStars);
    setShootingStars(newShootingStars);
  }, []);

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    containerScrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 0.5]
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-black"
    >
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
              boxShadow:
                star.size > 2
                  ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
                  : "0 0 2px #fff",
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
              repeat: Infinity,
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
              repeat: Infinity,
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
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container w-full flex flex-row justify-between mx-20 z-10">
        <div className="w-full flex flex-row justify-between relative z-10 gap-10">
          <motion.div
            style={{ y, opacity: heroOpacity }}
            className=" w-1/2 justify-between items-center px-20 py-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block p-2  rounded-full bg-primary/10 text-gray-200 text-2xl font-medium border border-white"
                >
                  WELCOME TO MY PORTFOLIO
                </motion.span>
              </div>
              <h1 className="text-2xl md:text-4xl  font-bold leading-tight mb-4 text-white">
                Hi👋 , I'm{" "}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/90 pl-5"
                >
                  <TypeAnimation
                    sequence={["Ariunjargal Ochirpurev", 5000, "Arii", 5000]}
                    className="text-2xl md:text-4xl lg:text-5xl pl-10 text-white"
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>
              </h1>
              <div className="text-xl md:text-2xl text-gray-200 h-16">
                <TypeAnimation
                  sequence={[
                    "I build web applications",
                    1000,
                    "I create user experiences",
                    1000,
                    "I develop solutions",
                    1000,
                    "I design APIs",
                    1000,
                    "I'm a fast learner",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
              <p className="text-lg text-muted-foreground max-w-lg mt-4">
                {personalInfo.bio}
              </p>
            </motion.div>

            <p className="flex text-white mb-10 mt-5">
              <MapPin />
              Mongolia, Ulaanbaatar
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Contact Me{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="#projects">
                  View Projects{" "}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-10"
            >
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  url: socialLinks.github,
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  url: socialLinks.linkedin,
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  url: socialLinks.instagram,
                },
                {
                  icon: <Facebook className="h-5 w-5" />,
                  url: socialLinks.facebook,
                },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-card border hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
            className="relative flex items-center justify-center w-1/2"
          >
            <div>
              <img src="Me.png" alt="Ariunjargal Ochirpurev" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-200 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-6 w-6 text-gray-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
