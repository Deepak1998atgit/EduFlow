import { StudentRepositoryMongoDB } from '../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import { StudentRegisterInterface} from '../../types/studentRegisterInterface';
import { StudentUpdateInfo } from '@src/types/studentInterface';


export const studentDbRepository = (

    repository: ReturnType<StudentRepositoryMongoDB>


) => {
    
    const addStudent = async (student: StudentRegisterInterface) => 
    await repository.addStudent(student);
    
    const getStudent = async (id: string) => await repository.getStudent(id);

    const changePassword = async (id: string, password: string) =>
    await repository.changePassword(id, password);

    const getStudentByEmail = async (email: string) =>
    await repository.getStudentByEmail(email);
    
    const getStudentByPhoneNumber = async (phoneNumber: string) =>
    await repository.getStudentByPhoneNumber(phoneNumber);

    const updateProfile = async (id: string, studentInfo: StudentUpdateInfo) =>
    await repository.updateProfile(id, studentInfo);
    
      


    return {
        addStudent,
        getStudent,
        changePassword,
        getStudentByEmail,
        getStudentByPhoneNumber,
        updateProfile 
        
    };

}
export type StudentsDbInterface = typeof studentDbRepository;
