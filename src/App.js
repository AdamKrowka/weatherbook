import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchCity from "./Components/SearchCity.js";
import CityInfo from "./Components/CityInfo.js";
import weatherData from "./Data.json";
console.log(weatherData);

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    boxSizing: "border-box",
    backgroundColor: "#03a9f4",
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    padding: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  innerWrapper: {
    backgroundColor: "#dff5ff",
    width: "100%",
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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appWrapper}>
      <div className={classes.innerWrapper}>
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.cityData} item xs={12} sm={9}>
            <CityInfo weatherData={weatherData} city={"Warszawa"}></CityInfo>
          </Grid>
          <Grid className={classes.citySearch} item xs={12} sm={3}>
            <SearchCity
              cityList={[
                "Warszawa",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
                "Poznań",
                "Kraków",
                "Poznań",
              ]}
              activeCity={2}
            ></SearchCity>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
