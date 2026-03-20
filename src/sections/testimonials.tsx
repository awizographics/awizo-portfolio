import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Ahmed Khan', role: 'Startup Founder', gender: 'male', content: 'Awizo completely transformed our brand identity. The logo and social media kit were exactly what we needed. Super responsive and professional!', rating: 5 },
  { id: 2, name: 'Fatima Ali', role: 'Marketing Manager', gender: 'female', content: 'Best designer I\'ve worked with on Fiverr. Delivered my Instagram carousel posts in 24 hours and they looked stunning!', rating: 5 },
  { id: 3, name: 'Omar Hassan', role: 'E-commerce Owner', gender: 'male', content: 'My product sales doubled after Awizo redesigned my Amazon listings. The 3D mockups were a game changer.', rating: 5 },
  { id: 4, name: 'Sarah Malik', role: 'Content Creator', gender: 'female', content: 'Finally found a designer who actually understands TikTok aesthetics. My thumbnail CTR went up 40%!', rating: 5 },
  { id: 5, name: 'Bilal Ahmed', role: 'Tech CEO', gender: 'male', content: 'Created our entire pitch deck and it helped us secure funding. Clean, modern, and investor-friendly design.', rating: 5 },
  { id: 6, name: 'Ayesha Tariq', role: 'Restaurant Owner', gender: 'female', content: 'The menu design and food photography editing was perfect. Customers keep complimenting how professional it looks!', rating: 5 },
  { id: 7, name: 'Zainab Qureshi', role: 'Fashion Blogger', gender: 'female', content: 'Been working with Awizo for 6 months now. Always delivers on time and the quality never drops. My go-to designer!', rating: 5 },
  { id: 8, name: 'Hamza Raza', role: 'Real Estate Agent', gender: 'male', content: 'Property brochures and social media templates look premium now. Helped me close 3 deals last month alone.', rating: 5 },
  { id: 9, name: 'Noor Fatima', role: 'Wedding Planner', gender: 'female', content: 'The wedding invitation designs were breathtaking. Every client asks who designed them!', rating: 5 },
  { id: 10, name: 'Usman Ghani', role: 'App Developer', gender: 'male', content: 'UI/UX work was exceptional. User testing showed 35% better navigation after the redesign.', rating: 5 },
  { id: 11, name: 'Mariam Zahra', role: 'YouTuber', gender: 'female', content: 'My channel branding is now consistent across all platforms. The animated intro alone got me 10k new subs!', rating: 5 },
  { id: 12, name: 'Ali Raza', role: 'Coffee Shop Owner', gender: 'male', content: 'Packaging design made our coffee bags stand out on shelves. Wholesale orders increased by 60%.', rating: 5 },
  { id: 13, name: 'Hira Shah', role: 'Gym Trainer', gender: 'female', content: 'Fitness program flyers and Instagram posts are fire! My classes are fully booked now.', rating: 5 },
  { id: 14, name: 'Fahad Mirza', role: 'Car Dealer', gender: 'male', content: 'Vehicle listing photos and edit service is worth every penny. Cars sell 2x faster now.', rating: 5 },
  { id: 15, name: 'Sana Javed', role: 'Event Manager', gender: 'female', content: 'Corporate event branding was handled perfectly. From banners to digital invites - everything synced beautifully.', rating: 5 },
  { id: 16, name: 'Rizwan Haider', role: 'Consultant', gender: 'male', content: 'LinkedIn banner and profile optimization helped me land 3 new clients. Professional yet approachable design.', rating: 5 },
  { id: 17, name: 'Laiba Khan', role: 'Beauty Salon Owner', gender: 'female', content: 'Price list design and salon logo are gorgeous. Customers say we look like a high-end brand now!', rating: 5 },
  { id: 18, name: 'Taimoor Ali', role: 'Podcast Host', gender: 'male', content: 'Cover art and episode thumbnails are exactly what my podcast needed. Apple featured us!', rating: 5 },
  { id: 19, name: 'Mehwish Akram', role: 'Online Tutor', gender: 'female', content: 'Course thumbnail templates saved me so much time. Student enrollment increased after the rebrand.', rating: 5 },
  { id: 20, name: 'Saad Ibrahim', role: 'Dropshipper', gender: 'male', content: 'Product mockups for my Shopify store look better than the actual products! Conversion rate up 25%.', rating: 5 },
  { id: 21, name: 'Rabia Anwar', role: 'Handmade Jewelry', gender: 'female', content: 'Product photography guidance and edit service made my Etsy shop look professional. Sales tripled!', rating: 5 },
  { id: 22, name: 'Arslan Tariq', role: 'Tech Reviewer', gender: 'male', content: 'The gadget review graphics are clean and informative. Followers keep asking for more!', rating: 5 },
  { id: 23, name: 'Nida Farooq', role: 'Interior Designer', gender: 'female', content: 'Portfolio layout and presentation boards are stunning. Won a major project thanks to Awizo\'s work.', rating: 5 },
  { id: 24, name: 'Waleed Khan', role: 'Travel Blogger', gender: 'male', content: 'Map illustrations and travel story layouts are unique and engaging. Brands are reaching out now!', rating: 5 },
  { id: 25, name: 'Amina Hassan', role: 'Bakery Owner', gender: 'female', content: 'Cake catalog and social media content is irresistible. Bookings are full 2 months in advance!', rating: 5 },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Warm accent from right */}
      <div 
        className="absolute top-1/2 right-0 w-[50%] h-[100%] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at 90% 50%, rgba(251,146,60,0.12) 0%, rgba(251,146,60,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Animated warm orb */}
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{ 
          x: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
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
              Testimonials
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
            What Clients{' '}
            <span className="font-normal italic text-orange-200">Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* 3D Carousel Container */}
          <div 
            className="relative h-[400px] sm:h-[350px]"
            style={{ perspective: '1000px' }}
          >
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex
                const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length
                const isNext = index === (activeIndex + 1) % testimonials.length

                if (!isActive && !isPrev && !isNext) return null

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      rotateY: isActive ? 0 : isPrev ? -45 : 45,
                      x: isActive ? 0 : isPrev ? '-30%' : '30%',
                      z: isActive ? 0 : -200,
                      scale: isActive ? 1 : 0.8,
                    }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 ${isActive ? 'z-20' : 'z-10'}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="h-full rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
                      {/* Quote Icon */}
                      <motion.div
                        className="absolute top-6 right-6 w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(251,146,60,0.2) 0%, rgba(217,119,6,0.15) 100%)',
                        }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Quote className="w-8 h-8 text-orange-400" />
                      </motion.div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2"
                          style={{
                            borderColor: 'rgba(251,146,60,0.5)',
                          }}
                        >
                          <img
                            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${testimonial.name}&gender=${testimonial.gender}`}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <motion.button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={index === activeIndex ? {
                    background: 'linear-gradient(90deg, rgba(251,146,60,0.9), rgba(217,119,6,0.9))',
                  } : {}}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={goToNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
