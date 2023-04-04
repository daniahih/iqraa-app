import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import { Books } from "../../Data/BookData";
import Book from "../Book";

function PopularBooks() {
  return (
    <div className="my-16">
      <Titles title="Popular Books " Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
        {Books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default PopularBooks;
