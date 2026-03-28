import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact'

interface NavigationProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

const leftNavLinks: { label: string; page: Page }[] = [
  { label: 'About Me', page: 'about' },
  { label: 'Services', page: 'services' },
]

const rightNavLinks: { label: string; page: Page }[] = [
  { label: 'Projects', page: 'portfolio' },
  { label: 'Contact', page: 'contact' },
]

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (page: Page) => {
    onPageChange(page)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Full width header - visible when not scrolled */}
      <AnimatePresence mode="wait">
        {!isScrolled && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-transparent"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
              <div className="flex items-center justify-between">
                {/* Left Nav */}
                <nav className="hidden md:flex items-center gap-8">
                  {leftNavLinks.map((link, index) => (
                    <motion.button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`relative text-sm font-medium transition-colors ${
                        currentPage === link.page 
                          ? 'text-white' 
                          : 'text-white/60 hover:text-white'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Logo */}
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('home')
                  }}
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="/images/awizo-logo.webp" 
                    alt="Awizo Graphics" 
                    className="h-10 w-auto"
                  />
                </motion.a>

                {/* Right Nav */}
                <nav className="hidden md:flex items-center gap-8">
                  {rightNavLinks.map((link, index) => (
                    <motion.button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`relative text-sm font-medium transition-colors ${
                        currentPage === link.page 
                          ? 'text-white' 
                          : 'text-white/60 hover:text-white'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Menu */}
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-80 bg-background/95 backdrop-blur-xl border-white/10">
                    <div className="flex flex-col h-full pt-12">
                      <nav className="flex flex-col gap-4">
                        {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
                          <motion.button
                            key={link.page}
                            onClick={() => handleNavClick(link.page)}
                            className={`text-left text-2xl font-semibold py-3 transition-colors ${
                              currentPage === link.page 
                                ? 'text-gradient' 
                                : 'text-white/70 hover:text-white'
                            }`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {link.label}
                          </motion.button>
                        ))}
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating capsule header - appears when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
          >
            <motion.nav
              className="pointer-events-auto flex items-center justify-center gap-1 sm:gap-4 md:gap-8 px-2 sm:px-4 md:px-6 py-1.5 w-[92%] sm:w-[80%] md:w-[70%] max-w-4xl bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl"
              style={{
                boxShadow: '0 8px 32px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {/* Left side links */}
              <div className="flex items-center gap-1">
                {leftNavLinks.map((link) => (
                  <motion.button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative px-2 sm:px-3 md:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-full whitespace-nowrap ${
                      currentPage === link.page 
                        ? 'text-white bg-white/10' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="hidden sm:inline">{link.label}</span>
                    <span className="sm:hidden">{link.label.split(' ')[0]}</span>
                  </motion.button>
                ))}
              </div>

              {/* Center Logo */}
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('home')
                }}
                className="flex items-center px-2 sm:px-3 md:px-4 py-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src="/images/awizo-logo.webp" 
                  alt="Awizo Graphics" 
                  className="h-6 sm:h-7 md:h-9 w-auto"
                />
              </motion.a>

              {/* Right side links */}
              <div className="flex items-center gap-1">
                {rightNavLinks.map((link) => (
                  <motion.button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative px-2 sm:px-3 md:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-full whitespace-nowrap ${
                      currentPage === link.page 
                        ? 'text-white bg-white/10' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="hidden sm:inline">{link.label}</span>
                    <span className="sm:hidden">{link.label === 'Contact' ? 'Contact' : link.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}
