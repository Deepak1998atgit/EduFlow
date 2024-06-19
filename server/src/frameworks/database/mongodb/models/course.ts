import mongoose, { Schema, model } from 'mongoose';
import { AddCourseInfoInterface } from '../../../../types/courseInterface';

const FileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  url: {
    type: String
  }
});

const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100
    },
    // instructorId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
    duration: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    price: {
      type: Number,
      required: function (this: AddCourseInfoInterface) {
        return this.isPaid;
      },
      min: 0,
    },
    isPaid: {
      type: Boolean,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      minlength: 10
    },
    syllabus: {
      type: [String],
      required: true
    },
    requirements: {
      type: [String]
    },
    thumbnail: {
      type: FileSchema,
      required: true
    },
    thumbnailUrl: {
      type: String,
      default: ''
    },
    guidelines: {
      type: FileSchema,
      required: true
    },
    guidelinesUrl: {
      type: String,
      default: ''
    },
    introduction: {
      type: FileSchema,
      // required: true
    },
    coursesEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students'
      }
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    completionStatus: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    }
});

const Course = model('Course', courseSchema, 'course');
export default Course;







// title: Title of the course.
// instructorId: The ID of the instructor who created the course.
// duration: Duration of the course in hours.
// category: Category of the course (e.g., programming, design, business).
// level: Difficulty level of the course (e.g., beginner, intermediate, advanced).
// tags: Array of tags associated with the course.
// price: Price of the course. It is required only if the course is paid (isPaid is true).
// isPaid: Boolean indicating whether the course is paid or not.
// about: Brief description or summary of the course.
// description: Detailed description of the course.
// syllabus: Array of strings representing the course syllabus.
// requirements: Array of strings representing the requirements for the course.
// thumbnail: Thumbnail image of the course.
// thumbnailUrl: URL of the thumbnail image.
// guidelines: Guidelines document for the course.
// guidelinesUrl: URL of the guidelines document.
// introduction: Introduction video or document for the course.
// coursesEnrolled: Array of student IDs who have enrolled in the course.
// rating: Rating of the course (0 to 5).
// isVerified: Boolean indicating whether the course is verified or not.
// createdAt: Timestamp indicating when the course was created.
// completionStatus: Percentage completion status of the course.