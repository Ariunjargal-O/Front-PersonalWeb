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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 mx-auto z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left content - Text and buttons */}
          <motion.div style={{ y, opacity: heroOpacity }} className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block p-2 rounded-full bg-primary/10 text-gray-200 text-sm md:text-base lg:text-lg font-medium border border-white/20"
                >
                  WELCOME TO MY PORTFOLIO
                </motion.span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Hi👋 , I'm{" "}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/90 mt-2"
                >
                  <TypeAnimation
                    sequence={[personalInfo.name, 5000, personalInfo.nickname, 5000]}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl text-gray-200 h-16 md:h-20">
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

              <p className="text-base md:text-lg text-muted-foreground max-w-lg">{personalInfo.bio}</p>
            </motion.div>

            <p className="flex items-center text-white my-5">
              <MapPin className="mr-2" />
              {personalInfo.location}
            </p>

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
                <Link href="#projects" className="bg-transparent">
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
              className="flex items-center gap-4 pt-8"
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

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
            className="relative flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="w-full max-w-md mx-auto">
              <img
                src="/Me.png"
                alt="Ariunjargal Ochirpurev"
                className="w-full h-auto rounded-full object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm dark:text-gray-200 mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 dark:text-gray-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
    // <section
    //   id="home"
    //   ref={ref}
    //   className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 "
    // >
      

    //   {/* Background gradient */}
    //   <div className="absolute inset-0 -z-10">
    //     <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
    //     <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
    //   </div>

    //   <div className="container w-full flex flex-row justify-between mx-20 z-10">
    //     <div className="w-full flex flex-row justify-between relative z-10 gap-10">
    //       <motion.div
    //         style={{ y, opacity: heroOpacity }}
    //         className=" w-1/2 justify-between items-center px-20 py-5"
    //       >
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5 }}
    //         >
    //           <div className="inline-block mb-4">
    //             <motion.span
    //               initial={{ opacity: 0, scale: 0.8 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               transition={{ duration: 0.5, delay: 0.2 }}
    //               className="inline-block p-2  rounded-full bg-primary/10 text-gray-200 text-2xl font-medium border border-white"
    //             >
    //               WELCOME TO MY PORTFOLIO
    //             </motion.span>
    //           </div>
    //           <h1 className="text-2xl md:text-4xl  font-bold leading-tight mb-4 text-white">
    //             Hi👋 , I'm{" "}
    //             <motion.div
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 0.5, delay: 0.3 }}
    //               className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/90 pl-5"
    //             >
    //               <TypeAnimation
    //                 sequence={["Ariunjargal Ochirpurev", 5000, "Arii", 5000]}
    //                 className="text-2xl md:text-4xl lg:text-5xl pl-10 text-white"
    //                 wrapper="span"
    //                 speed={50}
    //                 repeat={Number.POSITIVE_INFINITY}
    //               />
    //             </motion.div>
    //           </h1>
    //           <div className="text-xl md:text-2xl text-gray-200 h-16">
    //             <TypeAnimation
    //               sequence={[
    //                 "I build web applications",
    //                 1000,
    //                 "I create user experiences",
    //                 1000,
    //                 "I develop solutions",
    //                 1000,
    //                 "I design APIs",
    //                 1000,
    //                 "I'm a fast learner",
    //                 1000,
    //               ]}
    //               wrapper="span"
    //               speed={50}
    //               repeat={Number.POSITIVE_INFINITY}
    //             />
    //           </div>
    //           <p className="text-lg text-muted-foreground max-w-lg mt-4">
    //             {personalInfo.bio}
    //           </p>
    //         </motion.div>

    //         <p className="flex text-white mb-10 mt-5">
    //           <MapPin />
    //           Mongolia, Ulaanbaatar
    //         </p>

    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: 0.4 }}
    //           className="flex flex-wrap gap-4"
    //         >
    //           <Button asChild size="lg" className="group">
    //             <Link href="#contact">
    //               Contact Me{" "}
    //               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    //             </Link>
    //           </Button>
    //           <Button variant="outline" size="lg" asChild className="group">
    //             <Link href="#projects" className="bg-transparent">
    //               View Projects{" "}
    //               <motion.span
    //                 animate={{ x: [0, 5, 0] }}
    //                 transition={{
    //                   duration: 1,
    //                   repeat: Number.POSITIVE_INFINITY,
    //                   repeatDelay: 3,
    //                 }}
    //               >
    //                 →
    //               </motion.span>
    //             </Link>
    //           </Button>
    //         </motion.div>

    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: 0.5 }}
    //           className="flex items-center gap-4 pt-10"
    //         >
    //           {[
    //             {
    //               icon: <Github className="h-5 w-5" />,
    //               url: socialLinks.github,
    //             },
    //             {
    //               icon: <Linkedin className="h-5 w-5" />,
    //               url: socialLinks.linkedin,
    //             },
    //             {
    //               icon: <Instagram className="h-5 w-5" />,
    //               url: socialLinks.instagram,
    //             },
    //             {
    //               icon: <Facebook className="h-5 w-5" />,
    //               url: socialLinks.facebook,
    //             },
    //           ].map((social, i) => (
    //             <motion.div
    //               key={i}
    //               whileHover={{ y: -5 }}
    //               whileTap={{ scale: 0.95 }}
    //             >
    //               <Link
    //                 href={social.url}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="flex items-center justify-center w-10 h-10 rounded-full bg-card border hover:bg-primary/10 hover:text-primary transition-colors"
    //               >
    //                 {social.icon}
    //               </Link>
    //             </motion.div>
    //           ))}
    //         </motion.div>
    //       </motion.div>

    //       <motion.div
    //         initial={{ opacity: 0, scale: 0.8 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.8 }}
    //         style={{ opacity }}
    //         className="relative flex items-center justify-center w-1/2"
    //       >
    //         <div>
    //           <img src="Me.png" alt="Ariunjargal Ochirpurev" />
    //         </div>
    //       </motion.div>
    //     </div>

    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1.5, duration: 1 }}
    //       className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
    //     >
    //       <span className="text-sm text-gray-200 mb-2">Scroll Down</span>
    //       <motion.div
    //         animate={{ y: [0, 10, 0] }}
    //         transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
    //       >
    //         <ChevronDown className="h-6 w-6 text-gray-200" />
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}



