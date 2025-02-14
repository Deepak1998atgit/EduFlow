import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { instructorLoginValidationSchema } from "../../../validations/auth/InstructorLoginValidation";
import { InstructorLoginInfo } from "../../../api/types/instructor/auth-interface";
import { loginInstructor } from "../../../api/endpoints/auth/instructor-auth";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { GoogleSignInByInstructor } from '@/components/common-components/googleAuth'; 
import { useDispatch, useSelector } from "react-redux";
import { selectUserType } from "../../../redux/reducers/authSlice";
import { selectIsLoggedIn } from "../../../redux/reducers/authSlice";
import { setToken } from "../../../redux/reducers/authSlice";

const InstructorLoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUserType)
    const handleSubmit = async (instructorInfo: InstructorLoginInfo) => {
        try {
            console.log("ok", instructorInfo)
            const response = await loginInstructor(instructorInfo);
            const { accessToken, refreshToken }: { accessToken: string, refreshToken: string } = response.data
            dispatch(setToken({ accessToken, refreshToken, userType: "instructor" }))
            console.log("ok", accessToken, "ok", refreshToken)
            toast.success(response?.data?.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            response && navigate('/instructor')
        } catch (error: any) {
            toast.error(error.data?.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };
    useEffect(() => {
        if (isLoggedIn && user === "instructor") {
            navigate("/instructor")
        }
    }, [])

    return (
        <div className="w-full h-screen  flex item-start overflow-hidden">
            <div className="relative w-1/2 h-full flex flex-col">
                <img src="https://img.freepik.com/free-vector/digital-presentation-concept-illustration_114360-8175.jpg?w=740&t=st=1699346079~exp=1699346679~hmac=76a5032728c90aaf18f6461d14366fba8c710b5e167d99f66c88eb2c42da1f38" className="w-full h-full object-cover" />
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
                            <GoogleSignInByInstructor />
                        </div>
                    </div>
                </Formik>
            </div >
        </div >
    )
}


export default InstructorLoginPage;