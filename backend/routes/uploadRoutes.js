import { uploadImage } from "../controllers/upload";
import { isAdmin, protect } from "../middleware/auth";
import upload from "../middleware/multer";

const express = require("express");
const router  = express.Router();

router.post("/upload-image",protect, isAdmin, upload.single("image"), uploadImage);




export default router;