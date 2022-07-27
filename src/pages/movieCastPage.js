import React from "react";
import { useParams } from "react-router-dom";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovieCast } from "../api/tmdb-api";
import { getMovie } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const MovieCastPage = () => {
  
  const { id } = useParams();
  const { data: cast, error: error1, isLoading: isLoading1, isError: isError1 } = useQuery(
    ["moviecast", { id: id }],
    getMovieCast
  );

  const { data: movie, error: error2, isLoading: isLoading2, isError: isError2 } = useQuery(
    ["movietitle", { id: id }],
    getMovie
  );

  if (isLoading1) {
    return <Spinner />
  }

  if (isError1) {
    return <h1>{error1.message}</h1>
  }  
  const persons = cast.cast;

  if (isLoading2) {
    return <Spinner />
  }

  if (isError2) {
    return <h1>{error2.message}</h1>
  }  
  const movieTitle = movie.title;
 
  console.log(persons)
  console.log(movieTitle)

  const favouritePersons = persons.filter(p => p.favouritePerson)
  localStorage.setItem('favouritePersons', JSON.stringify(favouritePersons))
 

  return (
    <PersonListPageTemplate
      title= {`Cast: ${movieTitle}`} 
      persons={persons}
      action={(person) => {
        return <AddToFavouritesIcon person={person} />
      }}
    />
  );
};
export default MovieCastPage;