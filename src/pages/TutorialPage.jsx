import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, User, Star, PlayCircle, CheckCircle, BookOpen, ArrowLeft, Download } from 'lucide-react';

const TutorialPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('content');

  // Mock data - in real app, fetch based on id
  const tutorial = {
    id: 'html',
    title: 'HTML Tutorial',
    description: 'Complete HTML tutorial from basics to advanced concepts. Learn to build modern websites with proper structure and semantics.',
    fullDescription: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. This comprehensive course will take you from HTML basics to advanced concepts including HTML5 features, semantic elements, forms, multimedia, and accessibility.',
    duration: '4 hours',
    level: 'Beginner',
    students: 15000,
    rating: 4.8,
    icon: '🌐',
    image: '/api/placeholder/800/400',
    lessons: 24,
    color: 'from-orange-500 to-red-500',
    instructor: {
      name: 'Ajay Kumar',
      role: 'Full Stack Developer',
      avatar: '/api/placeholder/100/100'
    },
    resources: [
      'Source Code Files',
      'PDF Notes',
      'Exercise Files',
      'Lifetime Access'
    ]
  };

  const chapters = [
    {
      id: 1,
      title: 'Introduction to HTML',
      duration: '15 min',
      lessons: [
        { id: 1, title: 'What is HTML?', duration: '5:30', completed: true, videoUrl: '#' },
        { id: 2, title: 'Setting up Development Environment', duration: '7:20', completed: true, videoUrl: '#' },
        { id: 3, title: 'Your First HTML Page', duration: '8:10', completed: false, videoUrl: '#' }
      ]
    },
    {
      id: 2,
      title: 'HTML Basics',
      duration: '45 min',
      lessons: [
        { id: 4, title: 'HTML Elements and Tags', duration: '12:30', completed: false, videoUrl: '#' },
        { id: 5, title: 'Attributes and Values', duration: '10:15', completed: false, videoUrl: '#' },
        { id: 6, title: 'Headings and Paragraphs', duration: '8:45', completed: false, videoUrl: '#' },
        { id: 7, title: 'Links and Anchors', duration: '14:20', completed: false, videoUrl: '#' }
      ]
    },
    {
      id: 3,
      title: 'Working with Media',
      duration: '35 min',
      lessons: [
        { id: 8, title: 'Images in HTML', duration: '9:30', completed: false, videoUrl: '#' },
        { id: 9, title: 'Audio and Video', duration: '12:15', completed: false, videoUrl: '#' },
        { id: 10, title: 'Iframes', duration: '13:45', completed: false, videoUrl: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/tutorials"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Tutorials
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 mb-8">
              <div className={`h-64 bg-gradient-to-r ${tutorial.color} relative`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-6 left-6 text-6xl">
                  {tutorial.icon}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-4xl font-bold text-white mb-2">{tutorial.title}</h1>
                  <p className="text-gray-200 text-lg">{tutorial.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span>{tutorial.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-5 h-5 text-cyan-400" />
                    <span>{tutorial.students.toLocaleString()}+ students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>{tutorial.rating} rating</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-700 mb-6">
                  <div className="flex space-x-8">
                    {['content', 'resources', 'overview'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-1 font-medium transition-colors capitalize ${
                          activeTab === tab
                            ? 'text-cyan-400 border-b-2 border-cyan-400'
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Course Content</h3>
                    {chapters.map((chapter) => (
                      <div key={chapter.id} className="bg-gray-700/30 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-white">{chapter.title}</h4>
                          <span className="text-gray-400 text-sm">{chapter.duration}</span>
                        </div>
                        <div className="space-y-3">
                          {chapter.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                                )}
                                <span className={`${lesson.completed ? 'text-green-400' : 'text-gray-300'} group-hover:text-white`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-gray-400 text-sm">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Course Overview</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {tutorial.fullDescription}
                    </p>
                    
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">What You'll Learn</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          HTML5 Semantic Elements
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Forms and Input Types
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Multimedia Integration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Web Accessibility
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Course Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tutorial.resources.map((resource, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
                          <Download className="w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Instructor Card */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={tutorial.instructor.avatar}
                  alt={tutorial.instructor.name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{tutorial.instructor.name}</h4>
                  <p className="text-cyan-400">{tutorial.instructor.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Experienced full-stack developer with passion for teaching and creating amazing web experiences.
              </p>
            </div>

            {/* Progress Card */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Course Completion</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                              text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 
                              transform hover:scale-105 flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;