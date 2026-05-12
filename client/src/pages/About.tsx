import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Award, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[#B8860B]">
            LYKA FASHION
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-600">
            <a href="/" className="hover:text-black transition">Home</a>
            <a href="/collections" className="hover:text-black transition">Collections</a>
            <a href="/about" className="hover:text-black transition text-black font-semibold">About</a>
            <a href="/contact" className="hover:text-black transition">Contact</a>
          </div>
          <div className="flex gap-5 items-center text-gray-600">
            <a href="https://instagram.com/lyka.fashion" target="_blank" rel="noreferrer" className="hover:text-black transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Heritage
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Our Heritage</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                LYKA Fashion was founded with a vision to create timeless jewelry pieces that celebrate life's most precious moments. Each piece in our collection is crafted with meticulous attention to detail and a deep commitment to quality.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe that jewelry is more than just an accessory—it's a reflection of one's personality, style, and values. Our artisans work tirelessly to transform raw materials into exquisite pieces that tell stories and create memories.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From elegant couple bands to statement rings and our signature Royal Silver collection, every piece is designed to be treasured for generations to come.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FDFBF7] to-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-6xl">👑</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Craftsmanship',
                description: 'Every piece is meticulously crafted by skilled artisans with years of experience. We use only the finest materials to ensure durability and timeless beauty.'
              },
              {
                icon: Heart,
                title: 'Quality',
                description: 'We use only the finest materials to ensure durability and timeless beauty. Our commitment to quality is unwavering and reflects in every piece.'
              },
              {
                icon: Zap,
                title: 'Authenticity',
                description: 'All our jewelry is 100% authentic and comes with proper certification. We stand behind every piece we create with pride and integrity.'
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#B8860B]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-black text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose LYKA Fashion?</h2>
            
            <div className="space-y-6">
              {[
                'Exquisite designs that blend traditional craftsmanship with modern aesthetics',
                'Premium quality materials sourced from trusted suppliers',
                'Personalized customer service and support',
                'Competitive pricing without compromising on quality',
                'Easy customization options for special requests',
                'Secure and convenient shopping experience'
              ].map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-[#FDFBF7] p-6 rounded-lg border border-gray-100"
                >
                  <div className="text-2xl text-[#B8860B] font-bold mt-1">✓</div>
                  <p className="text-gray-700 text-lg">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Our Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since our inception, LYKA Fashion has been dedicated to creating jewelry pieces that transcend time and trends. We've grown from a small atelier to a trusted name in luxury fashion, serving customers across the globe who appreciate fine craftsmanship and authentic design.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every milestone in our journey is a testament to our commitment to excellence and our customers' trust. We continue to innovate while honoring the traditional techniques that make our pieces truly special.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We invite you to be part of our story. Whether you're looking for a special piece for a loved one or treating yourself, we're here to help you find something truly extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-[#B8860B]">LYKA FASHION</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">Elevating traditional Kashmiri craftsmanship for the modern world. Our pieces are designed for eternity, blending heritage with contemporary style.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="/" className="hover:text-[#B8860B] transition">Home</a></li>
              <li><a href="/collections" className="hover:text-[#B8860B] transition">Collections</a></li>
              <li><a href="/about" className="hover:text-[#B8860B] transition">Our Story</a></li>
              <li><a href="/contact" className="hover:text-[#B8860B] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex gap-5">
              <a href="https://instagram.com/lyka.fashion" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#B8860B] transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition"><MessageCircle size={20} /></a>
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Bandipora, Jammu & Kashmir</p>
              <p className="text-gray-500 text-sm mt-1">contact@lykafashion.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} LYKA FASHION. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
