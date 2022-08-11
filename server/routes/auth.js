const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  const hashed_pass = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    display_name: req.body.display_name,
    username: req.body.username,
    email: req.body.email,
    password: hashed_pass,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      res.status(400).json("Wrong credentials!");
    } else {
      const pass_check = await bcrypt.compare(req.body.password, user.password);
      if (!pass_check) {
        res.status(420).json("Wrong credentials!");
      } else {
        const { password, ...others } = user._doc;
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_KEY,
          { expiresIn: "60d" }
        );
        res.status(201).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(501).json(err);
  }
});

module.exports = router;
