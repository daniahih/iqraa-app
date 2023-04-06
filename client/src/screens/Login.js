import React from "react";
import { Input } from "../components/UsedInput";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  return (
    <div className=" container mx-auto px-2 my-24 flex-colo">
      <div className="w-full 2xl:w-2/5  gap-8 flex-colo p-14 md:w-3/5 bg-dry border border-border">
        <h1 className="font-bold text-lg"> Login</h1>
        <Input
          label="Email"
          placeholder="Exaample@gmail.com"
          type="email"
          bg={true}
        ></Input>
        <Input
          label="Password"
          placeholder="*****"
          type="password"
          bg={true}
        ></Input>
        <Link
          to="/dashboard"
          className=" bg-star transtions hover:bg-main flex-rows gap-4 text-white w-full border h-10 border-border"
        >
          <FaSignInAlt /> login
        </Link>
        <div className="flex ">
          <p className="text-center  text-border">Don't have an account ?</p>
          <Link to="/register" className=" text-dryGray font-light  ml-2">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
