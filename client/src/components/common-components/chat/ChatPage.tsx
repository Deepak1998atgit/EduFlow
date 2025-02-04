import { BsChatRightFill } from "react-icons/bs";
import { Avatar, Input, Button } from "@material-tailwind/react";
import { FaVideo } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { io, Socket } from "socket.io-client";
import { useState, useRef, useEffect } from "react";
import { Chats, Messages } from "@/types/chat";
import { useSelector } from "react-redux";
import { selectStudentId } from "@/redux/reducers/studentSlice";
import { selectInstructorId } from "@/redux/reducers/instructorSlice";
import { BsPaperclip } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { getCourseByStudent } from "@/api/endpoints/course/Course";
const VITE_CHAT_BASE = import.meta.env.VITE_CHAT_BASE || "";
const CLOUDINARY_CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME || "";
interface FileDetails {
  filename: string;
  originalFile: File;
}
const ChatPage = ({ isShowComponent }: { isShowComponent: Boolean }) => {
  const socket = useRef<Socket | null>(null);
  const userId = useSelector(selectStudentId);
  const instructorId = useSelector(selectInstructorId);
  console.log(userId, "ll", instructorId);
  const [isChatClicked, setIsChatClicked] = useState<boolean>(false);
  const [arrivalMessage, setArrivalMessage] = useState<Partial<Messages> | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentChat, setCurrentChat] = useState<Chats | null>(null);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [file, setFile] = useState<FileDetails | null>();
  const [courses, setCourses] = useState([])

  const senderId = userId || instructorId;
  const receiverId = instructorId ? '67750e7a3773eaf284e087ce' : '67629ba02bbed1e3515f8732';
  const fetchCoursesByStudent = async () => {
    const response = await getCourseByStudent();
    console.log(response?.data, "res course ")
    setCourses(response?.data);
  }
  useEffect(() => {
    fetchCoursesByStudent();
  }, [])
  useEffect(() => {
    if (socket.current) {
      socket.current.emit("adduser", userId);
      socket.current.emit("adduser", receiverId); // Emit instructor ID as well if applicable
    }
  }, [userId, receiverId]);
  useEffect(() => {
    // Initialize socket
    socket.current = io(VITE_CHAT_BASE, { transports: ["websocket"], auth: { room: "my room" } });

    // Handle the 'getUsers' event
    socket.current.on("getUsers", (userList) => {
      console.log("Connected users:", userList);
    });

    // Handle the 'getMessage' event (new message received)
    socket.current.on("getMessage", (message) => {
      console.log("New message received:", message);
      setArrivalMessage(message);
    });
    console.log(arrivalMessage, "arrived the messages");
    return () => {
      // Cleanup listeners on component unmount
      socket.current?.off("getUsers");
      socket.current?.off("getMessage");
    };
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prevMessages: any) => [...prevMessages, arrivalMessage]);
    }
  }, [arrivalMessage]);



  const handleChatEvent = (isClicked: boolean, id: string) => {
    setIsChatClicked(isClicked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure event.target exists and has files property
    if (event.target.files && event.target.files.length > 0) {
      // Access the first selected file
      const selectedFile = event.target.files[0];
      // Check if a file is selected
      if (selectedFile) {
        // Do something with the selected file
        setFile({
          filename: URL.createObjectURL(selectedFile),
          originalFile: selectedFile,
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ok")
    let imageUrl = "";
    let imageName = ""
    if (file) {
      console.log("Sending file:", file.originalFile);
      imageName = uuidv4();
      console.log("Uploading file:", file.originalFile);
      const formData = new FormData();
      formData.append("file", file.originalFile);
      formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // Cloudinary preset
      try {
        // Upload to Cloudinary directly
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dhppn0e84/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        imageUrl = data.secure_url;
        console.log("Uploaded File:", data);
      } catch (error) {
        console.error("File upload error:", error);
      }
      // Clear input field after sending
    };
    const message = {
      senderId,
      text: newMessage,
      image: imageName,
      imageUrl: imageUrl,
      conversationId: currentChat?._id,
    };
    socket?.current?.emit("sendMessage", {
      senderId,
      receiverId,
      text: newMessage,
      image: imageName ? imageName : "",
      imageUrl: imageUrl ? imageUrl : "",
    });
    console.log("ok")
    setNewMessage("");
  }


  return (
    <div className={`${isShowComponent ? "flex p-3  w-full  lg:w-full" : "flex col-span-4 md:col-span-4 lg:col-span-3 md:min-h-[calc(100vh-7rem)] "}`}>
      {/* Left Section - Chat Sidebar */}
      <div className={`${isChatClicked ? "md:w-2/5 lg:block mg:block hidden sm:w-2/5 p-4 lg:min-h-full  md:min-h-full bg-white " : "md:w-2/5 w-full  lg:w-2/5 p-4 lg:min-h-full  md:min-h-full bg-white"}`}>
        <h2 className="text-xl font-bold mb-4 w-full flex gap-2 items-center">
          <BsChatRightFill /> Chats
        </h2>
        <ul>
          <li onClick={() => { handleChatEvent(true, "tina"); }} className="flex items-center bg-slate-100 w-4/5 lg:w-full md:w-full p-4 rounded-full justify-between mb-4">
            <div className="flex items-center">
              <Avatar src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg" alt="Tina" size="sm" className="rounded-full w-10 h-10" />
              <div className="ml-2">
                <p className="font-bold">Tina Shirke</p>
                <p className="text-xs text-gray-500">Instructor</p>
              </div>
            </div>
            <span className="text-sm bg-[#49BBBD] text-white rounded-full px-2">5</span>
          </li>
        </ul>
      </div>

      {/* Center Section - Chat Window */}
      <div className={`${isChatClicked ? "flex-grow flex flex-col h-full" : "lg:w-3/5  lg:h-[calc(100vh-110px)] hidden  md:flex-col md:flex"}`}>
        <div className="flex pr-10 p-2 items-center w-full bg-white h-14">
          <div className="flex w-full p-4 items-center">
            <Avatar src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg" alt="Tina" size="sm" className="rounded-full w-10 h-10" />
            <div className="ml-2">
              <p className="font-bold">Tina Shirke</p>
              <p className="text-xs text-gray-500">Instructor</p>
            </div>
          </div>
          <FaVideo size={30} className="text-[#49BBBD]" />
        </div>

        {/* Chat Bubbles */}
        <div className="flex-1 p-6 overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.senderId === senderId ? "justify-end" : "mb-4"}`}>
              {message.senderId !== senderId && (
                <Avatar src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg" alt="Sender Avatar" size="xs" className="rounded-full w-8 h-8" />
              )}
              <div className={`ml-2 ${message.senderId === senderId ? "bg-[#49BBBD] text-white" : "bg-gray-200"} rounded-xl p-1`}>
                <p>{message.text ? message.text : <img src={message.imageUrl} alt="Message image" className="w-64 rounded-xl" />}</p>
              </div>
              {message.senderId === senderId && (
                <Avatar src="https://media.istockphoto.com/id/1874702491/photo/young-female-college-student-smiling-while-doing-homework-in-a-school-cafeteria.jpg?s=1024x1024&w=is&k=20&c=UnnrRkOmPQFhCVuAAqC_ITyjoA31fRyvEcnpAYHAuCY=" alt="User Avatar" size="xs" className="rounded-full w-8 h-8" />
              )}
            </div>
          ))}
          {/* {courses.map(course => (
            // course?.instructorId
          ))} */}
        </div>
        {/* Input Section */}
        <div className="flex  items-center  p-2 bg-white">
          <input
            type="file"
            id="file-upload"
            accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          {/* Paperclip Icon Button */}
          <label htmlFor="file-upload" className="cursor-pointer">
            <BsPaperclip size={24} className="text-gray-600 hover:text-blue-500" />
          </label>
          <Input
            crossOrigin={undefined}
            type="text"
            placeholder="Write a message"
            className="flex-1 border rounded-full !border-[#49BBBD] focus:outline-none"
            value={newMessage}
            onChange={handleInputChange}
          />
          <AiFillAudio size={30} />
          <Button className="ml-2 bg-[#49BBBD]" onClick={handleSubmit}>
            <PiPaperPlaneRightFill size={15} />
          </Button>
        </div>

      </div>

    </div>
  );
};

export default ChatPage;
