import {  Bell } from 'lucide-react';

const InstructorHeader: React.FC = () => {
    return (
        <header className="h-16 w-full  border-b flex  items-center justify-between px-6 bg-white">
          <div className="text-xl font-bold">Welcome, Instructor! Manage your courses and grow 🌟</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Samantha</span>
            <Bell className="h-5 w-5 text-gray-700" />
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
              DS
            </div>
          </div>
        </header> 
    );
}


export default InstructorHeader;