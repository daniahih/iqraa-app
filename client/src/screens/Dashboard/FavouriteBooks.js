import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getLikedBooksAction } from "../../Redux/Actions/userActions";
import Loader from "../../components/notifiations/Loader";
import { deleteLikedBooksAction } from "../../Redux/Actions/userActions";
import { Empty } from "../../components/notifiations/Empty";

function FavouriteBooks() {
  const dispatch = useDispatch();
  const { isLoading, isError, likedBooks } = useSelector(
    (state) => state.userGetLikedBooks
  );
  // delete favourite book
  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.deleteLikedBooks);

  // delete all liked movies handler
  const deleteLikedBooksHandler = () => {
    window.confirm("Are you sure you want to delete all liked movies?") &&
      dispatch(deleteLikedBooksAction());
  };

  useEffect(() => {
    // get all liked books
    dispatch(getLikedBooksAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError
          ? "USER_GET_LIKED_BOOKS_RESET"
          : "DELETE_ALL_FAVORITES_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);
  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold">Favourite Books</h2>
            {likedBooks?.length > 0 && (
              <button
                disabled={deleteLoading}
                onClick={deleteLikedBooksHandler}
                className="bg-main font-medium transitions hover:bg-star border border-star text-white py-3 px-6 rounded"
              >
                {deleteLoading ? "Deleting..." : "Delete All"}
              </button>
            )}
          </div>
          {isLoading ? (
            <Loader />
          ) : likedBooks?.length > 0 ? (
            <Table data={likedBooks} admin={false} />
          ) : (
            <Empty message="You have no favorites books" />
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default FavouriteBooks;
