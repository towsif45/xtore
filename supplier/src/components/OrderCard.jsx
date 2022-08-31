import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { userRequest } from "../requestMethods";

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

export default function OrderCard(props) {
  const { order } = props;
  const formatted_date = order.createdAt.split("T")[0];
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = (e) => {
    e.preventDefault();
    const updateOrderStatus = async () => {
      try {
        const res = await userRequest.put("/orders/" + order._id, {
          status: "Delivered",
        });
        console.log(res.data);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };
    updateOrderStatus();
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Date: 
          {formatted_date}
        </Typography>
        <Typography className={classes.pos} variant="h6" component="h2">
          Order ID: 
          {order._id}
        </Typography>
        {order.products.map((product) => {
          return (
            <Typography className={classes.body} variant="body2" component="p">
              Product: {product.title}
              {bull}Quantity: {product.quantity}
            </Typography>
          );
        })}
      </CardContent>
      <CardContent className={classes.status}>
        <Box sx={{ marginTop: 10 }}>
          <Typography color="textSecondary">
            Total Cost: $ 
            {order.amount}
          </Typography>
        </Box>
        <Typography variant="h5">{order.status}</Typography>
        {order.status === "Approved" && (
          <Box sx={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="textSecondary"
              onClick={handleClick}
            >
              Deliver
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
