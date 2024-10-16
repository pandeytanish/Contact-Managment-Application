const express = require("express");
const { registerUsers, loginUsers, currentUsers } = require("../Controllers/userController");
const validateToken = require("../Middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUsers);

router.post("/login",loginUsers);

router.get("/current",validateToken, currentUsers);

module.exports = router; 