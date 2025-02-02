module.exports = {
  mockUser: {
    _id: "65f3f5e5ab5c5a001f0c8a2e",
    name: "Test User",
    email: "test@example.com",
    password: "hashedpassword",
  },
  mockOrder: {
    userId: "65f3f5e5ab5c5a001f0c8a2e",
    items: [{ productId: "65f3f5e5ab5c5a001f0c8a3e", quantity: 2, price: 50 }],
    totalAmount: 100,
    paymentId: "payment_test_123",
  },
  mockProduct: {
    _id: "65f3f5e5ab5c5a001f0c8a3e",
    name: "Test Product",
    price: 50,
    stock: 10,
  },
};
