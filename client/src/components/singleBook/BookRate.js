import React, { useEffect, useState } from "react";

import { BsBookmarkStarFill } from "react-icons/bs";
import Titles from "../Titles";
import { Massage, Select } from "../UsedInput";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReviewValidation } from "../validation/Booksvalidation";
import { reviewBookAction } from "../../Redux/Actions/BooksActions";
import { toast } from "react-hot-toast";
import { InlineError } from "./../notifiations/Error";
import { Link } from "react-router-dom";
import { Empty } from "./../notifiations/Empty";

function BookRate({ book }) {
  const Rating = [
    {
      title: "0-Star",
      value: 0,
    },
    {
      title: "1-Star",
      value: 1,
    },
    {
      title: "2-Star",
      value: 2,
    },
    {
      title: "3-Star",
      value: 3,
    },
    {
      title: "4-Star",
      value: 4,
    },
    {
      title: "5-Star",
      value: 5,
    },
  ];
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.reviewBook);
  const { userInfo } = useSelector((state) => state.userLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReviewValidation),
  });

  const onSubmit = (data) => {
    dispatch(reviewBookAction({ id: book?._id, review: { ...data } }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch({ type: "BOOK_REVIEW_RESET" });
    }
  }, [dispatch, isError]);

  return (
    <div className="my-12">
      <Titles title="Reviwes" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20   rounded   ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="xl:col-span-2 w-full flex flex-col gap-8 "
        >
          <h3 className=" text-xl text-text font-bold">
            Reviwe ! {book.title}
          </h3>
          <p className="text-sm leading-7 font-medium  text-border  ">
            Write a review for the book
          </p>
          <div className="text-s w-full ">
            <Select
              label=" Select Rating"
              options={Rating}
              name="rating"
              register={{ ...register("rating") }}
            ></Select>
          </div>
          <Massage
            label="Massage"
            name="comment"
            register={{ ...register("comment") }}
            placeholder="Make it short and useful "
          ></Massage>
          {errors.comment && <InlineError message={errors.comment.message} />}
          {/* submit */}
          {userInfo ? (
            <button
              disabled={isLoading}
              className="bg-star text-white py-3 w-full flex-colo rounded"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-star text-white py-3 w-full flex-colo rounded"
            >
              Login to review
            </Link>
          )}
        </form>
        <div className=" col-span-3 flex flex-col gap-6  ">
          <h3 className=" text-xl text-text font-semibold ">
            {" "}
            Reviews ({book?.numberOfReviews})
          </h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll ">
            {book?.reviews?.length > 0 ? (
              book.reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg"
                >
                  <div className="col-span-2 bg-main hidden md:block">
                    <img
                      src={`${
                        review?.userImage
                          ? review.userImage
                          : "/imges/Users/1.jpg"
                      }`}
                      alt={review?.userName}
                      className="w-full h-24 border border-border rounded-lg object-cover"
                    />
                  </div>
                  <div className="col-span-7 flex flex-col gap-2">
                    <h2>{review?.userName}</h2>
                    <p className="text-xs leading-6 font-medium text-text">
                      {review?.comment}
                    </p>
                  </div>
                  {/* rates */}
                </div>
              ))
            ) : (
              <Empty message={`Be first to rate "${book?.title}" `} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRate;
