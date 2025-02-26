"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Can I cancel Anytime? Do I have dealing with the software?",
    answer:
      "Yes, you can cancel your subscription at any time. Our software is designed to be user-friendly and we provide full support for any questions you may have.",
  },
  {
    question: "Can I cancel Anytime? Do I have dealing with the software?",
    answer:
      "Yes, you can cancel your subscription at any time. Our software is designed to be user-friendly and we provide full support for any questions you may have.",
  },
  {
    question: "Can I cancel Anytime? Do I have dealing with the software?",
    answer:
      "Yes, you can cancel your subscription at any time. Our software is designed to be user-friendly and we provide full support for any questions you may have.",
  },
  {
    question: "Can I cancel Anytime? Do I have dealing with the software?",
    answer:
      "Yes, you can cancel your subscription at any time. Our software is designed to be user-friendly and we provide full support for any questions you may have.",
  },
  {
    question: "Can I cancel Anytime? Do I have dealing with the software?",
    answer:
      "Yes, you can cancel your subscription at any time. Our software is designed to be user-friendly and we provide full support for any questions you may have.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequent Ask Questions</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </button>
              {openIndex === index && <div className="px-8 pb-6 text-gray-600 text-lg">{faq.answer}</div>}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1E3A8A] text-white px-10 py-4 text-lg rounded-md hover:bg-blue-900 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  )
}

