import * as userConstants from "../Constants/userConstants";
import * as userApi from "../APIs/userServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";
// login Action
const LoginAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const response = await userApi.loginService(datas);
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
  }
};
// register action
const registerAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const response = await userApi.registerService(data);
    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: response,
    });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
  }
};

//logout action
const logoutAction = () => (dispatch) => {
  userApi.logOutService();
  dispatch({ type: userConstants.USER_LOGOUT });
  dispatch({ type: userConstants.USER_LOGIN_RESET });
  dispatch({ type: userConstants.USER_REGISTER_RESET });
};

// update profile action
const updateProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_UPDATA_PROFILE_REQUEST });
    const response = await userApi.updateProfileService(
      user,
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.USER_UPDATA_PROFILE_SUCCESS,
      payload: response,
    });
    toast.succes("profile updated ");
    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_UPDATA_PROFILE_FAIL);
  }
};
// delete profile action
const deleteProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_DELETE_REQUEST });
    await userApi.deleteProfileService(tokenProtection(getState));
    dispatch({ type: userConstants.USER_DELETE_SUCCESS });
    toast.success("Account Deleted ");
    dispatch(logoutAction());
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_DELETE_FAIL);
  }
};
// change password action
const changePasswordAction = (passwords) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
    const response = await userApi.changePasswordService(
      passwords,
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.USER_CHANGE_PASSWORD_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
  }
};

// get all liked movies action
const getLikedBooksAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_GET_LIKED_BOOKS_REQUEST });
    const response = await userApi.getLikedBooksService(
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.USER_GET_LIKED_BOOKS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_GET_LIKED_BOOKS_FAIL);
  }
};
// delete all liked books action
const deleteLikedBooksAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.DELETE_ALL_FAVORITES_REQUEST });
    await userApi.deleteAllLikedBooksService(tokenProtection(getState));
    dispatch({ type: userConstants.DELETE_ALL_FAVORITES_SUCCESS });
    toast.success("All Favorites Deleted ");
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.DELETE_ALL_FAVORITES_FAIL);
  }
};

// Admin get all users action
const getAllUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });
    const response = await userApi.getAllUsersService(
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.GET_ALL_USERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.GET_ALL_USERS_FAIL);
  }
};

// Admin delete user action
const deleteUserAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.DELETE_USER_REQUEST });
    await userApi.deleteUserByIdService(id, tokenProtection(getState));
    dispatch({ type: userConstants.DELETE_USER_SUCCESS });
    toast.success("User Deleted ");
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.DELETE_USER_FAIL);
  }
};
// user like book movie action

const likeBookAction = (bookId) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_LIKE_BOOK_REQUEST });
    const response = await userApi.likeBookService(
      bookId,
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.USER_LIKE_BOOK_SUCCESS,
      payload: response,
    });
    toast.success("book added to favorites ");
    dispatch(getLikedBooksAction());
  } catch (error) {
    ErrorsAction(error, dispatch, userConstants.USER_LIKE_BOOK_FAIL);
  }
};
export {
  LoginAction,
  registerAction,
  logoutAction,
  updateProfileAction,
  deleteProfileAction,
  changePasswordAction,
  getLikedBooksAction,
  deleteLikedBooksAction,
  deleteUserAction,
  getAllUsersAction,
  likeBookAction,
};
