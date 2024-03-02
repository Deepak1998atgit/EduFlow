import React,{ useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  studentMobilesenOnOtp,
  studentPasswordChaneValidationSchema,
} from "../../../validations/auth/studentRegisterValidation";
import { sendOtp,verifyOtp,changePasswordAfterForgot} from "../../../api/endpoints/auth/student-auth";
import {Link } from "react-router-dom";
import { toast } from "react-toastify";
interface OtpResponse {
  message: string;
  otpStatus?: string;
  phoneNumber?: number;
  status: string;
}
const StudentForgotPassword = () => {
  const [otp, setOtp] = useState<string>('');
  

  //Handle Otp Submit
  const handleSendOtpSubmit = async (data: { mobile: string }) => {
    try {
      console.log(data, "get mobile");
      const response:OtpResponse = await sendOtp(data.mobile);
   
      if (response) {
        const  stringifySendOtpResponse= JSON.stringify(response);
        localStorage.setItem('sendOtpcredentials', stringifySendOtpResponse);
        toast.success(`Otp Sent to ${response?.phoneNumber}`, {
         position: toast.POSITION.TOP_RIGHT,
        });
      }
      console.log(response, "res");
    } catch (error: any) {
      console.log(error?.data?.message, "res");
      toast.error(`${error?.data?.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };


  // Change handler function to update the OTP state variable
  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  //Handle Verification of OTP Submit
  const handleVerifyOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const sendOtpcredentialsStringified: string | null = localStorage.getItem('sendOtpcredentials');
      if (sendOtpcredentialsStringified) {
        const otpDetails = JSON.parse(sendOtpcredentialsStringified);
        console.log("otp", otpDetails?.phoneNumber);
        const response = await verifyOtp(otp, otpDetails?.phoneNumber)
        if(response?.status==="success"){
          toast.success(`Otp Verified on ${otpDetails?.phoneNumber}`, {
            position: toast.POSITION.TOP_RIGHT,
           });
        }
      }
    } catch (error: any) {
      console.log(error?.data?.message, "res");
      toast.error(`${error?.data?.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };


  //Handle to send new password
  const handleSendNewPassword = async ({password}:{password:string}) => {
    try {
      console.log("uusuuu")
      const sendOtpcredentialsStringified: string | null = localStorage.getItem('sendOtpcredentials');
      if (sendOtpcredentialsStringified){
        const otpDetails = JSON.parse(sendOtpcredentialsStringified);
        console.log("otp", otpDetails);
        if (otpDetails?.otpStatus === "pending") {
          const response = await changePasswordAfterForgot(password, otpDetails?.phoneNumber);
          if(response?.status === "success") {
            localStorage.removeItem('sendOtpcredentials');
            toast.success(response?.message, {
              position: toast.POSITION.TOP_RIGHT,
             });
          }
        } else {
          console.log("uusuuu")
          toast.warning("Please Send OTP", {
            position: toast.POSITION.TOP_RIGHT,
           }); 
        }
      }else {
        console.log("uusuuu")
        toast.warning("Please Send OTP", {
          position: toast.POSITION.TOP_RIGHT,
         }); 
      }
    } catch (error: any) {
      console.log(error?.data?.message, "res");
      toast.error(`${error?.data?.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  
  return (
    <>
      <div className="max-w-screen h-screen overflow-x-hidden">
        <div className="mx-28 w-screen h-screen overflow-x-hidden  flex flex-col lg:flex-row  item-start">
          <div className="w-1/2 h-full flex flex-col">
            <img
              src="https://img.freepik.com/free-vector/digital-presentation-concept-illustration_114360-8175.jpg?w=740&t=st=1699346079~exp=1699346679~hmac=76a5032728c90aaf18f6461d14366fba8c710b5e167d99f66c88eb2c42da1f38"
              className=" w-full object-cover hidden sm:block"
            />
          </div>
          <div className="w-full md:w-1/2   h-full bg-[#fefffe]  items-center ml-24 justify-between">
            <Formik
              initialValues={{ mobile: "" }}
              validationSchema={studentMobilesenOnOtp}
              onSubmit={handleSendOtpSubmit}
            >
              <Form>
                <div className="w-full  mt-12 max-w-[400px]">
                  <div className="w-full flex flex-col mb-0">
                    <h3 className="text-3xl text-[#92468f] font-semibold ">
                      Forgot Password
                    </h3>
                  </div>
                  <div className="w-full flex flex-col">
                    <Field
                      name="mobile"
                      type="number"
                      placeholder="Phone"
                      autoComplete
                      required
                      className="w-full text-[#395A65] appearance-none bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                    <div className="w-full flex flex-col my-4">
                      <button
                        type="submit"
                        className="w-full my-1 front-semibold text-[#1B2E35] border-[#1B2E35] border bg-[#fefffe] rounded-md p-4 text-center flex items-center justify-center"
                      >
                        Send OTP
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
            <form onSubmit={handleVerifyOtpSubmit}>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                className="w-full ml-2 text-[#395A65] max-w-[400px] bg-transparent mb-1  border-b border-[#1B2E35] outline-none focus:outline-none"
              />
              <button
                type="submit"
                className="w-full max-w-[400px] ml-2 my-2 front-semibold text-[#1B2E35] border-[#1B2E35] border bg-[#fefffe] rounded-md p-4 text-center flex items-center justify-center"
              >
                Verify OTP
              </button>
            </form>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={studentPasswordChaneValidationSchema}
              onSubmit={handleSendNewPassword}
            >
              <Form>
                <div className="w-full mt-0 max-w-[400px]">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full text-[#395A65] bg-transparent mb-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="confirmPassword"
                    className="w-full text-[#395A65] bg-transparent my-1 py-4 border-b border-[#1B2E35] outline-none focus:outline-none"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-end"></div>
                  </div>

                  <div className="w-full flex flex-col my-4">
                    <button
                      type="submit"
                      className="w-full my-2 front-semibold  text-[#1B2E35] border-[#1B2E35] border bg-[#fefffe] rounded-md p-4 text-center flex items-center justify-center"
                    >
                      Submit
                    </button>
                  </div>

                  <div className="w-full flex items-center mb-2 justify-center relative py-2">
                    <div className="w-full h-[1px] bg-[#1B2E35]"></div>
                    <p className="absolute text-1g text-black/80  bg-[#fefffe]">
                      or
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal text-black ">
                      Already have an account?{" "}
                      <span className="font-semibold underline underline-offset-2 cursor-pointer">
                        <Link to="/login">Sign In</Link>
                      </span>{" "}
                      for free
                    </p>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForgotPassword;
