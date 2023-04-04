import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import NotFound from "./screens/NotFound";
import Layout from "./layout/layout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
