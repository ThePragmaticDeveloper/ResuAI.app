import { Cases } from "@/components/Cases";
import { Features } from "@/components/Features";
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
      
    </>
  )
}
