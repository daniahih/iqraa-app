import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

function Book({ book }) {
  return (
    <div className="border border-border p-1 relative rounded overflow-hidden transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg">
      <Link to={`/book/${book?.title}`} className="w-full">
        <img
          src={`/imges/Books/${book?.image}`}
          alt={book?.title}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 left-0 right-0  bg-main bg-opacity-50  text-white  px-3 py-4">
        <h3 className=" font-bold text-center">{book?.title}</h3>
        <button className="h-10 w-10 flex-colo text-sm transtions hover:bg-transparent border-text  border-2 rounded-md bg-star text-white">
          <AiFillHeart className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Book;
