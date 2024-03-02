const END_POINTS = {
    LOGIN_STUDENT:'api/auth/student-login',
    REGISTER_STUDENT:'api/auth/student-register',
    REGISTER_INSTRUCTOR:'api/auth/instructor/instructor-register',
    LOGIN_INSTRUCTOR:'api/auth/instructor/instructor-login',
    LOGIN_ADMIN:'api/auth/admin/admin-login',
    GOOGLE_LOGIN_STUDENT:'api/auth/login-with-google',
    GOOGLE_LOGIN_INSTRUCTOR: 'api/auth/login-with-google-instructor',
    SEND_OTP: 'api/auth/forgot-password/send-otp',
    VERIFY_OTP: 'api/auth/forgot-password/verify-otp',
    CHANGE_PASSWORD_FORGOT: 'api/auth/forgot-password/change-password'
}

export default END_POINTS;
