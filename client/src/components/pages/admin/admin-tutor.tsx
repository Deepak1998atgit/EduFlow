import React, { useState, useEffect } from "react";
import AdminNav from '../../layouts/adminNav';
import AdminSideBar from '../../pages/admin/admin-sidebar';
import axios from 'axios';
interface Tutors {
  _id: string;
  email: string;
  password: string;
  name: string;
  mobile:string;
  isBlocked: boolean;
}


export default function adminTutor() {
  const [change, setChange] = useState(false);
  const [tutors, setTutors] = useState<Tutors[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/getTutors')
      .then((data) => {
        setTutors(data.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [change]);

  const handleBlockTutor = async (email: string) => {
    try {
      console.log("Blocking user");
      const response = await axios.post('http://localhost:5000/api/admin/blockTutor', { email: email });
      console.log(response.data);
      setChange((prevChange) => !prevChange);
      console.log("tutor blocked successfully");
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const handleUnBlockTutor = async (email: string) => {
    try {
      console.log("Unblocking user");
      const response = await axios.post('http://localhost:5000/api/admin/unBlockTutor', { email: email });
      console.log(response.data);
      setChange((prevChange) => !prevChange);
      console.log("tutor unblocked successfully");
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  return (
    <>
      <div className="flex-1 ml-10 mr-20 p-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Instructors
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                tutors.map((tutor) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {tutor?.name}
                    </th>
                    <td className="px-6 py-4">

                    </td>
                    <td className="px-6 py-4">
                      {tutor?.email}
                    </td>
                    <td className="px-6 py-4">
                    {tutor?.mobile }
                    </td>
                    <td className="px-6 py-4">
                      {
                        tutor.isBlocked ? <button onClick={() => handleUnBlockTutor(tutor.email)} className="bg-blue-500 w-32 text-white px-4 py-2 rounded hover:bg-blue-700">UNBLOCK</button> : <button onClick={() => handleBlockTutor(tutor.email)} className="bg-blue-500 w-32 text-white px-4 py-2 rounded hover:bg-blue-700">BLOCK</button>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
