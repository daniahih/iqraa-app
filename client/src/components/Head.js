import React from "react";

function Head() {
  return (
    <div className="w-full bg-gray lg:h-64 relative overflow-hidden rounded-md  ">
      <img
        src="imges/Books/2.jpg"
        alt="about us "
        className=" w-full h-full object-cover "
      />
      <div className="absolute lg:top-24 top-16 w-full flex-colo">
        <h1 className=" text-white text-bold text-center text-2xl bg-main w-40">
          About US
        </h1>
      </div>
    </div>
  );
}

export default Head;
