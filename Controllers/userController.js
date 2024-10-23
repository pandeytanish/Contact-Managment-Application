const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");
//@desc Register the User
//@route Post /api/users/register
//@access public

const registerUsers = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exsists")
    }
    //Hash Password 
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password : ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    console.log(`user created ${user}`)
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error("User data not vALID")
    }
    res.json({ message: "Register the User" })
});

//@desc login User
//@route Post /api/users/login
//@access public

const loginUsers = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }
    const user = await User.findOne({ email });
    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: "10m" }
        )
        res.status(200).json({ accessToken });
    } else {
        res.status(401)
        throw new Error("Email or password not valid")
    }
    res.json({ message: "Login User" })
});

//@desc Current User
//@route Post /api/users/login
//@access private

const currentUsers = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = { registerUsers, loginUsers, currentUsers }