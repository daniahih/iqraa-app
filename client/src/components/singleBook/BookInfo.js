import React from "react";

function BookInfo({ book }) {
  return (
    <div className="w-full xl:h-screen realtive text-white ">
      <div className="xl:bg-main h-full bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 right-0 left-0 bottom-0">
        <div className="container  px-3  mx-auto 2xl:px-32 xl:grid  grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className=" xl:col-span-1 w-full xl:order-none order-last h-90 bg-dry border border-border rounded-lg overflow-hidden  ">
            <img
              src={`/imges/Books/${book?.image}`}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10 ">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl  font-bold ">
                {book.title}
              </h1>
              <div className="  gap-4 font-medium flex-colo  text-dryGray ">
                <div className="flex  gap-10">
                  <div className="flex border border-border text-lg px-2 py-1 rounded-sm">
                    <h1>{book.Author}</h1>
                  </div>
                  <div className="border border-border text-lg px-2 py-1 rounded-sm">
                    <h1> {book.category}</h1>
                  </div>
                </div>

                <p className="text-text text-sm leading-7 ">
                  {book.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
