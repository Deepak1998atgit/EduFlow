import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import configKeys from '../../../config'; 
import crypto from 'crypto';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: configKeys.CLOUDINARY_CLOUD_NAME,
  api_key: configKeys.CLOUDINARY_API_KEY,
  api_secret: configKeys.CLOUDINARY_API_SECRET,
});

const randomImageName = (bytes = 32): string => crypto.randomBytes(bytes).toString('hex');

export const cloudinaryService = () => {
  const uploadFile = async (file: Express.Multer.File): Promise<{ name: string; key: string; url: string }> => {
    const key = randomImageName();
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { public_id: key, resource_type: 'auto' },
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) {
            return reject(error);
          }
          if (result) {
            console.log("result",result,"result")
            resolve({
              name: file.originalname,
              key: result.public_id,
              url: result.secure_url,
            });
          } else {
            reject(new Error('Upload failed with an unknown error.'));
          }
        }
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  };

  return {
    uploadFile,
  };
};

export type CloudServiceImpl = typeof cloudinaryService;








