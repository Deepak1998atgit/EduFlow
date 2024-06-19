interface FileSchema {
    key: string;
    name: string
    url?: string;
}



export interface AddCourseInfoInterface {
    title: string;
    duration: number;
    category: string;
    level: string;
    tags: string[] | string;
    price: number;
    isPaid: boolean;
    about: string;
    description: string;
    syllabus: string[] | string;
    requirements: string[] | string;
    thumbnail: FileSchema;
    introduction: FileSchema;
    guidelines: FileSchema;
    instructorId: string;
    rating: number;
    isVerified: boolean;
}



export interface CourseInterface extends AddCourseInfoInterface {
    coursesEnrolled:Array<string>,
    thumbnailUrl:string,
    introductionUrl:string,
    guidelinesUrl:string;
}