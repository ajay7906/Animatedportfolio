// const fs = require("fs");
// const path = require("path");
// const multer = require("multer")

// const uploadDir = path.join(__dirname, "..", "uploads");

// if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => (null, uploadDir),
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
//         cb(null, filename);
//     }
// })

// const fileFilter = (req, file, cb) => {
//   if (/^image\/(jpeg|png|webp|gif|svg\+xml)$/.test(file.mimetype)) cb(null, true);
//   else cb(new Error('Only image files are allowed!'), false);
// };

// module.exports = multer({ storage,
//      fileFilter,
//      limits: {fileSize: 8 * 1024 * 1024} // 8MB file size limit
//      });














// middlewares/multerMemory.js
const multer = require('multer');

const storage = multer.memoryStorage(); // store file in memory buffer
const limits = { fileSize: 10 * 1024 * 1024 }; // 10MB
const upload = multer({ storage, limits });

module.exports = upload;
