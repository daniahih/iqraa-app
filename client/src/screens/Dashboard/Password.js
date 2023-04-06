import React from "react";
import SideBar from "./SideBar";

import { Input } from "../../components/UsedInput";

function Password() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-xl font-bold"> Change Password </h1>

          <Input
            label="Pervious Password "
            placeholder="*******"
            type="password"
            bg={true}
          ></Input>
          <Input
            label="New Password "
            placeholder="******"
            type="password"
            bg={true}
          ></Input>
          <Input
            label="Confirm Password "
            placeholder="******"
            type="password"
            bg={true}
          ></Input>
          <div className="flex justify-end items-center my-4">
            <button className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded ">
              Change Password
            </button>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default Password;
