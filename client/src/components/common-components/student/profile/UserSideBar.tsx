import { Card, Typography, List, ListItem, ListItemPrefix, CardBody } from "@material-tailwind/react";
import { AiFillProfile } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHeartbeat, FaWallet } from "react-icons/fa";
import { MdNotificationsActive, MdMarkUnreadChatAlt, MdLiveTv, MdDashboardCustomize } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { useState } from "react";

interface SidebarProps {
    selectedComponent: string;
    onComponentChange: (component: string) => void;
}

export default function SideBar({ selectedComponent, onComponentChange }: SidebarProps) {
    const [isSideBarShow, setIsSideBarShow] = useState<Boolean>(true);  
    const [selectedSideBarOption, setSelectedSideBarOption] = useState<string>("profile");
    const selectSideBar = (option: string) => {
        onComponentChange(option);
        setIsSideBarShow(false);
        setSelectedSideBarOption(option);
    };
    const sideBarOptions = [
        { id: 'profile', label: 'Profile', icon: <AiFillProfile />, color: 'bg-[#49BBBD]' },
        { id: 'changepassword', label: 'Change Password', icon: <RiLockPasswordFill />, color: 'bg-[#F48C06]' },
        { id: 'favourites', label: 'Favourites', icon: <FaHeartbeat />, color: 'bg-[#9DCCFF]' },
        { id: 'quiz', label: 'Quiz', icon: <TbBrandBooking />, color: 'bg-[#EE645B]' },
        { id: 'wallet', label: 'Wallet', icon: <FaWallet />, color: 'bg-[#49BBBD]' },
        { id: 'notifications', label: 'Notifications', icon: <MdNotificationsActive />, color: 'bg-[#F48C06]' },
        { id: 'chat', label: 'Chat', icon: <MdMarkUnreadChatAlt />, color: 'bg-[#9DCCFF]' },
        { id: 'live', label: 'Live', icon: <MdLiveTv />, color: 'bg-[#49BBBD]' }
    ];
    const renderSidebarList = () => (
        <List className="gap-y-1">
            {sideBarOptions.map(option =>(
                <ListItem key={option.id}
                    className={`${selectedSideBarOption === option.id ? "bg-opacity-100" : "bg-opacity-30"} ${option.color}`}
                    onClick={() => selectSideBar(option.id)}>
                    <ListItemPrefix>
                        <Typography variant="small" color="blue-gray">
                            {option.icon}
                        </Typography>
                    </ListItemPrefix>
                    {option.label}
                </ListItem>
            ))}
        </List>
    );
    return (
        <>
            {isSideBarShow ? (
                <Card className="lg:col-span-1 col-span-4 md:col-span-4 min-h-screen">
                    <CardBody className="flex items-center space-x-2">
                        <Typography variant="lead" className="text-lg">
                            <MdDashboardCustomize />
                        </Typography>
                        <Typography variant="lead">Dashboard</Typography>
                    </CardBody>
                    {renderSidebarList()}
                </Card>
            ) : (
                <Card className="hidden md:hidden sm:hidden lg:block lg:col-span-1 min-h-screen">
                    <CardBody className="flex items-center space-x-2">
                        <Typography variant="lead" className="text-lg">
                            <MdDashboardCustomize />
                        </Typography>
                        <Typography variant="lead">Dashboard</Typography>
                    </CardBody>
                    {renderSidebarList()}
                </Card>
            )}
        </>
    );
}
