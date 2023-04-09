import React from "react";

import SideBar from "../SideBar";
import { Input, Massage, Select } from "../../../components/UsedInput";
import Update from "../../../components/Update";
import { CategoriesData } from "../../../Data/CategoriesData";
import { ImUpload } from "react-icons/im";
import { emotionData } from "../../../Data/emotionData";

function AddBook() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-xl font-bold"> Create Book </h1>
          <div className="w-full grid md:grid-cols-2 gap-6 ">
            <Input
              label="Book Title"
              placeholder="The Game"
              type="text"
              bg={true}
            ></Input>
            <Input
              label="Author"
              placeholder=" Deek Aljeen "
              type="text"
              bg={true}
            ></Input>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-6 ">
            <Input
              label="Language "
              placeholder="Arabic"
              type="text"
              bg={true}
            ></Input>
            <Input
              label="PublicationData"
              placeholder=" 2023"
              type="number"
              bg={true}
            ></Input>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6 ">
              <p>Uplode Image </p>
              <Update />
            </div>
          </div>
          <Massage label="Book Summary" placeholder="make it short "></Massage>
          <div className=" text-sm w-full ">
            <Select label="Book Category" options={CategoriesData}></Select>
          </div>
          <div className=" text-sm w-full ">
            <Select label="Book emotion" options={emotionData}></Select>
          </div>
        </div>
        <div className="flex justify-end items-center my-4">
          <button className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded ">
            <ImUpload /> Puplish Book
          </button>
        </div>
      </SideBar>
    </div>
  );
}

export default AddBook;
