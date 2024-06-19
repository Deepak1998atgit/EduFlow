import { v2 as cloudinary } from 'cloudinary';
import configKeys from '../../../config'; // Ensure this imports your Cloudinary configuration
import crypto from 'crypto';

cloudinary.config({
  cloud_name: configKeys.CLOUDINARY_CLOUD_NAME,
  api_key: configKeys.CLOUDINARY_API_KEY,
  api_secret: configKeys.CLOUDINARY_API_SECRET,
});

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

export const cloudinaryService = () => {
  const uploadFile = async (file: Express.Multer.File): Promise<{ name: string; key: string; url: string }> => {
    const key = randomImageName();
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { public_id: key, resource_type: 'auto' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    return {
      name: file.originalname,
      key: uploadResult.public_id,
      url: uploadResult.secure_url,
    };
  };

  const uploadAndGetUrl = async (file: Express.Multer.File) => {
    const result = await uploadFile(file);
    return result;
  };

  const getFile = async (fileKey: string): Promise<string> => {
    const url = cloudinary.url(fileKey, { resource_type: 'auto' });
    return url;
  };

  const getVideoStream = async (key: string): Promise<NodeJS.ReadableStream> => {
    const url = cloudinary.url(key, { resource_type: 'video' });
    const response = await fetch(url);
    if (!response.body) throw new Error('No response body');
    return response.body as unknown as NodeJS.ReadableStream;
  };

  const removeFile = async (fileKey: string): Promise<void> => {
    await cloudinary.uploader.destroy(fileKey, { resource_type: 'auto' });
  };

  return {
    uploadFile,
    uploadAndGetUrl,
    getFile,
    getVideoStream,
    removeFile,
  };
};

export type CloudServiceImpl = ReturnType<typeof cloudinaryService>;




