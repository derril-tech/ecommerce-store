require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// 🔹 Connect to MongoDB (`test` database explicitly set)
mongoose
  .connect(keys.mongoURI, {
    dbName: "test", // Ensure we use the correct database
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB (Database: test)"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// Routes
app.use(authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend server is running!");
});

// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
