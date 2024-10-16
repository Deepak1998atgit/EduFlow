import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Student, Instructor, Admin } from '../App';
import ErrorElement from "../components/common-components/error-element";
import AddCategory from "../components/pages/categories/add-category";


//STUDENTS
const LazyStudentLogin = lazy(
  () => import("../components/pages/students/studentLogin")
);


const Loader = lazy(
  () => import("../components/common-components/spinner")
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

const LazyStudentProfile = lazy(
  () => import("../components/pages/students/student-profile")
);

const LazyCart = lazy(
  () => import("../components/pages/cart/view-cart")
)


const LazyWishList = lazy(
  () => import("../components/pages/wishlist/viewWishlist")
)


const LazyContactPage = lazy(
  () => import("../components/pages/contact/contact")
)


const LazyCommunityPage = lazy(
  ()=> import("../components/pages/community/community-home")
)


const LazyViewCorse = lazy(
  () => import("../components/pages/course-page/view-course")
);


const LazyViewCheckout=lazy(
  ()=> import("../components/pages/checkout/view-checkout")
)


//INSTRUCTOR
const LazyInstructorRegister = lazy(
  () => import("../components/pages/instructors/instructor-register-page")
);


const LazyInstructorLogin = lazy(
  () => import("../components/pages/instructors/instructor-login-page")
);


const LazyViewLessons = lazy(
  ()=>import("../components/pages/add-lesson/view-lesson")
)

// const LazyInstructorHome = lazy(
//   () => import("../components/pages/instructors/instructor-dashboard")
// );


const LazyInstructorWelcome = lazy(
  () => import("../components/pages/instructors/instructor-welcome")
);


const LazyAddCourse = lazy(
  () => import("../components/pages/add-corse/add-course-form")
);


const LazyInstructorDashBoard = lazy(
  () => import("../components/pages/instructors/instructor-dashboard")
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
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyStudentHome />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyStudentForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyCart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyWishList />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyContactPage />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyCommunityPage />
          </Suspense>
        ),
      },
      {
        path: "/courses/:courseId",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyViewCorse/>
          </Suspense>
        )
      },
      {
        path:"/checkout",
        element:(
          <Suspense fallback={<Loader />}>
              <LazyViewCheckout/>
          </Suspense>
        )
      },
      {
        path:"/profile",
        element:(
          <Suspense fallback={<Loader />}>
              <LazyStudentProfile/>
          </Suspense>
        )
      }
    ],
  },
  {
    path: "/instructor",
    element: <Instructor />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyInstructorDashBoard />
          </Suspense>
        ),
      },
      {
        path: "welcome",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyInstructorWelcome />
          </Suspense>
        ),
      },
      {
        path: "add-course",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAddCourse />
          </Suspense>
        ),
      },
      {
        path: "view-lessons/:courseId",
        element: (
          <Suspense fallback={<Loader />}>
            < LazyViewLessons/>
          </Suspense>
        )
      }
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAdminDashBoard />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAdminLogin />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAdminDashBoard />
          </Suspense>
        ),
      },
      {
        path: "tutor",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAdminTutorView />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<Loader />}>
            <div>cater</div>
          </Suspense>
        ),
      },
      {
        path: "categories/add-category",
        element: <AddCategory />,
      },
    ],
  },
  {
    path: "/login",
    element:(
      <Suspense fallback={<Loader />}>
        <LazyStudentLogin />
      </Suspense>
    )
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<Loader />}>
        <LazyStudentRegister/>
      </Suspense>
    )
  }
  ,
  {
    path: "/instructor-login",
    element: (
      <Suspense fallback={<Loader />}>
        <LazyInstructorLogin />
      </Suspense>
    ),
  },
  {
    path: "/instructor-register",
    element: (
      <Suspense fallback={<Loader />}>
        <LazyInstructorRegister />
      </Suspense>
    ),
  }, 
]);
