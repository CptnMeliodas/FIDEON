import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import BenefitsSection from "@/components/BenefitsSection"
import PricingSection from "@/components/PricingSection"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
    </div>
  )
}
