const User = require("../Models/UserModels");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middleware/Auth");
//@desc Register  Users
//@route post  /api/Users
//@access public
const RegisterUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
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
    });
    // if user created sucessfuly send the user data and token to client side
    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
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

const DeleteProfile = asyncHandler(async (req, res) => {
  try {
    //find the user in the database
    const user = await User.findById(req.user._id);
    console.log(user);
    //if the user exists remove from db
    if (user) {
      // if the user is admin
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Cant delete Admin user ");
      }
      await User.deleteOne({ _id: user._id });
      res.json({ massage: "user deleated succesfuly " });

      // delete the user from the db
    } else {
      res.status(404);
      throw new Error("user not found ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const GetUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
const changedUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    // find the user in database
    const user = await User.findById(req.user._id);
    // if the user exists now i want to compare the old password with the hashed password then upsate the password
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      //hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({ massage: "password changed sucessfully" });
    } else {
      res.status(401);
      throw new Error("Invalid old password ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getLikedBooks = asyncHandler(async (req, res) => {
  try {
    //find the user in db
    const user = await User.findById(req.user._id).populate("likedBooks");
    console.log(user);
    // if the user exists send liked bokks to the client
    if (user) {
      res.json(user.likedBooks);
    } else {
      res.status(404);
      throw new Error(" user not fonud ");
    }
  } catch {
    res.status(400).json({ message: error.message });
  }
});

const addLikedBook = asyncHandler(async (req, res) => {
  const { bookId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      // check if book already liked

      // if book already exists
      if (user.likedBooks.includes(bookId)) {
        res.status(401);
        throw new Error(" Book already liked ");
      }
      // else add the book to the favourite book
      user.likedBooks.push(bookId);
      await user.save();
      res.json({ massage: "book added to favourite list" });
    } else {
      res.status(404);
      throw new Error(" Book not fonud ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const deletedLikedBooks = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.likedBooks = [];
      await user.save();
      res.json({ massage: " liked books deleted successfully " });
    } else {
      res.status(404);
      throw new Error(" Book not fonud ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error(" cant delete admin user ");
      }
      await User.deleteOne({ _id: user._id });
      res.json({ massage: " user deleted successfuly " });
    } else {
      res.status(404);
      throw new Error(" Book not fonud ");
    }
  } catch (error) {}
});
module.exports = {
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteProfile,
  GetUsers,
  changedUserPassword,
  getLikedBooks,
  addLikedBook,
  deletedLikedBooks,
  deleteUser,
};
