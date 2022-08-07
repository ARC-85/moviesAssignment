import React from "react";
import RoleListPageTemplate from "../components/templateRoleListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPersons } from "../api/tmdb-api";

import TemplateFantasyMoviePage from "../components/templateFantasyMoviePage";


const CreateRolePage = (props) => {
  
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
    <TemplateFantasyMoviePage>
    <RoleListPageTemplate
      title='Create a Role For Your Favourite Actors'
      persons={persons}
      
    />
    </TemplateFantasyMoviePage>
  );
};
export default CreateRolePage;