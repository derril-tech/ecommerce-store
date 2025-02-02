const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrdersByUser,
} = require("../controllers/orderController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post("/create", isAuthenticated, createOrder);
router.get("/:userId", isAuthenticated, getOrdersByUser);

module.exports = router;
