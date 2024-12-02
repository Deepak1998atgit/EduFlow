import mongoose, { Schema, model, Document } from 'mongoose';

interface ProfilePic {
  name: string;
  key?: string;
  url?: string;
}

interface IStudent extends Document {
  name: string;
  email: string;
  mobile?: number;
  profilePic: ProfilePic;
  password?: string;
  isBlocked?: boolean;
  
}

const ProfileSchema = new Schema<ProfilePic>({
  name: {
    type: String,
    required: true
  },
  key: {
    type: String
  },
  url: {
    type: String
  }
});


const studentSchema = new Schema<IStudent>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  mobile: {
    type: String,
    trim: true,
    // unique:true,
    sparse: true, // Allow multiple null values
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number']
  },
  profilePic: {
    type: ProfileSchema,
    required: false
  },
  password: {
    type: String,
    minlength: 8
  },
  isBlocked: {
    type: Boolean,
    default: false
  }
});

const Students = model<IStudent>('Students', studentSchema, 'students');

export default Students;

