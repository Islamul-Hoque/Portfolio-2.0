'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonColor: '#2563eb',
        background: '#0f172a',
        color: '#f8fafc'
      });
      return;
    }

    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonColor: '#2563eb',
      background: '#0f172a',
      color: '#f8fafc'
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Communication
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Let&apos;s Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Something Bold</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-3xl font-black text-white">Contact Information</h3>
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'islamulhoque2006@gmail.com', color: 'blue' },
                { icon: Phone, label: 'Phone', value: '+8801577432917', color: 'purple' },
                { icon: MessageSquare, label: 'WhatsApp', value: '+8801999932122', color: 'green' },
                { icon: MapPin, label: 'Address', value: 'Chattogram City, Bangladesh', color: 'orange' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <motion.div 
                    animate={{ y: [0, idx % 2 === 0 ? -10 : 10, 0] }}
                    transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut" }}
                    className={`p-5 bg-${item.color}-500/10 rounded-3xl text-${item.color}-400 group-hover:scale-110 transition-transform shadow-2xl border border-white/5`}
                  >
                    <item.icon size={32} />
                  </motion.div>
                  <div>
                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[48px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-8 py-5 rounded-[24px] bg-white/5 text-white border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-8 py-5 rounded-[24px] bg-white/5 text-white border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-8 py-5 rounded-[24px] bg-white/5 text-white border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none resize-none font-bold"
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-[24px] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-600/40 group"
              >
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
