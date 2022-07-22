const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controllers");
const router = express.Router();

// register user data
router.post("/register", registerUser);

// login user data
router.post("/login", loginUser);

module.exports = router;
