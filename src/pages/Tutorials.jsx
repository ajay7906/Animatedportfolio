import { Link } from 'react-router-dom';
import { Clock, User, Star, BookOpen, PlayCircle } from 'lucide-react';

const Tutorials = () => {
  const tutorials = [
    {
      id: 'html',
      title: 'HTML Tutorial',
      description: 'The word hypertext markup language is composed of the words "hypertext" and "markup language". HTML is used to create electronic documents (called pages) that are displayed on the World Wide Web.',
      duration: '4 hours',
      level: 'Beginner',
      students: 15000,
      rating: 4.8,
      icon: '🌐',
      image: '/api/placeholder/400/250',
      lessons: 24,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'css',
      title: 'CSS Tutorial',
      description: 'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work as it can control the layout of multiple web pages all at once.',
      duration: '6 hours',
      level: 'Beginner',
      students: 12000,
      rating: 4.7,
      icon: '🎨',
      image: '/api/placeholder/400/250',
      lessons: 32,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'javascript',
      title: 'JavaScript Tutorial',
      description: 'JavaScript is a lightweight, cross-platform, object-oriented programming language. JavaScript is used both on the client-side and server-side making it essential for modern web development.',
      duration: '10 hours',
      level: 'Intermediate',
      students: 18000,
      rating: 4.9,
      icon: '⚡',
      image: '/api/placeholder/400/250',
      lessons: 45,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'python',
      title: 'Python Tutorial',
      description: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.',
      duration: '8 hours',
      level: 'Beginner',
      students: 20000,
      rating: 4.8,
      icon: '🐍',
      image: '/api/placeholder/400/250',
      lessons: 38,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'react',
      title: 'React Tutorial',
      description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.',
      duration: '7 hours',
      level: 'Intermediate',
      students: 16000,
      rating: 4.8,
      icon: '⚛️',
      image: '/api/placeholder/400/250',
      lessons: 35,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'nodejs',
      title: 'Node.js Tutorial',
      description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment.',
      duration: '9 hours',
      level: 'Intermediate',
      students: 14000,
      rating: 4.7,
      icon: '🟢',
      image: '/api/placeholder/400/250',
      lessons: 42,
      color: 'from-lime-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Learn & Grow
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master programming with our comprehensive tutorials. From beginner to advanced, 
            we've got everything you need to become a proficient developer.
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 
                         hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 
                         hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${tutorial.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4 text-4xl">
                    {tutorial.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tutorial.level === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-4">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{tutorial.rating}</span>
                  </div>
                </div>

                {/* Students */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">{tutorial.students.toLocaleString()}+ students</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/tutorials/${tutorial.id}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                           text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 
                           transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 
                           flex items-center justify-center gap-2 group/btn"
                >
                  <PlayCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of students who have transformed their careers with our tutorials.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 
                            text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 
                            transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              Explore All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;