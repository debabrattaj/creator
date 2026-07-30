import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import Services from '../components/Services'
import IndustriesTeaser from '../components/IndustriesTeaser'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import ComparisonsTeaser from '../components/ComparisonsTeaser'
import Trust from '../components/Trust'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import SEOSchema from '../components/SEOSchema'
import SEOHead from '../components/SEOHead'

export default function Home() {
  return (
    <>
      <SEOHead
        title={null}
        description="ZohoGeeks is a Zoho consulting studio helping businesses implement, customize, migrate and automate Zoho CRM, Books, People, Zoho One and more. Free consultation — call +91 8116446262."
        path="/"
      />
      <SEOSchema />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <IndustriesTeaser />
        <WhyUs />
        <Process />
        <Pricing />
        <ComparisonsTeaser />
        <Trust />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
