// Authinticted user & get token
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModels");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
};
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // check if the token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // set token from Bearer token in header
    try {
      token = req.headers.authorization.split(" ")[1];
      // verify token and get user
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user id from decoded token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not authorixd . token failed ");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("not authorixd . token failed ");
  }
});
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error(" Not authorized as a admin ");
  }
};
module.exports = {
  generateToken,
  protect,
  admin,
};
