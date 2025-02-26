"use client"

import { motion } from "framer-motion"

const badges = [
  { name: "Segment", logo: "/segment-logo.svg" },
  { name: "Oracle", logo: "/oracle-logo.svg" },
  { name: "Shopify", logo: "/shopify-logo.svg" },
  { name: "Samsung", logo: "/samsung-logo.svg" },
  { name: "Monday.com", logo: "/monday-logo.svg" },
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-700">
          Trusted By Over 150+ Startups and Freelance Business
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={badge.logo || "/placeholder.svg"}
                alt={badge.name}
                className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

