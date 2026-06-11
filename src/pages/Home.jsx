import React from "react";
import FloatingParticles from "../components/FloatingParticles";
import Navbar from "../components/leadero/Navbar";
import HeroSection from "../components/leadero/HeroSection";
import ServicesSection from "../components/leadero/ServicesSection";
import PricingSection from "../components/leadero/PricingSection";
import FaqSection from "../components/leadero/FaqSection";
import Footer from "../components/leadero/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <FloatingParticles />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}