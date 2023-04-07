const User = require("../Models/UserModels");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middleware/Auth");
//@desc Register  Users
//@route post  /api/Users
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// post method
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user in the db
    const user = await User.findOne({ email });
    // check the user is exists and if the user exists compare the password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
      // if theres a user but theres an error in password
    } else {
      res.status(401);
      throw new Error("Invalid email or Password ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//updata user profile
//put method
const UpdateUser = asyncHandler(async (req, res) => {
  const { fullName, email, image } = req.body;
  try {
    // find the user in the database
    const user = await User.findById(req.user._id);
    // if the user exists update the user and save it to database
    if (user) {
      user.fullName = fullName || user.fullName;
      user.email = email || user.email;
      user.image = image || user.image;
      const updatedUser = await user.save();
      // send the updated user to client
      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  RegisterUser,
  LoginUser,
  UpdateUser,
};
