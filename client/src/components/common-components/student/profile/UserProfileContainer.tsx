import { useState } from "react";
import ProfileCard from "./ProfileCard";
import UpdateProfileCard from "./UpdateProfileForm";

export default function UserProfileContainer({isShowComponent}:{isShowComponent:Boolean}) {
    const [isUpdateProfileCardShow, setUpdateProfileCardShow] = useState<boolean>(false);
    console.log("helo",isUpdateProfileCardShow); // Add this in render to check the state
    const handleToggle = () => {
        setUpdateProfileCardShow(prevState => !prevState);
    };
    return (
        <div className="col-span-4 md:col-span-4 lg:col-span-3 relative p-6 flex justify-center">
            {isUpdateProfileCardShow ? (
                <UpdateProfileCard onToggle={handleToggle} />
            ) : (
                <ProfileCard onToggle={handleToggle} isShowComponent={isShowComponent} />
            )}
            {/* <ProfileCard onToggle={handleToggle} isShowComponent={isShowComponent} /> */}
        </div>
    );
}
