import React from "react";
import TVSeriesListPageTemplate from "../components/templateTVSeriesListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVSeries } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatchList';

const TVSeriesPage = (props) => {
  // useQuery replaced useEffect hook in previous commit (see "Fix upcoming movies page.")
  const {  data, error, isLoading, isError }  = useQuery('tvseries', getTVSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvSeries = data.results;

  const favouriteTVSeries = tvSeries.filter(t => t.favouriteTVSeries)
  localStorage.setItem('favouriteTVSeries', JSON.stringify(favouriteTVSeries))
 

  return (
    <TVSeriesListPageTemplate
      title='TV Series'
      tvSeries={tvSeries}
      action={(tvSeries) => {
        return <AddToMustWatchIcon series={tvSeries} />
      }}
    />
  );
};
export default TVSeriesPage;