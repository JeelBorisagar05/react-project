const User = require("../models/user-models");
const bcrypt = require("bcryptjs");
const { jwt } = require("jsonwebtoken");
// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// registration Logic
// *-------------------

const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }
    //const saltRound = 10;
    //const hash_password = await bcrypt.hash(password,saltRound);

    const userCreated = await User.create({ username, email, phone, password, });

    // res.status(201).json({ message: "User registered successfully" });
    res.status(201).json({ 
        msg: "registration successful",
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString(),
     });
     
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// *-------------------
// user login Logic
// *-------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    //res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

// *-------------------
// to send user login Logic
// *-------------------
const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};
module.exports = { home, register, login, user };