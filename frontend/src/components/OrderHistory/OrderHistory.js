import { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`/api/orders/${userId}`).then((response) => {
      setOrders(response.data);
    });
  }, [userId]);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>Order ID: {order._id}</h2>
          <p>Total: ${order.totalAmount}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
