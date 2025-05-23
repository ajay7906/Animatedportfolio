import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Static blog data (replace with API later)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use useState and useEffect in modern React apps",
      date: "May 15, 2023",
      slug: "react-hooks-intro",
      category: "React",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500"
    },
    {
      id: 2,
      title: "Tailwind CSS Best Practices",
      excerpt: "Optimize your Tailwind workflow with these expert tips",
      date: "June 2, 2023",
      slug: "tailwind-best-practices",
      category: "CSS",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts on web development, design, and more
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Placeholder for future pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-200">
              Next →
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;