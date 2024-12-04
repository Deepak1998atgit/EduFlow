import { useState } from 'react';
import SideBar from "@/components/common-components/student/profile/UserSideBar";
import UserProfileContainer from "@/components/common-components/student/profile/UserProfileContainer";
import ChangePassword from '@/components/common-components/student/profile/ChangePassword';
import Wallet from '@/components/common-components/student/profile/wallet';
import ChatPage from '@/components/common-components/chat/ChatPage';
import Quizzes from '../course-page/quiz-page';

const CourseCalendar = () => {
    const [isShowComponent,setIsShowComponent]=useState<Boolean>(true)
    const [selectedSideBarComponent, setSelectedSideBarComponent] = useState('profile');
    const handleComponentChange = (component: string) => {
        setSelectedSideBarComponent(component);
        setIsShowComponent(false);
    };
    const componentMap: Record<string, JSX.Element> = {
        profile: <UserProfileContainer isShowComponent={isShowComponent} />,
        changepassword: <ChangePassword />,
        wallet: <Wallet isShowComponent={isShowComponent} />,
        quiz: <Quizzes />,
        chat: <ChatPage isShowComponent={isShowComponent} />,
    };
    return (
        <div className="min-h-screen flex   justify-center  md:block lg:block pt-28" >
            <div className="grid grid-cols-4 w-full overflow-y-hidden gap-6">
                <SideBar selectedComponent={selectedSideBarComponent} onComponentChange={handleComponentChange}  />
                {componentMap[selectedSideBarComponent] || <UserProfileContainer isShowComponent={true} />}
            </div>
        </div>
    );
};

export default CourseCalendar;
