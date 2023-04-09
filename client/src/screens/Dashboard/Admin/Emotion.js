import React from "react";
import SideBar from "../SideBar";
import { HiPlus } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { emotionData } from "./../../../Data/emotionData";

function Emotion() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold"> Emotion </h2>
            <button className="bg-star flex-rows gap-4 font-medium transtions hover:bg-star border-star text-white py-2 px-4 rounded ">
              <HiPlus /> Create
            </button>
          </div>
          <Table2 data={emotionData} users={false} />
        </div>
      </SideBar>
    </div>
  );
}

export default Emotion;
