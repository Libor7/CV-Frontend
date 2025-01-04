/** LIBRARIES */
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

/** OTHER */
import { forms } from "@auth/config/formConfig";

/** STYLED COMPONENTS */
import LoadingSpinner from "@shared/components/styled/StyledLoadingSpinner";

const Auth = lazy(() => import("@auth/index"));
const AuthForm = lazy(() => import("@auth/components/AuthForm"));
const CV = lazy(() => import("@cv/index"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      hydrateFallbackElement: <LoadingSpinner />,
      //   errorElement: ,
      children: [
        { index: true, element: <Navigate to="auth" /> },
        {
          path: "auth",
          element: <Auth />,
          children: [
            { index: true, element: <Navigate to="login" /> },
            {
              path: "login",
              element: <AuthForm form={forms.login} />,
            },
            {
              path: "signup",
              element: <AuthForm form={forms.signup} />,
            },
          ],
        },
        {
          path: "cv",
          element: <CV />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/auth" />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
