import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // overflowX: "scroll",
    color: "black",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "100%",
    backgroundColor: "#dff5ff",
    borderRadius: "0px 0px 20px 20px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: 0,
    },
  },
  row: {
    display: "flex",
    flex: 1,
  },
  head: {
    display: "flex",
    flex: 1,
    fontWeight: "bold",
    paddingTop: theme.spacing(1),
  },
  tile: {
    // paddingLeft: theme.spacing(1),
    flex: 1,
    display: "flex",
  },
  img: {
    maxHeight: "30px",
  },
}));

const getDate = (dt) => new Date(dt * 1000).getDay();

const getDayofWeek = (dt) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][getDate(dt)];

export default function SimpleTable({ data }) {
  const classes = useStyles();
  data.shift();
  const dataRows = data.map((row, index) => (
    <div key={index} className={classes.row}>
      <div className={classes.tile}>{getDayofWeek(row.dt)}</div>
      <div className={classes.tile}>
        <img
          className={classes.img}
          src={`http://openweathermap.org/img/wn/${row.weather[0].icon}@2x.png`}
          alt={`${row.weather[0].main}`}
        />
        {row.weather[0].main}
      </div>
      <div className={classes.tile}>{row.temp.day.toFixed()}°C</div>
      <div className={classes.tile}>{row.temp.night.toFixed()}°C</div>
      <div className={classes.tile}>{row.humidity}%</div>
      <div className={classes.tile}>{row.pressure}hpa</div>
    </div>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes.tile}>Day</div>
        <div className={classes.tile}>Weather</div>
        <div className={classes.tile}>Day</div>
        <div className={classes.tile}>Night</div>
        <div className={classes.tile}>Humidity</div>
        <div className={classes.tile}>Pressure</div>
      </div>
      {dataRows}
    </div>
  );
}
