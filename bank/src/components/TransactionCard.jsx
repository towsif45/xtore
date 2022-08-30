import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    // maxWidth: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginBottom: 15,
    paddingLeft: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 4px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    marginBottom: 15,
    marginTop: 15,
  },
  pos: {
    marginBottom: 12,
    color: "#256D85",
  },
  body: {
    marginTop: 10,
    fontSize: 14,
  },
  status: {
    color: "#256D85",
    flex: 1,
    // justifyContent: 'flex-end',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const TransactionCard = (props) => {
  const { transaction } = props;
  const formatted_date = transaction.createdAt.split("T")[0];
  const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);

  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Date: {formatted_date}
        </Typography>
        <Typography className={classes.pos} variant="h6" component="h2">
          Transaction ID: {transaction._id}
        </Typography>
        {transaction.from_bank_account === user.others.accountNo && (
          <Typography className={classes.body} component="p">
            Reciepent Account Number: {transaction.to_bank_account}
          </Typography>
        )}

        {transaction.from_bank_account !== user.others.accountNo && (
          <Typography className={classes.body} component="p">
            Sender Account Number: {transaction.from_bank_account}
          </Typography>
        )}

        {/* {products.map((product) => {
          return (
            <Typography className={classes.body} component="p">
              Username: {product.title}<br/>
              Account Number: {product.quantity}<br/>
            </Typography>
          );
        })} */}
      </CardContent>
      <CardContent className={classes.status}>
        {transaction.from_bank_account === user.others.accountNo && (
          <Box sx={{ marginTop: 10, fontSize: "28px" }}>
            <Typography color="textSecondary">
              Sent Amount
              <br />{" "}
            </Typography>
          </Box>
        )}
        {transaction.from_bank_account !== user.others.accountNo && (
          <Box sx={{ marginTop: 10, fontSize: "28px" }}>
            <Typography color="textSecondary">
              Recieved Amount
              <br />{" "}
            </Typography>
          </Box>
        )}
        <Typography variant="h4">${transaction.amount}</Typography>
      </CardContent>
    </Card>
  );
};
export default TransactionCard;
