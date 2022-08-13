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
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const fantasyGenres = [
  {
    value: '',
    label: "None",
  },
  {
    value: "Action",
    label: "Action",
  },
  {
    value: "Adventure",
    label: "Adventure",
  },
  {
    value: "Animation",
    label: "Animation",
  },
  {
    value: "Comedy",
    label: "Comedy",
  },
  {
    value: "Crime",
    label: "Crime",
  },
  {
    value: "Documentary",
    label: "Documentary",
  },
  {
    value: "Drama",
    label: "Drama",
  },
  {
    value: "Family",
    label: "Family",
  },
  {
    value: "Fantasy",
    label: "Fantasy",
  },
  {
    value: "History",
    label: "History",
  },
  {
    value: "Horror",
    label: "Horror",
  },
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Mystery",
    label: "Mystery",
  },
  {
    value: "Romance",
    label: "Romance",
  },
  {
    value: "Sci-Fi",
    label: "Sci-Fi",
  },
  {
    value: "TV Movie",
    label: "TV Movie",
  },
  {
    value: "Thriller",
    label: "Thriller",
  },
  {
    value: "War",
    label: "War",
  },
  {
    value: "Western",
    label: "Western",
  },
];

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FantasyMovie = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
  const [myGenres, setMyGenres] = useState([]);
  const [open, setOpen] = useState(false);  //NEW
  const navigate = useNavigate()     
  const [selectedDate, handleDateChange] = useState(new Date());     



  const handleSnackClose = (event) => {     
    setOpen(false);
    navigate("/fantasymovie");
  };

  const onSubmit = (fantasyMovie) => {
    fantasyMovie.myGenres = myGenres;
    context.addFantasyMovie(fantasyMovie);
    setOpen(true);   // NEW
  };

  const handleGenreChange = (event) => {
    
    setMyGenres(
      myGenres.concat(event.target.value) 
    );
    myGenres.filter(function(e){return e});

    console.log(myGenres);
  };

  const handleGenreReset = () => {
    setMyGenres(
      []
    );
    myGenres.filter(function(e){return e});
    

    console.log(myGenres);
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
          id="select-genres"
          select
          multiple
          variant="outlined"
          label="Genres Select"
          value={myGenres}
          onChange={handleGenreChange}
          
          MenuProps={MenuProps}
          helperText="Don't forget your genres"
        >
          {fantasyGenres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <div className={classes.chipRoot}>
          <Paper component="ul" className={classes.chipSet}>
        
          
        
        {myGenres.map((genre) => (
          <li key={genre}>
            <Chip label={genre} className={classes.chip} />
          </li>
        ))}
      </Paper>
      </div>
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
            value=""
            onClick={
            
                handleGenreReset
              


        
            }
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