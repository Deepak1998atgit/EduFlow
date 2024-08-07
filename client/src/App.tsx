
import { Outlet } from "react-router";
import React, { useEffect } from 'react';
import { useUser } from "./hooks/useContext";
import { UserProviderForUserIsBlock } from "./hooks/useContext";
import StudentHeader from "./components/partials/student-header";
import StudentFooter from "./components/partials/student-footer";
import { selectIsLoggedIn, selectUserType } from "./redux/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import InstructorHeader from "./components/partials/instructor-header";
import StairTransition from "./components/common/stair-transition";
import useIsOnline from "./hooks/useOnline";






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
    <>
      <InstructorHeader />
      <Outlet />
    </>
  )
}


export const Admin = () => {
  return (
    <>
      <Outlet />
    </>
  )
}


