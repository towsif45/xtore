import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

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

export default function TransCard(props) {
  const { id, products, amount, status, date } = props;
  const formatted_date = date.split("T")[0];
  const classes = useStyles();
  
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
          User ID: {id}
        </Typography>
        {products.map((product) => {
          return (
            <Typography className={classes.body} component="p">
              Username: {product.title}<br/>
              Account Number: {product.quantity}<br/>
            </Typography>
          );
        })}
      </CardContent>
      <CardContent className={classes.status}>
        <Box sx={{ marginTop: 10, fontSize: '28px'}}>
          <Typography color="textSecondary">Paid Amount<br/> </Typography>
        </Box>
        <Typography>${amount}</Typography>
      </CardContent>
    </Card>
  );
}
