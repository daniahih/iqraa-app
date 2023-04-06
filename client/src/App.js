import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import NotFound from "./screens/NotFound";
import Layout from "./layout/layout";

import BooksPage from "./screens/Books";
import SingleBook from "./screens/singleBook";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Dashboard/Profile";
import Password from "./screens/Dashboard/Password";
import FavouriteBooks from "./screens/Dashboard/FavouriteBooks";
import BooksList from "./screens/Dashboard/Admin/BooksList";
import DashBoard from "./screens/Dashboard/Admin/DashBoard";
import Categories from "./screens/Dashboard/Admin/Categories";
import Users from "./screens/Dashboard/Admin/Users";

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
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/favourite",
    element: <FavouriteBooks />,
  },
  {
    path: "/bookslist",
    element: <BooksList />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/users",
    element: <Users />,
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
