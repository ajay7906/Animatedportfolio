const express = require("express");
const app = express();
const {createPost} = require("../controllers/postControllers");
const verifyToken = require("../middleware/verifyToken");
const { isAdmin } = require("../middleware/auth")
const upload = require("../middleware/multer")

const router = express.Router();

router.post("/create", verifyToken, isAdmin, upload.single("image"), createPost);
module.exports = router;