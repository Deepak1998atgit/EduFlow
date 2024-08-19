import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import AppError from '../../../utils/appError';
import { CreateLessonInterface } from '../../../types/lesson';
import { CloudServiceInterface } from '../../services/cloudServiceInterface';
import { QuizDbInterface } from '../../repositories/quizDbRepository';
import { LessonDbRepositoryInterface } from '../../repositories/lessonDbRepository';
import * as ffprobePath from 'ffprobe-static';  // usefull for getting in to the ffmpeg as a probe
import ffmpeg from 'fluent-ffmpeg'; // This library is help us to make simply do with ffmpeg using javascript
import * as fs from 'fs';
export const addLessonsU = async (
  media: Express.Multer.File[] | undefined,
  courseId: string | undefined,
  instructorId: string | undefined,
  lesson: CreateLessonInterface,
  lessonDbRepository: ReturnType<LessonDbRepositoryInterface>,
  cloudService: ReturnType<CloudServiceInterface>,
  quizDbRepository: ReturnType<QuizDbInterface>
) => {
  if (!courseId) {
    throw new AppError(
      'Please provide a course id',
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (!instructorId) {
    throw new AppError(
      'Please provide an instructor id',
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (!lesson) {
    throw new AppError('Data is not provided', HttpStatusCodes.BAD_REQUEST);
  }

  if (media) {
    const videoFile = media[0];
    const tempFilePath = './temp_video.mp4';
    console.log("passing ...2")
    fs.writeFileSync(tempFilePath, videoFile.buffer);
    const getVideoDuration = () =>
      new Promise<string>((resolve, reject) => {
        ffmpeg(tempFilePath)
          .setFfprobePath(ffprobePath.path)
          .ffprobe((err: Error | null, data: any) => {
            fs.unlinkSync(tempFilePath);
            if (err) {
              console.error('Error while probing the video:', err);
              reject(err);
            }
            console.log("passing ...3",data.format,"end")
            const duration: string = data.format.duration;
            resolve(duration);
          });
      });

    try {
      const videoDuration = await getVideoDuration();
      console.log("duration ",videoDuration," dur")
      lesson.duration = parseFloat(videoDuration);
    } catch (error) {
      console.error('Error while getting video duration:', error);
    }
  }

  if (media) {
    lesson.media = await Promise.all(
      media.map(async (files) => await cloudService.upload(files))
    );
  }
  console.log("start repo")
  const lessonId = await lessonDbRepository.addLesson(
    courseId,
    instructorId,
    lesson
  );
  console.log("end repo repo",lessonId)
  if (!lessonId) {
    throw new AppError('Data is not provided', HttpStatusCodes.BAD_REQUEST);
  }
  const quiz = {
    courseId,
    lessonId: lessonId.toString(),
    questions: lesson.questions
  };
  await quizDbRepository.addQuiz(quiz);
};
