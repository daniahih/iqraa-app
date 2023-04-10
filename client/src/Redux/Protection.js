import { logoutAction } from "./Actions/userActions";

export const ErrorsAction = (error, dispatch, action) => {
  const massage =
    error.response && error.response.data.massage
      ? error.response.data.massage
      : error.massage;
  if (massage === "Not authorized , token failed") {
    //  we are going to logout if token failed
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: massage });
};
