import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    // maxWidth: '60%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    // marginBottom: 15,
    // paddingLeft: 50,
  },
  //   bullet: {
  //     display: 'inline-block',
  //     margin: '0 4px',
  //     transform: 'scale(0.8)',
  //   },
  title: {
    fontSize: 24,
    marginBottom: 35,
    marginTop: 15,
    color: "#876445",
  },
  pos: {
    marginBottom: 15,
    // color: '#876445',
    fontSize: 14,
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

export default function SimpleCard() {
  const classes = useStyles();
  const navigate = useNavigate();
  const userBank = useSelector((state) => state.user.currentUser);
  const [user, setUser] = useState({});
  //   const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await publicRequest.get("/users/find/" + userBank.others.userId);
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [userBank.others.userId]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/transactions");
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Bank Account Information
        </Typography>
        <Typography className={classes.pos}>
          Name: {user.display_name}
        </Typography>
        <Typography className={classes.pos}>Username: {user.username}</Typography>
        <Typography className={classes.pos}>
          Bank A/C no.: {userBank.others.accountNo}
        </Typography>
        <Typography className={classes.pos}>
          Bank Balance ($) :  {userBank.others.balance}
        </Typography>
        <Button
          style={{ marginTop: 20 }}
          variant="outlined"
          onClick={handleClick}
        >
          VIEW TRANSACTIONS
        </Button>
      </CardContent>
      {/* <CardContent className={classes.status}>
        <Box sx = {{marginTop: 10}}>
            <Typography color="textSecondary">
                Total Cost: $80
            </Typography>
        </Box>
        <Typography>Delivered</Typography>
      </CardContent> */}
    </Card>
  );
}
