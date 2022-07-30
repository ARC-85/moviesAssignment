import React from "react";
import TVSeries from "../tvSeriesCard";
import Grid from "@material-ui/core/Grid";

const TVSeriesList = ( {tvSeries, action }) => {
  let tvSeriesCards = tvSeries.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVSeries key={t.id} series={t} action={action} />
    </Grid>
  ));
  return tvSeriesCards;
};

export default TVSeriesList;