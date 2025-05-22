"use client"
import React from "react";
import { useState, useEffect } from "react"
import { Skills } from "../components/Skills";
import { Portfilo } from "../components/Portfilio";
import Footer from "../components/Footer";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Projects from "@/components/Project";
import Experience from "@/components/Experience";
import SkillsBannerAdvanced from "@/components/Skills-banner";
import Main from "@/components/Main";
import MainPage from "@/components/MainPage";
import Loader from "@/components/Loader";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import FeedBack from "@/components/Testimonials";

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <FloatingParticles theme={theme} />
            <Navbar activeSection={activeSection} />
            <ScrollIndicator />
            <main>
              <MainPage />
              {/* <Main/> */}
              <About />
              <SkillsBannerAdvanced />
              <Skills />

              <Projects />
              <Experience />
              <FeedBack/>
              <Portfilo />
              <ContactMe />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
