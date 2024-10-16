import { Card, Typography, List, Input, ListItem, ListItemPrefix, CardBody, Button } from "@material-tailwind/react";
import { AiFillProfile } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { useState } from "react";
interface SidebarProps {
    selectedComponent: string;
    onComponentChange: (component: string) => void;
}
export default function SideBar({ selectedComponent, onComponentChange }: SidebarProps) {
    const [isSideBarShow, setIsSideBarShow] = useState<Boolean>(true)
    const selectSideBar = (option: string) => {
        onComponentChange(option)
        setIsSideBarShow(false)
    }
    return (
        <>
            {
                isSideBarShow ? (
                    <Card className="lg:col-span-1 col-span-4 md:col-span-4  min-h-screen">
                        <CardBody className="flex items-center space-x-2">
                            <Typography variant="lead" className="text-lg">
                                <MdDashboardCustomize />
                            </Typography>
                            <Typography variant="lead" className="">
                                Dashboard
                            </Typography>
                        </CardBody>
                        <List className="gap-y-1">
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('profile')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><AiFillProfile /></Typography>
                                </ListItemPrefix>
                                Profle
                            </ListItem>
                            <ListItem className="bg-[#F48C06] bg-opacity-30"
                                onClick={() => selectSideBar('changepassword')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><RiLockPasswordFill /></Typography>
                                </ListItemPrefix>
                                Change Password
                            </ListItem>
                            <ListItem className="bg-[#9DCCFF] bg-opacity-30"
                                onClick={() => selectSideBar('favourites')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><FaHeartbeat /></Typography>
                                </ListItemPrefix>
                                Favourites
                            </ListItem>
                            <ListItem className="bg-[#EE645B] bg-opacity-30"
                                onClick={() => selectSideBar('bookingdetails')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><TbBrandBooking /></Typography>
                                </ListItemPrefix>
                                Booking Details
                            </ListItem>
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('wallet')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><FaWallet /></Typography>
                                </ListItemPrefix>
                                Wallet
                            </ListItem>
                            <ListItem className="bg-[#F48C06] bg-opacity-30"
                                onClick={() => selectSideBar('notifications')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdNotificationsActive /></Typography>
                                </ListItemPrefix>
                                Notifications
                            </ListItem>
                            <ListItem className="bg-[#9DCCFF] bg-opacity-30"
                                onClick={() => selectSideBar('chat')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdMarkUnreadChatAlt /></Typography>
                                </ListItemPrefix>
                                Chat
                            </ListItem>
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('live')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdLiveTv /></Typography>
                                </ListItemPrefix>
                                Live
                            </ListItem>
                        </List>
                    </Card>
                ):(
                    <Card className="hidden md:hidden sm:hidden lg:block lg:col-span-1   min-h-screen">
                        <CardBody className="flex items-center space-x-2">
                            <Typography variant="lead" className="text-lg">
                                <MdDashboardCustomize />
                            </Typography>
                            <Typography variant="lead" className="">
                                Dashboard
                            </Typography>
                        </CardBody>
                        <List className="gap-y-1">
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('profile')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><AiFillProfile /></Typography>
                                </ListItemPrefix>
                                Profle
                            </ListItem>
                            <ListItem className="bg-[#F48C06] bg-opacity-30"
                                onClick={() => selectSideBar('changepassword')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><RiLockPasswordFill /></Typography>
                                </ListItemPrefix>
                                Change Password
                            </ListItem>
                            <ListItem className="bg-[#9DCCFF] bg-opacity-30"
                                onClick={() => selectSideBar('favourites')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><FaHeartbeat /></Typography>
                                </ListItemPrefix>
                                Favourites
                            </ListItem>
                            <ListItem className="bg-[#EE645B] bg-opacity-30"
                                onClick={() => selectSideBar('bookingdetails')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><TbBrandBooking /></Typography>
                                </ListItemPrefix>
                                Booking Details
                            </ListItem>
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('wallet')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><FaWallet /></Typography>
                                </ListItemPrefix>
                                Wallet
                            </ListItem>
                            <ListItem className="bg-[#F48C06] bg-opacity-30"
                                onClick={() => selectSideBar('notifications')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdNotificationsActive /></Typography>
                                </ListItemPrefix>
                                Notifications
                            </ListItem>
                            <ListItem className="bg-[#9DCCFF] bg-opacity-30"
                                onClick={() => selectSideBar('chat')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdMarkUnreadChatAlt /></Typography>
                                </ListItemPrefix>
                                Chat
                            </ListItem>
                            <ListItem className="bg-[#49BBBD] bg-opacity-30"
                                onClick={() => selectSideBar('live')}>
                                <ListItemPrefix>
                                    <Typography variant="small" color="blue-gray"><MdLiveTv /></Typography>
                                </ListItemPrefix>
                                Live
                            </ListItem>
                        </List>
                    </Card>
                )
            }
        </>
    )
}