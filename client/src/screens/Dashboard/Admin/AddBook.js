import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";
import { Input, Massage, Select } from "../../../components/UsedInput";
import Update from "../../../components/Update";
import { CloudinaryContext, Image } from "cloudinary-react";

import { ImUpload } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookValidation } from "../../../components/validation/Booksvalidation";
import { createBookAction } from "../../../Redux/Actions/BooksActions";
import { CREATE_BOOK_RESET } from "../../../Redux/Constants/BooksConstants";
import { toast } from "react-hot-toast";
import { InlineError } from "../../../components/notifiations/Error";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  // get all categories and emotion
  const { categories } = useSelector((state) => state.categoriesList);
  const { emotions } = useSelector((state) => state.emotionList);
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createBook
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BookValidation),
  });

  const onSubmit = (data) => {
    dispatch(
      createBookAction({
        ...data,
        imageUrl: data.imageUrl,
      })
    );
    console.log("data", data);
  };

  useEffect(() => {
    // if it is success then reset the form
    if (isSuccess) {
      reset({
        title: "",
        Author: "",
        language: "",
        PublicationData: "",
        description: "",
        category: "",
        emotion: "",
      });
      // setImageWithoutTitle("");

      dispatch({ type: CREATE_BOOK_RESET });
    }
    // if it is error then show error
    if (isError) {
      toast.error(isError);
    }
  }, [isError, dispatch, reset, isSuccess, navigate]);
  return (
    <div className="bg-main">
      <SideBar>
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-xl font-bold"> Create Book </h1>
          <div className="w-full grid md:grid-cols-2 gap-6 ">
            <Input
              label="Book Title"
              placeholder="The Game"
              type="text"
              bg={true}
              name="title"
              register={{ ...register("title") }}
            ></Input>
            {errors.name && <InlineError message={errors.title.message} />}
            <Input
              label="Author"
              placeholder=" Deek Aljeen "
              type="text"
              bg={true}
              name="Author"
              register={{ ...register("Author") }}
            ></Input>
            {errors.time && <InlineError message={errors.Author.message} />}
          </div>
          <Input
            label="PublicationData"
            placeholder=" 2023"
            type="number"
            bg={true}
            name="PublicationData"
            register={{ ...register("PublicationData") }}
          ></Input>

          <div className="w-full grid md:grid-cols-2 gap-6 ">
            <Input
              label="Language "
              placeholder="Arabic"
              type="text"
              bg={true}
              name="language"
              register={{ ...register("language") }}
            ></Input>
            {errors.language && (
              <InlineError message={errors.language.message} />
            )}
          </div>
          <Input
            label="Image URL"
            placeholder="https://example.com/image.jpg"
            type="text"
            bg={true}
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            register={{ ...register("imageUrl") }}
          />

          <Massage
            label="Book Summary"
            placeholder="make it short "
            name="description"
            register={{ ...register("description") }}
          ></Massage>
          {errors.desc && <InlineError message={errors.description.message} />}
          <div className=" text-sm w-full ">
            <Select
              label="Book Category"
              options={categories?.length > 0 ? categories : []}
              name="category"
              register={{ ...register("category") }}
            ></Select>
          </div>
          <div className=" text-sm w-full ">
            <Select
              label="Book emotion"
              options={emotions?.length > 0 ? emotions : []}
              name="emotion"
              register={{ ...register("emotion") }}
            ></Select>
          </div>
          {errors.category && <InlineError message={errors.emotions.message} />}
        </div>
        <div className="flex justify-end items-center my-4">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-star w-full flex-rows gap-6 font-medium text-white py-4 rounded"
          >
            {isLoading ? (
              "Please Wait..."
            ) : (
              <>
                <ImUpload /> Publish Book
              </>
            )}
          </button>
        </div>
      </SideBar>
    </div>
  );
}

export default AddBook;
