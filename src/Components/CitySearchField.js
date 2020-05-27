import React, { useState, useEffect } from "react";
import {
  Paper,
  MenuItem,
  MenuList,
  TextField,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(2),
  },
  relative: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  absolute: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#1a214a",
    zIndex: 100,
    color: "white",
  },
  wrapper: {
    // width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
}));

const CitySearchField = ({ cities, setSelectedCity }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [cityFilter, setCityFilter] = useState([]);
  const [cityMenu, setCityMenu] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setInputValue("");
  };

  const handleFocus = () => {
    setCityFilter(
      cities.filter((val, index) => {
        if (inputValue !== "")
          return val.name.toLowerCase().startsWith(inputValue.toLowerCase());
        return false;
      })
    );
  };

  useEffect(() => {
    setCityFilter(
      cities.filter((val, index) => {
        if (inputValue !== "")
          return val.name.toLowerCase().startsWith(inputValue.toLowerCase());
        return false;
      })
    );
  }, [inputValue]);
  useEffect(() => {
    setCityMenu(() => {
      const cityList = [];
      for (let i = 0; i < 10; i++) {
        if (cityFilter[i] != null)
          cityList.push(
            <MenuItem
              key={i}
              value={cityFilter[i]}
              onClick={() => handleSelectCity(cityFilter[i])}
            >
              {cityFilter[i].name}
            </MenuItem>
          );
      }
      return cityList;
    });
  }, [cityFilter]);
  return (
    <ClickAwayListener
      onClickAway={() => {
        setCityFilter([]);
      }}
    >
      <div className={classes.wrapper}>
        <TextField
          id="standard-basic"
          label="City"
          value={inputValue}
          autoComplete="off"
          onChange={handleChange}
          onFocus={handleFocus}
        ></TextField>
        {cityFilter.length !== 0 ? (
          <div className={classes.relative}>
            <Paper className={classes.absolute}>
              <MenuList>{cityFilter.length !== 0 ? cityMenu : null}</MenuList>
            </Paper>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default CitySearchField;
