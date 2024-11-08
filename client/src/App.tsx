
import { Outlet } from "react-router";
import React, { useEffect } from 'react';
// import { useUser } from "./hooks/useContext";
// import { UserProviderForUserIsBlock } from "./hooks/useContext";
import StudentHeader from "./components/layouts/student-header";
import StudentFooter from "./components/layouts/student-footer";
import { selectIsLoggedIn, selectUserType } from "./redux/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import InstructorHeader from "./components/layouts/instructor-header";
import StairTransition from "./components/common-components/stair-transition";
import useIsOnline from "./hooks/useOnline";
import ScrollToTopButton from "./components/common-components/ScrollToTopButton";






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
            <ScrollToTopButton/>
           
          </>
        )
      }
    </>
  )
}


export const Instructor = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserType);
  return (
    <div  >    
      <Outlet />
      <InstructorHeader />
      <div  className="grid grid-cols-12"></div>
    </div>
  )
}


export const Admin = () => {
  return (
    <>
      <Outlet />
    </>
  )
}


