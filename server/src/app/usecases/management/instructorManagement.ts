import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import AppError from '../../../utils/appError';
import { NodeMailService } from '@src/frameworks/services/nodeMailservice';
import { InstructorDbInterface } from '@src/app/repositories/instructorDbRepository';
import { CloudServiceInterface } from '@src/app/services/cloudServiceInterface';
import { CourseDbRepositoryInterface } from '@src/app/repositories/courseDbRepository';
export const getAllInstructorRequests = async (
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const allRequests = await instructorRepository.getInstructorRequests();
  if (allRequests.length === 0) {
    return null;
  }
  return allRequests;
};

export const acceptInstructorRequest = async (
  instructorId: string,
  instructorRepository: ReturnType<InstructorDbInterface>,
  emailService: ReturnType<NodeMailService>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const response = await instructorRepository.acceptInstructorRequest(
    instructorId
  );
  if (response) {
    emailService.sendEmail(
      response.email,
      'Successfully verified your profile',
      'You are verified'
    );
  }
  return response;
};

export const rejectInstructorRequest = async (
  instructorId: string,
  reason: string,
  instructorRepository: ReturnType<InstructorDbInterface>,
  emailService: ReturnType<NodeMailService>
) => {
  if (!instructorId || !reason) {
    throw new AppError(
      'InstructorId or reason cannot be empty',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const rejected = await instructorRepository.checkRejected(instructorId);
  if (rejected) {
    throw new AppError(
      'Already rejected this request',
      HttpStatusCodes.CONFLICT
    );
  }
  const response = await instructorRepository.rejectInstructorRequest(
    instructorId,
    reason
  );
  if (response) {
    emailService.sendEmail(
      response.email,
      'Sorry your request is rejected',
      reason
    );
  }
  return response;
};

export const getAllInstructors = async (
  cloudService: ReturnType<CloudServiceInterface>,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const instructors = await instructorRepository.getAllInstructors();
  //   await Promise.all(
  //     instructors.map(async (instructor) => {
  //       if (instructor.profilePic) {
  //         instructor.profileUrl = await cloudService.getFile(
  //           instructor.profilePic.key ?? ''
  //         );
  //       }
  //     })
  //   );
  return instructors;
};

export const blockInstructors = async (
  instructorId: string,
  reason: string,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId || !reason) {
    throw new AppError(
      'Please provide instructor id and reason',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const response = await instructorRepository.blockInstructors(
    instructorId,
    reason
  );
  return response;
};

export const unblockInstructors = async (
  instructorId: string,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const response = await instructorRepository.unblockInstructors(instructorId);
  return response;
};

export const getBlockedInstructors = async (
  cloudService: ReturnType<CloudServiceInterface>,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const blockedInstructors = await instructorRepository.getBlockedInstructors();
  //   await Promise.all(
  //     blockedInstructors.map(async (instructor) => {
  //       if (instructor.profilePic) {
  //         instructor.profileUrl = await cloudService.getFile(
  //           instructor.profilePic.key ?? ''
  //         );
  //       }
  //     })
  //   );
  return blockedInstructors;
};

export const getInstructorByIdUseCase = async (
  instructorId: string,
  cloudService: ReturnType<CloudServiceInterface>,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const instructor = await instructorRepository.getInstructorById(instructorId);
  //   if (instructor?.profilePic.key) {
  //     const profilePic = await cloudService.getFile(instructor?.profilePic.key);
  //     instructor.profileUrl = profilePic;
  //   }
  if (instructor) {
    instructor.password = 'no password';
  }
  console.log(instructor,"get instr")
  return instructor;
};


export const getStudentsForInstructorsU = async (
  instructorId: string | undefined,
  cloudService: ReturnType<CloudServiceInterface>,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  if (!instructorId) {
    throw new AppError(
      'Please give a instructor id',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const students = await courseDbRepository.getStudentsByCourseForInstructor(
    instructorId
  );
  await Promise.all(
    students.map(async (student) => {
      if (student.profilePic && student.profilePic.key) {
        student.profileUrl = ""
        student.profileUrl = await cloudService.getFile(student.profilePic.key);
      }
    })
  );
  return students;
};