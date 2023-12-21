import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./screens/App/App";
import ThankYou from "./screens/ThankYou/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
