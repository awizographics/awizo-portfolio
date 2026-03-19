import Hero from '../sections/hero'
import AboutPreview from '../sections/about-preview'
import ServicesGrid from '../sections/services-grid'
import PortfolioPreview from '../sections/portfolio-preview'
import StatsSection from '../sections/stats-section'
import Testimonials from '../sections/testimonials'
import CTASection from '../sections/cta-section'

interface HomePageProps {
  onPageChange?: (page: 'portfolio' | 'contact' | 'about' | 'services') => void
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const handlePageChange = (page: 'portfolio' | 'contact' | 'about' | 'services') => {
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <div className="relative">
      <Hero onPageChange={handlePageChange} />
      <AboutPreview onPageChange={handlePageChange} />
      <ServicesGrid onPageChange={handlePageChange} />
      <PortfolioPreview onPageChange={handlePageChange} />
      <StatsSection />
      <Testimonials />
      <CTASection onPageChange={handlePageChange} />
    </div>
  )
}
