// const Transaction = () => {
//   return <div style={{ flex: 4 }}>Transactions</div>;
// };
// export default Transaction;

import { useEffect, useState } from "react";
import TransCard from "../components/card/TransCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";

const Transaction = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await userRequest.get("/orders");
      console.log(res.data);
      setOrders(res.data);
    };
    fetchOrders();
  });
  return <div style={{ flex: 4, padding:"20px", color: "#256D85", textAlign:'center'}}>
    <Typography variant="h5" sx = {{}}>Transaction Records</Typography>
    {orders.map((order) => {
        return (
          <Box sx={{ margin: 50 }}>
            <TransCard
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
export default Transaction;
