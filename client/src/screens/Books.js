import React from "react";
import Filters from "../components/Filters";
import { Books } from "../Data/BookData";
import Book from "../components/Book";

function BooksPage() {
  return (
    <div className="min-height-screen container mx-auto px-2 my-6">
      <Filters />
      <p className="text-lg font-meduim my-5  ">
        Total <span className="font-bold text-start">{Books?.length}</span>
      </p>
      <div className=" grid sm:mt-10 mt-4 xl:grid-col-4 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-6 ">
        {Books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
