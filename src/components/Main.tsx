"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, ChevronDown, Facebook, Instagram } from "lucide-react"

import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

import { Button } from "@/components/ui/button"
import { personalInfo, socialLinks } from "./Info"

export default function Main() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                >
                  {personalInfo.title}
                </motion.span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
                >
                  {personalInfo.nickname || personalInfo.name}
                </motion.span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground h-16">
                <TypeAnimation
                  sequence={[
                    "I build web applications",
                    1000,
                    "I create user experiences",
                    1000,
                    "I develop solutions",
                    1000,
                    "I'm a fast learner",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
              <p className="text-lg text-muted-foreground max-w-lg mt-4">{personalInfo.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="#projects">
                  View Projects{" "}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
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
              className="flex items-center gap-4 pt-4"
            >
              {[
                { icon: <Github className="h-5 w-5" />, url: socialLinks.github },
                { icon: <Linkedin className="h-5 w-5" />, url: socialLinks.linkedin },
                { icon: <Instagram className="h-5 w-5" />, url: socialLinks.instagram },
                { icon: <Facebook className="h-5 w-5" />, url: socialLinks.facebook },
              ].map((social, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
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
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                <Canvas>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={2.2}>
                    <MeshDistortMaterial color="#8a2be2" attach="material" distort={0.3} speed={1.5} />
                  </Sphere>
                </Canvas>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img
                      src="/placeholder.svg?height=320&width=320"
                      alt={personalInfo.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-200 mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>
        </motion.div>
    </section>
  )
}
