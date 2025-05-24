import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
    { title: 'Blog', href: '/blogs', isComingSoon: true }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0 font-extrabold text-2xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(34, 211, 238, 0.7)' }}
          >
            Ajay Kumar
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <motion.a
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.a>
                  {item.isComingSoon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-[0_0_10px_rgba(34,211,238,0.7)] hidden group-hover:block"
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Coming Soon
                      </motion.span>
                      {/* Particle Effect */}
                      <motion.div
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{ x: [0, 10, 0], y: [0, -5, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ top: '50%', left: '10%' }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/90 backdrop-blur-sm`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title} className="relative flex items-center">
              <motion.a
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </motion.a>
              {item.isComingSoon && (
                <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-[0_0_5px_rgba(34,211,238,0.7)]">
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Coming Soon
                  </motion.span>
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavbarSection;