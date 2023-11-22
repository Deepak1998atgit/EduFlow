import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import {GoogleSignIn} from '../../common/googleAuth'
import { studentLoginValidationSchema } from "../../../validations/auth/studentLoginValidation";
import { loginStudent } from "../../../api/endpoints/auth/student-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const studentLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (studentInfo: any) => {
    try {
      console.log('hshshhsh')
      const response = await loginStudent(studentInfo);
      console.log(response, "login stu res");
      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/');
    } catch (error: any) {
      console.log("Error on the student Login:", error);
      if(error){
        console.log("khdhdhd")
      }
      toast.error("Un Authorized", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className="w-full h-screen flex item-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img src="https://img.freepik.com/free-vector/digital-presentation-concept-illustration_114360-8175.jpg?w=740&t=st=1699346079~exp=1699346679~hmac=76a5032728c90aaf18f6461d14366fba8c710b5e167d99f66c88eb2c42da1f38" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full  bg-[#fefffe]  items-center flex flex-col py-7  justify-between">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={studentLoginValidationSchema}
          onSubmit={handleSubmit}
        >
          <div className="w-full  flex flex-col max-w-[400px]">
            <Form>
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-3xl text-[#92468f] font-semibold mb-2">Login</h3>
              </div>
              <div className="w-full flex flex-col ">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete='email'
                  required
                  className="w-full text-[#395A65] bg-transparent my-4 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
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
                  className="w-full text-[#395A65] bg-transparent my-4 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
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
                <button type='submit' className="w-full my-2 front-semibold text-[#fefffe] bg-[#1B2E35] rounded-md p-4 text-center flex items-center justify-center">Log In</button>
                <NavLink to="/signup" className="w-full my-2 front-semibold  text-[#1B2E35] border-[#1B2E35] border bg-[#fefffe] rounded-md p-4 text-center flex items-center justify-center">Sign Up</NavLink>
              </div>

              <div className="w-full flex items-center justify-center relative py-2">
                <div className="w-full h-[1px] bg-[#1B2E35]">

                </div>
                <p className="absolute text-1g text-black/80  bg-[#fefffe]">or</p>
              </div>
              <div className="w-full my-2 front-semibold  text-[#060606] border-none cursor-pointer border-2 bg-white rounded-md p-4 text-center flex items-center justify-center">
                {/* <img src={GOOGLE_ICON} className='h-6 mr-2' /> */}
                <GoogleSignIn  />
              </div>
            </Form>
          </div>
        </Formik>


      </div >
    </div >

  )
}

export default studentLogin;
