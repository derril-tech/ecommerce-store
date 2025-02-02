const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  try {
    const { amount, currency, paymentMethodId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    res
      .status(200)
      .json({ message: "Payment successful", paymentId: paymentIntent.id });
  } catch (error) {
    res.status(500).json({ error: "Payment processing failed" });
  }
};
