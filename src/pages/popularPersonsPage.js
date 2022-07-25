import React from "react";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPersons } from "../api/tmdb-api";


const PopularPersonsPage = (props) => {
  // useQuery replaced useEffect hook in previous commit (see "Fix upcoming movies page.")
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getPopularPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

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