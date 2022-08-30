import Navbar from "../components/Navbar";
// import styled from "styled-components";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";

// const Container = styled.div`
//   align-items: center;
//   justify-content: flex-end;
//   // background-color: #F6E6CB;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   background-color: #f0e8a1;
// `;

const Transactions = () => {
  const id = useSelector((state) => state.user.currentUser.others.userId);
  console.log(id);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await publicRequest.get("/transactions/find/" + id);
      console.log(res.data);
      setTransactions(res.data);
    };
    fetchTransactions();
  }, [id]);
  return (
    <>
      <Navbar />
      <div
        style={{
          flex: 4,
          color: "#256D85",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <Box sx={{ minWidth: "80%", padding: "50px 0px 0px 0px", flex: 1 }}>
          {transactions.map((transaction) => {
            return <TransactionCard transaction={transaction} />;
          })}
        </Box>
      </div>
    </>
  );
};

export default Transactions;
