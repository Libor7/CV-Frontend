/** LIBRARIES */
import { lazy } from "react";
// import { Outlet } from "react-router";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

/** OTHER */
// import { forms } from "@auth/config/formConfig";

/** STYLED COMPONENTS */
import LoadingSpinner from "@shared/components/styled/StyledLoadingSpinner";

const Login = lazy(() => import("@login/index"));
// const AuthForm = lazy(() => import("@auth/components/AuthForm"));
const CV = lazy(() => import("@cv/index"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      hydrateFallbackElement: <LoadingSpinner />,
      //   errorElement: ,
      children: [
        { index: true, element: <Navigate to="login" /> },
        {
          path: "login",
          element: <Login />,
          // children: [
          //   { index: true, element: <Navigate to="login" /> },
          //   {
          //     path: "login",
          //     // element: <AuthForm form={forms.login} />,
          //     element: <h1>login form</h1>,
          //   },
          //   {
          //     path: "signup",
          //     // element: <AuthForm form={forms.signup} />,
          //     element: <h1>signup form</h1>,
          //   },
          // ],
        },
        {
          path: "cv",
          element: <CV />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ],
  // {
  //   future: {
  //     v7_partialHydration: true,
  //   },
  // }
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
