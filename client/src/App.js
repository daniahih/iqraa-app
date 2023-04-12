import React, { useEffect } from "react";
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
import AddBook from "./screens/Dashboard/Admin/AddBook";
import ToastContainer from "./components/notifiations/ToastContainer";
import Emotion from "./screens/Dashboard/Admin/Emotion";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./Redux/Actions/CategoriesActions";

const Router = createBrowserRouter([
  {
    // public route
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
  //private  routes
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
  //admin route
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
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/emotion",
    element: <Emotion />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
