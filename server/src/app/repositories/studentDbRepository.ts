import { StudentRepositoryMongoDB } from '../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import { StudentRegisterInterface } from '../../types/studentRegisterInterface';


export const studentDbRepository = (

    repository: ReturnType<StudentRepositoryMongoDB>


)=>{
    console.log("repo")

    const addStudent = async (student: StudentRegisterInterface) => 
    await repository.addStudent(student);

    const getStudentByEmail = async (email: string) =>
    await repository.getStudentByEmail(email);
      


    return {
        addStudent,
        getStudentByEmail
    };

}
export type StudentsDbInterface = typeof studentDbRepository;
