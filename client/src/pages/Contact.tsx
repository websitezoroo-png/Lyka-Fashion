import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
            <a href="/about" className="hover:text-black transition">About</a>
            <a href="/contact" className="hover:text-black transition text-black font-semibold">Contact</a>
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
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-black">Contact Information</h2>

              {/* Phone */}
              <div className="mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Phone</h3>
                    <p className="text-[#B8860B] font-medium text-lg">+91 7006630873</p>
                    <p className="text-gray-600 text-sm mt-1">Available Monday to Sunday, 10 AM to 8 PM IST</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">WhatsApp</h3>
                    <a href="https://wa.me/917006630873" target="_blank" rel="noreferrer" className="text-[#B8860B] font-medium hover:underline">
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Instant messaging for quick inquiries and support</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Email</h3>
                    <a href="mailto:contact@lykafashion.com" className="text-[#B8860B] font-medium hover:underline">
                      contact@lykafashion.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Location</h3>
                    <p className="text-gray-600">Bandipora, Jammu & Kashmir, India</p>
                    <p className="text-gray-600 text-sm mt-1">Business Hours: Monday - Sunday, 10:00 AM - 8:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-black">Follow Us</h3>
                <div className="flex gap-6">
                  <a href="https://instagram.com/lyka.fashion" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center hover:bg-[#B8860B]/20 transition">
                    <Instagram size={24} className="text-[#B8860B]" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center hover:bg-[#B8860B]/20 transition">
                    <MessageCircle size={24} className="text-[#B8860B]" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-black">Quick Contact</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-4"
                >
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
                    <p className="text-green-800 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    required
                    rows={6}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#B8860B] text-white py-3 rounded-lg font-semibold hover:bg-[#966d09] transition"
                >
                  Send Message
                </motion.button>

                <p className="text-gray-500 text-xs text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How can I place an order?',
                answer: 'You can browse our collections and contact us via WhatsApp, phone, or email to place an order. Our team will assist you with the entire process.'
              },
              {
                question: 'Do you offer customization?',
                answer: 'Yes! We offer customization services for special requests. Contact us to discuss your requirements.'
              },
              {
                question: 'What are your payment options?',
                answer: 'We accept various payment methods including bank transfers, UPI, and cash on delivery. Contact us for details.'
              },
              {
                question: 'Do you provide shipping?',
                answer: 'Yes, we provide secure shipping across India. Shipping costs and delivery time will be discussed during order confirmation.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 text-black">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
