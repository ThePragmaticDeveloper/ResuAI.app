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

const HeroSection = () => {
  return (
    <Container>
    <Hero>
     <Button variant="secondary" size="sm" className="gap-4 rounded-2xl glass">
      <GiBandit className="w-4 h-4 bandit" />
      <span className="w-max text-base">| New: Our AI integration</span>
      <MoveRight className="w-4 h-4" />
    </Button>
    <HeroTitle>
     Outsmart the System, <br /> Land the Interview
    </HeroTitle>
    <HeroSubtitle>
    Gain a competitive edge in today's job market with AI-driven <br /> resumes that are strategically designed to bypass ATS algorithms <br /> and capture recruiters' attention.
    </HeroSubtitle>
    <Button asChild size="lg" className="flex w-fit gap-0 py-6.5 px-8 mt-0 bg-gradient rounded-xl">
      <Link href="/resumes" className="gap-0">
       <span className="text-lg leading-tight relative bottom-[1px]">Create My Resume</span>
       <BiChevronRight className="w-6 h-6 icon p-0" />
      </Link>
    </Button>
    </Hero>
   </Container>
  )
}

export default HeroSection
