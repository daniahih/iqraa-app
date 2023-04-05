import React from "react";

function BookInfo({ book }) {
  return (
    <div className="w-full xl:h-screen realtive text-white ">
      <img
        src={`/imges/Books/${book.image}`}
        alt={book.title}
        className=" w-full hidden xl:inline-block h-full  object-cover "
      />
      <div className="xl:bg-main h-full bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 right-0 left-0 bottom-0">
        <div className="container px-3  mx-auto 2xl:px-32 xl:grid  grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className=" xl:col-span-1 w-full xl:order-none order-last h-90 bg-dry border border-border rounded-lg overflow-hidden  ">
            <img
              src={`/imges/Books/${book.image}`}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
