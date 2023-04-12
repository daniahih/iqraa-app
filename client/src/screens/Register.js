import React, { useEffect } from "react";
import { Input } from "../components/UsedInput";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { InlineError } from "../components/notifiations/Error";
import { toast } from "react-hot-toast";
import { registerAction } from "../Redux/Actions/userActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidation } from "../components/validation/UserValidation";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, isLoading, isError, isSuccess } = useSelector(
    (state) => state.userRegister
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidation),
  });

  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/dashboard");
    } else if (userInfo) {
      navigate("/profile");
    }
    if (isSuccess) {
      toast.success(`Welcome ${userInfo?.fullName} `);
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_REGISTER_RESET" });
    }
  }, [userInfo, isSuccess, dispatch, navigate, isError]);
  return (
    <div className=" container mx-auto px-2 my-24 flex-colo">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full 2xl:w-2/5  gap-8 flex-colo p-14 md:w-3/5 bg-dry border border-border"
      >
        <h1 className="font-bold text-lg"> Register</h1>

        <div className="w-full">
          <Input
            label="FullName"
            placeholder="yourName"
            type="text"
            name="FullName"
            register={{ ...register("fullName") }}
            bg={true}
          ></Input>
          {errors.FullName && <InlineError text={errors.FullName.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Email"
            placeholder="Exaample@gmail.com"
            type="email"
            name="email"
            register={{ ...register("email") }}
            bg={true}
          ></Input>
          {errors.email && <InlineError text={errors.email.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Password"
            placeholder="*****"
            type="password"
            name="password"
            register={{ ...register("password") }}
            bg={true}
          ></Input>
          {errors.password && <InlineError text={errors.password.message} />}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className=" bg-star transtions hover:bg:main flex-rows gap-4 text-white w-full border h-10 border-border"
        >
          {isLoading ? (
            "...loading"
          ) : (
            <>
              <FaSignInAlt /> Sign Up
            </>
          )}
        </button>
        <div className="flex ">
          <p className="text-center  text-border">Already have an account ?</p>
          <Link to="/login" className=" text-dryGray font-light  ml-2">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
