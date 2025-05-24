import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSectionFile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "aks969014@gmail.com",
      link: "mailto:aks969014@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91-7906444281",
      link: "tel:+917906444281"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Uttar Pradesh, India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          animate={{ x: [0, 80, 0], y: [0, 120, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '15%', left: '20%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
          animate={{ x: [0, -100, 0], y: [0, -80, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ top: '65%', right: '25%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Get in Touch
          </h2>
          <div className="mt-3 h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Reach out for collaborations, opportunities, or just to say hello in the digital cosmos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
                className="bg-gray-800/80 rounded-2xl p-6 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-400/20 text-cyan-400 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/80 rounded-2xl p-8 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-gray-900 text-white border-2 border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-gray-900 text-white border-2 border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-gray-900 text-white border-2 border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 text-white border-2 border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`mt-6 w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-cyan-400 text-center font-semibold"
                >
                  Message transmitted to the digital void successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionFile;