const express = require("express");
const {  loginUser } = require("../controllers/auth.controllers");
const router = express.Router();

// register user data

// login user data
router.post("/login", loginUser);

module.exports = router;
