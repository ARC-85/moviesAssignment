import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import TemplatePersonPage from "../components/templatePersonPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonDetailsPage = () => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );
  console.log("this is person " + id)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <TemplatePersonPage person={person}>
            <PersonDetails person={person} />
          </TemplatePersonPage>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;