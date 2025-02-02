export const mockProduct = {
  id: "prod_1",
  name: "Test Product",
  price: 50,
  stock: 5,
};

export const mockCartItems = [
  { productId: "prod_1", name: "Test Product", quantity: 2, price: 50 },
];

export const mockOrderHistory = [
  {
    id: "order_123",
    totalAmount: 100,
    status: "Completed",
    items: [
      { productId: "prod_1", name: "Test Product", quantity: 2, price: 50 },
    ],
  },
];
