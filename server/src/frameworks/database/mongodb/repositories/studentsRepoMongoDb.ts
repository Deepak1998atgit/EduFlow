import { StudentRegisterInterface } from '../../../../types/studentRegisterInterface';
import { StudentInterface } from '../../../../types/studentInterface';
import Student from '../models/student';
import mongoose from 'mongoose';
import { StudentUpdateInfo } from '../../../../types/studentInterface';


export const studentRepositoryMongoDB = () => {


    const addStudent = async (student: StudentRegisterInterface) => {
        const newStudent = new Student(student);
        return await newStudent.save();
    };

    const getStudentByEmail = async (email: string) => {
        const user: StudentInterface | null = await Student.findOne({ email });
        return user;
    };


    const getStudent = async (id: string) => {
        const student: StudentInterface | null = await Student.findById({
            _id: new mongoose.Types.ObjectId(id)                              //Ensures that the provided id is converted into a valid MongoDB ObjectId.
        });
        return student;
    };


    const changePassword = async (id: string, password: string) => {
        await Student.updateOne(
            { _id: new mongoose.Types.ObjectId(id) },
            { password }
        );
    };

    const getStudentByPhoneNumber = async (number: string) => {
        const user: StudentInterface | null = await Student.findOne({ mobile: number });
        return user;
    };

    const updateProfile = async (id: string, studentInfo: StudentUpdateInfo) => {
        console.log("ok",studentInfo,"ok","id",id)
      const query=  await Student.updateOne(
            { _id:new mongoose.Types.ObjectId(id)},
            { ...studentInfo }
        );
        const student = await Student.find({_id: new mongoose.Types.ObjectId(id) })
       console.log(query,"uu", student,"ii");
    };


    return {
        addStudent,
        getStudentByEmail,
        getStudentByPhoneNumber,
        getStudent,
        changePassword,
        updateProfile
    };

}

export type StudentRepositoryMongoDB = typeof studentRepositoryMongoDB;
