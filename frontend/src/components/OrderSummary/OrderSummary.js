const OrderSummary = ({ items, totalAmount }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between py-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <div className="mt-4 text-xl font-bold">Total: ${totalAmount}</div>
    </div>
  );
};

export default OrderSummary;
