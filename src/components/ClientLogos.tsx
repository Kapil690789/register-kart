"use client"

import { motion } from "framer-motion"

export default function ClientLogos() {
  const logos = [
    "/logo1.svg",
    "/logo2.svg",
    "/logo3.svg",
    "/logo4.svg",
    "/logo5.svg",
    "/logo6.svg",
    "/logo7.svg",
    "/logo8.svg",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Happy Clients
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo || "/placeholder.svg"}
              alt={`Client logo ${index + 1}`}
              className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

