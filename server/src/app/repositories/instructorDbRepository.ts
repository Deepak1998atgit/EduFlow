import { InstructorRepositoryMongoDb } from '../../frameworks/database/mongodb/repositories/instructorRepoMongoDb';
import { InstructorInterface } from '../../types/instructorInterface';




export const instructorDbRepository = (
    repository: ReturnType<InstructorRepositoryMongoDb>
) => {


    const addInstructor = async (instructor: InstructorInterface) =>
    await repository.addInstructor(instructor);


    const getInstructorByEmail = async (email: string): Promise<InstructorInterface | null> =>
    await repository.getInstructorByEmail(email);

    return {
        addInstructor,
        getInstructorByEmail,
      
    };

}


export type InstructorDbInterface = typeof instructorDbRepository;