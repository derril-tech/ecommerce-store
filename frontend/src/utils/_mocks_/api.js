export const mockOrders = [
  {
    id: "order_123",
    userId: "65f3f5e5ab5c5a001f0c8a2e",
    items: [{ productId: "prod_1", quantity: 1, price: 30 }],
    totalAmount: 30,
    status: "Pending",
  },
  {
    id: "order_124",
    userId: "65f3f5e5ab5c5a001f0c8a2e",
    items: [{ productId: "prod_2", quantity: 2, price: 50 }],
    totalAmount: 100,
    status: "Completed",
  },
];

export const mockPaymentResponse = {
  success: true,
  paymentId: "payment_test_123",
};
