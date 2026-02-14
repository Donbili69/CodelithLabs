import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { About } from './components/About'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AI_Assistant } from './components/AI_Assistant'
import { BackToTop } from './components/BackToTop'
import { initSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize smooth scroll behavior
    initSmoothScroll()

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Loading skeleton for entire page */}
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />
              <div className="flex gap-4">
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Hero skeleton */}
          <div className="pt-20">
            <div className="h-screen animate-pulse bg-gray-100" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }} />

      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* AI Assistant */}
      <AI_Assistant />
    </div>
  )
}

export default App
