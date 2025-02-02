const express = require("express");
const router = express.Router();
const { handlePayment } = require("../controllers/paymentController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post("/process", isAuthenticated, handlePayment);

module.exports = router;
