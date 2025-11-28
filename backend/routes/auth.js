const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { login, logout, getMe } = require('../controllers/auth');
const verifyToken = require('../middleware/verifyToken');
const { isAdmin } = require('../middleware/auth');

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  login
);

// @route   GET /api/auth/logout
// @desc    Clear auth cookie
// @access  Private
router.get('/logout', logout);
router.get('/me', verifyToken, isAdmin, getMe);

module.exports = router;