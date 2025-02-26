"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 md:py-32 bg-[#1E3A8A] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Video Introductions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Watch our experts explain how Register Karo can help streamline your
            business compliance needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src="/video-thumbnail.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-[#1E3A8A]" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Explore Ideas Together
              </h3>
              <p className="text-gray-300">
                Our team of experts will work with you to understand your business
                needs and provide tailored solutions.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Bring Those Ideas to Life
              </h3>
              <p className="text-gray-300">
                We'll help you implement the compliance solutions that best fit your
                business, ensuring you stay compliant and focused on growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
