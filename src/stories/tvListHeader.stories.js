import React from "react";
import TVSeriesListHeader from "../components/headerTVSeriesList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Series Page/Header",
  component: TVSeriesListHeader,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVSeriesListHeader title={'Discover TV Series'} />;

Basic.storyName = "Default";