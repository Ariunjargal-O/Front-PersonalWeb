"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary">Port</span>folio
      </motion.div>
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  )
}
