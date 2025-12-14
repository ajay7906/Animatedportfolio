// models/Post.js
const mongoose = require('mongoose');
const slugify = require('slugify');

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData', required: true },
  tags: [{ type: String, index: true }],
  coverImageUrl: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' }], // simple like
  comments: [commentSchema],
  published: { type: Boolean, default: true }, // or drafts
  deleted: { type: Boolean, default: false }, // soft-delete
  meta: {
    views: { type: Number, default: 0 }
  }
}, { timestamps: true });

// ensure slug
postSchema.pre('validate', function(next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true }).slice(0, 200);
  }
  next();
});

// index for search
postSchema.index({ title: 'text', body: 'text', tags: 'text' });

module.exports = mongoose.model('Post', postSchema);
