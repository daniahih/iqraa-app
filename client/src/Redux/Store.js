import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducer";
import * as Categories from "./Reducers/CategoriesReducer";
import * as Books from "./Reducers//BooksReducer";
import * as Emotions from "./Reducers/EmotionReducer";

const rootReducer = combineReducers({
  // user reducers
  // comone reducers is an object that contain a multiple reducer iton a single one
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateProfile: User.updateProfileReducer,
  userDeleteProfile: User.userDeleteReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetLikedBooks: User.userGetLikedBooksReducer,
  deleteLikedBooks: User.userDeleteLikedBooksReducer,
  getAllUsers: User.adminGetAllUsersReducer,
  deleteUser: User.adminDeleteUserReducer,
  // categories reducer
  categoriesList: Categories.categoriesListReducer,
  createCategory: Categories.createCategoryReducer,
  deleteCategory: Categories.deleteCategoryReducer,
  updateCategory: Categories.updateCategoryReducer,
  // emotion reducer
  emotionList: Emotions.emotionsListReducer,
  createEmotion: Emotions.createEmotionReducer,
  deleteEmotion: Emotions.deleteEmotionReducer,
  updateEmotion: Emotions.updateEmotionReducer,
  // bokks reducer
  booksList: Books.BooksListReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//initialState
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState, // tho set the initial state of the store
});
