"use client";
import React, { useState, useEffect } from "react";

import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import MainPage from "@/components/MainPage";
import About from "@/components/About";
import SkillsBannerAdvanced from "@/components/Skills-banner";

import Projects from "@/components/Project";
import Experience from "@/components/Experience";
import FeedBack from "@/components/Testimonials";

import ContactMe from "@/components/ContactMe";
import { Skills } from "@/components/Skills";
import { Portfilo } from "@/components/Portfilio";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme(); // Fetch current theme (light or dark)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 300;
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            // className={`relative ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"}`} // Apply theme classes
          >
            {/* Full Background for Light/Dark Theme */}
            <div className={`floating-particles ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"}`}>
              <FloatingParticles />
            </div>

            {/* Main Content */}
            <Navbar activeSection={activeSection} />
            <ScrollIndicator />
            <main>
              <MainPage />
              <About />
              <SkillsBannerAdvanced />
              <Skills />
              <Projects />
              <Experience />
              <FeedBack />
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
