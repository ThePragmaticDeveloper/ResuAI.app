import React from 'react'
// import Container from './Container'
// import Hero, { HeroSubtitle, HeroTitle } from './Hero'
import { Button } from './ui/button'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { GiBandit } from 'react-icons/gi'
import { MoveRight } from 'lucide-react'
import Container from './Container'
import Hero, { HeroSubtitle, HeroTitle } from './Hero'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <Container>
    <Hero>
     <Button variant="secondary" size="sm" className="gap-2 rounded-2xl glass">
      <GiBandit className="w-6 h-6 bandit" />
      <span className="w-max text-base">| New: Our AI integration</span>
      <MoveRight className="w-4 h-4" />
    </Button>
    <HeroTitle>
     Outsmart the System, <br /> Land the Interview
    </HeroTitle>
    <HeroSubtitle>
    Gain a competitive edge in today's job market with AI-driven <br /> resumes that are strategically designed to bypass ATS algorithms <br /> and capture recruiters' attention.
    </HeroSubtitle>
    
    <Button asChild size="sm" className="btn-gradient text-lg w-fit p-6 mt-0 rounded-xl">
      <Link href="/dashboard/resumes">
       
       Craft My Resume
      </Link>
    </Button>
    {/* <Button className="gap-4">
      Craft My Resume <MoveRight className="w-4 h-4" />
    </Button> */}
    </Hero>
    <Image className="mx-auto" src='/resumeshot.png' alt='' width='600' height='600' />
   </Container>
  )
}

export default HeroSection
