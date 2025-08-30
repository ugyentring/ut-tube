import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//method to upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //if there is file path upload
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file been uploaded successfully
    console.log("File uploaded successfully", response.url);

    //cleanup temp files after successful upload
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Upload Failed", error);

    //cleanup temp files on error
    //safely checks if the file exists and then deletes if it exist
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

export { uploadOnCloudinary };
