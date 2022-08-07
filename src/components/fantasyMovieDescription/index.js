import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { MoviesContext } from "../../contexts/moviesContext";
import CharacterList from "../characterList";
import Grid from "@material-ui/core/Grid";
import { useQueries } from "react-query";
import { getPerson } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import Role from "../roleCard";




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

  

  /*if (myFantasyMovie.fantasyTitle !== "undefined") {
    myFantasyMovie.fantasyTitle = ""
  }
  else {
    myFantasyMovie.fantasyTitle = myFantasyMovie.fantasyTitle
  }*/

  const personRoleQueries = useQueries(
    roleArray.map((personId) => {
      return {
        queryKey: ["person", { id: personId.id }],
        queryFn: getPerson,
        character: personId.charcter,

      };
      
    })
  );
  console.log(personRoleQueries);
  // Check if any of the parallel queries is still loading.
  const isLoading = personRoleQueries.find((p) => p.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const persons = personRoleQueries.map((q) => {
    return q.data;
  }); 
 

  const combinedPersons = [{...roleArray}];
  console.log(combinedPersons);

  

       



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