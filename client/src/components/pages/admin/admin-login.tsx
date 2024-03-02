import { Formik, Form, Field, ErrorMessage } from "formik";
import { studentLoginValidationSchema } from "../../../validations/auth/studentLoginValidation";
import {  AdminLoginInfo } from "../../../api/types/admin/admin-auth-interface";
import { loginAdmin } from "../../../api/endpoints/auth/administration-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const studentLogin = () => {
    const navigate = useNavigate();
    const handleSubmit = async (adminInfo: AdminLoginInfo) => {
        try {
          const response = await loginAdmin(adminInfo);
          console.log("adminres",response)
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/admin-dashboard");
        } catch (error: any) {
          toast.error('Un Authorized', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      };

    return (
        <div className="w-full h-screen flex item-start">
            <div className=" relative w-1/2 h-full flex flex-col">
                <img src="https://img.freepik.com/premium-vector/businessman-presenting-infographic_123727-46.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full mb-8   bg-[#fffefe] items-center flex flex-col py-7  justify-between">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={studentLoginValidationSchema}
                    onSubmit={handleSubmit}
                >
                    <div className="w-full flex  flex-col max-w-[400px]">
                        <Form>
                            <div className="w-full flex flex-col  ">
                                <h3 className="text-3xl text-[#134457]  font-semibold  mb-2">Login</h3>
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
                            <div className="w-full flex flex-col my-4">
                                <button type='submit' className="w-full my-2 front-semibold text-[#fefffe] bg-[#134457] rounded-md p-4 text-center flex items-center justify-center">Log In</button>           
                            </div>
                        </Form>
                    </div>
                </Formik>

            </div >
        </div >

    )
}

export default studentLogin;
