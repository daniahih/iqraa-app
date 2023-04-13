import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../components/singleBook/BookInfo";
import BookRate from "../components/singleBook/BookRate";
import { useDispatch, useSelector } from "react-redux";
import { getbookByIdAction } from "../Redux/Actions/BooksActions";

function SingleBook() {
  const [modalOpen, setModalOpen] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  // get movie by id
  const { book } = useSelector((state) => state.bookDetails);
  useEffect(() => {
    // get movie details
    dispatch(getbookByIdAction(id));
  }, [dispatch, id]);
  return (
    <>
      <BookInfo book={book} setModalOpen={setModalOpen} />
      <div className=" container mx-auto min-h-screen px-2 my-2 ">
        <BookRate book={book} />
      </div>
    </>
  );
}

export default SingleBook;
