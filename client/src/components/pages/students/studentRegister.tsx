import { Formik, Form, Field, ErrorMessage } from "formik";
import {studentRegistrationValidationSchema} from "../../../validations/auth/studentRegisterValidation";
import { registerStudent } from "../../../api/endpoints/auth/student-auth";
import { useNavigate,Link} from "react-router-dom";
import { toast } from "react-toastify";
const studentRegister = () => {
    const navigate=useNavigate();
    const handleSubmit = async (studentInfo: any) => {
        try {
            console.log("my response");
            const response = await registerStudent(studentInfo);
            console.log(response,"my response");
            toast.success(response?.data?.message, {
                position: toast.POSITION.TOP_RIGHT,
              }); 
              navigate('/login');
    
        } catch (error: any) {
           toast.error(error?.data?.message, {
             position: toast.POSITION.BOTTOM_RIGHT,
            });
            console.log("Error on the student Regitration:",error);
        }
    };

    return (
        <div className="w-full h-screen flex item-start">
            <div className="relative w-1/2 h-full flex flex-col">
                <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?w=740&t=st=1699603068~exp=1699603668~hmac=705a6c88bcc020ab331b529b1cd303c6c8e2a6d95d877cbc20cc33ff2eaec322" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full  bg-[#fefffe] items-center flex flex-col py-7  justify-between">
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    validationSchema={studentRegistrationValidationSchema}
                    onSubmit={handleSubmit}
                >

                    <div className="w-full  flex flex-col max-w-[400px]">
                        <Form>
                            <div className="w-full flex flex-col  ">
                                <h3 className="text-3xl text-black font-semibold ">Sign UP</h3>
                                {/* <p className="text-base  text-[#1B2E35]">welcome Back! Please enter your deatils</p> */}
                            </div>
                            <div className="w-full flex flex-col ">
                                <Field
                                    name="name"
                                    type="name"
                                    placeholder="Name"
                                    autoComplete='name'
                                    required
                                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='name'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete='email'
                                    required
                                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                                <Field
                                    name="mobile"
                                    type="number"
                                    placeholder="Phone"
                                    autoComplete='mobile'
                                    required
                                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='mobile'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />

                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="confirmPassword"
                                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                                />
                                <ErrorMessage
                                    name='confirmPassword'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />

                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="w-full flex items-end">

                                </div>
                            </div>

                            <div className="w-full flex flex-col my-4">
                                <button type='submit' onSubmit={handleSubmit} className="w-full my-2 front-semibold  text-[#1B2E35] border-[#1B2E35] border bg-[#fefffe] rounded-md p-4 text-center flex items-center justify-center">Sign UP</button>
                            </div>

                            <div className="w-full flex items-center mb-2 justify-center relative py-2">
                                <div className="w-full h-[1px] bg-[#1B2E35]">

                                </div>
                                <p className="absolute text-1g text-black/80  bg-[#fefffe]">or</p>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <p className="text-sm font-normal text-black ">Already have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer"><Link to="/login">Sign In</Link></span> for free</p>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div >
        </div >
    );
}

export default studentRegister;