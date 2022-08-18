import React, { useState } from "react";
import fakeAuth from "../fakeAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [myMustWatches, setMustWatches] = useState([]);
  const [myFantasyMovie, setMyFantasyMovie] = useState( {} )
  const [myFantasyRoles, setMyFantasyRoles] = useState([]) 
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
      console.log(favourites)
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
    console.log(myReviews)
  };

  

  const addFantasyMovie = (myFantasyMovie) => {
    setMyFantasyMovie( {...myFantasyMovie } )
    console.log(myFantasyMovie)
    console.log(myFantasyMovie.fantasyTitle)
  };

  const addFantasyRole = (person, fantasyRole) => {
    setMyFantasyRoles( {...myFantasyRoles, [person.id]: fantasyRole } )
    console.log(myFantasyRoles)

  };

  const removeFromRoles = (person) => {
    const myRoles = Object.values(myFantasyRoles);
    const remainingRoles = myRoles.filter((role) => role.id !== person.id)
    setMyFantasyRoles(remainingRoles);
    console.log(remainingRoles);
    console.log(person.id)
  };

  const authenticate = async (username, password) => {
    if (username === "user1" && password === "password") {
    const token = await fakeAuth(username, password);
    setToken(token);
    const origin = location.state?.intent?.pathname || "/";
    navigate(origin);
    console.log(token) } else {
      navigate("/login")
    }
  };
  
  const signout = () => {
    setToken(null);
    navigate('/')
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
        addFantasyMovie,
        myFantasyMovie,
        addFantasyRole,
        myFantasyRoles,
        removeFromRoles,
        token,
        authenticate,
        signout,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;