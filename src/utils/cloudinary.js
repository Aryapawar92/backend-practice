import {v2 as cloudinary} from "cloudinary"
import { log } from "console"
import fs from "fs"

const uploadoncloudinary = async (localfile) =>{
    try {
        if(!localfile) return null

        const response = cloudinary.uploader.upload(localfile,{resource_type: "auto"} )

        console.log("File is uploaded on cloudinary", response.url);

        return response
    } catch (error) {
        fs.unlinkSync(localfile) // remove the locally saved temp file as the upload operation got failed
        return null;
    }
}



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


    
export {uploadoncloudinary}