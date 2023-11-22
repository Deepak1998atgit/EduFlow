import express, { Request, Response } from 'express';
import Student from '../../src/frameworks/database/mongodb/models/student';
import Instructor from '../../src/frameworks/database/mongodb/models/instructor';

export const getUsers = async (req: Request, res: Response) => {
    const allStudents = await Student.find();
    console.log("kkkakkak")
    res.json(
        allStudents
    )
}

export const blockUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await Student.findOne({ email });
        if (user) {
            await Student.updateOne({ email }, { $set: { isBlocked:true }});
        }
        console.log(user);
       res.status(200).json({user})
    } catch (error) {
        console.log(error);
    }
}

export const unBlockUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await Student.findOne({ email });
        if (user) {
            await Student.updateOne({ email }, { $set: { isBlocked:false }});
        }
        console.log(user);
        res.status(200).json(
            user
        )
    } catch (error) {
        console.log(error);
    }
}

export const getTutors = async (req: Request, res: Response) => {
    try{
        const allTutors = await Instructor.find();
        console.log("jjjjj",allTutors,"llll")
        res.json(
            allTutors
        )
    }catch(error){
        console.log(error,"kkkkk")
    }
    
}

export const blockTutor = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await Instructor.findOne({ email });
        if (user) {
            await Instructor.updateOne({ email }, { $set: { isBlocked:true }});
        }
        console.log(user);
       res.status(200).json({user})
    } catch (error) {
        console.log(error);
    }
}

export const unBlockTutor = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await Instructor.findOne({ email });
        if (user) {
            await Instructor.updateOne({ email }, { $set: { isBlocked:false }});
        }
        console.log(user);
        res.status(200).json(
            user
        )
    } catch (error) {
        console.log(error);
    }
}