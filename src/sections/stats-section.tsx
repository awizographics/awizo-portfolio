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
    value: 5, 
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
    value: 15, 
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
                className="relative rounded-xl p-8 text-center overflow-hidden bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-white/[0.08] backdrop-blur-sm border border-white/10"
                style={{
                  boxShadow: `
                    inset 0 -60px 100px -30px rgba(251,146,60,0.5),
                    inset 0 -4px 30px -10px rgba(251,146,60,0.6),
                    inset 0 1px 0 rgba(255,255,255,0.05),
                    0 4px 30px rgba(0,0,0,0.3)
                  `,
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Orbiting Dot - repositioned to corner */}
                <motion.div
                  className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
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
                    background: 'rgba(251,146,60,0.9)',
                    boxShadow: '0 0 10px rgba(251,146,60,0.8), 0 0 20px rgba(251,146,60,0.4)',
                    transformOrigin: '-24px 24px',
                  }}
                />

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold mb-2 mt-2">
                  <span style={{ color: 'rgba(251,146,60,0.95)' }}>
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-sm">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/50">
                  {stat.description}
                </p>

                {/* Bottom intense glow accent */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.8), transparent)',
                    boxShadow: '0 0 40px 4px rgba(251,146,60,0.5), 0 0 80px 8px rgba(251,146,60,0.3)',
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
