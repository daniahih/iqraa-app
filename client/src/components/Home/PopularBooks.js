import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Book from "../Book";
import Loader from "../notifiations/Loader";
import { Empty } from "../notifiations/Empty";

function PopularBooks({ books, isLoading }) {
  return (
    <div className="my-16">
      <Titles title="Popular Books " Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : books?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {books.slice(0, 8).map((book) => (
            <Book key={book?._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="It seem's like we dont have any book" />
        </div>
      )}
    </div>
  );
}

export default PopularBooks;
