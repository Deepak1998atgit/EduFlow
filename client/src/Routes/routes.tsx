import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Student, Instructor, Admin } from '../App';
import ErrorElement from "../components/common/error-element";
import AddCategory from "../components/pages/categories/add-category";


//STUDENTS
const LazyStudentLogin = lazy(
  () => import("../components/pages/students/studentLogin")
);
const Loader = lazy(
  () => import("../components/common/spinner")
);


const LazyStudentForgotPassword = lazy(
  () => import("../components/pages/students/studentForgotPassword")
);


const LazyStudentRegister = lazy(
  () => import("../components/pages/students/studentRegister")
);


const LazyStudentHome = lazy(
  () => import("../components/pages/students/studentDashboard")
);


//INSTRUCTOR
const LazyInstructorRegister = lazy(
  () => import("../components/pages/instructors/instructor-register-page")
);


const LazyInstructorLogin = lazy(
  () => import("../components/pages/instructors/instructor-login-page")
);


const LazyInstructorHome = lazy(
  () => import("../components/pages/instructors/instructor-dashboard")
);


const LazyInstructorWelcome = lazy(
  () => import("../components/pages/instructors/instructor-welcome")
);


const LazyAddCourse = lazy(
  () => import("../components/pages/add-corse/add-course-form")
);


//ADMIN
const LazyAdminLogin = lazy(
  () => import("../components/pages/admin/admin-login")
);


const LazyAdminDashBoard = lazy(
  () => import("../components/pages/admin/admin-dashboard")
);


const LazyAdminTutorView = lazy(
  () => import("../components/pages/admin/admin-tutor")
);









export const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
    children: [
      {
        path: "", element: (
          <Suspense fallback={<Loader />}>
            <LazyStudentHome />
          </Suspense>)
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={
            <Loader />
          }>
            <LazyStudentLogin />
          </Suspense>)
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={
            <Loader />
          }>
            <LazyStudentRegister />
          </Suspense>)
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={
            <Loader />
          }>
            <LazyStudentForgotPassword />
          </Suspense>)
      },
      {
        path: "/",
        element: <Instructor />,
        children: [
          {
            path: "/instructor-register",
            element: (
              <Suspense fallback={
                <Loader />
              }>
                <LazyInstructorRegister />
              </Suspense>)
          },
          {
            path: "/instructor-login",
            element: (
              <Suspense fallback={
                <Loader />
              }>
                <LazyInstructorLogin />
              </Suspense>)
          },
          {
            path: "/instructor-home",
            element: (
              <Suspense fallback={<Loader />}>
                <LazyInstructorHome />
              </Suspense>)
          },
          {
            path: "/instructor-welcome", element: (
              <Suspense fallback={<Loader />}>
                <LazyInstructorWelcome />
              </Suspense>)
          },
          {
            path: "add-course",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAddCourse />
              </Suspense>
            ),
          }
        ],
      },
      {
        path: "/",
        element: <Admin />,
        children: [
          {
            path: "/admin-login",
            element: (
              <Suspense fallback={
                <Loader />
              }>
                <LazyAdminLogin />
              </Suspense>)
          },
          {
            path: "/admin-dashboard",
            element: (
              <Suspense fallback={
                <Loader />
              }>
                <LazyAdminDashBoard />
              </Suspense>)
          },
          {
            path: "/admin-tutor",
            element: (
              <Suspense fallback={
                <Loader />
              }>
                <LazyAdminTutorView />
              </Suspense>)
          },
          {
            path: "/instructor-home",
            element: (
              <Suspense fallback={<Loader />}>
                <LazyInstructorHome />
              </Suspense>)
          },
          { path: "historical-dividend", element: <>his</> },
        ],
      },
    ],
  },
  {
    path: "/instructors",
    element: <Instructor />,
    children: [
      {
        path: "add-course",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAddCourse />
          </Suspense>
        ),
      }
    ],
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "", // Matched when accessing /admin
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <div>admin</div>
          </Suspense>
        ),
      },
      {
        path: "categories", // Matched when accessing /admin/categories
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <div>cater</div>
          </Suspense>
        ),
      },
      {
        path: "categories/add-category", // Relative path
        element: <AddCategory/>,
      },
    ],
  }
]);
