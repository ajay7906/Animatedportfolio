const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { login, logout } = require('../controllers/auth');

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

module.exports = router;