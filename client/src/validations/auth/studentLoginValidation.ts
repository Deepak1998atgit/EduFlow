import * as Yup from "yup";
export const studentLoginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is requireduu"),
    password: Yup.string().required("Password is required"),
});