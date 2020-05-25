import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    boxSizing: "border-box",
    backgroundColor: "#03a9f4",
    width: "100vw",
    height: "100vh",
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
    height: "100%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
  },
  element1: {
    flexGrow: 0,
  },
  element2: {
    flexGrow: 1,
  },
  cityList: {
    backgroundColor: "white",
    borderRadius: 20,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appWrapper}>
      <div className={classes.innerWrapper}>
        <div className={classes.element1}>
          <Button></Button>
        </div>
        <Grid container className={classes.element2}>
          <Grid className={classes.cityList} item xs={3}>
            City search
          </Grid>
          <Grid item xs={9}>
            City data
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
