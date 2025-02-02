const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, keys.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = isAuthenticated;
