import { useState } from 'react';
import SideBar from "@/components/common-components/student/profile/UserSideBar";
import UserProfileContainer from "@/components/common-components/student/profile/UserProfileContainer";
import ChangePassword from '@/components/common-components/student/profile/ChangePassword';
import Wallet from '@/components/common-components/student/profile/wallet';
import ChatPage from '@/components/common-components/chat/ChatPage';

const CourseCalendar = () => {
    const [isShowComponent,setIsShowComponent]=useState<Boolean>(true)
    const [selectedSideBarComponent, setSelectedSideBarComponent] = useState('profile');
    const handleComponentChange = (component: string) => {
        setSelectedSideBarComponent(component);
        setIsShowComponent(false);
    };
    return (
        <div className="min-h-screen flex   justify-center  md:block lg:block pt-28" >
            <div className="grid grid-cols-4 w-full overflow-y-hidden gap-6">
                <SideBar selectedComponent={selectedSideBarComponent} onComponentChange={handleComponentChange}  />
                {selectedSideBarComponent === "profile" && <UserProfileContainer isShowComponent={isShowComponent}/>}
                {selectedSideBarComponent === "changepassword" && <ChangePassword/>}
                {selectedSideBarComponent === "wallet" && <Wallet isShowComponent={isShowComponent}/>}
                {selectedSideBarComponent === "chat" && <ChatPage isShowComponent={isShowComponent}/>}
            </div>
        </div>
    );
};

export default CourseCalendar;
