import Hero from '@/components/Hero'
import About from '@/components/About'
import Music from '@/components/Music'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Contact />
    </>
  )
}
