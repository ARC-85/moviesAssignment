import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar"; 
import MuiAlert from "@material-ui/lab/Alert";
import {useNavigate} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from 'moment';




const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
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
  snack: {
     width: "50%",
     "& > * ": {
       width: "100%",
     },
   },
}));

const FantasyMovie = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
  
  const [open, setOpen] = useState(false);  //NEW
  const navigate = useNavigate()     
  const [selectedDate, handleDateChange] = useState(new Date());     



  const handleSnackClose = (event) => {     
    setOpen(false);
    navigate("/fantasymovie");
  };

  const onSubmit = (fantasyMovie) => {
    
    context.addFantasyMovie(fantasyMovie);
    setOpen(true);   // NEW
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
        Describe your fantasy movie
      </Typography>
      {/* Start new code */}    
      <Snackbar
        className={classes.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting your fantasy movie
          </Typography>
        </MuiAlert>
      </Snackbar>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="writer"
          label="Fantasy writer's name"
          name="writer"
          autoFocus
          inputRef={register({ required: "Writer name required" })}
        />
        {errors.writer && (
          <Typography variant="h6" component="p">
            {errors.writer.message}
          </Typography>
        )}
        <br></br>

<TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fantasyTitle"
          label="Fantasy movie title"
          name="fantasyTitle"
          autoFocus
          inputRef={register({ required: "Fantasy movie title required" })}
        />
        {errors.fantasyTitle && (
          <Typography variant="h6" component="p">
            {errors.fantasyTitle.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="fantasyPlot"
          label="Fantasy movie plot"
          id="fantasyPlot"
          multiline
          minRows={10}
          inputRef={register({
            required: "No fantasy plot",
            minLength: { value: 3, message: "Plot is too short" },
          })}
        />
        {errors.fantasyPlot && (
          <Typography variant="h6" component="p">
            {errors.fantasyPlot.message}
          </Typography>
        )}
        
        <br></br>
        <TextField
          className={classes.textField}
          variant="standard"
          type="hidden"
          hidden
          margin="normal"
          value={moment(selectedDate).format("DD/MM/YYYY")}
          id="releaseDate"
          
          name="releaseDate"
          autoFocus
          inputRef={register({ required: "Writer name required" })}
        />
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
      <DatePicker
        value={selectedDate}
        disablePast
        onChange={handleDateChange}
        label="Release date"
        name="selectedDate"
        id="selectedDate"
        showTodayButton
      />
    </MuiPickersUtilsProvider>

    
       

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Fantasy Movie
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              reset({
                author: "",
                fantasyMovie: "",
              });
            }}
          >
            Reset
          </Button>
          <Link to={`/fantasymovie/addrole`}>
          <Button variant="outlined" size="medium" color="primary">
            Add Role
          </Button>
        </Link>
        </Box>
      </form>
    </Box>
  );
};

export default FantasyMovie;