import Header from '@/react-app/components/Header'
import Hero from '@/react-app/components/Hero'
import SocialProof from '@/react-app/components/SocialProof'
import LeadMagnet from '@/react-app/components/LeadMagnet'
import Essays from '@/react-app/components/Essays'
import About from '@/react-app/components/About'
import Subscribe from '@/react-app/components/Subscribe'
import Footer from '@/react-app/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <LeadMagnet />
        <Essays />
        <About />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
