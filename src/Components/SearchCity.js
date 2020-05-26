import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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

const SearchCity = ({ cityList, findCity, activeCity, setActiveCity }) => {
  const classes = useStyles();

  const CityList = cityList.map((city, index) => {
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
      <Grid
        className={classes.input}
        container
        spacing={1}
        alignItems="flex-end"
      >
        <Grid item className={classes.icon}>
          <SearchIcon />
        </Grid>
        <Grid item className={classes.inp}>
          <InputBase className={classes.textInput} defaultValue="Find City" />
        </Grid>
      </Grid>
      <div className={classes.cityList}>{CityList}</div>
    </div>
  );
};

export default SearchCity;
