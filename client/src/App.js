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
import { getLikedBooksAction } from "./Redux/Actions/userActions";
import { toast } from "react-hot-toast";
import { getAllEmotions } from "./Redux/Actions/EmotionsActions";

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
      {
        path: "/books/:search",
        element: <BooksPage />,
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
    ],
  },
  //private  routes
]);

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isError, isSuccess } = useSelector((state) => state.userLikeBook);
  const { isError: catError } = useSelector((state) => state.categoriesList);
  const { isError: emoError } = useSelector((state) => state.emotionList);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllEmotions());

    if (userInfo) {
      dispatch(getLikedBooksAction());
    }

    if (isError || catError || emoError) {
      toast.error(isError || catError || emoError);
      dispatch({ type: "USER_LIKE_BOOK_RESET" });
    }

    if (isSuccess) {
      dispatch({ type: "USER_LIKE_BOOK_RESETT" });
    }
  }, [dispatch, userInfo, isError, isSuccess, catError, emoError]);
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
