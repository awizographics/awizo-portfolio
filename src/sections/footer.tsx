import { motion } from 'framer-motion'
import { Instagram, Dribbble, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

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
  'Logo Design',
  'Branding',
  'UI/UX Design',
  'Motion Graphics',
  '3D Design',
  'Print Design',
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => {
    onPageChange(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.6), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
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
                src="/images/awizo-graphics-logo-horizontal.webp" 
                alt="Awizo Graphics" 
                className="h-10 w-auto"
              />
            </motion.a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Transforming ideas into stunning digital experiences. 
              Let&apos;s create something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span 
                    className="w-0 h-px group-hover:w-3 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, rgba(251,146,60,0.9), rgba(217,119,6,0.9))',
                    }}
                  />
                  {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span 
                    className="w-0 h-px group-hover:w-3 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, rgba(251,146,60,0.9), rgba(217,119,6,0.9))',
                    }}
                  />
                  {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5" style={{ color: 'rgba(251,146,60,0.9)' }} />
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a 
                    href="mailto:hello@nexuscreative.com" 
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    hello@nexuscreative.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5" style={{ color: 'rgba(251,146,60,0.9)' }} />
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" style={{ color: 'rgba(251,146,60,0.9)' }} />
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Awizo Graphics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
