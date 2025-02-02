const request = require("supertest");
const app = require("../server");
const Order = require("../models/Order");

describe("Order API Endpoints", () => {
  let authToken;

  beforeAll(async () => {
    // Mock authentication token
    authToken = "Bearer mock-auth-token";
  });

  test("Should create a new order", async () => {
    const orderData = {
      userId: "65f3f5e5ab5c5a001f0c8a2e",
      items: [
        { productId: "65f3f5e5ab5c5a001f0c8a3e", quantity: 2, price: 50 },
      ],
      totalAmount: 100,
      paymentId: "payment_123",
    };

    const res = await request(app)
      .post("/api/orders/create")
      .set("Authorization", authToken)
      .send(orderData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("order");
  });

  test("Should fetch user orders", async () => {
    const res = await request(app)
      .get("/api/orders/65f3f5e5ab5c5a001f0c8a2e")
      .set("Authorization", authToken);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
