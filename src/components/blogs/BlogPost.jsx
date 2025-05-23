import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Static post data (replace with API fetch later)
  const post = {
    id: 1,
    title: "Getting Started with React Hooks",
    content: `
      <h2 class="text-2xl font-bold mb-4">Introduction to Hooks</h2>
      <p class="mb-4">React Hooks revolutionized how we write components. Here's a simple example:</p>
      
      <pre class="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <code>import { useState } from 'react';
        
function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Clicked {count} times
    &lt;/button&gt;
  );
}</code>
      </pre>
      
      <p>This is just the beginning of what Hooks can do!</p>
    `,
    date: "May 15, 2023",
    category: "React",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Placeholder for future comments section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Comments (Coming Soon)
              </h3>
              <p className="text-gray-500">
                Authenticated users will be able to comment here soon!
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;