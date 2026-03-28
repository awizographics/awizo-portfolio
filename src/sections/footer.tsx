import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Send, Heart, Facebook } from 'lucide-react'

interface FooterProps {
  onPageChange: (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => void
}

const quickLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'About', page: 'about' as const },
  { label: 'Services', page: 'services' as const },
  { label: 'Portfolio', page: 'portfolio' as const },
  { label: 'Contact', page: 'contact' as const },
]

const services = [
  'Brand Identity',
  'UI/UX Design',
  'Motion Graphics',
  '3D Design',
  'Print Design',
  'Digital Marketing',
]

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/Awizographics/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/awizographics/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/awizographics/', label: 'LinkedIn' },
]

export default function Footer({ onPageChange }: FooterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-50px' })

  const handleLinkClick = (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => {
    onPageChange(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={containerRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(251,146,60,0.6) 20%, rgba(217,119,6,0.6) 50%, rgba(251,146,60,0.6) 80%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(99,102,241,0.05) 100%)',
              }}
            />
            <div className="relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white mb-3">
                    Stay <span className="font-normal italic text-orange-200">inspired</span>
                  </h3>
                  <p className="text-white/60 max-w-md">
                    Get the latest design insights, creative tips, and exclusive project updates delivered to your inbox.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-12 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(217,119,6,0.95) 100%)',
                      boxShadow: '0 10px 40px -10px rgba(251,146,60,0.4)',
                    }}
                  >
                    Subscribe
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('home')
                }}
                className="inline-block mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/images/awizo-logo.webp" 
                  alt="Awizo Graphics" 
                  className="h-12 w-auto"
                />
              </motion.a>
              <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
                Transforming ideas into stunning digital experiences. Where creativity meets precision to craft designs that captivate and inspire.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="group relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(217,119,6,0.3) 100%)',
                      }}
                    />
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Navigate</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.page}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 text-orange-400" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{ background: 'rgba(251,146,60,0.6)' }}
                      />
                      <span className="text-sm">{service}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-5">
                <li>
                  <a 
                    href="mailto:awizographics@gmail.com" 
                    className="group flex items-start gap-3 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(251,146,60,0.1)',
                        border: '1px solid rgba(251,146,60,0.2)',
                      }}
                    >
                      <Mail className="w-4 h-4" style={{ color: 'rgba(251,146,60,0.9)' }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">Email</p>
                      <p className="text-sm group-hover:text-orange-300 transition-colors">awizographics@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+923137565517" 
                    className="group flex items-start gap-3 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                      }}
                    >
                      <Phone className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">Phone</p>
                      <p className="text-sm group-hover:text-indigo-300 transition-colors">+92 313 7565517</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/50">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(168,85,247,0.1)',
                        border: '1px solid rgba(168,85,247,0.2)',
                      }}
                    >
                      <MapPin className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">Location</p>
                      <p className="text-sm">Available Worldwide</p>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/40 text-sm text-center flex items-center justify-center gap-1"
            >
              © {new Date().getFullYear()} Awizo Graphics. Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> by <a href="https://razadevx.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">razadevx</a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
