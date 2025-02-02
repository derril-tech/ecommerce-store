const { processPayment } = require("../services/paymentService");

exports.handlePayment = async (req, res) => {
  return processPayment(req, res);
};
