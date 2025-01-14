import { BsChatRightFill } from "react-icons/bs";
import { Avatar, Input, Button } from "@material-tailwind/react";
import { FaVideo } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { io, Socket } from "socket.io-client";
import { useState,useRef,useEffect, SetStateAction} from "react";
import { Chats, Messages } from "@/types/chat";
import { useSelector } from "react-redux";
import { selectStudentId } from "@/redux/reducers/studentSlice";

const VITE_CHAT_BASE = import.meta.env.VITE_CHAT_BASE || "";
const ChatPage = ({ isShowComponent }: { isShowComponent: Boolean }) => {
    const userId = useSelector(selectStudentId);
    const [isChatClicked, setIsChatClicked] = useState<Boolean>(false);
    const [openChatId, isSetOpenChatId] = useState<string>("tina")
    const [arrivalMessage, setArrivalMessage] = useState<Partial<Messages> | null>(null);
    const [newMessage, setnewMessage] = useState("");
    const [currentchat, setcurrentchat] = useState<Chats | null>(null);
    useEffect(() => {
        socket.current = io(VITE_CHAT_BASE,{  // Server URL
            transports: ["websocket"],  // Optional: ensure the use of WebSocket transport
          });
        socket.current?.on("getMessage", (data) => {
          setArrivalMessage({
            senderId: data.senderId,
            text: data.text,
            createdAt: Date.now(),
          });
        });
      }, []);

      
    useEffect(() => {
        socket.current?.emit("adduser",);
        socket.current?.on("getUsers", (users) => {
          console.log(users);
        });
    
      }, [userId]);
    const handleChatEvent = (isClicked: Boolean, id: string) => {
        setIsChatClicked(isClicked);
    }
    const socket = useRef<Socket>();

      const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setnewMessage(e.target.value);
      };
      const receiverId = currentchat?.members.find(
        (member) => member !== userId
      );
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const message = {
          senderId: userId,
          text: newMessage,
          image: "",
          imageUrl: "",
          conversationId: currentchat?._id,
        };
    
        socket.current?.emit("sendMessage", {
          senderId: userId,
          receiverId,
          text: newMessage,
          image: "",
          imageUrl: "",
        });
        // try {
        //   await axiosInstanceMsg
        //     .post("/", message)
        //     .then((res) => {
        //       setmessages([...messages, res.data]);
        //       setnewMessage("");
    
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // } catch (error) {
        //   console.log(error);
        // }
        // getConversation();
      };
    return (
        <>
            <div className={`${isShowComponent ? "flex  w-full md:hidden lg:block   lg:h-5/6" : "flex   col-span-4 md:col-span-4 lg:col-span-3 md:min-h-[calc(100vh-7rem)] lg:h-5/6"}`}>
                {/* Left Section - Chat Sidebar */}
                <div className={`${isChatClicked ? "md:w-2/5 lg:block mg:block hidden sm:w-2/5 p-4 lg:min-h-full  md:min-h-full bg-white shadow-lg]" : "md:w-2/5 w-full lg:w-2/5 p-4 lg:min-h-full  md:min-h-full bg-white shadow-lg]"}`}>
                    <h2 className="text-xl font-bold mb-4 w-full flex gap-2 items-center">
                        <BsChatRightFill />Chats
                    </h2>
                    <ul>
                        <li
                            onClick={(e) => { handleChatEvent(true, "tina") }}
                            className="flex items-center bg-slate-100 w-4/5 lg:w-full md:w-full  p-4 rounded-full justify-between mb-4">
                            <div className="flex items-center">
                                <Avatar
                                    src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
                                    alt="Tina"
                                    size="sm"
                                    className="rounded-full w-10 h-10"
                                />
                                <div className="ml-2">
                                    <p className="font-bold">Tina Shirke</p>
                                    <p className="text-xs text-gray-500">Instructor</p>
                                </div>
                            </div>
                            <span className="text-sm bg-[#49BBBD] text-white rounded-full px-2">
                                5
                            </span>
                        </li>
                        <li className="flex items-center bg-slate-100 w-4/5 lg:w-full md:w-full  p-4 rounded-full justify-between mb-4">
                            <div className="flex items-center">
                                <Avatar
                                    src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
                                    alt="Tina" size="sm"
                                    className="rounded-full w-10 h-10"
                                />
                                <div className="ml-2">
                                    <p className="font-bold">Sam Tarner</p>
                                    <p className="text-xs text-gray-500">Instructor</p>
                                </div>
                            </div>
                            <span className="text-sm bg-[#49BBBD] text-white rounded-full px-2">
                                2
                            </span>
                        </li>
                        <li className="flex items-center bg-slate-100 w-4/5   lg:w-full md:w-full  p-4 rounded-full justify-between mb-4">
                            <div className="flex items-center">
                                <Avatar
                                    src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
                                    alt="Tina"
                                    size="sm"
                                    className="rounded-full w-10 h-10"
                                />
                                <div className="ml-2">
                                    <p className="font-bold">Sameena TR</p>
                                    <p className="text-xs text-gray-500">Instructor</p>
                                </div>
                            </div>
                            <span className="text-sm bg-[#49BBBD] text-white rounded-full px-2">
                                1
                            </span>
                        </li>
                        {/* Repeat other chat users */}
                    </ul>
                </div>
                {/* Center Section - Chat Window */}
                <div className={`${isChatClicked ? "flex-grow flex  flex-col h-full" : " lg:flex-grow  hidden lg:flex-col md:flex-col md:flex-grow md:flex lg:h-full"}`}>
                    <div className="flex pr-10 p-2 items-center w-full bg-white h-14">
                        <div className="flex w-full p-4 items-center">
                            <Avatar
                                src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
                                alt="Tina"
                                size="sm"
                                className="rounded-full w-10 h-10"
                            />
                            <div className="ml-2">
                                <p className="font-bold">Tina Shirke</p>
                                <p className="text-xs text-gray-500">Instructor</p>
                            </div>
                        </div>
                        <FaVideo size={30} className="text-[#49BBBD]" />
                    </div>
                    {/* Chat Bubbles */}
                    <div className="flex-1 p-6 overflow-auto">
                        <div className="flex mb-4">
                            <Avatar
                                src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
                                alt="Tina"
                                size="xs"
                                className="rounded-full w-8 h-8"
                            />
                            <div className="ml-2 bg-gray-200 rounded-xl p-2">
                                <p>Hello Tina, how are you?</p>
                            </div>
                        </div>
                        <div className="flex justify-end mb-4">
                            <div className="mr-2 bg-[#49BBBD] text-white rounded-xl p-2">
                                <p>How my Thumbnail Looks?</p>
                            </div>
                            <Avatar
                                src="https://media.istockphoto.com/id/1874702491/photo/young-female-college-student-smiling-while-doing-homework-in-a-school-cafeteria.jpg?s=1024x1024&w=is&k=20&c=UnnrRkOmPQFhCVuAAqC_ITyjoA31fRyvEcnpAYHAuCY="
                                alt="Sam"
                                size="xs"
                                className="rounded-full w-8 h-8"
                            />
                        </div>
                        {newMessage}
                    </div>
                    {/* Input Section */}
                    <div className="flex items-center p-2 border-t bg-white">
                        <Input
                            crossOrigin="anonymous"
                            type="text"
                            placeholder="Write a message"
                            className="flex-1 border rounded-full !border-[#49BBBD] focus:outline-none"
                            value={newMessage}
                            onChange={handleInputChange}
                        />
                        <AiFillAudio size={30} />
                        <Button className="ml-2 bg-[#49BBBD]"  onClick={handleSubmit}>
                            <PiPaperPlaneRightFill size={15} />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;


