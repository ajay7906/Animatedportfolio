const { uploadBufferToCloudinary } = require("../utils/cloudinary");

exports.uploadImage = async (req, res, next) => {
    try {
        if(!req.file || !req.file.buffer){
            return res.status(400).json({ success: false, error: 'No file uploaded' });
        }
        const result = await uploadBufferToCloudinary(req.file.buffer);
        res.status(200).json({ success: true, data: result, message: 'Image uploaded successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Image upload failed' });
        // return next();
        
    }
}