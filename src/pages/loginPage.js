import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    paddingTop: theme.spacing(7),
    paddingLeft: theme.spacing(220),
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
   
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
    
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const {authenticate } = useContext(MoviesContext);

  const login = (credentials) => {
    //const password = Math.random().toString(36).substring(7);
    authenticate(credentials.username, credentials.password);
    console.log(credentials.password)
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
      Login page
      </Typography>
      <Typography component="h2" variant="h4">
      You must log in to view the protected pages
      </Typography>
      <form
        className={classes.form}
        onSubmit={handleSubmit(login)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="username"
          label="Enter user name"
          name="username"
          autoFocus
          inputRef={register({ required: "User name required" })}
        />
        {errors.username && (
          <Typography variant="h6" component="p">
            {errors.username.message}
          </Typography>
        )}
        <br></br>

<TextField
          className={classes.textField}
          input type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Enter password"
          name="password"
          autoFocus
          inputRef={register({ required: "Password required" })}
        />
        {errors.password && (
          <Typography variant="h6" component="p">
            {errors.password.message}
          </Typography>
        )}

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Credentials
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              reset({
                username: "",
                password: "",
              });
            }}
          >
            Reset
          </Button>
          
        </Box>
      </form>
      </Box>
    )
};

export default LoginPage;
