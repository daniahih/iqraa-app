const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModels");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middleware/Auth");
//@desc Register  Users
//@route GET /api/Users
//@access public
const RegisterUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, image } = req.body;
  try {
    const userExists = await User.findOne({ email });
    //cheack if the user exists
    if (userExists) {
      res.status(400);
      throw new Error(" User already exists ");
    }
    // else crate user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      image,
    });
    // if user created sucessfuly send the user data and token to client side
    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalied user ");
    }
  } catch (error) {}
});
module.exports = {
  RegisterUser,
};
