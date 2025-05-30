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







// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
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
//     { 
//       title: 'Blog', 
//       href: '#blog', 
//       isComingSoon: true,
//       specialBadge: true
//     }
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
//                     className={`text-gray-300 hover:text-cyan-400 transition-colors ${
//                       item.specialBadge ? 'pr-6' : ''
//                     }`}
//                     whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {item.title}
//                     {item.specialBadge && (
//                       <motion.div
//                         className="absolute -top-2 -right-5"
//                         animate={{
//                           rotate: [0, 15, -15, 0],
//                           scale: [1, 1.2, 1],
//                         }}
//                         transition={{
//                           duration: 1.5,
//                           repeat: Infinity,
//                           repeatType: 'mirror'
//                         }}
//                       >
//                         <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//                           ✍️
//                         </span>
//                       </motion.div>
//                     )}
//                   </motion.a>

//                   {item.isComingSoon && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8, y: 10 }}
//                       whileHover={{ opacity: 1, scale: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
//                     >
//                       <div className="flex items-center gap-3">
//                         <motion.div
//                           animate={{ 
//                             rotate: [0, 15, -15, 0],
//                             scale: [1, 1.2, 1],
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             repeatType: 'mirror'
//                           }}
//                         >
//                           🚧
//                         </motion.div>
//                         <motion.span
//                           animate={{ 
//                             opacity: [1, 0.7, 1], 
//                             textShadow: [
//                               '0 0 5px rgba(34,211,238,0.7)', 
//                               '0 0 10px rgba(34,211,238,1)', 
//                               '0 0 5px rgba(34,211,238,0.7)'
//                             ] 
//                           }}
//                           transition={{ duration: 1.2, repeat: Infinity }}
//                         >
//                           Crafting Knowledge!
//                         </motion.span>
//                         <motion.div
//                           className="relative w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
//                         >
//                           <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600"
//                             initial={{ width: '0%' }}
//                             animate={{ width: '100%' }}
//                             transition={{
//                               duration: 2,
//                               repeat: Infinity,
//                               repeatType: 'mirror'
//                             }}
//                           />
//                         </motion.div>
//                       </div>

//                       {/* Animated Particles */}
//                       <motion.div
//                         className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//                         animate={{ 
//                           x: [0, 15, 0, -15, 0],
//                           y: [0, -10, 5, 10, 0],
//                           opacity: [1, 0.5, 0.8, 0.3, 1]
//                         }}
//                         transition={{ duration: 2.5, repeat: Infinity }}
//                         style={{ top: '20%', left: '10%' }}
//                       />
//                       <motion.div
//                         className="absolute w-1 h-1 bg-purple-400 rounded-full"
//                         animate={{ 
//                           x: [0, -15, 0, 15, 0],
//                           y: [0, 10, -5, -10, 0],
//                           opacity: [1, 0.3, 0.8, 0.5, 1]
//                         }}
//                         transition={{ duration: 3, repeat: Infinity }}
//                         style={{ bottom: '20%', right: '10%' }}
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
//                 {item.specialBadge && (
//                   <motion.div
//                     className="inline-block ml-2"
//                     animate={{
//                       rotate: [0, 15, -15, 0],
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: 'mirror'
//                     }}
//                   >
//                     <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//                       ✍️
//                     </span>
//                   </motion.div>
//                 )}
//               </motion.a>
//               {item.isComingSoon && (
//                 <motion.div
//                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-1 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg border-2 border-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.7)] hidden group-hover:block z-50"
//                 >
//                   <div className="flex items-center gap-3">
//                     <motion.div
//                       animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
//                       transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
//                     >
//                       🚧
//                     </motion.div>
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
//                       Crafting Knowledge!
//                     </span>
//                   </div>
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
import { Menu, X, Sparkles, Zap, Code, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home', icon: '🏠' },
    { title: 'About', href: '#about', icon: '👨‍💻' },
    { title: 'Experience', href: '#experience', icon: '💼' },
    { title: 'Projects', href: '#projects', icon: '🚀' },
    { title: 'Skills', href: '#skills', icon: '⚡' },
    { title: 'Contact', href: '#contact', icon: '📬' },
    { 
      title: 'Blog', 
      href: '/blogs', 
      icon: '✍️',
      isComingSoon: true,
      specialBadge: true
    }
  ];

  const BlogComingSoon = ({ isMobile = false }) => (
    <div className={`absolute ${isMobile ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-1' : 'top-full left-1/2 -translate-x-1/2 mt-3'} 
                    w-80 p-6 bg-gradient-to-br from-gray-900/95 via-purple-900/20 to-cyan-900/20 
                    backdrop-blur-xl rounded-2xl border border-cyan-400/30 
                    shadow-[0_0_40px_rgba(34,211,238,0.4),0_0_80px_rgba(168,85,247,0.2)] 
                    hidden group-hover:block z-50 overflow-hidden`}>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header with Icon Animation */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center
                         shadow-[0_0_30px_rgba(34,211,238,0.6)] animate-pulse">
            <div className="text-2xl animate-bounce">
              ✍️
            </div>
          </div>
          {/* Orbital rings */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin" 
               style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-spin" 
               style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Blog Coming Soon! 🚀
          </h3>
          <p className="text-gray-300 text-sm">
            Currently brewing something amazing...
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Progress</span>
            <span className="text-cyan-400 font-semibold">73%</span>
          </div>
          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full
                           shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-pulse"
                 style={{ width: '73%' }} />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                           animate-[shimmer_2s_infinite]" />
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { icon: <Code size={14} />, text: 'Tech Insights', done: true },
            { icon: <Coffee size={14} />, text: 'Dev Stories', done: true },
            { icon: <Zap size={14} />, text: 'Tutorials', done: false },
            { icon: <Sparkles size={14} />, text: 'Tips & Tricks', done: false }
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${
              item.done ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-400'
            }`}>
              {item.icon}
              <span>{item.text}</span>
              {item.done && <span className="text-green-400">✓</span>}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="pt-3 border-t border-gray-700/50">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-medium">Stay tuned for epic content!</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      
      {/* Custom CSS for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo with enhanced effects */}
            <div className="flex-shrink-0 relative group cursor-pointer">
              <div className="font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
                            hover:scale-105 transition-transform duration-300
                            filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                Ajay Kumar
              </div>
              {/* Glowing underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
                            group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <div key={item.title} className="relative group">
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300
                                font-medium tracking-wide group-hover:scale-110 transform
                                ${item.specialBadge ? 'pr-2' : ''}`}
                     >
                      <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      {item.title}
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-600/0 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl -z-10" />
                      
                      {/* Special badge for blog */}
                      {item.specialBadge && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse
                                        shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
                        </div>
                      )}
                    </Link>

                    {/* Enhanced Coming Soon Tooltip */}
                    {item.isComingSoon && <BlogComingSoon />}

                    {/* Navigation underline */}
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
                                  group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(34,211,238,0.6)]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-900/95 backdrop-blur-lg border-t border-gray-800`}>
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-cyan-400 
                           hover:bg-gray-800/50 rounded-xl transition-all duration-300 group-hover:pl-6"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.title}
                  {item.specialBadge && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </Link>
                
                {/* Mobile Coming Soon */}
                {item.isComingSoon && <BlogComingSoon isMobile={true} />}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Cursor follower for desktop */}
      <div className="hidden lg:block fixed pointer-events-none z-30 mix-blend-difference">
        <div 
          className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-50 blur-sm transition-all duration-150"
          style={{
            left: mousePos.x - 12,
            top: mousePos.y - 12,
          }}
        />
      </div>
    </>
  );
};

export default Navbar;