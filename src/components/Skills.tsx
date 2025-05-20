// 'use client'
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiMongodb,
//   SiDocker,
//   SiTypescript,
//   SiPostgresql,
//   SiFigma,
//   SiGit,
//   SiGithub,
//   SiVercel,
//   SiGraphql,
//   SiPrisma,
//   SiPostman,
//   SiCypress,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiRender,
// } from "react-icons/si";
// import React, { useRef } from "react";
// import { technologies } from "./Info";
// import { motion, useScroll, useTransform } from "framer-motion"
// import {
//   Code,
//   Database,
//   Globe,
//   Layout,
//   Server,
//   Smartphone,
//   Terminal,
//   Figma,
//   GitBranch,
//   Cpu,
//   Layers,
//   Briefcase,
//   TestTube,
//   Network,
//   Palette,
// } from "lucide-react"
// import type { JSX } from "react"


// const skills = {
//   Frontend: [
//     { name: "React", icon: SiReact },
//     { name: "Next.js", icon: SiNextdotjs },
//     { name: "TypeScript", icon: SiTypescript },
//     { name: "Tailwind CSS", icon: SiTailwindcss },
//     { name: "HTML5", icon: SiHtml5 },
//     { name: "CSS3", icon: SiCss3 },
//     { name: "JavaScript", icon: SiJavascript },
//   ],
//   Backend: [
//     { name: "Node.js", icon: SiNodedotjs },
//     { name: "Express", icon: SiNodedotjs },
//     { name: "MongoDB", icon: SiMongodb },
//     { name: "PostgreSQL", icon: SiPostgresql },
//     { name: "GraphQL", icon: SiGraphql },
//     { name: "Prisma", icon: SiPrisma },
//   ],
//   "DevOps & Tools": [
//     { name: "Git", icon: SiGit },
//     { name: "GitHub", icon: SiGithub },
//     { name: "Docker", icon: SiDocker },
//     { name: "Vercel", icon: SiVercel },
//     { name: "Figma", icon: SiFigma },
//     { name: "Postman", icon: SiPostman },
//     { name: "Cypress", icon: SiCypress },
//     { name: "Render", icon: SiRender },
//   ],
// }



// export const Skills = () => {

 


//   return (
//     <section id="skills" className="w-full px-30 py-16 text-white">

      
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center mb-12"
//       >
//         💻 My Full Stack Skills
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {Object.entries(skills).map(([category, items], i) => (
//           <motion.div
//             key={category}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-[#111] to-[#1f1f1f] border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_#9f7aea] transition-transform hover:scale-[1.03]"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
//             <div className="flex flex-wrap gap-3">
//               {items.map(({ name, icon: Icon }) => (
//                 <motion.div
//                   key={name}
//                   whileHover={{ scale: 1.1, rotate: 3 }}
//                   className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full transition"
//                 >
//                   <Icon className="text-lg text-purple-300" />
//                   <span className="text-sm">{name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>




 
      

//     </section>
//   );
// };

"use client"

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
} from "react-icons/si"
import { motion } from "framer-motion"

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space">
                💻 My <span className="text-gradient">Full Stack</span> Skills
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Here are the technologies and tools I work with to build modern web applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="bg-card/30 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="flex items-center gap-2 bg-white/10 dark:bg-black/30 hover:bg-primary/20 text-foreground px-3 py-2 rounded-full transition-colors"
                    >
                      <Icon className="text-lg text-primary" />
                      <span className="text-sm">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center mt-12">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative px-7 py-4 bg-card/80 backdrop-blur-sm rounded-lg leading-none flex items-center">
                <span className="text-muted-foreground">
                  Always learning and exploring new technologies to stay at the cutting edge.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
