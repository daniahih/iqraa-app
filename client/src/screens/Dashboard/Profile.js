import React from "react";
import SideBar from "./SideBar";
import Update from "../../components/Update";
import { Input } from "../../components/UsedInput";
function Profile() {
  return (
    <div className="bg-main">
      <SideBar>
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-xl font-bold"> Profile</h1>
          <Update />
          <Input
            label="FullName"
            placeholder="Dania Hih"
            type="text"
            bg={true}
          ></Input>
          <Input
            label="Email"
            placeholder="Exaample@gmail.com"
            type="email"
            bg={true}
          ></Input>
          <div className="flex-btn gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4 ">
            <button className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded ">
              Delete Acount
            </button>
            <button className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded ">
              Update Profile
            </button>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default Profile;
