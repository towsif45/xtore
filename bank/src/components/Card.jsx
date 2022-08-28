import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // maxWidth: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 14,
    marginBottom: 15,
    marginTop: 15,
  },
  pos: {
    marginBottom: 12,
    color: '#876445',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default function SimpleCard() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User Information
        </Typography>
        <Typography className={classes.pos}>
          Name: Md. Towsif Hossain
        </Typography>
        <Typography className={classes.pos}>
          Username: Towsif45
        </Typography>
        <Typography className={classes.pos}>
          Address: Uniliver, Akhalia, Sylhet
        </Typography>
        <Typography className={classes.pos}>
          Mobile Number: 01301959115
        </Typography>
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
