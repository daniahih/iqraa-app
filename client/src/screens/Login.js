import React, { useEffect } from "react";
import { Input } from "../components/UsedInput";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LoginValidation } from "../components/validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { InlineError } from "../components/notifiations/Error";
import { LoginAction } from "../Redux/Actions/userActions";
import { toast } from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  // validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidation) });

  //on submit
  const onSubmit = (data) => {
    debugger;
    console.log(data);
    dispatch(LoginAction(data));
  };

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/dashboard");
    } else if (userInfo) {
      navigate("/profile");
    }
    if (isSuccess) {
      toast.success(`welcome back ${userInfo?.fullName}`);
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_LOGIN_RESET" });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);
  return (
    <div className=" container mx-auto px-2 my-24 flex-colo">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full 2xl:w-2/5  gap-8 flex-colo p-14 md:w-3/5 bg-dry border border-border"
      >
        <h1 className="font-bold text-lg"> Login</h1>
        <div className="w-full">
          <Input
            label="Email"
            placeholder="Exaample@gmail.com"
            type="email"
            name="email"
            register={register("email")}
            bg={true}
          ></Input>
          {errors.email && <InlineError text={errors.email.message} />}
        </div>

        <div className="w-full">
          <Input
            label="Password"
            placeholder="*****"
            type="password"
            bg={true}
            name="password"
            register={register("password")}
          ></Input>
          {errors.password && <InlineError text={errors.password.message} />}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className=" bg-star transtions hover:bg-main flex-rows gap-4 text-white w-full border h-10 border-border"
        >
          {isLoading ? (
            "...loading"
          ) : (
            <>
              <FaSignInAlt /> login
            </>
          )}
        </button>
        <div className="flex ">
          <p className="text-center  text-border">Don't have an account ?</p>
          <Link to="/register" className=" text-dryGray font-light  ml-2">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
