import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlus } from "react-icons/hi";
import Table2 from "../../../components/Table2";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmotion,
  getAllEmotions,
} from "../../../Redux/Actions/EmotionsActions";
import { toast } from "react-hot-toast";
import Loader from "../../../components/notifiations/Loader";
import { Empty } from "../../../components/notifiations/Empty";
import EmotionModal from "./../../../components/Modals/EmotionMadal";

function Emotion() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [emotion, setEmotion] = useState();
  const { emotions, isLoading } = useSelector((state) => state.emotionList);
  const { isError: deleteError, isSuccess } = useSelector(
    (state) => state.deleteEmotion
  );
  const OnEditFunction = (id) => {
    setEmotion(id);
    setModalOpen(!modalOpen);
  };
  // admin delete emotion handler
  const adminDeleteUserHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this emotion?")) {
      dispatch(deleteEmotion(id));
    }
  };
  useEffect(() => {
    // get all emotions
    dispatch(getAllEmotions());

    if (deleteError) {
      toast.error(deleteError);
      dispatch({
        type: "DELETE_EMOTIONS_RESET",
      });
    }
    if (isSuccess) {
      dispatch({
        type: "DELETE_EMOTIONS_RESET",
      });
    }
  }, [modalOpen, deleteError, dispatch, isSuccess]);
  return (
    <div className="bg-main">
      <EmotionModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        emotion={emotion}
      />
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold"> Emotion </h2>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-star flex-rows gap-4 font-medium transtions hover:bg-star border-star text-white py-2 px-4 rounded "
            >
              <HiPlus /> Create
            </button>
          </div>
          {isLoading ? (
            <Loader />
          ) : emotions?.length > 0 ? (
            <Table2
              data={emotions}
              users={false}
              onDeleteFunction={adminDeleteUserHandler}
              OnEditFunction={OnEditFunction}
            />
          ) : (
            <Empty message="You have no emotions" />
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default Emotion;
