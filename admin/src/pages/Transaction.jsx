// const Transaction = () => {
//   return <div style={{ flex: 4 }}>Transactions</div>;
// };
// export default Transaction;

import { useEffect, useState } from "react";
import TransCard from "../components/card/TransCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await userRequest.get("/transactions");
      console.log(res.data);
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);
  return <div style={{ flex: 4, padding:"20px", color: "#256D85", textAlign:'center'}}>
    <Typography variant="h5" sx = {{}}>Transaction Records</Typography>
    {transactions.map((transaction) => {
        return (
          <Box sx={{ margin: 50 }}>
            <TransCard
              transaction = {transaction}
            />
          </Box>
        );
      })}
  </div>;
};
export default Transaction;
