import React,{useEffect,useState}from 'react'
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { instructorLoginValidationSchema } from "../../../validations/auth/InstructorLoginValidation";
import { InstructorLoginInfo } from "../../../api/types/instructor/auth-interface";
import { loginInstructor } from "../../../api/endpoints/auth/instructor-auth";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {GoogleSignInByInstructor} from '../../common/googleAuth'
const InstructorLoginPage: React.FC = () => {
    const [isLogged,setIsLogged] =useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage?.getItem("accessToken");
        if (accessToken) {
          setIsLogged(true);
          navigate('/instructor-home');
        }
      }, [isLogged,navigate]);
    const handleSubmit = async (
        instructorInfo: InstructorLoginInfo
    ) => {
        try {

            const response = await loginInstructor(instructorInfo);
            console.log("response", response);
            toast.success(response?.data?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            navigate('/instructor-home');

        } catch (error: any) {

            toast.error("Un Authorized", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    };

    return (
        <div className="w-full h-screen  flex item-start overflow-hidden">
            <div className="relative w-1/2 h-full flex flex-col">
                <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?w=740&t=st=1699603068~exp=1699603668~hmac=705a6c88bcc020ab331b529b1cd303c6c8e2a6d95d877cbc20cc33ff2eaec322" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full my-12 bg-[#fefffe] items-center flex flex-col py-7  justify-between">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={instructorLoginValidationSchema}
                    onSubmit={handleSubmit}
                >

                    <div className="w-full flex flex-col max-w-[400px]">
                        <Form>
                            <div className="w-full flex flex-col mb-2 ">
                                <h3 className="text-3xl text-[#1a2f34] font-semibold mb-2">Log In</h3>
                            </div>

                            <div className="w-full flex flex-col ">

                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete='email'
                                    required
                                    className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="w-full flex items-end">

                                </div>
                            

                            </div>

                            <div className="w-full flex flex-col my-4">
                                <button type='submit' className="w-full my-4 front-semibold text-[#fefffe] bg-[#1a2f34] rounded-md p-4 text-center flex items-center justify-center">Log In</button>

                            </div>

                            <div className="w-full flex items-center justify-center relative py-2">
                                <div className="w-full h-[1px] bg-[#1B2E35]">
                                </div>
                                <p className="absolute text-1g text-black/80  bg-[#fefffe]">or</p>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <p className="text-sm my-3 font-normal text-black ">Do you have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer"> <NavLink to="/instructor-register">Sign Up</NavLink></span> for free</p>
                            </div>

                        </Form>
                        <div className='mx-16'>
                        <GoogleSignInByInstructor/>
                        </div>
                    </div>
                </Formik>
                

            </div >
        </div >
    )
}


export default InstructorLoginPage;