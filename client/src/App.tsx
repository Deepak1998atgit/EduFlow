
import { Outlet } from "react-router";
import React, { useEffect } from 'react';
import { useUser } from "./hooks/useContext";
import { UserProviderForUserIsBlock } from "./hooks/useContext";




export const Student = () => {

  return (
    <>
        <Outlet />
      
    </>
  )
}


export const Instructor = () => {
  return (
    <>
     
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


