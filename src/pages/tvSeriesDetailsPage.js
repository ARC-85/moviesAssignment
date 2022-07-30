import React from "react";
import { useParams } from "react-router-dom";
import TVSeriesDetails from "../components/tvSeriesDetails";
import TemplateTVSeriesPage from "../components/templateTVSeriesPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVSeriesDetailsPage = () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    getSeries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          <TemplateTVSeriesPage series={series}>
            <TVSeriesDetails series={series} />
          </TemplateTVSeriesPage>
        </>
      ) : (
        <p>Waiting for TV series details</p>
      )}
    </>
  );
};

export default TVSeriesDetailsPage;