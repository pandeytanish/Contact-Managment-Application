const express = require("express");
const { registerUsers, loginUsers, currentUsers } = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUsers);

router.post("/login",loginUsers);

router.get("/current",currentUsers);

module.exports = router; 