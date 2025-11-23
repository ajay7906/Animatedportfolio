const User = require('../models/User');
const Post = require('../models/Post');
const sanitizeHtml = require('sanitize-html'); // optional, npm i sanitize-html

// Create a new post
exports.createPost = async (req, res) => {
  try {
    // req.user must be set by your auth middleware (jwt verification)
    const userId = req.user && (req.user.id || req.user._id);
    if (!userId) {
      return res.status(401).json({ success: false, error: 'User not authenticated' });
    }

    const { title, body, excerpt, tags, published, coverImageUrl } = req.body;

    // Basic validation (expand with Joi/express-validator)
    if (!title || !title.trim() || !body || !body.trim()) {
      return res.status(400).json({ success: false, error: 'Title and body are required' });
    }

    // Normalize tags: accept array or comma-separated string
    let normalizedTags = [];
    if (Array.isArray(tags)) {
      normalizedTags = tags.map(t => String(t).trim()).filter(Boolean);
    } else if (typeof tags === 'string' && tags.trim()) {
      normalizedTags = tags.split(',').map(t => t.trim()).filter(Boolean);
    }

    // Optionally sanitize excerpt / body if you allow HTML
    const safeExcerpt = excerpt ? sanitizeHtml(excerpt, { allowedTags: [], allowedAttributes: {} }) : undefined;
    // If you allow certain HTML tags in body, configure sanitizeHtml accordingly
    const safeBody = sanitizeHtml(body, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1','h2','img']), // example
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'alt']
      }
    });

    const newPost = new Post({
      title: title.trim(),
      body: safeBody,
      excerpt: safeExcerpt,
      tags: normalizedTags,
      published: published !== undefined ? !!published : true,
      coverImageUrl: coverImageUrl || null,
      author: userId
    });

    // Save and populate author
    const saved = await newPost.save();
    await saved.populate('author', 'name email'); // adjust fields as needed

    return res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: saved
    });
  } catch (err) {
    // handle duplicate slug / unique index error
    if (err && err.code === 11000) {
      // You might want to regenerate a slug or append a suffix
      return res.status(409).json({ success: false, error: 'Duplicate field error (possible slug collision)' });
    }

    console.error('createPost error:', err);
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
};
