// import React, { useCallback, useState } from 'react';
// import useBlogStore from '../../context/blogStore';
// import { useNavigate } from 'react-router-dom';
// import useAuthStore from '../../context/userContaxt';
// import { set } from 'mongoose';

// const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
// const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

// const BlogPostAdmin = () => {
//   const navigate = useNavigate();
//   const createPost = useBlogStore((state) => state.createPost);
//   const loading = useBlogStore((state) => state.loading);
//   const authUser = useAuthStore((state) => state.user);

//   const [title, setTitle] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState(""); // comma separated string
//   const [published, setPublished] = useState(true);
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [message, setMessage] = useState(null);
//   // cleanup preview URL on unmount / file change
//   useEffect(() => {
//     return () => {
//       if (filePreview) URL.revokeObjectURL(filePreview);
//     };
//   }, [filePreview]);
//   // file select handler with validation + preview
//   const onFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) {
//       setFile(null);
//       setFilePreview(null);
//       return;
//     }
//     // type check
//     if(!ALLOWED_IMAGE_TYPES.includes(file.type)){
//       setErrors((s) => ({ ...s, file: "Unsupported image type" }));
//       setFile(null);
//       return;
//     }
//     // size check
//     if(file.size > MAX_IMAGE_SIZE){
//       setErrors((s) => ({ ...s, file: "Image exceeds 10MB limit" }));
//       setFile(null);
//       return;
//     }
//     setErrors((s) => ({ ...s, file: null }));
//     setFile(file);
//     // create preview
//     try {
//       const url = URL.createObjectURL(file);
//       setFilePreview(url);
      
//     } catch (error) {
//       setFilePreview(null);
      
//     }

//   }
//   // validate form
//    const validate = useCallback(() => {
//     const e = {};
//     if (!title.trim()) e.title = "Title is required";
//     if (!body.trim() || body.trim().length < 20) e.body = "Content must be at least 20 characters";
//     // excerpt optional but limit
//     if (excerpt && excerpt.length > 300) e.excerpt = "Excerpt too long (max 300 chars)";
//     // tags optional - normalize below
//     if (file && !ALLOWED_IMAGE_TYPES.includes(file.type)) e.file = "Invalid image type";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }, [title, body, excerpt, file]);
//   // parse tags
//   const parseTags = (tagsString) =>  {
//     return tagsString
//       .split(",")
//       .map((t) => t.trim()
//       .filter(Boolean)
//       .slice(0, 15)
//       .toLowerCase()
//       );
    
//   }
//   const resetForm = () => {
//     setTitle("");
//     setExcerpt("");
//     setBody("");
//     setTags("");
//     setPublished(true);
//     setFile(null);
//     setFilePreview(null);
//     setErrors({});
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (submitting) return; // prevent multiple submits
//     if(!authUser) {
//       setMessage("You must be logged in to create a post.");
//       return;
//     }
//     if (!validate()){
//       setMessage("Please fix the errors in the form.");
//       return;
//     }
//     setSubmitting(true);
//     setMessage(null);
//     try {
//       const tagsArray = parseTags(tags);
//       let payload;
//       let isForm = false;
//       if(file){
//         // use FormData
//         payload = new FormData();
//         payload.append("title", title);
//         payload.append("excerpt", excerpt);
//         payload.append("body", body);
//         payload.append("tags", JSON.stringify(tagsArray));
//         payload.append("published", published);
//         payload.append("coverImage", file);
//         isForm = true;
//       }
//       const response = await createPost(payload, isForm);
//       if(!response || !response.success){
//         setMessage(response?.message || "Failed to create post.");
//         setSubmitting(false);
//         return;
//       }
//       if(response.success){
//         setMessage("Post created successfully!");
//         resetForm();
//         // navigate(`/admin/posts/edit/${response.post._id}`);
//       }


      
//     } catch (error) {
//       console.error("Error creating post:", error);
//       setMessage(error.message || "An error occurred while creating the post.");
      
//     } finally{
//       setSubmitting(false);
//     }
   
//   }
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
//           <p className="text-gray-600 mt-2">Fill in the details below to create a new blog post</p>
//         </div>

//         {/* Main Form */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <form className="space-y-6">
//             {/* Title */}
//             <div>
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
//                 Title *
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter post title"
//               />
//             </div>

