import { CtaBand } from '@/components/CtaBand'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Menu } from '@/components/Menu'
import { Testimonials } from '@/components/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Menu />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
