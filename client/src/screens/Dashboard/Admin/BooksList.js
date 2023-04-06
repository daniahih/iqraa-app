import React from "react";

import Table from "../../../components/Table";
import { Books } from "../../../Data/BookData";
import SideBar from "../SideBar";

function BooksList() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold">Books List </h2>
            <button className="bg-main font-medium transtions hover:bg-star border-star text-white py-3 px-6 rounded ">
              Delete All
            </button>
          </div>
          <Table data={Books} admin={true} />
        </div>
      </SideBar>
    </div>
  );
}

export default BooksList;
