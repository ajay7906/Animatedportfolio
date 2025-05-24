// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuItems = [
//     { title: 'Home', href: '#home' },
//     { title: 'About', href: '#about' },
//     { title: 'Experience', href: '#experience' },
//     { title: 'Projects', href: '#projects' },
//     { title: 'Skills', href: '#skills' },
//     { title: 'Contact', href: '#contact' },
//     { title: 'Blog', href: '/blogs', isComingSoon: true }
//   ];

//   const navVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-900/50'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <motion.div
//             className="flex-shrink-0 font-extrabold text-2xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(34, 211, 238, 0.7)' }}
//           >
//             Ajay Kumar
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {menuItems.map((item) => (
//                 <div key={item.title} className="relative group">
//                   <motion.a
//                     href={item.href}
//                     className="text-gray-300 hover:text-cyan-400 transition-colors"
//                     whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {item.title}
//                   </motion.a>
//                   {item.isComingSoon && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8, y: 10 }}
//                       whileHover={{ opacity: 1, scale: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
//                     >
//                       <motion.span
//                         animate={{ opacity: [1, 0.7, 1], textShadow: ['0 0 5px rgba(34,211,238,0.7)', '0 0 10px rgba(34,211,238,1)', '0 0 5px rgba(34,211,238,0.7)'] }}
//                         transition={{ duration: 1.2, repeat: Infinity }}
//                       >
//                         Coming Soon
//                       </motion.span>
//                       {/* Particle Effects */}
//                       <motion.div
//                         className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//                         animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [1, 0.5, 1] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                         style={{ top: '10%', left: '5%' }}
//                       />
//                       <motion.div
//                         className="absolute w-1 h-1 bg-purple-400 rounded-full"
//                         animate={{ x: [0, -15, 0], y: [0, 10, 0], opacity: [1, 0.5, 1] }}
//                         transition={{ duration: 1.8, repeat: Infinity }}
//                         style={{ bottom: '10%', right: '5%' }}
//                       />
//                     </motion.div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-cyan-400"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/90 backdrop-blur-sm`}
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {menuItems.map((item) => (
//             <div key={item.title} className="relative group">
//               <motion.a
//                 href={item.href}
//                 className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.title}
//               </motion.a>
//               {item.isComingSoon && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8, y: 10 }}
//                   whileHover={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-1 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
//                 >
//                   <motion.span
//                     animate={{ opacity: [1, 0.7, 1], textShadow: ['0 0 5px rgba(34,211,238,0.7)', '0 0 10px rgba(34,211,238,1)', '0 0 5px rgba(34,211,238,0.7)'] }}
//                     transition={{ duration: 1.2, repeat: Infinity }}
//                   >
//                     Coming Soon
//                   </motion.span>
//                   {/* Particle Effects */}
//                   <motion.div
//                     className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//                     animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [1, 0.5, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                     style={{ top: '10%', left: '5%' }}
//                   />
//                   <motion.div
//                     className="absolute w-1 h-1 bg-purple-400 rounded-full"
//                     animate={{ x: [0, -15, 0], y: [0, 10, 0], opacity: [1, 0.5, 1] }}
//                     transition={{ duration: 1.8, repeat: Infinity }}
//                     style={{ bottom: '10%', right: '5%' }}
//                   />
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;







import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    { 
      title: 'Blog', 
      href: '#blog', 
      isComingSoon: true,
      specialBadge: true
    }
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
                    className={`text-gray-300 hover:text-cyan-400 transition-colors ${
                      item.specialBadge ? 'pr-6' : ''
                    }`}
                    whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                    {item.specialBadge && (
                      <motion.div
                        className="absolute -top-2 -right-5"
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'mirror'
                        }}
                      >
                        <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                          ✍️
                        </span>
                      </motion.div>
                    )}
                  </motion.a>

                  {item.isComingSoon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileHover={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ 
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'mirror'
                          }}
                        >
                          🚧
                        </motion.div>
                        <motion.span
                          animate={{ 
                            opacity: [1, 0.7, 1], 
                            textShadow: [
                              '0 0 5px rgba(34,211,238,0.7)', 
                              '0 0 10px rgba(34,211,238,1)', 
                              '0 0 5px rgba(34,211,238,0.7)'
                            ] 
                          }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          Crafting Knowledge!
                        </motion.span>
                        <motion.div
                          className="relative w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'mirror'
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Animated Particles */}
                      <motion.div
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{ 
                          x: [0, 15, 0, -15, 0],
                          y: [0, -10, 5, 10, 0],
                          opacity: [1, 0.5, 0.8, 0.3, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{ top: '20%', left: '10%' }}
                      />
                      <motion.div
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        animate={{ 
                          x: [0, -15, 0, 15, 0],
                          y: [0, 10, -5, -10, 0],
                          opacity: [1, 0.3, 0.8, 0.5, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ bottom: '20%', right: '10%' }}
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
            <div key={item.title} className="relative group">
              <motion.a
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                {item.specialBadge && (
                  <motion.div
                    className="inline-block ml-2"
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'mirror'
                    }}
                  >
                    <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                      ✍️
                    </span>
                  </motion.div>
                )}
              </motion.a>
              {item.isComingSoon && (
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-1 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                    >
                      🚧
                    </motion.div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                      Crafting Knowledge!
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;