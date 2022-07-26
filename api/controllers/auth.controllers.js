const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// database
require("../connection/DB");

// usere schema and models
const User = require("../models/User");

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
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
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

module.exports = { loginUser };
