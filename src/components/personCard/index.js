import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

export default function PersonCard({ person, action }) {
  const classes = useStyles();
  

  
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
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {person.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/person/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        <Link to={`/person/${person.id}/movie_credits`}>
          <Button variant="outlined" size="medium" color="primary">
            Movie Credits ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}