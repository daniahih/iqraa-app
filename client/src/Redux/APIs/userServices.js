import Axios from "./Axios";
// register new user API CALL
const registerService = async (user) => {
  const { data } = await Axios.post("/users", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};
//logout user function
const logOutService = () => {
  localStorage.removeItem("userInfo");
  return null;
};
//login user api call
const loginService = async (user) => {
  const { data } = await Axios.post("/users/login", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};
export { registerService, logOutService, loginService };
