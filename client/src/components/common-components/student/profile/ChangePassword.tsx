import { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Card, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { IoEyeOffSharp } from "react-icons/io5"; // Adjust icon imports as needed

export default function ChangePassword() {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNewPasswordChange = (evnt: any) => {
        setNewPassword(evnt.target.value);
    };
    const handleConfirmPasswordChange = (evnt: any) => {
        setConfirmPassword(evnt.target.value);
    };
    const toggleNewPassword = () => {
        setPasswordType(prev => (prev === "password" ? "text" : "password"));
    };
    const toggleConfirmPassword = () => {
        setConfirmPasswordType(prev => (prev === "password" ? "text" : "password"));
    };
    return (
        <div className="flex col-span-3  justify-center py-8">
            <Card className="w-1/2 rounded-3xl h-fit">
                <CardBody className="p-6">
                    <Typography variant="h5" color="blue-gray" className="text-center">
                        Change Password
                    </Typography>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-sm">Current Password</label>
                            <Input
                                id="newPassword"
                                type={passwordType}
                                placeholder="Current password"
                                crossOrigin="anonymous"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="focus:border-[#F48C06] rounded-full focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-sm">New Password</label>
                            <Input
                                id="newPassword"
                                type={passwordType}
                                placeholder="New password"
                                crossOrigin="anonymous"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="focus:border-[#F48C06] rounded-full focus:outline-none"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="confirmPassword" className="block text-sm">Confirm Password</label>
                            <Input
                                id="confirmPassword"
                                type={confirmPasswordType}
                                placeholder="Confirm your password"
                                crossOrigin="anonymous"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="focus:border-[#F48C06] rounded-full focus:outline-none"
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-8"
                                onClick={toggleConfirmPassword}
                            >
                                {confirmPasswordType === "password" ? <IoEyeOffSharp /> : <MdOutlineRemoveRedEye />}
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
