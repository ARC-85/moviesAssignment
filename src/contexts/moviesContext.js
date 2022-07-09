import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [myMustWatches, setMustWatches] = useState([]);

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


  return (
    <MoviesContext.Provider
      value={{
        favourites,
        myMustWatches,
        addToFavourites,
        addToMustWatches,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;