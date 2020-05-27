import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Chart from "./Chart.js";
import Table from "./Table.js";
import { isOnList } from "../Utils/user.js";
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
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1a214a",
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
  },
  chart: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  header: {
    paddingTop: theme.spacing(1),
  },
  date: {
    fontSize: "0.7rem",
  },
  temp: { fontSize: "5rem" },
  table: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  star: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const Cityinfo = ({
  weatherData,
  city,
  handleLogOut,
  userID,
  addCity,
  deleteCity,
}) => {
  const classes = useStyles();
  const handleClick = () => {
    isOnList(city, userID) ? deleteCity(city) : addCity(city);
  };

  let today = "";
  if (weatherData) {
    const date = new Date(weatherData.current.dt * 1000);
    today = date.toString().split(" ").slice(0, 4).join(" ");
  }
  return (
    <div className={classes.container}>
      <div className={classes.accountBar}>
        <Avatar className={classes.avatar}>A</Avatar>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleLogOut}
        >
          LOG OUT
        </Button>
      </div>
      <div className={classes.cityInfo}>
        <div className={classes.innerContainer}>
          <div className={classes.darkBgContainer}>
            <div className={classes.star}>
              <Button variant="outlined" color="primary" onClick={handleClick}>
                {isOnList(city, userID) ? "Delete" : "Observe"}
              </Button>
            </div>
            <div className={classes.header}>Today</div>
            <div className={classes.date}>{today}</div>
            <div className={classes.temp}>
              {weatherData ? (
                <img
                  className={classes.img}
                  src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                  alt={`${weatherData.current.weather[0].main}`}
                />
              ) : (
                <></>
              )}
              {weatherData ? weatherData.current.temp.toFixed() : 0}°C
              {weatherData ? (
                <img
                  className={classes.img}
                  src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                  alt={`${weatherData.current.weather[0].main}`}
                />
              ) : (
                <></>
              )}
            </div>
            <div className={classes.text}>{city.name}</div>
            <div className={classes.chart}>
              {weatherData ? (
                <Chart weatherData={weatherData.hourly}></Chart>
              ) : (
                <></>
              )}
            </div>
            <div className={classes.table}>
              {weatherData ? <Table data={weatherData.daily}></Table> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cityinfo;
