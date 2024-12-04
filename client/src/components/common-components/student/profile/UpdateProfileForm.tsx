import React, { useState, useEffect } from "react";
import {
    Card,
    Typography,
    Input,
    CardHeader,
    CardBody,
    Button,
} from "@material-tailwind/react";
import * as Yup from "yup";
import { FaCameraRetro } from "react-icons/fa";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toast } from "react-toastify";
import {
    selectStudent,
    fetchStudentData,
} from "../../../../redux/reducers/studentSlice";
import { updateProfile } from "@/api/endpoints/student";

interface UpdateProfileInfo {
    email: string;
    name: string;
    mobile: string;
    profilePic?: File | null;
}

interface UpdateProfileCardProps {
    onToggle: () => void;
}

const UpdateProfileCard: React.FC<UpdateProfileCardProps> = ({ onToggle }) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const [updated, setUpdated] = useState(false);
    const studentInfo = useSelector(selectStudent)?.studentDetails;
    useEffect(() =>{
        dispatch(fetchStudentData());
      }, [updated]);
    const formik = useFormik<UpdateProfileInfo>({
        initialValues: {
            email: studentInfo?.email || "",
            name: studentInfo?.name || "",
            mobile: studentInfo?.mobile || "",
            profilePic: null,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            name: Yup.string()
                .min(2, "Name must be at least 2 characters")
                .max(50, "Name must not exceed 50 characters")
                .required("Name is required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
                .required("Mobile number is required"),
            profilePic: Yup.mixed().notRequired(),
        }),
        onSubmit: async (values) => {
            try {
                console.log("Submitted values:", values);
                const formData = new FormData();
                formData.append("email", values.email || "");
                formData.append("name", values.name || "");
                formData.append("mobile", values.mobile || "");
                if (values.profilePic) {
                    formData.append("image", values.profilePic || "");
                }
                const response = await updateProfile(formData);
                // formik.resetForm();
                setPreviewImage(null);
                setUpdated(!updated);
                toast.success(response?.data?.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            } catch (error: any) {
                console.error("Update error:", error);
                toast.error("Failed to update profile.", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
            formik.setFieldValue("profilePic", file);
        } else {
            setPreviewImage(null);
            formik.setFieldValue("profilePic", null);
        }
    };
    return (
        <Card className="lg:w-1/2 md:w-1/2 w-full h-fit">
            <form onSubmit={formik.handleSubmit}>
                <CardHeader className="bg-transparent shadow-none flex items-center justify-center relative">
                    <div className="relative cursor-pointer">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="Selected Profile"
                                className="h-40 w-40 rounded-full object-cover"
                            />
                        ) : studentInfo?.profilePic ? (
                            <img
                                src={studentInfo?.profilePic?.url}
                                alt="User Profile"
                                className="h-40 w-40 rounded-full object-cover"
                            />
                        ) : (
                            <label
                                htmlFor="file-upload"
                                className="h-40 w-40 flex items-center justify-center text-gray-500"
                            >
                                <FaCameraRetro className="h-12 w-12" />
                            </label>
                        )}
                    </div>
                    <label
                        htmlFor="file-upload"
                        className="absolute bottom-9 right-32 text-gray-600 text-2xl cursor-pointer"
                    >
                        <FaCameraRetro />
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                    </label>
                </CardHeader>
                <CardBody className="text-center flex flex-col gap-5">
                    <Input
                        label="Email"
                        name="email"
                        size="md"
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        value={formik?.values?.email}
                        className=" focus:outline-none focus:border-black"
                        crossOrigin="undefined"
                    />
                    {formik?.touched?.email && formik?.errors?.email && (
                        <Typography variant="small" color="red">
                            {formik.errors.email}
                        </Typography>
                    )}
                    <Input
                        label="Name"
                        size="md"
                        name="name"
                        value={formik?.values?.name}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        crossOrigin="undefined"
                        className=" focus:outline-none focus:border-black"
                        required
                    />
                    {formik?.touched?.name && formik?.errors?.name && (
                        <Typography variant="small" color="red">
                            {formik.errors.name}
                        </Typography>
                    )}
                    <Input
                        label="Phone"
                        size="md"
                        name="mobile"
                        value={formik?.values?.mobile}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        crossOrigin="undefined"
                        className=" focus:outline-none focus:border-black"
                        required
                    />
                    {formik?.touched?.mobile && formik?.errors?.mobile && (
                        <Typography variant="small" color="red">
                            {formik.errors.mobile}
                        </Typography>
                    )}
                    <Button
                        variant="gradient"
                        className="text-black bg-[#F48C06] mt-5 cursor-pointer bg-opacity-30"
                        type="submit"
                    >
                        Update
                    </Button>
                    <Button
                        type="button"
                        onClick={onToggle}
                        className="bg-white text-black"
                    >
                        Back to Profile
                    </Button>
                </CardBody>
            </form>
        </Card>
    );
};

export default UpdateProfileCard;


