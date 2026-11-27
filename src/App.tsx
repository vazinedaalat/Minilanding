import { BaleBot } from '@/components/BaleBot'
import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Process } from '@/components/Process'
import { SeoHead } from '@/components/SeoHead'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'

export default function App() {
  return (
    <div className="min-h-svh">
      <SeoHead />
      <Header />
      <main>
        <Hero />
        <BaleBot />
        <Services />
        <Process />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
