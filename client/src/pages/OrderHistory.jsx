import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@material-ui/core";
import OrderCard from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + user.others._id);
        console.log(res.data);
        setOrders(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchOrders();
  }, [user.others._id]);

  return (
    <Container>
      <Navbar />
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
      <Footer />
    </Container>
  );
};

export default OrderHistory;
