import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logged from "./Components/Logged.js";
import Login from "./Components/Login.js";
import PageNotFound from "./Components/PageNotFound.js";

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
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState();

  return (
    <div className={classes.appWrapper}>
      <Router>
        <Switch>
          <Route exact path="/logged">
            <Logged user={user} />
          </Route>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
