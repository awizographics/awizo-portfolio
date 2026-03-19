import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from '../components/ui/dialog'

const categories = ['All', 'Logos', 'Branding', 'Social', '3D', 'Video']

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Logos',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern minimalist logo design for a tech startup. The project involved creating a memorable wordmark that communicates innovation and reliability.',
    client: 'TechStart Inc',
    year: '2024',
  },
  {
    id: 2,
    title: 'Corporate Branding',
    category: 'Branding',
    image: '/images/portfolio/project-2.jpg',
    description: 'Complete brand identity system including business cards, letterhead, and envelope design for a professional services company.',
    client: 'Celsius Blue Designs',
    year: '2024',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'Social',
    image: '/images/portfolio/project-3.jpg',
    description: 'Engaging social media content design with bold typography and eye-catching gradients for a digital marketing agency.',
    client: 'Digital Market Pro',
    year: '2023',
  },
  {
    id: 4,
    title: '3D Product Render',
    category: '3D',
    image: '/images/portfolio/project-4.jpg',
    description: 'Photorealistic 3D product visualization with professional studio lighting and materials for an electronics brand.',
    client: 'AudioTech',
    year: '2023',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Video',
    image: '/images/portfolio/project-5.jpg',
    description: 'Dynamic motion graphics with kinetic typography for a tech conference promotional video.',
    client: 'Future Flow Design',
    year: '2024',
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'Branding',
    image: '/images/portfolio/project-6.jpg',
    description: 'Premium packaging design with elegant gold accents for a luxury skincare brand.',
    client: 'Aurora Botanicals',
    year: '2023',
  },
]

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const goToPrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[prevIndex])
  }

  const goToNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  return (
    <div className="relative pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        
        {/* Warm accent from left */}
        <div 
          className="absolute top-1/2 left-0 w-[40%] h-[100%] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at 10% 50%, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.05) 40%, transparent 70%)',
          }}
        />

        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              className="h-px w-12"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.8), transparent)',
              }}
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Portfolio
            </span>
            <motion.div 
              className="h-px w-12"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.8), transparent)',
              }}
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
          >
            Featured <span className="font-normal italic text-orange-200">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            A curated selection of my best projects across various industries, 
            showcasing creativity and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={containerRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300
                  ${activeFilter === category 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                  }
                `}
              >
                {activeFilter === category && (
                  <motion.span
                    layoutId="portfolioFilter"
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
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-medium text-orange-400 uppercase tracking-wider mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70">
                          {project.client}
                        </p>
                      </div>

                      {/* View Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl bg-[#0a0a0f]/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden">
        {selectedProject && (
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevProject()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextProject()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(251,146,60,0.2)',
                      color: 'rgba(251,146,60,0.9)',
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-white/40 text-sm">{selectedProject.year}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-white/70 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <span className="text-white/40 text-sm">Client</span>
                  <p className="text-white font-medium">{selectedProject.client}</p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
