import React from "react";
import PersonList from "../components/personList";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";


import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Persons Page/PersonList",
  component: PersonList,
  decorators: [
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const persons = [
    { ...SamplePerson, id: 1 },
    { ...SamplePerson, id: 2 },
    { ...SamplePerson, id: 3 },
    { ...SamplePerson, id: 4 },
    { ...SamplePerson, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <PersonList
        persons={persons}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
