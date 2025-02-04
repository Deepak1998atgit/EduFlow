import {  Bell } from 'lucide-react';
import { Button } from '@material-tailwind/react';
import { Navigate, useNavigate} from 'react-router-dom';
import { clearDetails } from '@/redux/reducers/instructorSlice';
import { useDispatch } from 'react-redux';
import { clearToken } from '@/redux/reducers/authSlice';
const InstructorHeader: React.FC = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleInstructorLogOut=()=>{
    dispatch(clearToken());
    dispatch(clearDetails());
    navigate("/instructors/login");
  }
    return (
        <header className="h-16  border-b flex  items-center justify-between px-6 bg-white">
          <div className="text-xl font-bold">Welcome, Instructor! Manage your courses and grow 🌟</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Samantha</span>
            <Bell className="h-5 w-5 text-gray-700" />
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
              DS
            </div>
            <Button onClick={handleInstructorLogOut}>Logout</Button>
          </div>
        </header> 
    );
}


export default InstructorHeader;