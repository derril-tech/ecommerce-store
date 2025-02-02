import paymentReducer, { processPayment } from "../redux/slices/paymentSlice";

describe("Payment Slice Reducer", () => {
  test("Should handle processPayment action", () => {
    const initialState = { status: "idle", paymentId: null };

    const paymentData = {
      amount: 1000,
      currency: "USD",
      paymentId: "test_123",
    };

    const action = processPayment(paymentData);
    const state = paymentReducer(initialState, action);

    expect(state.paymentId).toBe("test_123");
  });
});
