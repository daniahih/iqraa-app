import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Table from "../../components/Table";

import { Books } from "../../Data/BookData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getLikedBooksAction } from "../../Redux/Actions/userActions";
import Loader from "../../components/notifiations/Loader";

function FavouriteBooks() {
  const dispatch = useDispatch();
  const { isLoading, isError, likedBooks } = useSelector(
    (state) => state.userGetLikedBooks
  );

  useEffect(() => {
    // get all liked Books
    dispatch(getLikedBooksAction());
    if (isError) {
      toast.error(isError);
      dispatch({
        type: "USER_GET_LIKED_BOOKS_RESET",
      });
    }
  }, [dispatch, isError]);
  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold">Favourite Books</h2>
            <button className="bg-main font-medium transtions hover:bg-star border-star text-white py-3 px-6 rounded ">
              Delete All
            </button>
          </div>
          {isLoading ? (
            <Loader />
          ) : likedBooks?.length > 0 ? (
            <Table data={likedBooks} admin={false} />
          ) : (
            <p>empty</p>
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default FavouriteBooks;