//             {/* Excerpt */}
//             <div>
//               <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
//                 Excerpt
//               </label>
//               <textarea
//                 id="excerpt"
//                 name="excerpt"
//                 rows="3"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Brief description of your post"
//               />
//             </div>

//             {/* Body/Content */}
//             <div>
//               <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
//                 Content *
//               </label>
//               <textarea
//                 id="body"
//                 name="body"
//                 rows="12"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Write your post content here..."
//               />
//             </div>

//             {/* Tags */}
//             <div>
//               <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
//                 Tags
//               </label>
//               <input
//                 type="text"
//                 id="tags"
//                 name="tags"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter tags separated by commas"
//               />
//               <p className="text-sm text-gray-500 mt-1">Separate tags with commas (e.g., javascript, react, nodejs)</p>
//             </div>

//             {/* Cover Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Cover Image
//               </label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   <svg
//                     className="mx-auto h-12 w-12 text-gray-400"
//                     stroke="currentColor"
//                     fill="none"
//                     viewBox="0 0 48 48"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <div className="flex text-sm text-gray-600">
//                     <label
//                       htmlFor="coverImage"
//                       className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//                     >
//                       <span>Upload a file</span>
//                       <input
//                         id="coverImage"
//                         name="coverImage"
//                         type="file"
//                         className="sr-only"
//                         accept="image/*"
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>

//             {/* Cover Image URL (Alternative) */}
//             <div>
//               <label htmlFor="coverImageUrl" className="block text-sm font-medium text-gray-700 mb-2">
//                 Or enter image URL
//               </label>
//               <input
//                 type="url"
//                 id="coverImageUrl"
//                 name="coverImageUrl"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="https://example.com/image.jpg"
//               />
//             </div>

//             {/* Published Toggle */}
//             <div className="flex items-center">
//               <input
//                 id="published"
//                 name="published"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 defaultChecked
//               />
//               <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
//                 Publish immediately
//               </label>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
//               <button
//                 type="button"
//                 className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Save as Draft
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Publish Post
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Preview Section */}
//         <div className="mt-8 bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
//           <div className="border border-gray-200 rounded-lg p-4 min-h-32">
//             <p className="text-gray-500 text-center">Post preview will appear here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPostAdmin;












import React, { useState, useEffect, useCallback } from "react";
import useBlogStore from "../../context/blogStore";
import useAuthStore from "../../context/userContaxt";
import { useNavigate } from "react-router-dom";

