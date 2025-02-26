"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1E3A8A] shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="Register Karo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Our Services", "Blog", "Contact Us", "About Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-lg text-white hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-orange-500 text-white px-6 py-3 text-lg rounded-md hover:bg-orange-600 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#1E3A8A] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Our Services", "Blog", "Contact Us", "About Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-2 text-lg text-white hover:bg-blue-700 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full text-center bg-orange-500 text-white px-4 py-2 text-lg rounded-md hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

