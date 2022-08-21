import React from "react";  // useState/useEffect redundant 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
// import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { getGenres } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterPersonsCard(props) {
  const classes = useStyles();
  

  

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  

  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
      className={classes.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={props.nameFilter}
      variant="filled"
      onChange={handleTextChange}
    />
        
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the actors.
          </Typography>
        </CardContent>
        <Select 
          
          value={props.sortType}
          onChange={(e) => props.setSortType(e.target.value)}
          >
            <MenuItem value="none" disabled>None</MenuItem>
            <MenuItem value="name">Actor Name</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            
          </Select>
      </Card>
      </>
  );
}