import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

interface PortfolioPreviewProps {
  onPageChange: (page: 'portfolio') => void
}

const categories = ['All', 'Logos', 'Branding', 'Social', '3D', 'Video']

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Logos',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern minimalist logo design',
  },
  {
    id: 2,
    title: 'Corporate Branding',
    category: 'Branding',
    image: '/images/portfolio/project-2.jpg',
    description: 'Complete brand identity system',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'Social',
    image: '/images/portfolio/project-3.jpg',
    description: 'Engaging social media content',
  },
  {
    id: 4,
    title: '3D Product Render',
    category: '3D',
    image: '/images/portfolio/project-4.jpg',
    description: 'Photorealistic 3D visualization',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Video',
    image: '/images/portfolio/project-5.jpg',
    description: 'Dynamic video content',
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'Branding',
    image: '/images/portfolio/project-6.jpg',
    description: 'Premium packaging design',
  },
]

export default function PortfolioPreview({ onPageChange }: PortfolioPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Warm accent from left */}
      <div 
        className="absolute top-1/2 left-0 w-[40%] h-[100%] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at 10% 50%, rgba(251,146,60,0.12) 0%, rgba(251,146,60,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Animated warm orb */}
      <motion.div
        className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white"
            >
              Featured{' '}
              <span className="font-normal italic text-orange-200">Projects</span>
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6 lg:mt-0"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${activeFilter === category 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                  }
                `}
              >
                {activeFilter === category && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`group relative ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onPageChange('portfolio')}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.1 : 1 
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content Overlay */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs font-medium text-orange-400 uppercase tracking-wider mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* View Icon */}
                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => onPageChange('portfolio')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(251,146,60,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
