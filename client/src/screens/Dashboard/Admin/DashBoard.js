import React, { useEffect } from "react";
import SideBar from "../SideBar";
import { FaRegListAlt } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import Table from "../../../components/Table";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookAction,
  getAllBooksAction,
} from "../../../Redux/Actions/BooksActions";

import { getAllCategories } from "../../../Redux/Actions/CategoriesActions";
import { getAllUsersAction } from "../../../Redux/Actions/userActions";
import { toast } from "react-hot-toast";
import Loader from "../../../components/notifiations/Loader";
import { Empty } from "../../../components/notifiations/Empty";

function DashBoard() {
  const dispatch = useDispatch();
  // all books
  const { isLoading, isError, books, totalBooks } = useSelector(
    (state) => state.booksList
  );
  const {
    isLoading: userLoading,
    isError: userError,
    users,
  } = useSelector((state) => state.getAllUsers);
  const { categories, isLoading: catLoading } = useSelector(
    (state) => state.categoriesList
  );

  // delete book handler
  const deleteBookHandler = (id) => {
    window.confirm("Are you sure you want to delete this book?") &&
      dispatch(deleteBookAction(id));
  };

  useEffect(() => {
    // get all books
    dispatch(getAllBooksAction({}));
    // get all users
    dispatch(getAllUsersAction());
    // get all categories
    dispatch(getAllCategories());
    // errors
    if (isError || userError) {
      toast.error(isError || userError);
    }
  }, [dispatch, isError, userError]);
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Books",
      total: isLoading ? "Loading.." : totalBooks || 0,
    },
    {
      bg: "bg-blue-600",
      icon: HiViewGridAdd,
      title: "Total Categories ",
      total: catLoading ? "Loading.." : categories?.length || 0,
    },
    {
      bg: "bg-green-600",
      icon: FaUserAlt,
      title: "Total Users ",
      total: userLoading ? "Loading.." : users?.length || 0,
    },
  ];

  return (
    <div className="bg-main">
      <SideBar>
        <h1 className="text-xl font-bold"> DashBored</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {DashboardData.map((data, index) => (
            <div
              key={index}
              className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
            >
              <div
                className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
              >
                <data.icon />
              </div>
              <div className="col-span-3 ">
                <h2> {data.title}</h2>
                <p>{data.total}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-6 text-md font-bold"> Reacent Book</h3>
        {isLoading ? (
          <Loader />
        ) : books?.length > 0 ? (
          <Table
            data={books?.slice(0, 5)}
            admin={true}
            onDeleteHandler={deleteBookHandler}
          />
        ) : (
          <Empty message="Empty" />
        )}
      </SideBar>
    </div>
  );
}

export default DashBoard;
