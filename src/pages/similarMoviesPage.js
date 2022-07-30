import React from "react";
import { useParams } from "react-router-dom";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarMovies } from "../api/tmdb-api";
import { getMovie } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const SimilarMoviesPage = () => {
  
  const { id } = useParams();
  const { data: similarMovies, error: error1, isLoading: isLoading1, isError: isError1 } = useQuery(
    ["similarmovies", { id: id }],
    getSimilarMovies
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
  const movies = similarMovies.results;

  if (isLoading2) {
    return <Spinner />
  }

  if (isError2) {
    return <h1>{error2.message}</h1>
  }  
  const movieTitle = movie.title;
 
  console.log(movies)
  console.log(movieTitle)

  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
 

  return (
    <MovieListPageTemplate
      title= {`Similar Movies: ${movieTitle}`} 
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default SimilarMoviesPage;