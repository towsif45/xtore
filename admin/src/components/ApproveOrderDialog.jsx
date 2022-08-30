import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { publicRequest, userRequest } from "../requestMethods";
import { useState } from "react";

const ApproveOrderDialog = (props) => {
  const { open, order, user, onClose } = props;
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleClick = (e) => {
    e.preventDefault();
    const updateOrderStatus = async () => {
      try {
        const res = await userRequest.put("/orders/" + order._id, {
          status: "Approved",
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const transact = async () => {
      try {
        const bank = await publicRequest.get("/bank/find/" + user.others._id);
        console.log(bank.data);
        const newTransaction = await publicRequest.post("/transactions", {
          userId: user.others._id,
          from_bank_account: bank.data.accountNo,
          to_bank_account: "700700700",
          amount: order.amount,
        });
        console.log(newTransaction);
        const updatedAccount = await publicRequest.put("/bank/", {
          accountNo: bank.data.accountNo,
          amount: order.amount,
          password: password,
        });
        console.log(updatedAccount);
        updateOrderStatus();
        window.location.reload();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    };

    transact();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Confirm Approval</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your bank PIN to put a supply request to the supplier:
          <br />
          Amount to be deducted ($): {order.amount}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          variant="outlined"
          id="name"
          label="Bank A/C PIN"
          type="password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
          MAKE PAYMENT
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApproveOrderDialog;
