import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";
