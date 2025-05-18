"use client";

import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "./Info";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Declare the 'model-viewer' element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const MainPage = () => {
  return (
    <div className="w-screen h-screen flex gap-10 bg-black pb-15 pt-30 px-50 items-center">
      <div className="w-1/2 justify-between items-center h-auto">
        <Button className="text-2xl border-2 mb-5 rounded-3xl p-2">
          WELCOME TO MY PORTFOLIA
        </Button>
        <p className="text-4xl text-white ">Hi👋 , I’m </p>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
        >
          {" "}
          <h1 className="text-6xl pl-10 text-white">Ariunjargal Ochirpurev</h1>
        </motion.span>

        <div className="text-xl md:text-3xl text-gray-200 h-16 py-5">
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
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <p className="py-5 text-white">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>

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
      </div>
      <div className="w-1/2 flex justify-center">
        {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 1 }}
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
          </motion.div> */}
        <img src="Me.png"></img>
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
  );
};
