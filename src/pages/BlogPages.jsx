// BlogPage.jsx - Main Blog Page Component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//import BlogCard from './BlogCard';
//import Pagination from './Pagination';
import { blogPosts } from './blogData';
import BlogCard from '../components/blog/BlogCard';
import Pagination from '../components/blog/Pagination';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setPosts(blogPosts);
      setFilteredPosts(blogPosts);
      
      // Extract unique categories
      const uniqueCategories = ['All', ...new Set(blogPosts.map(post => post.category))];
      setCategories(uniqueCategories);
      
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Filter posts based on category and search term
    let results = posts;
    
    if (currentCategory !== 'All') {
      results = results.filter(post => post.category === currentCategory);
    }
    
    if (searchTerm) {
      results = results.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(results);
    setCurrentPage(1); // Reset to first page on filter change
  }, [currentCategory, searchTerm, posts]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thoughts, insights, and tutorials about web development and design.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="px-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            className="absolute right-3 top-3 h-5 w-5 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredPosts.length > 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium text-gray-600">No posts found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={filteredPosts.length} 
          currentPage={currentPage}
          paginate={paginate} 
        />
      )}
    </div>
  );
};

export default BlogPage;