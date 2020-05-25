import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  accountBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cityInfo: {
    display: "flex",
    flexGrow: 1,
    color: "white",
  },

  button: {
    borderRadius: 50,
    margin: theme.spacing(1),
  },
  avatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  innerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      minHeight: "65vh",
      padding: 0,
    },
  },
  darkBgContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1a214a",
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
  },
}));

const Cityinfo = ({ weatherData, city }) => {
  const date = new Date(weatherData.current.dt * 1000);
  const today = date.toString().split(" ").slice(0, 4).join(" ");
  console.log(today);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.accountBar}>
        <Avatar className={classes.avatar}>AK</Avatar>
        <Button className={classes.button} variant="contained" color="primary">
          LOG OUT
        </Button>
      </div>
      <div className={classes.cityInfo}>
        <div className={classes.innerContainer}>
          <div className={classes.darkBgContainer}>
            <div>Today</div>
            <div>{today}</div>
            <div>{weatherData.current.temp.toFixed()}</div>
            <div>{city}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cityinfo;
