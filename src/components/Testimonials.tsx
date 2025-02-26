"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Alex",
    company: "Product XYZ India Ltd",
  },
  {
    text: "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Chris",
    company: "Product XYZ USA Ltd",
  },
  {
    text: "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Michael",
    company: "Manager Technologies Ltd",
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-[#1E3A8A] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What peoples says about us</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="max-w-4xl mx-8">
              <div className="bg-white/10 rounded-2xl p-8 md:p-12">
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">{testimonials[currentSlide].text}</p>
                <div>
                  <div className="font-semibold text-xl">{testimonials[currentSlide].author}</div>
                  <div className="text-white/80">{testimonials[currentSlide].company}</div>
                </div>
              </div>
            </div>

            <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

