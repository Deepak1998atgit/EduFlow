
import { Outlet } from "react-router";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useUser } from "./hooks/useContext";
// import { UserProviderForUserIsBlock } from "./hooks/useContext";
import StudentHeader from "./components/layouts/student-header";
import StudentFooter from "./components/layouts/student-footer";
import { selectIsLoggedIn, selectUserType } from "./redux/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import StairTransition from "./components/common-components/stair-transition";
import useIsOnline from "./hooks/useOnline";
import ScrollToTopButton from "./components/common-components/ScrollToTopButton";
import InstructorSideNav from "./components/pages/instructors/instructor-sidebar";
import InstructorHeader from "./components/layouts/instructor-header";






export const Student = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isOnline = useIsOnline();
  return (
    <>
      {
        isOnline && (
          <>

            <StudentHeader />
            <StairTransition />
            <Outlet />
            <ScrollToTopButton />

          </>
        )
      }
    </>
  )
}


export const Instructor = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const user = useSelector(selectUserType);
  const [sideBarOption, setSideBarOption] = useState('dashboard');
  const [subSidebarTitle, setSubSidebarTitle] = useState("");
  const handleSidebarClick = (sideBarOption: string) => {
    setSideBarOption(sideBarOption);
  };
  if (!isLoggedIn || user !== "instructor") {
    return null;
  }
  useEffect(()=>{ navigate(`/instructor/?sidebar=${sideBarOption}&subSidebar=${subSidebarTitle}`);},[sideBarOption,subSidebarTitle])
  return (
    <div className="grid grid-cols-12">
      <InstructorSideNav onSidebarClick={handleSidebarClick} onSubSideBarClick={setSubSidebarTitle} />
      <div className="col-span-9 overflow-y-scroll no-scrollbar">
      <InstructorHeader />
      <Outlet />
      </div>
    </div>
  );
}


export const Admin = () => {
  return (
    <>
      <Outlet />
    </>
  )
}


