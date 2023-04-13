import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IfBookIsLiked, LikeBook } from "../context/Functionalities";

function Book({ book }) {
  const isLiked = IfBookIsLiked(book);
  const { isLoading } = useSelector((state) => state.userLikeBook);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <div className="border border-border p-1 relative rounded overflow-hidden transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg">
      <Link to={`/book/${book?._id}`} className="w-full">
        <img
          src={book?.image ? book?.image : `imges/Books/${book.image}`}
          alt={book?.title}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 left-0 right-0  bg-main bg-opacity-50  text-white  px-3 py-4">
        <h3 className=" font-bold text-center">{book?.title}</h3>
        <button
          onClick={() => LikeBook(book, dispatch, userInfo)}
          disabled={isLoading}
          className={`h-9 w-9 text-sm flex-colo transitions ${
            isLiked && "bg-transparent"
          } hover:bg-transparent border-2 border-star rounded-md bg-star text-white`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default Book;
