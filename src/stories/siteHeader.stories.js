import React from "react";
import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "App Header",
  component: SiteHeader,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <SiteHeader />;

Basic.storyName = "Default";
