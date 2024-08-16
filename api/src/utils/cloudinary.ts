import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: string): Promise<any> => {
    try {
        if (!localFilePath) {
            throw new Error("Please provide the file path");
        }
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File has been uploaded", result.url);
        return result;
    } catch (err) {
        fs.unlinkSync(localFilePath);
        console.log(err);
    }
};

export { uploadOnCloudinary };