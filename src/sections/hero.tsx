import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Leaf, Sparkles, Palette, PenTool, Monitor } from 'lucide-react'
import { Button } from '../components/ui/button'

interface HeroProps {
  onPageChange: (page: 'portfolio' | 'contact') => void
}

export default function Hero({ onPageChange }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Graphic design workspace background from Unsplash */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop')`,
          }}
        />
        
        {/* Dark gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
        
        {/* Warm accent lighting from right side (simulating the gift box glow) */}
        <div 
          className="absolute top-1/2 right-0 w-[70%] h-[120%] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(251,146,60,0.25) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)',
          }}
        />
        
        {/* Additional warm glow */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle blue accent on left */}
        <div 
          className="absolute top-0 left-0 w-[40%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto mt-10 px-6 lg:px-12 py-20"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 max-w-xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                Brand Identity & Visual Design
              </span>
              <div className="h-px w-8 bg-orange-500" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]"
            >
              Turn ideas into{' '}
              <span className="font-normal italic text-orange-200">visuals</span>
              <br />
              <span className="font-normal">that captivate</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/60 text-base leading-relaxed"
            >
              From brand identities to digital experiences, I craft designs that 
              tell stories and connect with audiences. Creative solutions, 
              meticulously executed, delivered with precision.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <Button
                onClick={() => onPageChange('portfolio')}
                className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full px-8 py-6 text-base font-medium group shadow-lg shadow-orange-500/25"
              >
                Start your project
                <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>

              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Leaf className="w-4 h-4 text-green-400" />
                <span>Sustainable design practices</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-sm ml-auto">
              {/* Main showcase container */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Back glow effect */}
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-60"
                  style={{
                    background: 'radial-gradient(ellipse at 70% 40%, rgba(251,146,60,0.35) 0%, rgba(251,146,60,0.1) 50%, transparent 70%)',
                  }}
                />

                {/* Main card container */}
                <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-xl">
                  {/* Inner warm glow */}
                  <div 
                    className="absolute top-0 right-0 w-3/4 h-full rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, transparent 0%, rgba(251,146,60,0.12) 60%, rgba(251,146,60,0.2) 100%)',
                    }}
                  />

                  {/* Compact Grid Layout */}
                  <div className="relative grid grid-cols-2 gap-3">
                    {/* Brand Book - Larger card */}
                    <motion.div 
                      className="col-span-1 row-span-2 rounded-xl bg-gradient-to-br from-[#252538] to-[#1a1a2e] border border-white/10 flex flex-col items-center justify-center p-3 min-h-[140px]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <PenTool className="w-8 h-8 text-orange-400/70 mb-2" />
                      <div className="w-10 h-12 bg-gradient-to-br from-orange-500/25 to-amber-600/15 rounded-md border border-orange-500/40" />
                      <span className="mt-2 text-white/50 text-[10px] font-medium">Brand Book</span>
                    </motion.div>

                    {/* UI/UX - Small card */}
                    <motion.div 
                      className="rounded-xl bg-gradient-to-br from-[#252538] to-[#1a1a2e] border border-white/10 flex flex-col items-center justify-center p-2 aspect-square"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    >
                      <Monitor className="w-6 h-6 text-blue-400/70 mb-1" />
                      <span className="text-white/50 text-[10px] font-medium">UI/UX</span>
                    </motion.div>

                    {/* Creative - Small card */}
                    <motion.div 
                      className="rounded-xl bg-gradient-to-br from-[#252538] to-[#1a1a2e] border border-white/10 flex flex-col items-center justify-center p-2 aspect-square"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    >
                      <Palette className="w-6 h-6 text-purple-400/70 mb-1" />
                      <span className="text-white/50 text-[10px] font-medium">Creative</span>
                    </motion.div>
                  </div>

                  {/* Compact bottom info */}
                  <div className="relative mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-xs font-medium">Design Portfolio</p>
                      <p className="text-white/40 text-[10px]">150+ projects</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-orange-500/10 px-2 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-orange-400 text-[10px] font-medium">Available</span>
                    </div>
                  </div>
                </div>

                {/* Single floating accent */}
                <motion.div
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-600/20 backdrop-blur-sm border border-orange-500/40 flex items-center justify-center shadow-lg shadow-orange-500/20"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="w-5 h-5 text-orange-300" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-orange-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
