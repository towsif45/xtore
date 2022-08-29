import { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";

const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await userRequest.get("/orders");
      console.log(res.data);
      setOrders(res.data);
    };
    fetchOrders();
  });
  return <div style={{ flex: 4 }}>
    <Typography variant="h5">Pending Orders</Typography>
    {orders.map((order) => {
        return (
          <Box sx={{ margin: 50 }}>
            <OrderCard
              date={order.createdAt}
              id={order._id}
              products={order.products}
              amount={order.amount}
              status={order.status}
            />
          </Box>
        );
      })}
  </div>;
};
export default Order;
