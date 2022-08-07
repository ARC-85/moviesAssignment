import React from "react";
import Character from "../characterCard";
import Grid from "@material-ui/core/Grid";

const CharacterList = ( {persons, action }) => {
  let characterCards = persons.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Character key={p.id} person={p.person} character={p.character} roleDescription={p.roleDescription} action={action} />
    </Grid>
  ));
  return characterCards;
};

export default CharacterList;