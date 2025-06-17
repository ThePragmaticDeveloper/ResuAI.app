
interface HeroProps {
  children?: React.ReactNode
}
interface HeroElementProps {
  children?: React.ReactNode
}


export const HeroTitle = ({children}: HeroElementProps) => {
  return (
    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mt-1">
      {children}
    </h1>
  )
}

export const HeroSubtitle = ({children}: HeroElementProps) => {
  return (
    <p className="text-xl leading-relaxed tracking-tight text-muted-foreground mt-3 mb-8">
      {children}
    </p>
  )
}

const Hero = ({children}: HeroProps) => {
  return (
    <div className="flex text-center gap-1 items-center py-60 justify-center flex-col">
      {children}
    </div>
  )
}

export default Hero
