import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatches = (e) => {
    e.preventDefault();
    context.addToMustWatches(movie);
  };

  return (
    <IconButton aria-label="add to must watch list" onClick={handleAddToMustWatches}>
    <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default  AddToMustWatchIcon;