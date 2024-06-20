import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';

export const cloudServiceInterface = (service: ReturnType<CloudServiceImpl>) => {
    
    const upload = async (file: Express.Multer.File) => await service.uploadFile(file)
    
    return {
        upload,
    };
    
};


export type CloudServiceInterface =typeof cloudServiceInterface;






