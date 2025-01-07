import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';

export const cloudServiceInterface = (service: ReturnType<CloudServiceImpl>) => {

    const upload = async (file: Express.Multer.File) => await service.uploadFile(file)

    const getFile = async (fileKey: string) => await service.getFile(fileKey);

    const deleteFile = async (fileKey: string) => await service.deleteFile(fileKey);

    const getSignedUrl = async (fileKey: string, expiresIn?: number) => await service.getSignedUrl(fileKey, expiresIn);

    return {
        upload,
        getFile,
        deleteFile,
        getSignedUrl
    };

};


export type CloudServiceInterface = typeof cloudServiceInterface;






