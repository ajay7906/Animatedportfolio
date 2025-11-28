const express = require("express");
const app = express();
const {createPost} = require("../controllers/postControllers");
const verifyToken = require("../middleware/verifyToken");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/create", verifyToken, isAdmin, createPost);
module.exports = router;