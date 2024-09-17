import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { AuthProvider } from "./context/AuthContext";
import { TempProvider } from "./context/TempContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TempProvider>
      <RouterProvider router={router} />
    </TempProvider>
  </AuthProvider>
);
