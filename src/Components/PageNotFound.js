import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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
  notFound: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

function PageNotFound({ user, setUser }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={classes.innerWrapper}>
      <div className={classes.notFound}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <div>Back to login page</div>
        <Button variant="outlined" onClick={handleClick}>
          Log in
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
