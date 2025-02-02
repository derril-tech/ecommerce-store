import orderReducer, { createOrder } from "../redux/slices/orderSlice";

describe("Order Slice Reducer", () => {
  test("Should handle createOrder action", () => {
    const initialState = { orders: [], status: "idle" };

    const newOrder = {
      id: "1",
      userId: "123",
      items: [{ productId: "1", quantity: 2, price: 50 }],
      totalAmount: 100,
      status: "pending",
    };

    const action = createOrder(newOrder);
    const state = orderReducer(initialState, action);

    expect(state.orders.length).toBe(1);
    expect(state.orders[0]).toEqual(newOrder);
  });
});
