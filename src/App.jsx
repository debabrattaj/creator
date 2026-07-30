import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileActionBar from './components/MobileActionBar'
import SEOSchema from './components/SEOSchema'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEOSchema />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </div>
  )
}

export default App
