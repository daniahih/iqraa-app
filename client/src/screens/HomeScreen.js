import React from "react";
import Banner from "../components/Home/Banner";
import PopularBooks from "../components/Home/PopularBooks";
import TopRated from "../components/Home/TopRated";

function HomeScreen() {
  return (
    <>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularBooks />
        <TopRated />
      </div>
    </>
  );
}

export default HomeScreen;
