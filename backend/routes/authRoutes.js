const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = require("../models/User");
const router = express.Router();

// ✅ Register User (Hash Password & Save)
router.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    // 🔹 Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Login User (Compare Hashed Password & Return JWT)
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    // 🔹 Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // 🔹 Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      keys.jwtSecret,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Logout User
router.post("/api/logout", (req, res) => {
  res.json({ message: "User logged out" });
});

module.exports = router;
