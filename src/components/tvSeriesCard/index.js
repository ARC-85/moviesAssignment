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
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
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

export default function TVSeriesCard({ series, action }) {
  const classes = useStyles();
  const { favouriteTVSeries } = useContext(MoviesContext);
  const { myMustWatchTVSeries } = useContext(MoviesContext);

  if (favouriteTVSeries.find((id) => id === series.id)) {
    series.favouriteTVSeries = true;
  } else {
    series.favouriteTVSeries = false
  };

  if (myMustWatchTVSeries.find((id) => id === series.id)) {
    series.myMustWatchTVSeries = true;
  } else {
    series.myMustWatchTVSeries = false
  }



  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        series.myMustWatchTVSeries ? (
          <Avatar className={classes.avatar}>
            <PlaylistAddIcon />
          </Avatar>
        ) : series.favouriteTVSeries ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) :    
        null
      }
      title={
        <Typography variant="h5" component="p">
          {series.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {series.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {series.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(series)}
        <Link to={`/tvseries/${series.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}