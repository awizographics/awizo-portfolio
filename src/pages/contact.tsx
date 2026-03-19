import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Dribbble, 
  Linkedin, 
  Twitter,
  MessageSquare,
  CheckCircle
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nexuscreative.com',
    href: 'mailto:hello@nexuscreative.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Dribbble, href: '#', label: 'Dribbble', color: 'hover:text-pink-400' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
        
        {/* Blue accent on left */}
        <div 
          className="absolute top-0 left-0 w-[30%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)',
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
        <motion.div
          className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              Contact
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
            Let&apos;s <span className="font-normal italic text-orange-200">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Have a project in mind? I&apos;d love to hear about it. 
            Send me a message and let&apos;s create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Whether you have a question about services, pricing, need a quote, 
                or just want to say hello, I&apos;m here to help.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(217,119,6,0.9) 100%)',
                      }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-orange-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white/40 text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:scale-110`}
                      whileHover={{ y: -3 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 p-6 glass rounded-2xl border border-green-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Prefer WhatsApp?</p>
                    <p className="text-white/60 text-sm">Chat with me directly</p>
                  </div>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
                  >
                    Chat Now
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl p-8 lg:p-10 bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-white/60">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50 rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white border-0 rounded-xl py-6 disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(217,119,6,0.95) 100%)',
                        boxShadow: '0 10px 40px -10px rgba(251,146,60,0.4)',
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4">
              Frequently Asked <span className="font-normal italic text-orange-200">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. A simple logo design might take 1-2 weeks, while a complete brand identity can take 4-6 weeks. I\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                q: 'How do you handle project pricing?',
                a: 'I offer both project-based and hourly pricing depending on the nature of the work. After understanding your requirements, I\'ll provide a detailed quote with transparent pricing.'
              },
              {
                q: 'What files will I receive upon completion?',
                a: 'You\'ll receive all necessary files in various formats (AI, PSD, PDF, PNG, JPG, etc.) suitable for both print and digital use. I also provide brand guidelines for larger projects.'
              },
              {
                q: 'Do you offer revisions?',
                a: 'Yes! All projects include a set number of revision rounds. I work closely with clients to ensure the final deliverables meet their expectations.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
