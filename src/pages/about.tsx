import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Palette, 
  Code, 
  Video, 
  Box, 
  Smartphone, 
  Printer,
  CheckCircle
} from 'lucide-react'

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Figma', level: 92 },
  { name: 'Adobe After Effects', level: 85 },
  { name: 'Blender 3D', level: 80 },
  { name: 'Cinema 4D', level: 75 },
]

const tools = [
  { icon: Palette, name: 'Adobe Creative Suite', description: 'Photoshop, Illustrator, InDesign' },
  { icon: Code, name: 'Figma & Sketch', description: 'UI/UX Design Tools' },
  { icon: Video, name: 'Motion Graphics', description: 'After Effects, Premiere Pro' },
  { icon: Box, name: '3D Software', description: 'Blender, Cinema 4D' },
  { icon: Smartphone, name: 'Prototyping', description: 'ProtoPie, Principle' },
  { icon: Printer, name: 'Print Design', description: 'InDesign, Acrobat' },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Creative Director',
    company: 'Awizo Graphics',
    description: 'Leading a team of talented designers, delivering premium design solutions for global clients.',
  },
  {
    year: '2021',
    title: 'Lead Graphic Designer',
    company: 'Digital Agency Pro',
    description: 'Spearheaded branding projects for Fortune 500 companies and innovative startups.',
  },
  {
    year: '2019',
    title: 'Senior UI/UX Designer',
    company: 'Tech Innovations Inc',
    description: 'Designed user interfaces for mobile apps and web platforms with millions of users.',
  },
  {
    year: '2016',
    title: 'Graphic Designer',
    company: 'Creative Solutions Ltd',
    description: 'Started professional journey, working on diverse print and digital design projects.',
  },
]

const achievements = [
  '150+ Projects Delivered',
  '50+ Happy Clients',
  '8+ Years Experience',
  '25+ Design Awards',
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div className="relative pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        
        {/* Warm accent lighting */}
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

        {/* Animated warm orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
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
                  About Me
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.1]">
                Crafting Visual{' '}
                <span className="font-normal italic text-orange-200">Excellence</span>
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                I&apos;m a passionate creative designer with over 8 years of experience 
                transforming ideas into stunning visual realities. My journey in design 
                has been driven by an unwavering commitment to excellence and innovation.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-white/80 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 rounded-3xl opacity-40 blur-[60px]"
                  style={{
                    background: 'radial-gradient(ellipse at 70% 40%, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0.2) 50%, transparent 70%)',
                  }}
                />
                <img
                  src="/images/hero-profile.jpg"
                  alt="Creative Designer"
                  className="relative w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={containerRef} className="relative py-20 lg:py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Skills & <span className="font-normal italic text-orange-200">Expertise</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Years of experience have honed my skills across various design disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white/60">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-light text-white mb-8">Tools I Use</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-6 group bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  }}
                >
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">{tool.name}</h4>
                <p className="text-white/60 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0f] relative overflow-hidden">
        {/* Warm accent */}
        <div 
          className="absolute top-1/2 left-0 w-[40%] h-[100%] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at 10% 50%, rgba(251,146,60,0.08) 0%, transparent 70%)',
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              My <span className="font-normal italic text-orange-200">Journey</span>
            </h2>
            <p className="text-white/60">
              A timeline of my professional experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{
                background: 'linear-gradient(to bottom, rgba(251,146,60,0.5), rgba(99,102,241,0.3), transparent)',
              }}
            />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0f] md:-translate-x-1/2 z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  }}
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
                    style={{
                      background: 'rgba(251,146,60,0.2)',
                      color: 'rgba(251,146,60,0.9)',
                    }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-orange-400/80 text-sm mb-2">{item.company}</p>
                  <p className="text-white/60">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
