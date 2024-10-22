import { Card, Typography, Input, CardHeader, CardBody, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
interface FormInputs {
    name: string;
    phone: string | undefined;
}
interface User {
    email?: string;
    imageUrl?: string;
    name?: string;
    phone?: string;
}
// interface UpdateProfileCardProps {
//     isTrue: boolean;
//     onToggle: () => void;
//     user: User; // Expect user object as a prop
// }
interface UpdateProfileCardProps {
    onToggle: () => void;
}
const UpdateProfileCard: React.FC<UpdateProfileCardProps> = ({ onToggle }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const user = {
        name: "John",
        phone: "9067554747",
        imageUrl: "https:hdgggdgdg.jpg",
        email: "johndoe@gamil.com"
    }
    const [inputs, setInputs] = useState<FormInputs>({
        name: user?.name || "John",
        phone: user?.phone || "9074005626",
    });
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [file, setFile] = useState<File | undefined>(undefined);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validation
        if (inputs.name.length === 0) {
            setNameError("Name is required");
            return;
        }
        if (!/^[A-Za-z\s]+$/i.test(inputs.name)) {
            setNameError("Enter a valid name");
            return;
        }
        if (inputs.phone?.length === 0) {
            setPhoneError("Phone is required");
            return;
        }
        if (!/^[0-9]+$/u.test(inputs.phone!)) {
            setPhoneError("Enter a valid Phone");
            return;
        }
        // Submit form data
        const formData = new FormData();
        formData.append("name", inputs.name);
        if (inputs.phone) {
            formData.append("phone", inputs.phone.toString());
        }
        if (file) {
            formData.append("image", file, file.name);
        }
        console.log("Submitting form data:", formData);

        // Reset form or any other action after submission
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    return (
        <Card className="lg:w-1/2 md:w-1/2 w-full h-fit" >
            <form onSubmit={handleSubmit}>
                <CardHeader className="bg-transparent shadow-none flex items-center justify-center relative">
                    {previewUrl ? (
                        <div onClick={() => document.getElementById('file-upload')?.click()} className="relative">
                            <img
                                src={previewUrl}
                                alt="Selected Profile"
                                className="h-40 w-40 rounded-full cursor-pointer"
                            />
                        </div>
                    ) : user?.imageUrl ? (
                        <div onClick={() => document.getElementById('file-upload')?.click()} className="relative">
                            <img
                                src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
                                alt="User Profile"
                                className="h-40 w-40 rounded-full cursor-pointer"
                            />
                        </div>
                    ) : (
                        <label htmlFor="file-upload" className="cursor-pointer h-40 w-40 flex items-center justify-center inline-block text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </label>
                    )}
                    <FaCameraRetro className="absolute bottom-9 right-32 text-gray-600 text-2xl cursor-pointer" />
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                const file = e.target.files[0];
                                setFile(file);
                                setPreviewUrl(URL.createObjectURL(file));
                            }
                        }}
                    />
                </CardHeader>
                <CardBody className="text-center flex flex-col gap-4">
                    {user?.email && (
                        <Input
                            label="Email"
                            disabled
                            size="md"
                            value={user.email}
                            onChange={() => { }} // No-op for disabled input
                            crossOrigin="undefined"
                        />
                    )}
                    <Input
                        label="Name"
                        size="md"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        crossOrigin="undefined"
                    />
                    {nameError && (
                        <p className="text-red-500 text-sm">{nameError}</p>
                    )}
                    <Input
                        label="Phone"
                        size="md"
                        name="phone"
                        value={inputs.phone}
                        onChange={handleInputChange}
                        crossOrigin="undefined"
                    />
                    {phoneError && (
                        <p className="text-red-500 text-sm">{phoneError}</p>
                    )}
                    <Button
                        variant="gradient"
                        className="text-black bg-[#F48C06] bg-opacity-30"
                        fullWidth
                        type="submit"
                    >
                        Update
                    </Button>
                    <button onClick={onToggle}>Back To Profile</button>
                </CardBody>
            </form>
        </Card>
    );
};

export default UpdateProfileCard;

