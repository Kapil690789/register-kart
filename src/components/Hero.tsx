"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#1E3A8A] to-blue-700 py-32 md:py-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-2">
              <span className="text-base font-medium text-white">Google Rating</span>
              <div className="ml-3 flex items-center">
                ★★★★★
                <span className="ml-2 text-yellow-400 text-lg">5.0</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Your Trusted Partner
              <br />
              For <span className="text-orange-500">Compliance</span> needs
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-2xl">
              An online business compliance platform that helps entrepreneurs and other individuals with various
              registrations, tax filings, and other legal matters.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 text-lg rounded-md hover:bg-orange-600 transition-colors transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Expert
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 text-lg rounded-md hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Live Events
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%2011.32.21%E2%80%AFPM-DfIulUtnSS7gDrMI3FAs4G6CMz0UVB.png"
              alt="Hero Illustration"
              className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

