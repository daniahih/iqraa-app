import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducer";

const rootReducer = combineReducers({
  // user reducers
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateProfile: User.updateProfileReducer,
  userDeleteProfile: User.userDeleteReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetLikedBooks: User.userGetLikedBooksReducer,
  deleteLikedBooks: User.userDeleteLikedBooksReducer,
  getAllUsers: User.adminGetAllUsersReducer,
  deleteUser: User.adminDeleteUserReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//initialState
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // userRegister: { userInfo: userInfoFromStorage },
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
