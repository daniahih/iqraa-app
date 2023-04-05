import React from "react";
import Banner from "../components/Home/Banner";
import PopularBooks from "../components/Home/PopularBooks";

function HomeScreen() {
  return (
    <>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularBooks />
      </div>
    </>
  );
}

export default HomeScreen;
