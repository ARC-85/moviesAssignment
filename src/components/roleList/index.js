import React from "react";
import Role from "../roleCard";
import Grid from "@material-ui/core/Grid";

const RoleList = ( {persons, action }) => {
  let roleCards = persons.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Role key={p.id} person={p} action={action} />
    </Grid>
  ));
  return roleCards;
};

export default RoleList;