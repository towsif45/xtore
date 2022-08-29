import { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await userRequest.get("/orders");
      console.log(res.data);
      setOrders(res.data);
    };
    fetchOrders();
  });
  return (
    <div style={{ flex: 4 }}>
      <Typography variant="h5" color="#256D85">
        All Orders
      </Typography>
      {orders.map((order) => {
        return (
          <Box sx={{ margin: 50 }}>
            <OrderCard order={order} />
          </Box>
        );
      })}
    </div>
  );
};
export default AllOrders;