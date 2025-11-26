const {v2 : cloudinary} = require('cloudinary')
const fs = require('fs');
const streamfier = require('streamifier')
const uploadBufferToCloudinary = async (buffer) => {
    cloudinary.config({
         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {folder: 'uploads', resource_type: 'image'},
            (error, result) => {
                if(error) return reject(error);
                resolve(result);
            });
            streamfier.createReadStream(buffer).pipe(uploadStream);


    })
  
}

module.exports = {uploadBufferToCloudinary};

