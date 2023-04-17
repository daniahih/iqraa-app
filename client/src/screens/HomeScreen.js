import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import PopularBooks from "../components/Home/PopularBooks";
import { getAllBooksAction } from "../Redux/Actions/BooksActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.booksList);

  useEffect(() => {
    dispatch(getAllBooksAction());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularBooks isLoading={isLoading} />
      </div>
    </>
  );
}

export default HomeScreen;
