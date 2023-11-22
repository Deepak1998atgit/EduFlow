import { StudentRegisterInterface } from '../../../../types/studentRegisterInterface';
import { StudentInterface  } from '../../../../types/studentInterface';
import Student from '../models/student';


export const studentRepositoryMongoDB = () => {
   console.log("jjjjjstudentRepositoryMongoDB")

    const addStudent = async (student: StudentRegisterInterface) => {
        const newStudent = new Student(student);
        return await newStudent.save();
    };

    const getStudentByEmail = async (email: string) => {
        const user: StudentInterface | null = await Student.findOne({ email });
        return user;
    };

    return {
        addStudent,
        getStudentByEmail
    };

}

export type StudentRepositoryMongoDB = typeof studentRepositoryMongoDB;
