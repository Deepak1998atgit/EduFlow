import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { googleLogin, googleLoginByInstructor } from "../../api/endpoints/auth/student-auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers/authSlice";



export const GoogleSignIn: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSignInWithGoogle = async (credential: string) => {
        console.log("google auth respose sign in")
        await googleLogin(credential)
            // .then((response: any) => {
            //     const {accessToken}: { accessToken: string } = response
            //     toast.success(response?.message, {
            //       position: toast.POSITION.TOP_RIGHT,
            //     });
            //     response.status==="success" && navigate ("/");
            //   })
            //   .catch((error:any) => {
            //     toast.error("Cannot found any user", {
            //       position: toast.POSITION.BOTTOM_RIGHT });
            //   });
            .then(async (response: any) => {
                console.log(response,"google auth res");
                const {
                    accessToken
                }: { accessToken: string } = response
                console.log("lllllllllllllllllllllllllll");
                console.log(accessToken,"access token from the google res")
                await dispatch(await setToken({ accessToken, userType: "student" }));
                toast.success(response?.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                console.log("google auth res")
                response.status === "success" && navigate("/");
            })
            .catch((error: any) => {
                toast.error("Un Authorized", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
    return (
        <>

            <GoogleLogin
                size='large'
                theme="filled_blue"
                logo_alignment="left"
                shape="pill"
                auto_select={false}
                type="standard"
                ux_mode="popup"
                onSuccess={credentialResponse => {
                    if (credentialResponse) {
                        handleSignInWithGoogle(credentialResponse.credential ?? "empty response");
                        console.log(credentialResponse, "res")
                    }

                }}
                onError={() => {
                    console.log('Login Failed');
                }}

            />


        </>
    );
}

export const GoogleSignInByInstructor: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSignInWithGoogle = (credential: string) => {
        googleLoginByInstructor(credential)
            .then((response: any) => {
                const {
                    accessToken
                }: { accessToken: string } = response
                dispatch(setToken({ accessToken, userType: "instructor" }));
                toast.success(response?.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                response.status === "success" && navigate("/instructor-home");
            })
            .catch((error: any) => {
                toast.error("Un Authorized", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
    return (
        <>

            <GoogleLogin
                size='large'
                theme="filled_blue"
                logo_alignment="left"
                shape="pill"
                auto_select={false}
                type="standard"
                ux_mode="popup"
                onSuccess={credentialResponse => {
                    if (credentialResponse) {
                        handleSignInWithGoogle(credentialResponse.credential ?? "empty response");
                        console.log(credentialResponse, "res")
                    }

                }}
                onError={() => {
                    console.log('Login Failed');
                }}

            />


        </>
    );
}



