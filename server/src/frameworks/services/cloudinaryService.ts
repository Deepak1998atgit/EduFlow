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
            console.log("result", result, "result")
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
      console.log("upstraem", uploadStream, "upload")
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  };


  const getFile = async (fileKey: string) => {
    return await cloudinary.url(fileKey)
  };


  const deleteFile = async (key: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(key, (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result.result === 'ok') {
          resolve();
        } else {
          reject(new Error('File deletion failed.'));
        }
      });
    });
  };


  const getSignedUrl = async (fileKey: string, expiresIn?: number): Promise<string> => {
    expiresIn ? expiresIn : expiresIn = 3600 // Default expiration time is 1 hour
    const timestamp = Math.floor(Date.now() / 1000) + expiresIn; // Expiration timestamp
    const signature = cloudinary.utils.api_sign_request(
      {
        public_id: fileKey,
        timestamp,
      },
      configKeys.CLOUDINARY_API_SECRET
    );
    const url = cloudinary.url(fileKey, {
      sign_url: true,
      api_key: configKeys.CLOUDINARY_API_KEY,
      timestamp,
      signature,
      resource_type: 'auto', // Can be adjusted based on resource type
    });
    return url;
  };


  return {
    uploadFile,
    getFile,
    deleteFile,
    getSignedUrl
  };

};

export type CloudServiceImpl = typeof cloudinaryService;








