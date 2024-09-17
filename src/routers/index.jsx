import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";

let userLogged = JSON.parse(localStorage.getItem("token")) || false;

export const PrivateRoute = ({ children }) => {
  return userLogged ? children : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
