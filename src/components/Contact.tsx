import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  // ✅ Fixed: Changed ease from string to proper type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] // ✅ Use easing array instead of string
      }
    },
  };

  return (
    <div className='pt-20'>
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              संपर्क करा
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              आमच्याशी जुडा आणि बदल घडवण्यात भाग घ्या
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  काही प्रश्न आहेत का? किंवा आमच्या कार्यात सहभागी व्हायचे आहे का? 
                  आम्हाला तुमच्याशी संवाद साधायला आवडेल. आमच्या कार्याबद्दल अधिक जाणून घ्या 
                  किंवा तुम्ही कसा बदल घडवू शकता हे विचारून संपर्क साधा.
                </p>
              </motion.div>

              <div className="space-y-6 mb-10">
                {/* Email Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Mail className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">ईमेल करा</div>
                    <a 
                      href="mailto:info@yovashakti.org" 
                      className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                    >
                      info@yovashakti.org
                    </a>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Phone className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">फोन करा</div>
                    <a 
                      href="tel:+919049719826" 
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      9049719826
                    </a>
                  </div>
                </motion.div>

                {/* Address Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">पत्ता</div>
                    <div className="text-gray-600 leading-relaxed">
                      <p className="font-semibold text-gray-700">Reg.No: F-0012906 | Jalna</p>
                      <p>Krishna Plaza, Railway Station Road</p>
                      <p>Tq, Dist - Jalna 431501, Maharashtra</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <div className="font-bold text-gray-900 mb-5 text-lg">सोशल मीडिया</div>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: "from-blue-500 to-blue-600", href: "#" },
                    { icon: Twitter, color: "from-sky-400 to-sky-600", href: "#" },
                    { icon: Instagram, color: "from-pink-500 to-purple-600", href: "#" },
                    { icon: Linkedin, color: "from-blue-600 to-blue-700", href: "#" },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    पूर्ण नाव *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="आपले नाव"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    ईमेल पत्ता *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="आपला ईमेल"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                    विषय *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="कशासाठी संपर्क साधत आहात?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    संदेश *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                    placeholder="आपला संदेश येथे लिहा..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  whileHover={{ scale: formStatus === 'idle' ? 1.03 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl ${
                    formStatus === 'sent'
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>संदेश पाठवा</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      <span>पाठवत आहे...</span>
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>पाठवले!</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Optional: Google Map Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.234!2d75.8826!3d19.8362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUwJzEwLjMiTiA3NcKwNTInNTcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
