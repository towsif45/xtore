// const Transaction = () => {
//   return <div style={{ flex: 4 }}>Transactions</div>;
// };
// export default Transaction;

import { useEffect, useState } from "react";
import TransCard from "../components/TransCard";
import { userRequest } from "../requestMethods";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";


const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await userRequest.get("/transactions/find");
      console.log(res.data);
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  const [bank, setBank] = useState({});

  useEffect(() => {
    const fetchBankAccount = async () => {
      const res = await userRequest.get("/bank/find/" + user.others._id);
      console.log(res.data);
      setBank(res.data);
    };
    fetchBankAccount();
  }, [user.others._id]);

  return <div style={{ flex: 4, padding:"20px", color: "#256D85", textAlign:'center'}}>
    <Typography variant="h5" sx = {{}}>Transaction Records</Typography>
    {transactions.map((transaction) => {
        return (
          <Box sx={{ margin: 50 }}>
            <TransCard
              transaction = {transaction}
              bank={bank}
            />
          </Box>
        );
      })}
  </div>;
};
export default Transaction;
