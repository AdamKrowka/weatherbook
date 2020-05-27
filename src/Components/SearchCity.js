import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CitySearchField from "./CitySearchField.js";
import cities from "../Utils/city.list.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100%",
    backgroundColor: "#dff5ff",
    [theme.breakpoints.up("sm")]: {
      borderRadius: 20,
      height: "100%",
    },
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    margin: theme.spacing(3),
    color: "#757575",
    flexWrap: "nowrap",
  },
  icon: { flexGrow: 0 },
  inp: { flexGrow: 1 },
  textInput: {
    color: "#757575",
  },
  cityList: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: theme.spacing(2),
    width: "80%",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "50vh",
    overflowY: "scroll",
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
      overflowY: "scroll",
    },
  },
  button: {
    borderWidth: 2,
    width: "90%",
    borderRadius: 10,
    marginBottom: theme.spacing(1),
  },
}));

const SearchCity = ({ cityList, activeCity, setActiveCity }) => {
  const classes = useStyles();
  const [cityListBtn] = useState(cityList);
  const setSelectedCity = (city) => {
    setActiveCity(city);
  };

  const CityList = cityListBtn.map((city, index) => {
    if (cityList)
      return (
        <Button
          key={index}
          variant="outlined"
          color={activeCity === city.id ? "primary" : "default"}
          className={classes.button}
          value={city.id}
          onClick={(e) => {
            setActiveCity(city);
          }}
        >
          {city.name}
        </Button>
      );
    return <></>;
  });
  return (
    <div className={classes.wrapper}>
      <CitySearchField
        cities={cities}
        setSelectedCity={setSelectedCity}
      ></CitySearchField>
      <div className={classes.cityList}>{CityList}</div>
    </div>
  );
};

export default SearchCity;
