import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react'
import { Button } from '../components/ui/button'

interface AboutPreviewProps {
  onPageChange: (page: 'about') => void
}

const stats = [
  { icon: Briefcase, value: '150+', label: 'Projects Delivered' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
]

export default function AboutPreview({ onPageChange }: AboutPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Warm accent lighting from right side */}
      <div 
        className="absolute top-1/2 right-0 w-[60%] h-[100%] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.05) 40%, transparent 70%)',
        }}
      />
      
      {/* Blue accent on left */}
      <div 
        className="absolute top-0 left-0 w-[30%] h-full"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Animated warm glow */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative group">
              {/* Warm Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-[60px] scale-95 group-hover:scale-105 transition-transform duration-500"
                style={{
                  background: 'radial-gradient(ellipse at 70% 40%, rgba(251,146,60,0.4) 0%, rgba(251,146,60,0.1) 50%, transparent 70%)',
                }}
              />
              
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/images/awizo.jpg"
                    alt="About Me"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="absolute glass rounded-xl p-3"
                  style={{
                    bottom: index === 0 ? '20px' : index === 1 ? '100px' : '180px',
                    left: index === 0 ? '-20px' : index === 1 ? 'auto' : '-30px',
                    right: index === 1 ? '-20px' : 'auto',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    ease: [0.68, -0.55, 0.265, 1.55]
                  }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.8) 0%, rgba(217,119,6,0.9) 100%)',
                      }}
                    >
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/60">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
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
                About Me
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-[1.2]"
            >
              Crafting Digital{' '}
              <span className="font-normal italic text-orange-200">Experiences</span>{' '}
              That Inspire
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-white/70 mb-8"
            >
              <p className="text-lg leading-relaxed">
                With over 5 years of experience in graphic design, I specialize in creating 
                visually stunning brand identities, engaging social media content, and 
                cutting-edge digital designs.
              </p>
              <p className="leading-relaxed">
                My passion lies in transforming complex ideas into clean, impactful visuals 
                that resonate with audiences. From startups to established enterprises, I&apos;ve 
                helped businesses across diverse industries elevate their visual presence and 
                achieve their goals.
              </p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Branding', 'UI/UX', 'Motion', '3D Design', 'Print'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-full glass text-sm text-white/80 hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                onClick={() => onPageChange('about')}
                variant="outline"
                className="border-orange-500/30 text-white hover:bg-orange-500/10 rounded-full px-6 group"
              >
                Discover My Story
                <ArrowRight className="ml-2 h-4 w-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
