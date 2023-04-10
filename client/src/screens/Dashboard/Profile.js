import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Update from "../../components/Update";
import { Input } from "../../components/UsedInput";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileValidation } from "../../components/validation/UserValidation";
import {
  deleteProfileAction,
  updateProfileAction,
} from "../../Redux/Actions/userActions";
import { toast } from "react-hot-toast";
import { InlineError } from "./../../components/notifiations/Error";
function Profile() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userUpdateProfile
  );
  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.userDeleteProfile
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileValidation),
  });
  // update user profile
  const onSubmit = (data) => {
    console.log({ ...data });
    dispatch(updateProfileAction({ ...data }));
  };
  // delete Profile
  const deleteProfile = () => {
    window.confirm("Are you sure you want to delete your profile?") &&
      dispatch(deleteProfileAction());
  };
  useEffect(() => {
    if (userInfo) {
      setValue("fullName", userInfo.fullName);
      setValue("email", userInfo.email);
    }
    if (isSuccess) {
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
    }
    if (isError || deleteError) {
      toast.error(isError);
    }
  }, [userInfo, isSuccess, isError, dispatch, setValue, deleteError]);
  return (
    <div className="bg-main">
      <SideBar>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-6 "
        >
          <h1 className="text-xl font-bold"> Profile</h1>

          <Update />
          <div className="w-full">
            <Input
              label="Full Name"
              placeholder=" YOUR NAME"
              type="text"
              bg={true}
              name="fullName"
              register={{ ...register("fullName") }}
            />
            {errors.fullName && (
              <InlineError message={errors.fullName.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Email"
              placeholder="forexample@gmail.com"
              type="email"
              bg={true}
              name="email"
              register={{ ...register("email") }}
            />
            {errors.email && <InlineError message={errors.email.message} />}
          </div>
          <div className="flex-btn gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4 ">
            <button
              disabled={deleteLoading || isLoading}
              onClick={deleteProfile}
              className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded "
            >
              {deleteLoading ? "Deleting..." : "Delete Profile"}
            </button>
            <button
              disabled={deleteLoading || isLoading}
              className="bg-star transtions hover:bg-main flex-rows gap-4 py-3 px-6  text-white border h-10 border-border rounded "
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </SideBar>
    </div>
  );
}

export default Profile;
