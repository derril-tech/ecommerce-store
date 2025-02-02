import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

export const store = mockStore({
  order: {
    orders: [{ id: "order_123", totalAmount: 30, status: "Pending" }],
    status: "idle",
  },
  payment: {
    paymentId: null,
    status: "idle",
  },
});

export default store;
