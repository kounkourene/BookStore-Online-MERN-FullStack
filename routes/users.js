const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route POST user
// Register User

router.post(
  "/",

  [
    check("firstName", "firstName is required").not().isEmpty(),
    check("lastName", "lastName is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("phoneNumber", "phoneNumer is required").not().isEmpty(),
    check("address", "adress is required").not().isEmpty(),
    check(
      "[password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      //address
      password,
    } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        //address,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// GET all Users
router.get("/", async (req, res) => {
  try {
    const getUser = await User.find();
    res.json(getUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET User by ID

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
      return res.status(400).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Update User
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
