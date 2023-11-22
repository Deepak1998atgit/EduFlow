import React,{useState} from 'react'
interface AdminSidebarProps {
    onSidebarClick: (buttonValue: string) => void;
  }

  const AdminSidebar: React.FC<AdminSidebarProps> = ({ onSidebarClick }) => {
    const [activeButton, setActiveButton] = useState('users');
    const handleButtonClick = (buttonValue: string) => {
        setActiveButton(buttonValue);
      onSidebarClick(buttonValue);
      
    };
    return (
        <>
            <div className="bg-[#008a8b] bg-opacity-90 h-screen w-64   top-17 left-0 overflow-y-auto">
                <div className="p-4 text-white font-bold">ADMIN</div>
                <ul className="py-2">
                    <li className=""><button onClick={() => handleButtonClick('users')} className={`bg-${activeButton === 'users' ? 'gray-300' : 'green'} text-left border border-transparent outline-none focus:border-transparent pl-4 py-2 w-full  hover:bg-gray-700 text-white`} >Users</button></li>
                    <li className=""><button onClick={() => handleButtonClick('tutors')} className={`bg-${activeButton === 'tutors' ? 'gray-300' : 'green'} text-left border border-transparent outline-none focus:border-transparent pl-4 py-2 hover:bg-gray-700 w-full text-white`} >Tutors</button></li>
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar;
