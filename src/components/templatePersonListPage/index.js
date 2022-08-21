import React, { useState } from "react";
import Header from "../headerPersonList";
import FilterPersonsCard from "../filterPersonsCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../personList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function PersonListPageTemplate({ persons, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortType, setSortType] = useState('none');

 let displayedPersons = persons
    .filter((p) => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .sort((a, b) => {
      return b[sortType] > a[sortType] ? -1 : 1
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
          <PersonList action={action} persons={displayedPersons} />
        </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterPersonsCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          setSortType={setSortType}
          sortType={sortType}
        />
      </Drawer>
    </>    
  );
}
export default PersonListPageTemplate;