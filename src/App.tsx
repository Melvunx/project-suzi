import { CtaBand } from '@/components/CtaBand'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Testimonials } from '@/components/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
