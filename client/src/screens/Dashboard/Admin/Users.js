import React from "react";
import SideBar from "../SideBar";

import Table2 from "../../../components/Table2";

import { UsersData } from "../../../Data/UsersData";

function Users() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Users </h2>

          <Table2 data={UsersData} users={true} />
        </div>
      </SideBar>
    </div>
  );
}

export default Users;
