const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const errorHandler = require("../utils/error");
const User = require("../model/user");

const Test = async (req, res) => {
  res.json({ message: "API is working" });
};

const getAllUserOfAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to see all users"));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const allUser = await User.find();

    res.status(200).json({ allUser, message: "show all user successfully" });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const updatedUser = async (req, res, next) => {
  const user = req.user;
  const data = req.body;
  console.log(user);

  console.log("user id", user.id);

  if (user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.userName) {
    if (req.body.userName.length < 7 || req.body.userName.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.userName.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.userName !== req.body.userName.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.userName.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }
  try {
    const updatedUser = await User.findOne({ _id: req.params.userId });
    if (!updatedUser) {
      return next(errorHandler(401, "user not found"));
    }

    if (data.email) {
      updatedUser.email = data.email;
    }
    if (data.userName) {
      updatedUser.userName = data.userName;
    }
    if (data.password) {
      updatedUser.password = data.password;
    }
    if (data.profilePicture) {
      updatedUser.profilePicture = data.profilePicture;
    }

    const token = jwt.sign({ _id: updatedUser._id }, process.env.JWT_SECRET);
    const { password, ...rest } = updatedUser._doc;

    await updatedUser.save();

    res.status(200).json({ token, rest });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && !req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete({ _id: req.params.userId });
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

const signout = async (req, res, next) => {
  try {
    res.status(200).json("User has been signed out");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  Test,
  getUser,
  getAllUser,
  getAllUserOfAdmin,
  updatedUser,
  deleteUser,
  signout,
};
