const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const handlePassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    userName,
    email,
    password: handlePassword,
  });

  try {
    await newUser.save();
    res.json("SignUp successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
  } catch (error) {}
};
