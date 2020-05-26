import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import SearchCity from "./SearchCity.js";
import CityInfo from "./CityInfo.js";
import { getData } from "../Utils/WeatherData.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  innerWrapper: {
    backgroundColor: "#dff5ff",
    width: "1200px",
    height: "80vh",
    borderRadius: 20,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      minHeight: "100vh",
      borderRadius: 0,
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      minHeight: "100vh",
    },
  },
  citySearch: {},
  cityData: {},
}));

function Logged({ user, setUser }) {
  const history = useHistory();
  const [selectedCity, setSelectedCity] = useState({
    id: 6695624,
    name: "Warszawa",
    state: "",
    country: "PL",
    coord: {
      lon: 21.04191,
      lat: 52.23547,
    },
  });
  const [weatherData, setWeatherData] = useState();
  const handleLogOut = () => {
    history.push("/");
  };
  useEffect(() => {
    const dataAsync = async () => {
      const data = await getData(selectedCity);
      setWeatherData(data);
    };
    dataAsync();
  }, []);
  useEffect(() => {
    const dataAsync = async () => {
      const data = await getData(selectedCity);
      setWeatherData(data);
    };
    dataAsync();
  }, [selectedCity]);

  const handleClick = () => {
    history.push("/");
  };
  const classes = useStyles();
  if (user)
    return (
      <div className={classes.innerWrapper}>
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.cityData} item xs={12} sm={9}>
            <CityInfo
              weatherData={weatherData}
              city={selectedCity.name}
              handleLogOut={handleLogOut}
            ></CityInfo>
          </Grid>
          <Grid className={classes.citySearch} item xs={12} sm={3}>
            <SearchCity
              cityList={user ? user.cities : []}
              activeCity={selectedCity.id}
              setActiveCity={setSelectedCity}
            ></SearchCity>
          </Grid>
        </Grid>
      </div>
    );
  return (
    <>
      <h1>You are not logged in</h1>
      <div> </div>
      <Button variant="outlined" onClick={handleClick}>
        Log in
      </Button>
    </>
  );
}

export default Logged;
