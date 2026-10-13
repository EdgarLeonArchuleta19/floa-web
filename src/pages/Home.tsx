import { Navbar } from '../components/layout/Navbar.tsx'
import { Hero } from '../components/sections/Hero.tsx'
import { About } from '../components/sections/About.tsx'
import { Services } from '../components/sections/Services.tsx'
import { Fleet } from '../components/sections/Fleet.tsx'
import { WhyUs } from '../components/sections/WhyUs.tsx'
import { Testimonials } from '../components/sections/Testimonials.tsx'
import { Clients } from '../components/sections/Clients.tsx'
import { Contact } from '../components/sections/Contact.tsx'
import { Footer } from '../components/layout/Footer.tsx'
import { BackToTop } from '../components/layout/BackToTop.tsx'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <WhyUs />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
