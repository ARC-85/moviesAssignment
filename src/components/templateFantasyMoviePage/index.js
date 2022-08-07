import React from "react";  // useState/useEffect redundant 
import FantasyMovieHeader from "../headerFantasyMovie";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateFantasyMoviePage = ({ children }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <FantasyMovieHeader/>

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              
                <ImageListItem cols={1}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/person.jpg`}
                    alt={""}
                  />
                </ImageListItem>
              
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateFantasyMoviePage;