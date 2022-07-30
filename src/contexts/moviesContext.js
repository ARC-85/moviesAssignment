import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [myMustWatches, setMustWatches] = useState([]);
  const [favouritePersons, setFavouritePersons] = useState([]);
  const [favouriteTVSeries, setFavouriteTVSeries] = useState([]);
  const [myMustWatchTVSeries, setMustWatchTVSeries] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const addToMustWatches = (movie) => {
    if (!myMustWatches.includes(movie.id)) {
      let newMustWatches = [...myMustWatches, movie.id];
      setMustWatches(newMustWatches);
    };
    console.log(myMustWatches)
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToFavouritePersons = (person) => {
    if (!favouritePersons.includes(person.id)) {
      let newFavouritePersons = [...favouritePersons, person.id];
      setFavouritePersons(newFavouritePersons);
    }
  };

  const removeFromFavouritePersons = (person) => {
    setFavouritePersons(favouritePersons.filter((pId) => pId !== person.id));
  };

  const addToFavouriteTVSeries = (series) => {
    if (!favouriteTVSeries.includes(series.id)) {
      let newFavouriteTVSeries = [...favouriteTVSeries, series.id];
      setFavouriteTVSeries(newFavouriteTVSeries);
    }
  };

  const removeFromFavouriteTVSeries = (series) => {
    setFavouriteTVSeries(favouriteTVSeries.filter((tId) => tId !== series.id));
  };

  const addToMustWatchTVSeries = (series) => {
    if (!myMustWatchTVSeries.includes(series.id)) {
      let newMustWatchTVSeries = [...myMustWatchTVSeries, series.id];
      setMustWatchTVSeries(newMustWatchTVSeries);
    };
    console.log(myMustWatchTVSeries)
  };


  return (
    <MoviesContext.Provider
      value={{
        favourites,
        myMustWatches,
        addToFavourites,
        addToMustWatches,
        removeFromFavourites,
        addReview,
        favouritePersons,
        addToFavouritePersons,
        removeFromFavouritePersons,
        favouriteTVSeries,
        addToFavouriteTVSeries,
        removeFromFavouriteTVSeries,
        addToMustWatchTVSeries,
        myMustWatchTVSeries
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;