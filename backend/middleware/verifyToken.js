const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, error: 'No token provided' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ success: false, error: 'User not found' });
        }
        req.user = { id: user._id, role: user.role };
        next();


    } catch (error) {
        console.error(err);
        return res.status(401).json({ message: "Invalid or expired token" });

    }
}

module.exports = verifyToken;