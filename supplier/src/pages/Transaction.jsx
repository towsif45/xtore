// import { useEffect, useState } from "react";
import TransCard from "../components/TransCard";
// import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar"

const Transaction = () => {
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const res = await userRequest.get("/orders");
  //     console.log(res.data);
  //     setOrders(res.data);
  //   };
  //   fetchOrders();
  // });
  return (
    <div>
      <Topbar/>
      <div sx = {{display:'flex'}}>
      <div style={{ flex: 4, padding:"20px", color: "#256D85", textAlign:'center'}}>
        <Typography variant="h5" color= "#256D85">
          Transaction Records
        </Typography>
        <Box sx={{ margin: 50 }}>
          <TransCard />
        </Box>
    {/* {orders.map((order) => {
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
      })} */}
    </div>;
    </div>
  </div>
  );
};
export default Transaction;
