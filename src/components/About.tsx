"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { interests, personalInfo, stats } from "./Info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CvDownloadButton from "./CVdownloadButton";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative  text-gray-200"
    >
      {/* <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          background: "linear-gradient(to bottom, #050520 100%,  #050520 70%)",
          backgroundSize: "cover",
        }}
      /> */}

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
            className="w-16 h-16 rounded-full bg-gray-200/30 flex items-center justify-center mx-auto mb-6"
          >
            <Briefcase className="h-8 w-8 " />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-30 bg-gray-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y, opacity: scrollOpacity }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-[6/7] rounded-2xl overflow-hidden border-8 border-background shadow-2xl"
              >
                <img
                  src="/placeholder.svg?height=600&width=480"
                  alt={`About${personalInfo.name}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-10 -right-10 bg-black p-3 rounded-2xl shadow-xl border-2 border-gray-500"
              >
                <div className="grid grid-cols-2 gap-4 border-2 border-gray-400 rounded-lg p-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-gray-200">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-8 -left-8 bg-gray-200 p-4 rounded-full shadow-xl border border-gray-700"
              >
                <Award className="h-10 w-10 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 relative z-20" // Add this
          >
            <div className="border-2 p-10 border-gray-200 rounded-md z-20">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-5">
                  <TabsTrigger value="about" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">About</TabsTrigger>
                  <TabsTrigger value="education" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">Education</TabsTrigger>
                  <TabsTrigger value="interests" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">Interests</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-4 pt-4">
                  <h3 className="text-2xl font-bold">
                    A passionate {personalInfo.title} based in{" "}
                    {personalInfo.location}
                  </h3>
                  <p className="text-muted-foreground">
                    {personalInfo.longBio}
                  </p>
                </TabsContent>
                <TabsContent value="education" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <GraduationCap className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">
                          Bachelor of Economic Managemant
                        </h4>
                        <p className="text-muted-foreground">Nagaoka University</p>
                        <p className="text-sm text-muted-foreground">
                          2020 - 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <Award className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold ">
                          FullStack developer Certification
                        </h4>
                        <p className="text-muted-foreground">Pineconde Academy</p>
                        <p className="text-sm text-muted-foreground">2025</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="interests" className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me:
                  </p>
                  <ul className="space-y-2">
                    {interests.map((interest, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span> {interest}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="grid grid-cols-2 gap-4 py-5 text-gray-400">
                <div>
                  <p className="font-medium text-gray-200">Name:</p>
                  <p>{personalInfo.name}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Email:</p>
                  <p>{personalInfo.email}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Location:</p>
                  <p>{personalInfo.location}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Availability:</p>
                  <p>{personalInfo.availability}</p>
                </div>
              </div>

              <CvDownloadButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
