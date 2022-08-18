import React from "react";
import TVSeriesList from "../components/tvSeriesList";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Series Page/TVList",
  component: TVSeriesList,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const tvSeries = [
    { ...SampleTV, id: 1 },
    { ...SampleTV, id: 2 },
    { ...SampleTV, id: 3 },
    { ...SampleTV, id: 4 },
    { ...SampleTV, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVSeriesList
        tvSeries={tvSeries}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
