import React from "react";
import MoviesHeader from "../components/headerMovieList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/MoviePageHeader",
  component: MoviesHeader,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MoviesHeader title="Discover Movies" />;

Basic.storyName = "Default";
