import Hero from '@/components/Hero'
import About from '@/components/About'
import Music from '@/components/Music'
import Curriculum from '@/components/Curriculum'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Curriculum />
      <Contact />
    </>
  )
}
