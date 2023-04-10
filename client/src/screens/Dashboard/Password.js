import React, { useEffect } from "react";
import SideBar from "./SideBar";

import { Input } from "../../components/UsedInput";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordValidation } from "../../components/validation/UserValidation";

import { toast } from "react-hot-toast";
import { InlineError } from "./../../components/notifiations/Error";
import { changePasswordAction } from "../../Redux/Actions/userActions";

function Password() {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userChangePassword
  );
  // yup validation
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordValidation),
  });
  // change password submit handler
  const onSubmit = (data) => {
    dispatch(changePasswordAction(data));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
      toast.success("your password has been changed");
    }
    if (isError) {
      toast.error(isError);
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [setValue, isSuccess, dispatch, isError, message, reset]);
  return (
    <div className="bg-main">
      <SideBar>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-6 "
        >
          <h1 className="text-xl font-bold"> Change Password </h1>

          <div className="w-full">
            <Input
              label="Previous Password"
              placeholder="********"
              type="password"
              bg={true}
              name="oldPassword"
              register={{ ...register("oldPassword") }}
            />
            {errors.oldPassword && (
              <InlineError message={errors.oldPassword.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="New Password"
              placeholder="********"
              type="password"
              bg={true}
              name="newPassword"
              register={{ ...register("newPassword") }}
            />
            {errors.newPassword && (
              <InlineError message={errors.newPassword.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Confirm Password"
              placeholder="********"
              type="password"
              bg={true}
              name="confirmPassword"
              register={{ ...register("confirmPassword") }}
            />
            {errors.confirmPassword && (
              <InlineError message={errors.confirmPassword.message} />
            )}
          </div>
          <div className="flex justify-end items-center my-4">
            <button
              disabled={isLoading}
              className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded "
            >
              Change Password
            </button>
          </div>
        </form>
      </SideBar>
    </div>
  );
}

export default Password;
