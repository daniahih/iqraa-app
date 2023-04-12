import React, { useEffect } from "react";
import Filters from "../components/Filters";
import Book from "../components/Book";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getAllBooksAction } from "../Redux/Actions/BooksActions";
import Loader from "../components/notifiations/Loader";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

function BooksPage() {
  const sameClass = "w-full gap-6 flex-colo min-h-screen";
  const dispatch = useDispatch();
  // all books
  const { isLoading, isError, books, pages, page } = useSelector(
    (state) => state.booksList
  );
  // get all categories
  const { categories } = useSelector((state) => state.categoriesList);

  useEffect(() => {
    // errors
    if (isError) {
      toast.error(isError);
      toast.error("theres a problem ");
    }

    //get all books
    dispatch(getAllBooksAction());
  }, [dispatch, isError]);
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
    <div className="min-height-screen container mx-auto px-2 my-6">
      <Filters categories={categories} />
      <p className="text-lg font-meduim my-5  ">
        Total{" "}
        <span className="font-bold text-star">{books ? books.length : 0}</span>{" "}
        items Found
      </p>
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : books?.length > 0 ? (
        <>
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {books.map((book) => (
              <Book key={book?._id} book={book} />
            ))}
          </div>
          {/* next and previous */}
          <div className="w-full flex-rows gap-6 md:my-20 my-10">
            <button
              disabled={page === 1}
              onClick={prevPage}
              className=" text-white py-2 px-4 rounded font-semibold border-2 border-star hover:bg-star"
            >
              <TbPlayerTrackPrev className="text-xl" />
            </button>
            <button
              disabled={page === pages}
              onClick={nextPage}
              className="text-white py-2 px-4 rounded font-semibold border-2 border-star hover:bg-star"
            >
              <TbPlayerTrackNext className="text-xl" />
            </button>
          </div>
        </>
      ) : (
        <div className={sameClass}>
          <div className="w-24 h-24 p-5 rounded-full mb-4 bg-main text-star text-4xl flex-colo"></div>
          <p className="text-border text-sm">
            It seem's like we dont have any movie
          </p>
        </div>
      )}
    </div>
  );
}

export default BooksPage;
