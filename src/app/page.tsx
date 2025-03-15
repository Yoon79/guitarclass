import Hero from '@/components/Hero'
import About from '@/components/About'
import Album from '@/components/Album'
import Music from '@/components/Music'
import Curriculum from '@/components/Curriculum'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      {/* <Music /> */}
      <Album />
      <Curriculum />
      <Contact />
      <Footer />
    </>
  )
}
