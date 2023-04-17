import * as EmotionsConstants from "../Constants/EmotionConstants";

// GET ALL emotions

export const emotionsListReducer = (state = { emotions: [] }, action) => {
  switch (action.type) {
    case EmotionsConstants.GET_ALL_EMOTIONS_REQUEST:
      return { isLoading: true };
    case EmotionsConstants.GET_ALL_EMOTIONS_SUCCESS:
      return { isLoading: false, emotions: action.payload };
    case EmotionsConstants.GET_ALL_EMOTIONS_FAIL:
      return { isLoading: false, isError: action.payload };

    default:
      return state;
  }
};

// CREATE Emotion

export const createEmotionReducer = (state = {}, action) => {
  switch (action.type) {
    case EmotionsConstants.CREATE_EMOTIONS_REQUEST:
      return { isLoading: true };
    case EmotionsConstants.CREATE_EMOTIONS_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case EmotionsConstants.CREATE_EMOTIONS_FAIL:
      return { isLoading: false, isError: action.payload };
    case EmotionsConstants.CREATE_EMOTIONS_RESET:
      return {};
    default:
      return state;
  }
};

// UPDATE Emotion

export const updateEmotionReducer = (state = {}, action) => {
  switch (action.type) {
    case EmotionsConstants.UPDATE_EMOTIONS_REQUEST:
      return { isLoading: true };
    case EmotionsConstants.UPDATE_EMOTIONS_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case EmotionsConstants.UPDATE_EMOTIONS_FAIL:
      return { isLoading: false, isError: action.payload };
    case EmotionsConstants.UPDATE_EMOTIONS_RESET:
      return {};
    default:
      return state;
  }
};

// DELETE emorion

export const deleteEmotionReducer = (state = {}, action) => {
  switch (action.type) {
    case EmotionsConstants.DELETE_EMOTIONS_REQUEST:
      return { isLoading: true };
    case EmotionsConstants.DELETE_EMOTIONS_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case EmotionsConstants.DELETE_EMOTIONS_FAIL:
      return { isLoading: false, isError: action.payload };
    case EmotionsConstants.DELETE_EMOTIONS_RESET:
      return {};
    default:
      return state;
  }
};
