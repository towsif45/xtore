import { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";

const DeliveredOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await userRequest.get("/orders/find/status/Delivered");
      console.log(res.data);
      setOrders(res.data);
    };
    fetchOrders();
  }, []);
  return (
    <div style={{ flex: 4, color: "#256D85", textAlign:'center', marginTop: 20}}>
      <Typography variant="h5" color="#256D85">
        Delivered Orders
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
export default DeliveredOrders;
