import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Fleet } from './components/Fleet'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function App() {
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

export default App