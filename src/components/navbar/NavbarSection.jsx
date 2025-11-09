// import { useState, useEffect } from 'react';
// import { Menu, X, Sparkles, Zap, Code, Coffee } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
    
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const menuItems = [
//     { title: 'Home', href: '#home', icon: '🏠' },
//     { title: 'About', href: '#about', icon: '👨‍💻' },
//     { title: 'Experience', href: '#experience', icon: '💼' },
//     { title: 'Projects', href: '#projects', icon: '🚀' },
//     { title: 'Skills', href: '#skills', icon: '⚡' },
//     { title: 'Contact', href: '#contact', icon: '📬' },
//     { 
//       title: 'Blog', 
//       href: '/blogs', 
//       icon: '✍️',
//       isComingSoon: true,
//       specialBadge: true
//     }
//   ];


//   const navVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 'bg-gray-900/80 backdrop-blur-sm'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Logo with enhanced effects */}
//             <div className="flex-shrink-0 relative group cursor-pointer">
//               <div className="font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
//                             hover:scale-105 transition-transform duration-300
//                             filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
//                 Ajay Kumar
//               </div>
//               {/* Glowing underline */}
//               <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
//                             group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-center space-x-8">
//                 {menuItems.map((item, index) => (
//                   <div key={item.title} className="relative group">
//                     <Link
//                       to={item.href}
//                       className={`relative flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300
//                                 font-medium tracking-wide group-hover:scale-110 transform
//                                 ${item.specialBadge ? 'pr-2' : ''}`}
//                      >
//                       <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
//                         {item.icon}
//                       </span>
//                       {item.title}
                      
//                       {/* Hover glow effect */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-600/0 
//                                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl -z-10" />
                      
//                       {/* Special badge for blog */}
//                       {item.specialBadge && (
//                         <div className="absolute -top-1 -right-1">
//                           <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse
//                                         shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
//                         </div>
//                       )}
//                     </Link>

                

//                     {/* Navigation underline */}
//                     <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
//                                   group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(34,211,238,0.6)]" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-300 hover:text-cyan-400 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300
//                          hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
//               >
//                 <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
//                   {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         } bg-gray-900/95 backdrop-blur-lg border-t border-gray-800`}>
//           <div className="px-4 py-4 space-y-2">
//             {menuItems.map((item, index) => (
//               <div key={item.title} className="relative group">
//                 <Link
//                   to={item.href}
//                   className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-cyan-400 
//                            hover:bg-gray-800/50 rounded-xl transition-all duration-300 group-hover:pl-6"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <span className="text-lg group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </span>
//                   {item.title}
//                   {item.specialBadge && (
//                     <div className="ml-auto">
//                       <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
//                     </div>
//                   )}
//                 </Link>
                
              
//               </div>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Cursor follower for desktop */}
//       <div className="hidden lg:block fixed pointer-events-none z-30 mix-blend-difference">
//         <div 
//           className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-50 blur-sm transition-all duration-150"
//           style={{
//             left: mousePos.x - 12,
//             top: mousePos.y - 12,
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default Navbar;




import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, Code, Coffee, BookOpen, Video } from 'lucide-react';
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
    { title: 'Home', href: '#home', icon: <Sparkles size={16} /> },
    { title: 'About', href: '#about', icon: <Code size={16} /> },
    { title: 'Experience', href: '#experience', icon: <Zap size={16} /> },
    { title: 'Projects', href: '#projects', icon: <Coffee size={16} /> },
    { title: 'Skills', href: '#skills', icon: <Zap size={16} /> },
    { title: 'Tutorials', href: '/tutorials', icon: <BookOpen size={16} /> },
    { title: 'Contact', href: '#contact', icon: <Video size={16} /> },
    { 
      title: 'Blog', 
      href: '/blogs', 
      icon: <BookOpen size={16} />,
      isComingSoon: true,
      specialBadge: true
    }
  ];

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
            
            {/* Logo */}
            <div className="flex-shrink-0 relative group cursor-pointer">
              <div className="font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
                            hover:scale-105 transition-transform duration-300
                            filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                Ajay Kumar
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
                            group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item) => (
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
                      
                      {/* Special badge */}
                      {item.specialBadge && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse
                                        shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
                        </div>
                      )}
                    </Link>

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
            {menuItems.map((item) => (
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
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Cursor follower */}
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


