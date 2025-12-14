import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:4000/api/blogs/all";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API_URL);
        console.log("FetchBlogs response:", res.data);
        setPosts(res.data.data || []);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex justify-center items-center text-red-600">
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">My Blog</h1>
          <p className="mt-3 text-lg text-gray-600">
            Learn MERN, Backend, React & System Design
          </p>
        </div>
        {/* Error State */}
        {error && (
          <div className="max-w-xl mx-auto mb-10 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center">
            <p className="font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}


        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={post.coverImageUrl || "https://via.placeholder.com/600x400"}
                alt={post.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Tags + Date */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  <span>•</span>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    👁 {post.meta?.views || 0} views
                  </span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
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
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center">
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
