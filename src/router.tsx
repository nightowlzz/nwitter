import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./router/home";
import Profile from "./router/profile";
import Login from "./router/login";
import CreateAccount from "./router/create-account";
import ProtectedRoute from "./component/protecte-router";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);
