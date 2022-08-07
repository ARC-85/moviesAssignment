import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function CharacterCard({ person, character, roleDescription, action }) {
  const classes = useStyles();

  const context = useContext(MoviesContext);

  const handleRemoveFromRoles = (e) => {
    e.preventDefault();
    context.removeFromRoles(person);
  };


  
  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
       
      title={
        <Typography variant="h5" component="p">
          {person.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/person.jpg`
        }
      />
      <CardContent>
      <Typography variant="h6" component="p">
          {"Character name: " + character}{" "}
        </Typography>
        <Typography variant="h6" component="p">
          {"Character description: " + roleDescription}{" "}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromRoles}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
      </CardActions>
    </Card>
  );
}