import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom';
import { Formik, Form, Field , ErrorMessage } from "formik";
import { instructorRegistrationValidationSchema } from "../../../validations/auth/InstructorRegisterValidation";
import { InstructorRegisterDataInterface } from "../../../api/types/instructor/auth-interface";
import { registerInstructor } from "../../../api/endpoints/auth/instructor-auth";
import { toast } from "react-toastify";
const initialValues = {
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    password: "",
    confirmPassword: "",
};

const InstructorRegistrationPage: React.FC = () => {
    const navigate=useNavigate();
    const handleSubmit = async (
        instructorInfo: InstructorRegisterDataInterface
      ) => {
        try {
            
          const response = await registerInstructor(instructorInfo);
          console.log("response on instr reg",response)
          toast.success(response?.data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          }); 
          navigate('/instructor-login');
          
        } catch (error: any) {
          console.log(error,"error on student login")
          toast.warning("Un Authorized");
        }
      };

  return (
    <div className="w-full h-screen flex item-start">
    <div className="relative w-1/2 h-full flex flex-col">
      <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?w=740&t=st=1699603068~exp=1699603668~hmac=705a6c88bcc020ab331b529b1cd303c6c8e2a6d95d877cbc20cc33ff2eaec322" className="w-full h-full object-cover" />
    </div>
    <div className="w-1/2 h-full  bg-[#fefffe] items-center flex flex-col py-7  justify-between">
      <Formik
        initialValues={initialValues}
        validationSchema={instructorRegistrationValidationSchema}
        onSubmit={handleSubmit}
      >

        <div className="w-full flex flex-col max-w-[400px]">
          <Form>
            <div className="w-full flex flex-col mb-2 ">
              <h3 className="text-3xl text-[#1a2f34] font-semibold mb-2">Sign UP</h3>
            </div>
div
            <div className="w-full flex  flex-col ">
            <Field
                name="name"
                type="text"
                placeholder="Name"
                autoComplete='name'
                required
                className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none" 
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
                className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none" 
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-red-500 text-sm'
              />
               <Field
                name="mobile"
                type="number"
                placeholder="Number"
                autoComplete='number'
                required
                className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none" 
              />
              <ErrorMessage
                name='mobile'
                component='div'
                className='text-red-500 text-sm'
              />
              <Field
                name="qualification"
                type="text"
                placeholder="Qualification"
                autoComplete='qualification'
                required
                className="w-full text-[#395A65] bg-transparent my-2 py-2 border-b border-[#1B2E35] outline-none focus:outline-none" 
              />
              <ErrorMessage
                name='qualification'
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
              <Field
                name="confirmPassword"
                type="password"
                placeholder="ConfirmPassword"
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
              <p className="text-sm text-[#1B2E35] font-medium whitespace-nowrap cursor-pointer underline undeline-offset-2">Forgot password?</p>

            </div>

            <div className="w-full flex flex-col my-4">
              <button type='submit' className="w-full my-3 front-semibold text-[#fefffe] bg-[#1a2f34] rounded-md p-3 text-center flex items-center justify-center">Sign UP</button>
              
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-[#1B2E35]">
              </div>
              <p className="absolute text-1g text-black/80  bg-[#fefffe]">or</p>
            </div>
            <div className="w-full flex items-center justify-center">
        <p className="text-sm my-3 font-normal text-black ">Do you have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer"> <NavLink to="/instructor-login">Sign In</NavLink></span> for free</p>
      </div>
            
          </Form>
        </div>
      </Formik>
      

    </div >
  </div >
  )
}

export default InstructorRegistrationPage;
