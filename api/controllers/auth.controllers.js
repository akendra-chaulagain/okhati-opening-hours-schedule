const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// database
require("../connection/DB");

// usere schema and models
const User = require("../models/User");

const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(500).json("enter all the data ");
  }
  try {
    // if  email already exist in database then this statement will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(500)
        .json("Email already exist. Please enter new email");
    }
    // if email is new then this will run
    const user = new User({ username, email, password });
    // generate salt to hash password
    const salt = await bcrypt.genSalt(12);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);

    const result = await user.save();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// login user
const loginUser = async (req, res, nest) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
    if (isMatch) {
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, token });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
};

module.exports = { loginUser, registerUser };
