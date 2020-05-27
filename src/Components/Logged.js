import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import SearchCity from "./SearchCity.js";
import CityInfo from "./CityInfo.js";
import { getData } from "../Utils/WeatherData.js";
import { useHistory } from "react-router-dom";
import { addCity, deleteCity } from "../Utils/user.js";

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
  notLogged: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
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
  const [cityList, setCityList] = useState(user ? user.cities : []);
  const handleLogOut = () => {
    history.push("/");
  };
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

  useEffect(() => {
    const interval = setInterval(() => {
      const dataAsync = async () => {
        const data = await getData(selectedCity);
        setWeatherData(data);
      };
      dataAsync();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  const handleAddCity = (city) => {
    setCityList(addCity(city, user.id));
    setSelectedCity({ ...selectedCity });
  };
  const handleDeleteCity = (city) => {
    setCityList(deleteCity(city, user.id));
    setSelectedCity({ ...selectedCity });
  };
  const classes = useStyles();
  if (user)
    return (
      <div className={classes.innerWrapper}>
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.cityData} item xs={12} sm={9}>
            <CityInfo
              weatherData={weatherData}
              city={selectedCity}
              handleLogOut={handleLogOut}
              userID={1}
              addCity={handleAddCity}
              deleteCity={handleDeleteCity}
            ></CityInfo>
          </Grid>
          <Grid className={classes.citySearch} item xs={12} sm={3}>
            <SearchCity
              cityList={cityList}
              activeCity={selectedCity.id}
              setActiveCity={setSelectedCity}
            ></SearchCity>
          </Grid>
        </Grid>
      </div>
    );
  return (
    <div className={classes.innerWrapper}>
      <div className={classes.notLogged}>
        <h1>You are not logged in</h1>
        <Button variant="outlined" onClick={handleClick}>
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Logged;
