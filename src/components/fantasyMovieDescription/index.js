import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { MoviesContext } from "../../contexts/moviesContext";
import CharacterList from "../characterList";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";




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

const FantasyMovieDescription = () => {
  const classes = useStyles();

  const { myFantasyMovie } = useContext(MoviesContext);
  const { myFantasyRoles } = useContext(MoviesContext);
  console.log(myFantasyRoles)

  const roleArray = Object.values(myFantasyRoles);
  console.log(roleArray);

  const myGenresArray = myFantasyMovie.myGenres;
  console.log(myGenresArray);

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
        Fantasy Movie Description

      </Typography>
      {/* Start new code */}    
      
      <Grid container className={classes.root}>
      
      <Grid item container spacing={0}>
      
      <Typography variant="h4" component="h1" >
        {"Movie Title: "}
      </Typography>

        </Grid>
        <Grid item container spacing={0}>
      <Typography variant="h5" component="h1" >
       {myFantasyMovie.fantasyTitle}
        
    
      </Typography>
        </Grid>
        <br></br>
        <Grid item container spacing={0}>
      
      <Typography variant="h4" component="h1" >
        {"Movie Release Date: "}
      </Typography>

        </Grid>
        <Grid item container spacing={0}>
      <Typography variant="h5" component="h1" >
       {myFantasyMovie.releaseDate}
        
    
      </Typography>
        </Grid>
        <br></br>
        <Grid item container spacing={0}>
      
      <Typography variant="h4" component="h1" >
        {"Movie Plot: "}
        
    
      </Typography>
        </Grid>
        <Grid item container spacing={0}>
      
      <Typography variant="h5" component="h1" >
        {myFantasyMovie.fantasyPlot}
        
    
      </Typography>
        </Grid>
        
        <br></br>
        <Grid item container spacing={0}>
      
      <Typography variant="h4" component="h1" >
        {"Genres: "}    
    
      </Typography>
        </Grid>
        <Grid item container spacing={0}>
      
        <div className={classes.chipRoot}>
          <Paper component="ul" className={classes.chipSet}>
        {myGenresArray?.map((genre) => (
          <li key={genre}>
            <Chip label={genre} className={classes.chip} />
          </li>
        ))}
      </Paper>
      </div>
        </Grid>


    </Grid>
      
      <Grid container className={classes.root}>
      
      <Grid item container spacing={5}>
      
      <CharacterList action={null} persons={roleArray} />
        </Grid>
    </Grid>
    </Box>
    
  );
};

export default FantasyMovieDescription;