"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { useTheme } from "next-themes"
import { experiences } from "./Info"


export default function Experience() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden  bg-black">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
          >
            <Calendar className="h-8 w-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">My professional journey and educational background</p>
        </motion.div>

        <motion.div style={{ opacity }}>
          <VerticalTimeline lineColor={isDark ? "rgba(138, 43, 226, 0.2)" : "rgba(138, 43, 226, 0.1)"}>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: isDark ? "hsl(var(--card))" : "white",
                  boxShadow: "0 3px 15px rgba(0, 0, 0, 0.1)",
                  border: isDark ? "1px solid hsl(var(--border))" : "1px solid #e5e5e5",
                  padding: "2rem",
                  borderRadius: "0.75rem",
                }}
                contentArrowStyle={{
                  borderRight: isDark ? "7px solid hsl(var(--card))" : "7px solid white",
                }}
                date={exp.date}
                iconStyle={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 0 0 4px hsl(var(--background)), 0 0 0 5px hsl(var(--primary))",
                }}
                icon={exp.type === "work" ? <Briefcase /> : <GraduationCap />}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <h4 className="text-primary font-medium">{exp.company}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  )
}
