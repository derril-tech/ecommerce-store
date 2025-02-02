const request = require("supertest");
const app = require("../server");

describe("Payment API Endpoints", () => {
  test("Should process a payment", async () => {
    const paymentData = {
      amount: 1000,
      currency: "USD",
      paymentMethodId: "pm_test_123",
    };

    const res = await request(app)
      .post("/api/payment/process")
      .send(paymentData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("paymentId");
  });
});
