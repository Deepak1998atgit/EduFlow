import { useState } from "react";
import { useFormik } from "formik";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Card, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { IoEyeOffSharp } from "react-icons/io5"; // Adjust icon imports as needed
import { toast } from "react-toastify";
import { PasswordInfo } from '@/api/types/student/student';
import { PasswordValidationSchema } from '@/validations/student';
import { changePassword } from "@/api/endpoints/student";


const ChangePasswordForm: React.FC = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleSubmit = async (passwordInfo: PasswordInfo) => {
        try {
              const response = await changePassword(passwordInfo);
              response?.data?.status === "success" && formik.resetForm();
              toast.success(response?.data?.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
        } catch (error: any) {
            toast.error(error?.data?.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
        },
        validationSchema: PasswordValidationSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    const togglePasswordVisibility = (field: string) => {
        switch (field) {
            case "currentPassword":
                setShowCurrentPassword(!showCurrentPassword);
                break;
            case "newPassword":
                setShowNewPassword(!showNewPassword);
                break;
            case "repeatPassword":
                setShowRepeatPassword(!showRepeatPassword);
                break;
            default:
                break;
        }
    };

    const getPasswordInputType = (field: string) => {
        switch (field) {
            case "currentPassword":
                return showCurrentPassword ? "text" : "password";
            case "newPassword":
                return showNewPassword ? "text" : "password";
            case "repeatPassword":
                return showRepeatPassword ? "text" : "password";
            default:
                return "password";
        }
    };

    return (
        <div className="flex col-span-4 md:col-span-4 lg:col-span-3  justify-center py-8">
            <Card className="w-full md:w-1/2 rounded-3xl h-fit">
                <CardBody className="p-6">
                    <Typography variant="h5" color="blue-gray" className="text-center">
                        Change Password
                    </Typography>
                    <form className="mt-6" onSubmit={formik.handleSubmit}>
                        <div className=" relative">
                            <label htmlFor="currentPassword" className="block text-sm">Current Password</label>
                            <Input
                                type={getPasswordInputType("currentPassword")}
                                name='currentPassword'
                                id='floating_current_password'
                                placeholder="Current password"
                                value={formik?.values?.currentPassword}
                                onChange={formik?.handleChange}
                                onBlur={formik?.handleBlur}
                                crossOrigin={undefined}
                                className={`focus:border-[#F48C06] ${formik.touched.currentPassword && formik.errors.currentPassword ? "!border-red-500" : "!border-[#F48C06]"}  rounded-full focus:outline-none`}
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-8"
                                onClick={() => togglePasswordVisibility("currentPassword")}
                            >
                                {showCurrentPassword ? <IoEyeOffSharp /> : <MdOutlineRemoveRedEye />}
                            </button>
                        </div>
                        {formik.touched.currentPassword && formik.errors.currentPassword && (
                            <div className='text-red-500 text-xs'>
                                {formik.errors.currentPassword}
                            </div>
                        )}
                        <div className=" relative">
                            <label htmlFor="confirmPassword" className="block text-sm">New Password</label>
                            <Input
                                name='newPassword'
                                type={getPasswordInputType("newPassword")}
                                id='floating_password'
                                placeholder="New password"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                crossOrigin={undefined}
                                className={`focus:border-[#F48C06] ${formik.touched.newPassword && formik.errors.newPassword ? "!border-red-500" : "!border-[#F48C06]"}  rounded-full focus:outline-none`}
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-8"
                                onClick={() => togglePasswordVisibility("newPassword")}
                            >
                                {showNewPassword ? <IoEyeOffSharp /> : <MdOutlineRemoveRedEye />}
                            </button>
                        </div>
                        {formik.touched.newPassword && formik.errors.newPassword && (
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.errors.newPassword}
                            </div>
                        )}
                        <div className=" relative">
                            <label htmlFor="confirmPassword" className="block text-sm">Confirm New Password</label>
                            <Input
                                type={getPasswordInputType("repeatPassword")}
                                name='repeatPassword'
                                id='floating_repeat_password'
                                value={formik.values.repeatPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                crossOrigin={undefined}
                                placeholder="Repeat Password"
                                className={`focus:border-[#F48C06] ${formik.touched.repeatPassword && formik.errors.repeatPassword ? "!border-red-500" : "!border-[#F48C06]"}  rounded-full focus:outline-none`}
                            />
                            {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                                <div className='text-red-500 text-xs mt-1'>
                                    {formik.errors.repeatPassword}
                                </div>
                            )}
                            <button
                                type="button"
                                className="absolute right-4 top-8"
                                onClick={() => togglePasswordVisibility("repeatPassword")}
                            >
                                {showRepeatPassword ? <IoEyeOffSharp /> : <MdOutlineRemoveRedEye />}
                            </button>
                        </div>
                        <CardFooter className="pt-0">
                            <Button
                                type="submit"
                                className="w-full mt-6 rounded-full bg-[#F48C06] bg-opacity-70"
                            >
                                Change Password
                            </Button>
                        </CardFooter>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}


export default ChangePasswordForm;