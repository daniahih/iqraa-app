import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInput";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmotion,
  updateEmotion,
} from "../../Redux/Actions/EmotionsActions";
import toast from "react-hot-toast";

function EmotionModal({ modalOpen, setModalOpen, emotion }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const { isSuccess, isLoading, isError } = useSelector(
    (state) => state.createEmotion
  );
  const {
    isSuccess: upSuccess,
    isLoading: upLoading,
    isError: upError,
  } = useSelector((state) => state.updateEmotion);

  // create emotion handler
  const submitEotionHandler = (e) => {
    e.preventDefault();
    if (title) {
      // if emotion is not empty then create emotion else update emotion
      if (emotion) {
        dispatch(updateEmotion(emotion?._id, { title: title }));
        setModalOpen(!modalOpen);
      } else {
        dispatch(createEmotion({ title: title }));
        setTitle("");
      }
    } else {
      toast.error("Please enter a title");
    }
  };

  // useEffect
  useEffect(() => {
    // if create category is failed or update category is failed then show error
    if (isError || upError) {
      toast.error(isError || upError);
      dispatch({
        type: isError ? "CREATE_EMOTIONS_RESET" : "UPDATE_EMOTIONS_RESET",
      });
    }

    // if success or update success then reset the store
    if (isSuccess || upSuccess) {
      dispatch({
        type: isSuccess ? "CREATE_EMOTIONS_RESET" : "UPDATE_EMOTIONS_RESET",
      });
    }

    // if emotion is not null then set title to category title
    if (emotion) {
      setTitle(emotion?.title);
    }

    // if modal is closed then set title to empty
    if (modalOpen === false) {
      setTitle("");
    }
  }, [dispatch, isSuccess, isError, upSuccess, upError, emotion, modalOpen]);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">{emotion ? "Update" : "Create"}</h2>
        <form
          onSubmit={submitEotionHandler}
          className="flex flex-col gap-6 text-left mt-6"
        >
          <Input
            label="Emotion Name "
            placeholder={" for example : stress  "}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            bg={false}
          />
          <button className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-star rounded bg-start text-white">
            {isLoading || upLoading
              ? "Loading..."
              : emotion
              ? "Update"
              : "Create"}
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default EmotionModal;
