"use client"

import { motion } from "framer-motion"
import { Building2, FileText, HomeIcon, Repeat, PiggyBank, BookOpen } from "lucide-react"

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-orange-500" />,
    title: "Company Formation",
    description: "Start your business journey with our expert guidance",
    link: "#",
  },
  {
    icon: <FileText className="h-12 w-12 text-orange-500" />,
    title: "Company Secretarial Services",
    description: "Make data-driven decisions with our technology",
    link: "#",
  },
  {
    icon: <HomeIcon className="h-12 w-12 text-orange-500" />,
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving",
    link: "#",
  },
  {
    icon: <Repeat className="h-12 w-12 text-orange-500" />,
    title: "Annual Compliance Services",
    description: "Keep your company compliant with our support",
    link: "#",
  },
  {
    icon: <PiggyBank className="h-12 w-12 text-orange-500" />,
    title: "Payroll Services",
    description: "Expert payroll services for your growth",
    link: "#",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-orange-500" />,
    title: "Bookkeeping Services",
    description: "Keeping your financials well-organized",
    link: "#",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-white" id="our-services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Services</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 lg:p-10 border-2 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg mb-6">{service.description}</p>
              <a
                href={service.link}
                className="text-orange-500 hover:text-orange-600 inline-flex items-center text-lg font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-[#1E3A8A] text-white px-10 py-4 text-lg rounded-md hover:bg-blue-900 transition-colors transform hover:scale-105">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}

