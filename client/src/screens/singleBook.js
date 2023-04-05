import React from "react";
import { useParams } from "react-router-dom";
import { Books } from "../Data/BookData";
import BookInfo from "../components/singleBook/BookInfo";
import BookRate from "../components/singleBook/BookRate";

function SingleBook() {
  const { id } = useParams();
  const book = Books.find((book) => book.title === id);
  console.log(book);
  return (
    <>
      <BookInfo book={book} />
      <div className=" container mx-auto min-h-screen px-2 my-2 ">
        <BookRate book={book} />
      </div>
    </>
  );
}

export default SingleBook;
