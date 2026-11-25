import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Process } from '@/components/Process'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
