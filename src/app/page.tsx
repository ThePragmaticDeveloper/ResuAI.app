import { Cases } from "@/components/Cases";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";


export default function Home() {

  return (
    <>
      <Header />
      <HeroSection />
      <Cases />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  )
}
