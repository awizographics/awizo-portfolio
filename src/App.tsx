import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, X, Send } from 'lucide-react'
import { pageview } from './lib/gtag'
import Navigation from './components/navigation'
import Footer from './sections/footer'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import PortfolioPage from './pages/portfolio'
import ContactPage from './pages/contact'
import './App.css'

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  // Google Analytics: Track SPA route changes only
  // Initial page load is tracked by the script in index.html
  useEffect(() => {
    pageview(`/${currentPage}`)
  }, [currentPage])

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (whatsAppMessage.trim()) {
      const encodedMessage = encodeURIComponent(whatsAppMessage)
      window.open(`https://wa.me/923137565517?text=${encodedMessage}`, '_blank')
      setWhatsAppMessage('')
      setShowWhatsAppChat(false)
    }
  }

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowWhatsAppChat(false)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage />
      case 'portfolio':
        return <PortfolioPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onPageChange={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4 pb-8"
            >
              <img 
                src="/images/awizo-logo.webp" 
                alt="Awizo Graphics" 
                className="h-16 w-auto mb-6"
              />
              <motion.div 
                className="w-32 h-1 rounded-full overflow-hidden bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(251,146,60,0.9), rgba(217,119,6,0.9))',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer onPageChange={setCurrentPage} />

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            {/* Scroll to Top */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={scrollToTop}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-md border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                    boxShadow: '0 4px 20px rgba(251,146,60,0.4)',
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* WhatsApp */}
            <motion.button
              onClick={() => setShowWhatsAppChat(true)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-md border border-white/20"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.button>
          </div>

          {/* WhatsApp Chat Dialog */}
          <AnimatePresence>
            {showWhatsAppChat && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-end justify-end p-6 pb-24"
                onClick={handleClickOutside}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20 mr-2 mb-16"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">WhatsApp Chat</h4>
                        <p className="text-white/80 text-sm">Awizo Graphics</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowWhatsAppChat(false)}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <form onSubmit={handleWhatsAppSubmit}>
                    <textarea
                      value={whatsAppMessage}
                      onChange={(e) => setWhatsAppMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full h-24 px-3 py-2 rounded-xl bg-white/20 text-white placeholder:text-white/60 border border-white/20 focus:border-white/40 focus:outline-none resize-none mb-3"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-white text-green-600 font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default App
