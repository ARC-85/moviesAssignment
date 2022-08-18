import React from "react";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPersons } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const PopularPersonsPage = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('popularPersons', getPopularPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;
  console.log(persons)

  const favouritePersons = persons.filter(p => p.favouritePerson)
  localStorage.setItem('favouritePersons', JSON.stringify(favouritePersons))
 

  return (
    <PersonListPageTemplate
      title='Popular Actors'
      persons={persons}
      
    />
  );
};
export default PopularPersonsPage;