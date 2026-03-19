import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, Users, Zap } from 'lucide-react'

const stats = [
  { 
    icon: Briefcase, 
    value: 150, 
    suffix: '+', 
    label: 'Projects Delivered',
    description: 'Successful projects completed'
  },
  { 
    icon: Calendar, 
    value: 8, 
    suffix: '+', 
    label: 'Years Experience',
    description: 'Years in the industry'
  },
  { 
    icon: Users, 
    value: 50, 
    suffix: '+', 
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide'
  },
  { 
    icon: Zap, 
    value: 25, 
    suffix: '+', 
    label: 'Skills Mastered',
    description: 'Design & development skills'
  },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [value, isInView])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Warm gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(251,146,60,0.03) 0%, transparent 50%, rgba(99,102,241,0.03) 100%)',
        }}
      />

      {/* Animated warm orb - left */}
      <motion.div
        className="absolute top-1/2 left-[15%] w-[300px] h-[300px] rounded-full -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Animated blue orb - right */}
      <motion.div
        className="absolute top-1/2 right-[15%] w-[300px] h-[300px] rounded-full -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
              Track Record
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white"
          >
            Numbers That{' '}
            <span className="font-normal italic text-orange-200">Speak</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative group"
            >
              <motion.div
                className="relative rounded-2xl p-8 text-center overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Orbiting Dot */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: 'linear',
                    delay: index * 0.5
                  }}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                    transformOrigin: '-20px 20px',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <span className="text-orange-400">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/60">
                  {stat.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(251,146,60,0.1) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  )
}
