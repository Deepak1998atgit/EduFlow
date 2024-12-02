import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GoogleSignIn } from '@/components/common-components/googleAuth';
import { studentLoginValidationSchema } from "../../../validations/auth/studentLoginValidation";
import { loginStudent } from "../../../api/endpoints/auth/student-auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from '../../../redux/reducers/authSlice';
import { AxiosResponse } from 'axios';
const studentLogin = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    const accessToken = localStorage?.getItem("accessToken");
    if (accessToken) {
      setIsLogged(true);
      navigate('/');
    }
  }, [isLogged, navigate]);
  const handleSubmit = async (studentInfo: any) => {
    try {
      const response: AxiosResponse<any> = await loginStudent(studentInfo);
      const responseData = response.data || {};

      const {
        accessToken,refreshToken
      }: { accessToken?: string ,refreshToken:string  } = responseData;
      console.log(accessToken, "access token from the google res")
      if (accessToken) {
        await dispatch(await setToken({ accessToken,refreshToken, userType: "student" }));
        toast.success(response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/');
      }
    } catch (error: any) {
      console.log("Error on the student Login:", error);
      if (error) {
        console.log("khdhdhd")
      }
      toast.error("Un Authorized", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      {
        isLogged ? false : (<div className="w-full h-screen  item-start grid grid-cols-1 md:grid-cols-6">
          <div className="relative  h-full flex flex-col col-span-3">
            <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?w=740&t=st=1699603068~exp=1699603668~hmac=705a6c88bcc020ab331b529b1cd303c6c8e2a6d95d877cbc20cc33ff2eaec322" className="w-full h-full object-cover" />
          </div>
          <div className="h-full  bg-[#fefffe] col-span-3  items-center flex flex-col py-7  justify-between">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={studentLoginValidationSchema}
              onSubmit={handleSubmit}
            >
              <div className="w-full  flex flex-col max-w-[400px]">
                <Form>
                  <div className="w-full flex flex-col mb-2">
                    <h3 className="text-3xl text-black font-semibold mb-2">Login</h3>
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
                    <NavLink to='/forgot-password' className="text-sm text-[#1B2E35] font-medium whitespace-nowrap cursor-pointer underline undeline-offset-2">Forgot password?</NavLink>
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
                    <GoogleSignIn />
                  </div>
                </Form>
              </div>
            </Formik>
          </div >
        </div >)
      }
    </>

  )
}

export default studentLogin;
