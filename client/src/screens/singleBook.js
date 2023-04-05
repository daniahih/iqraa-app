import React from "react";
import { useParams } from "react-router-dom";
import { Books } from "../Data/BookData";
import BookInfo from "../components/singleBook/BookInfo";

function SingleBook() {
  const { id } = useParams();
  const book = Books.find((book) => book.title === id);
  console.log(book);
  return (
    <>
      <BookInfo book={book} />
    </>
  );
}

export default SingleBook;
