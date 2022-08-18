import React from "react";
import TVSeriesDetails from "../components/tvSeriesDetails";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Series Details Page/TVSeriesDetails",
  component: TVSeriesDetails,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVSeriesDetails series={SampleTV} />;

Basic.storyName = "Default";
