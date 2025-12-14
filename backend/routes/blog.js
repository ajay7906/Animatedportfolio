const express = require("express");
const app = express();
const {createPost, getAllPosts} = require("../controllers/postControllers");
const verifyToken = require("../middleware/verifyToken");
const { isAdmin } = require("../middleware/auth")
const upload = require("../middleware/multer")

const router = express.Router();

router.post("/create", verifyToken, isAdmin, upload.single("image"), createPost);
router.get("/all", getAllPosts);
module.exports = router;