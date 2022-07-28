import React from "react";
import { useParams } from "react-router-dom";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPersonMovies } from "../api/tmdb-api";
import { getPerson } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const PersonMoviesPage = () => {
  
  const { id } = useParams();
  const { data: movies, error: error1, isLoading: isLoading1, isError: isError1 } = useQuery(
    ["personmovies", { id: id }],
    getPersonMovies
  );

  const { data: person, error: error2, isLoading: isLoading2, isError: isError2 } = useQuery(
    ["personname", { id: id }],
    getPerson
  );

  if (isLoading1) {
    return <Spinner />
  }

  if (isError1) {
    return <h1>{error1.message}</h1>
  }  
  const personMovies = movies.cast;

  if (isLoading2) {
    return <Spinner />
  }

  if (isError2) {
    return <h1>{error2.message}</h1>
  }  
  const personName = person.name;
 
  console.log(personMovies)
  console.log(personName)

  const favourites = personMovies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
 

  return (
    <MovieListPageTemplate
      title= {`Actor: ${personName}`} 
      movies={personMovies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default PersonMoviesPage;