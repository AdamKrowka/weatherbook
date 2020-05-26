import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { validate } from "../Utils/user.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  innerWrapper: {
    backgroundColor: "#dff5ff",
    width: "1200px",
    height: "80vh",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      minHeight: "100vh",
      borderRadius: 0,
    },
  },
  title: {
    fontSize: "3rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(1),
  },
}));

const Login = ({ setUser }) => {
  const [errors, setErrors] = useState({ login: false, password: false });
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleClick = (e) => {
    const user = validate(login, password);
    if (user) {
      setUser(user);
      history.push("/logged");
    } else setErrors({ login: true, password: true });
  };
  const classes = useStyles();
  return (
    <div className={classes.innerWrapper}>
      <div className={classes.title}>weatherbook</div>
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            error={errors.login}
            className={classes.input}
            id="outlined-login"
            label="Login"
            variant="outlined"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <TextField
            error={errors.password}
            className={classes.input}
            id="outlined-password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClick}>
            Log IN
          </Button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
