import * as EmotionsConstants from "../Constants/EmotionConstants";
import * as EmotionApi from "../APIs/emotionServices";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";

// get all  emotion  action
export const getAllEmotions = () => async (dispatch) => {
  try {
    dispatch({ type: EmotionsConstants.GET_ALL_EMOTIONS_REQUEST });
    const response = await EmotionApi.getAllEmotionService();

    dispatch({
      type: EmotionsConstants.GET_ALL_EMOTIONS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, EmotionsConstants.GET_ALL_EMOTIONS_FAIL);
  }
};

// create category action
export const createEmotion = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: EmotionsConstants.CREATE_EMOTIONS_REQUEST });
    const response = await EmotionApi.createEomtionService(
      title,
      tokenProtection(getState)
    );
    dispatch({
      type: EmotionsConstants.CREATE_EMOTIONS_SUCCESS,
      payload: response,
    });
    toast.success("emotion  created successfully");
  } catch (error) {
    ErrorsAction(error, dispatch, EmotionsConstants.CREATE_EMOTIONS_FAIL);
  }
};

// update emotion  action
export const updateEmotion = (id, title) => async (dispatch, getState) => {
  try {
    dispatch({ type: EmotionsConstants.UPDATE_EMOTIONS_REQUEST });
    const response = await EmotionApi.updateEmotionService(
      id,
      title,
      tokenProtection(getState)
    );
    dispatch({
      type: EmotionsConstants.UPDATE_EMOTIONS_SUCCESS,
      payload: response,
    });
    toast.success("Emotion  updated successfully");
    dispatch(getAllEmotions());
  } catch (error) {
    ErrorsAction(error, dispatch, EmotionsConstants.UPDATE_EMOTIONS_FAIL);
  }
};

// delete EMOTIONS action
export const deleteEmotion = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: EmotionsConstants.DELETE_EMOTIONS_REQUEST });
    const response = await EmotionApi.deleteEmotionService(
      id,
      tokenProtection(getState)
    );
    dispatch({
      type: EmotionsConstants.DELETE_EMOTIONS_SUCCESS,
      payload: response,
    });
    toast.success("emotion  deleted successfully");
    dispatch(getAllEmotions());
  } catch (error) {
    ErrorsAction(error, dispatch, EmotionsConstants.DELETE_EMOTIONS_FAIL);
  }
};
