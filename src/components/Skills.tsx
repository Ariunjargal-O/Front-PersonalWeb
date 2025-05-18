'use client'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiGraphql,
  SiPrisma,
  SiPostman,
  SiCypress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRender,
} from "react-icons/si";
import React, { useRef } from "react";
import { technologies } from "./Info";
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Figma,
  GitBranch,
  Cpu,
  Layers,
  Briefcase,
  TestTube,
  Network,
  Palette,
} from "lucide-react"
import type { JSX } from "react"


const skills = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Prisma", icon: SiPrisma },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Cypress", icon: SiCypress },
    { name: "Render", icon: SiRender },
  ],
}



export const Skills = () => {

 


  return (
    <section id="skills" className="w-full px-30 py-16 text-white bg-black">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        💻 My Full Stack Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#111] to-[#1f1f1f] border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_#9f7aea] transition-transform hover:scale-[1.03]"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full transition"
                >
                  <Icon className="text-lg text-purple-300" />
                  <span className="text-sm">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>




 
      

    </section>
  );
};

