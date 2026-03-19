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
  Printer,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react'
import { Button } from '../components/ui/button'

const services = [
  {
    icon: Palette,
    title: 'Logo Design & Branding',
    description: 'Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines, we help you stand out in the market.',
    features: [
      'Custom Logo Design',
      'Brand Strategy',
      'Visual Identity System',
      'Brand Guidelines',
      'Collateral Design',
    ],
    price: 'From $1,500',
    popular: true,
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Engaging visual content that captures attention and drives engagement across all social platforms. Boost your online presence with stunning graphics.',
    features: [
      'Instagram Posts & Stories',
      'Facebook Graphics',
      'LinkedIn Banners',
      'Social Media Templates',
      'Content Calendar Design',
    ],
    price: 'From $800/month',
    popular: false,
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered digital experiences that combine aesthetics with functionality. Create intuitive interfaces that users love to interact with.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Usability Testing',
    ],
    price: 'From $3,000',
    popular: true,
  },
  {
    icon: Video,
    title: 'Video Editing & Motion',
    description: 'Dynamic motion graphics and video content that tells your story in a captivating way. From explainer videos to social media content.',
    features: [
      'Motion Graphics',
      'Video Editing',
      'Animation',
      'Reels & Shorts',
      'Ad Campaigns',
    ],
    price: 'From $1,200',
    popular: false,
  },
  {
    icon: Box,
    title: '3D Design & Modeling',
    description: 'Stunning 3D visuals and product renders that bring your concepts to life. Perfect for product visualization and architectural projects.',
    features: [
      '3D Modeling',
      'Product Renders',
      'Architectural Viz',
      'Character Design',
      'Animation',
    ],
    price: 'From $2,500',
    popular: false,
  },
  {
    icon: Smartphone,
    title: 'Product Mockups',
    description: 'Realistic product presentations that showcase your designs in the best light. Perfect for portfolios, pitches, and marketing materials.',
    features: [
      'Packaging Mockups',
      'Device Mockups',
      'Scene Creation',
      'Lifestyle Shots',
      '360° Views',
    ],
    price: 'From $600',
    popular: false,
  },
  {
    icon: CreditCard,
    title: 'NFC Business Cards',
    description: 'Modern, tech-forward business cards that make a lasting impression. Tap-to-connect functionality meets stunning design.',
    features: [
      'Custom Card Design',
      'NFC Programming',
      'QR Code Integration',
      'Digital Profile',
      'Analytics Dashboard',
    ],
    price: 'From $400',
    popular: true,
  },
  {
    icon: Printer,
    title: 'Print Design',
    description: 'Professional print materials from brochures to banners. Maintain brand consistency across all physical touchpoints.',
    features: [
      'Brochures & Flyers',
      'Business Cards',
      'Posters & Banners',
      'Magazine Layout',
      'Packaging Design',
    ],
    price: 'From $500',
    popular: false,
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your goals, audience, and brand vision.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive plan tailored to your specific needs.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create stunning visuals that bring your vision to life.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Final polish and delivery of all assets in required formats.',
  },
]

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div className="relative pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        
        {/* Warm accent from right */}
        <div 
          className="absolute top-1/2 right-0 w-[50%] h-[100%] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at 90% 50%, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.05) 40%, transparent 70%)',
          }}
        />

        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
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
              Services
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
            Design Solutions for{' '}
            <span className="font-normal italic text-orange-200">Every Need</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            From brand identity to digital experiences, I offer comprehensive design 
            services tailored to elevate your brand and drive results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={containerRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${service.popular ? 'lg:scale-105' : ''}`}
              >
                <div className={`
                relative h-full rounded-3xl p-8 border transition-all duration-300
                ${service.popular 
                  ? 'border-orange-500/30' 
                  : 'border-white/10 hover:border-white/20'
                }
                bg-white/5 backdrop-blur-sm
              `}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-8">
                      <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-white text-sm font-medium"
                        style={{
                          background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                        }}
                      >
                        <Sparkles className="w-4 h-4" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0
                    ${service.popular ? '' : 'bg-white/10'}
                  `}
                  style={service.popular ? {
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                  } : {}}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/60 mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-white/80">
                            <Check className="w-4 h-4 text-orange-400" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                          <span className="text-white/60 text-sm">Starting from</span>
                          <span className="text-xl font-bold text-orange-400">{service.price}</span>
                        </div>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 rounded-full group/btn"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              My <span className="font-normal italic text-orange-200">Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A proven approach to delivering exceptional design results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="rounded-2xl p-6 text-center h-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-5xl font-bold opacity-30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251,146,60,0.8) 0%, rgba(217,119,6,0.8) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px"
                    style={{
                      background: 'linear-gradient(90deg, rgba(251,146,60,0.5), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 lg:p-12 text-center border border-orange-500/20 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-light text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Every project is unique. Let&apos;s discuss your specific requirements 
              and create a tailored package that fits your needs.
            </p>
            <Button
              size="lg"
              className="text-white border-0 rounded-full px-8 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(217,119,6,0.95) 100%)',
                boxShadow: '0 10px 40px -10px rgba(251,146,60,0.4)',
              }}
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
