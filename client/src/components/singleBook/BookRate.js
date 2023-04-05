import React, { useState } from "react";

import { BsBookmarkStarFill } from "react-icons/bs";
import Titles from "../Titles";
import { Massage, Select } from "../UsedInput";
import { UsersData } from "../../Data/UsersData";

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
  const [rating, setRating] = useState();
  return (
    <div className="my-12">
      <Titles title="Reviwes" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20   rounded   ">
        <div className="xl:col-span-2 w-full flex flex-col gap-8 ">
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
              onChange={(e) => setRating(e.target.value)}
            ></Select>
            <div className="flex mt-4 text-lg gap-2 text-star "></div>
          </div>
          <Massage
            label="Massage"
            placeholder="Make it short and useful "
          ></Massage>
          <button className="bg-star text-white py-3 w-full rounded flex-colo ">
            Submit
          </button>
        </div>
        <div className=" col-span-3 flex flex-col gap-6  ">
          <h3 className=" text-xl text-text font-semibold ">Reviews (50)</h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll ">
            {UsersData.map((user, i) => (
              <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4  border border-gray-800 rounded-lg  ">
                <div className="col-span-2 hidden md:block">
                  <img
                    src={`/imges/Users/${user ? user.image : "user.jpg"}`}
                    alt={user.fullName}
                    className="w-full h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{user.fullName}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {user.massage}
                  </p>
                </div>
                {/* <div className="col-span-3 flex-row border-l border-border text-xs gap-1 text-star">
                  <Rating value={user.rate} />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRate;
