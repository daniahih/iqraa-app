import React, { useEffect } from "react";

import Table from "../../../components/Table";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import {
  deleteAllBooksAction,
  deleteBookAction,
  getAllBooksAction,
} from "./../../../Redux/Actions/BooksActions";
import { toast } from "react-hot-toast";
import Loader from "./../../../components/notifiations/Loader";
import { Empty } from "./../../../components/notifiations/Empty";

function BooksList() {
  const dispatch = useDispatch();
  // all books state
  const { isLoading, isError, books, pages, page } = useSelector(
    (state) => state.booksList
  );
  // delete book state
  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.deleteBook
  );
  // delete all books state
  const { isLoading: deleteAllLoading, isError: deleteAllError } = useSelector(
    (state) => state.deleteAllBooks
  );

  // delete movie handler
  const deleteBookHandler = (id) => {
    console.log("clicked");
    window.confirm("Are you sure you want to delete this Book?") &&
      dispatch(deleteBookAction(id));
  };

  // delete all books handler
  const deleteAllBooksHandler = () => {
    window.confirm("Are you sure you want to delete all Books?") &&
      dispatch(deleteAllBooksAction());
  };

  useEffect(() => {
    // get all books
    dispatch(getAllBooksAction({}));
    // errors
    if (isError || deleteError || deleteAllError) {
      toast.error(isError || deleteError || deleteAllError);
    }
  }, [dispatch, isError, deleteError, deleteAllError]);

  // pagination function for next page and prev page
  const nextPage = () => {
    dispatch(
      getAllBooksAction({
        pageNumber: page + 1,
      })
    );
  };
  const prevPage = () => {
    dispatch(
      getAllBooksAction({
        pageNumber: page - 1,
      })
    );
  };

  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Books List</h2>
            {books?.length > 0 && (
              <button
                disabled={deleteAllLoading}
                onClick={deleteAllBooksHandler}
                className="bg-main font-medium transitions hover:bg-star border border-star text-white py-3 px-6 rounded"
              >
                {deleteAllLoading ? "Deleting..." : "Delete All"}
              </button>
            )}
          </div>
          {isLoading || deleteLoading ? (
            <Loader />
          ) : books?.length > 0 ? (
            <>
              <Table
                data={books}
                admin={true}
                onDeleteHandler={deleteBookHandler}
              />
              {/* next and previous */}
              <div className="w-full flex-rows gap-6 my-5">
                <button
                  disabled={page === 1}
                  onClick={prevPage}
                  className=" text-white p-2 rounded border border-star hover:bg-star"
                >
                  <TbPlayerTrackPrev className="text-sm" />
                </button>
                <button
                  disabled={page === pages}
                  onClick={nextPage}
                  className="text-white p-2 rounded border border-star hover:bg-star"
                >
                  <TbPlayerTrackNext className="text-sm" />
                </button>
              </div>
            </>
          ) : (
            <Empty message="Empty" />
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default BooksList;
