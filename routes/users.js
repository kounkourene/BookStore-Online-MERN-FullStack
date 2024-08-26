const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../model/User");

//Register User
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.cookie("userToken", user._id.toString(), { httpOnly: true });
      res.status(200).send("Login successfull");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//GET all Users
router.get("/", async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//GET User by ID

router.get("/:id", async (req, res) => {
  try {
    const getUserbyID = await User.findById(req.params.id);
    if (!getUserbyID) {
      return res.status(400).json({ msg: "User not found" });
    }
    res.json(getUserbyID);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(500).send("Server Error");
  }
});

// Update User
router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      return res.status(400).json({ msg: "User not found" });
    }

    res.json({ msg: "User updated" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user not found" });
    }
    res.status(500).send("Server Error");
  }
});

// Delete User

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(400).json({ msg: "User not found" });
    }

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
