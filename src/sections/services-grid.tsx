import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Palette, 
  Share2, 
  CreditCard, 
  Layout, 
  Video, 
  Box, 
  Smartphone,
  Printer 
} from 'lucide-react'

interface ServicesGridProps {
  onPageChange: (page: 'services') => void
}

const services = [
  {
    icon: Palette,
    title: 'Logo Design & Branding',
    description: 'Create memorable brand identities that resonate with your audience and stand out in the market.',
    featured: false,
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Engaging visual content that captures attention and drives engagement across all platforms.',
    featured: false,
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered digital experiences that combine aesthetics with functionality for maximum impact.',
    featured: true,
  },
  {
    icon: Video,
    title: 'Video Editing & Motion',
    description: 'Dynamic motion graphics and video content that tells your story in a captivating way.',
    featured: false,
  },
  {
    icon: Box,
    title: '3D Design & Modeling',
    description: 'Stunning 3D visuals and product renders that bring your concepts to life.',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Product Mockups',
    description: 'Realistic product presentations that showcase your designs in the best light.',
    featured: false,
  },
  {
    icon: CreditCard,
    title: 'NFC Business Cards',
    description: 'Modern, tech-forward business cards that make a lasting impression with tap-to-connect functionality.',
    featured: false,
  },
  {
    icon: Printer,
    title: 'Print Design',
    description: 'Professional print materials from brochures to banners that maintain brand consistency.',
    featured: false,
  },
]

export default function ServicesGrid({ onPageChange }: ServicesGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Warm accent from left */}
      <div 
        className="absolute top-1/2 left-0 w-[50%] h-[100%] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(251,146,60,0.12) 0%, rgba(251,146,60,0.04) 40%, transparent 70%)',
        }}
      />
      
      {/* Blue accent on right */}
      <div 
        className="absolute top-0 right-0 w-[30%] h-full"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Animated warm orb */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary blue orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              className="h-px w-12"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.8), transparent)',
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
              What I Do
            </span>
            <motion.div 
              className="h-px w-12"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.8), transparent)',
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4"
          >
            Services That{' '}
            <span className="font-normal italic text-orange-200">Elevate</span>{' '}
            Your Brand
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Comprehensive design solutions tailored to your unique needs, 
            from concept to final delivery.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, rotateY: -30 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`group relative ${service.featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1' : ''}`}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                onClick={() => onPageChange('services')}
                className={`
                  relative h-full rounded-2xl p-6 lg:p-8
                  border border-white/10 overflow-hidden
                  transition-all duration-300
                  hover:border-orange-500/30
                  cursor-pointer
                  ${service.featured ? 'bg-gradient-to-br from-white/10 to-transparent' : 'bg-white/5 backdrop-blur-sm'}
                `}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full text-white"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                      }}
                    >
                      Featured
                    </span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-5
                    ${service.featured ? '' : 'bg-white/10'}
                    group-hover:transition-all duration-300
                  `}
                  style={service.featured ? {
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  } : {}}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.08) 0%, rgba(99,102,241,0.04) 100%)',
                  }}
                />

                {/* Corner Accent */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => onPageChange('services')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(251,146,60,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
