"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustBadges from "./components/TrustBadges"
import Services from "./components/Services"
import VideoSection from "./components/VideoSection"
import ClientLogos from "./components/ClientLogos"
import ProcessSteps from "./components/ProcessSteps"
import Transformation from "./components/Transformation"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import MobileApp from "./components/MobileApp"
import Stats from "./components/Stats"
import Footer from "./components/Footer"

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <VideoSection />
        <ClientLogos />
        <ProcessSteps />
        <Transformation />
        <Testimonials />
        <FAQ />
        <MobileApp />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}