const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const BlogPostAdmin = () => {
  const navigate = useNavigate();
  const createPost = useBlogStore((s) => s.createPost); // async action
  const loading = useBlogStore((s) => s.loading);
  const authUser = useAuthStore((s) => s.user);

  // Controlled form state
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(""); // comma separated string
  const [published, setPublished] = useState(true);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  // UI state
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // cleanup preview URL on unmount / file change
  useEffect(() => {
    return () => {
      if (filePreview) URL.revokeObjectURL(filePreview);
    };
  }, [filePreview]);

  // file select handler with validation + preview
  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      setFilePreview(null);
      return;
    }

    // type check
    if (!ALLOWED_IMAGE_TYPES.includes(f.type)) {
      setErrors((s) => ({ ...s, file: "Unsupported image type" }));
      setFile(null);
      return;
    }

    // size check
    if (f.size > MAX_IMAGE_SIZE) {
      setErrors((s) => ({ ...s, file: "Image exceeds 10MB limit" }));
      setFile(null);
      return;
    }

    setErrors((s) => ({ ...s, file: null }));
    setFile(f);

    // create preview
    try {
      const url = URL.createObjectURL(f);
      setFilePreview(url);
    } catch (err) {
      setFilePreview(null);
    }
  };

  // basic validation; returns boolean
  const validate = useCallback(() => {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!body.trim() || body.trim().length < 20) e.body = "Content must be at least 20 characters";
    // excerpt optional but limit
    if (excerpt && excerpt.length > 300) e.excerpt = "Excerpt too long (max 300 chars)";
    // tags optional - normalize below
    if (file && !ALLOWED_IMAGE_TYPES.includes(file.type)) e.file = "Invalid image type";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [title, body, excerpt, file]);

  // normalize tags -> array
  const parseTags = (tagString) => {
    return tagString
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 10); // limit tags to 10
  };

  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setBody("");
    setTags("");
    setPublished(true);
    setFile(null);
    setFilePreview(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(authUser, 'authUser');

    if (!authUser) {
      setMessage("You must be logged in to publish.");
      return;
    }

    if (!validate()) {
      setMessage("Fix form errors before publishing");
      return;
    }

    setSubmitting(true);
    setMessage(null);

    try {
      // Use FormData if file present
      const tagArray = parseTags(tags);
      let payload;
      let isForm = false;
      if (file) {
        payload = new FormData();
        payload.append("title", title.trim());
        payload.append("excerpt", excerpt.trim());
        payload.append("content", body);
        payload.append("tags", JSON.stringify(tagArray));
        payload.append("published", published ? "true" : "false");
        payload.append("image", file);
        isForm = true;
      } else {
        payload = {
          title: title.trim(),
          excerpt: excerpt.trim(),
          content: body,
          tags: tagArray,
          published: published,
        };
      }

      // createPost in blogStore should accept either FormData or JSON and handle token
      const resp = await createPost(payload, isForm);

      if (!resp) {
        setMessage("No response from server");
        setSubmitting(false);
        return;
      }

      if (resp.success) {
        setMessage("Post published successfully!");
        resetForm();
        // optional: navigate to list or newly created post
        navigate("/admin"); // or navigate(`/blog/${resp.blog._id}`)
      } else {
        // server provided error message
        setMessage(resp.message || "Failed to create post");
      }
    } catch (err) {
      console.error("Create post error:", err);
      setMessage(err?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
          <p className="text-gray-600 mt-2">Fill in the details below to create a new blog post</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter post title"
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? "title-error" : undefined}
              />
              {errors.title && <p id="title-error" className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows="3"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.excerpt ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Brief description"
              />
              {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
            </div>

            {/* Body */}
            <div>
              <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                id="body"
                name="body"
                rows="12"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.body ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Write your post content here..."
                aria-invalid={!!errors.body}
                aria-describedby={errors.body ? "body-error" : undefined}
              />
              {errors.body && <p id="body-error" className="mt-1 text-sm text-red-600">{errors.body}</p>}
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="javascript, react, nodejs"
              />
              <p className="text-sm text-gray-500 mt-1">Separate tags with commas (max 10)</p>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
              <div className="mt-1 flex items-center space-x-4">
                <input
                  id="coverImage"
                  name="coverImage"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="block"
                />
                {filePreview && (
                  <img
                    src={filePreview}
                    alt="preview"
                    className="w-28 h-20 object-cover rounded-md border"
                  />
                )}
              </div>
              {errors.file && <p className="mt-1 text-sm text-red-600">{errors.file}</p>}
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>

            {/* Published Toggle */}
            <div className="flex items-center">
              <input
                id="published"
                name="published"
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-700">Publish immediately</label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  // optional: save draft locally
                  localStorage.setItem("blog_draft", JSON.stringify({ title, excerpt, body, tags }));
                  setMessage("Draft saved locally");
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Save as Draft
              </button>

              <button
                type="submit"
                disabled={submitting || loading}
                className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60"
              >
                {(submitting || loading) ? "Publishing..." : "Publish Post"}
              </button>
            </div>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
          </form>
        </div>

        {/* Preview */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
          <div className="border border-gray-200 rounded-lg p-4 min-h-32">
            {filePreview && <img src={filePreview} alt="cover preview" className="w-full max-h-48 object-cover rounded mb-4" />}
            <h3 className="text-2xl font-bold">{title || "Post title preview"}</h3>
            <p className="mt-2 text-gray-600">{excerpt || "Post excerpt preview"}</p>
            <div className="mt-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: body ? escapeHtmlToSafe(body) : "<p>Post content preview</p>" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

/** helper: lightweight sanitize/escape for previewing raw text (client-side).
 *  IMPORTANT: Do NOT rely on this for production security — server must sanitize HTML.
 */
function escapeHtmlToSafe(text = "") {
  // Simple escape for < > to safely show text. If you render HTML (markdown), use a safe renderer library.
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default BlogPostAdmin;
