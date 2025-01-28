const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users"); // Ensure you have a User model set up
const router = express.Router();

// Google OAuth routes
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/");
  }
);

// Logout route
router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Get current authenticated user
router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

// Username/Password login route
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Create session for the user (passport will handle session management)
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error logging in" });
      }
      // Respond with user data (excluding sensitive fields like password)
      return res.json({
        id: user._id,
        username: user.username,
        email: user.email,
      });
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
