// controllers/auth.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const createAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' } // e.g. '15m'
  );
};

const createRefreshToken = (user, isRemember) => {
  const expiresIn = isRemember
    ? process.env.REFRESH_TOKEN_EXPIRES_IN_REMEMBER || '30d'
    : process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET,
    { expiresIn }
  );
};

const cookieOptions = {
  httpOnly: true,
  sameSite: 'Lax', // or 'Strict' depending on your needs
  // secure should be true in production (HTTPS)
  secure: process.env.NODE_ENV === 'production',
  // domain/path can be set as needed
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password, isRemember } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide email and password'
      });
    }

    // find user (with password)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      // Generic message to avoid user enumeration
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // create tokens
    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user, !!isRemember);

    // Optionally store the refresh token in DB for revocation (simple approach)
    user.refreshToken = refreshToken; // ideally store a hashed token
    await user.save();

    // Set refresh token cookie (httpOnly, secure)
    const refreshCookieMaxAgeHours = Number(process.env.REFRESH_COOKIE_EXPIRES_HOURS || 24 * 30); // in hours
    res.cookie('refreshToken', refreshToken, {
      ...cookieOptions,
      maxAge: refreshCookieMaxAgeHours * 60 * 60 * 1000
    });

    // Option A: send access token in JSON response (common for SPAs)
    res.status(200).json({
      success: true,
      accessToken,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });

    // Option B (if you prefer cookie based for access token) — set another cookie for access token
    // res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: (short ms) });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    // If you store refresh tokens in DB, clear it
    if (req.user) {
      await User.findByIdAndUpdate(req.user.id, { $unset: { refreshToken: '' } });
    }

    // Clear refresh token cookie
    res.cookie('refreshToken', 'none', {
      ...cookieOptions,
      expires: new Date(Date.now() + 10 * 1000)
    });

    // Optionally clear access token cookie if you set one
    // res.cookie('accessToken', 'none', { ...cookieOptions, expires: new Date(Date.now() + 10*1000) });

    res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (err) {
    next(err);
  }
};
