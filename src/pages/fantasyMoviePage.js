import React from "react";
import TemplateFantasyMoviePage from "../components/templateFantasyMoviePage";
import FantasyMovie from "../components/fantasyMovie";
import FantasyMovieDescription from "../components/fantasyMovieDescription";

const FantasyMoviePage = (props) => {
  
  return (
    <TemplateFantasyMoviePage>
      <FantasyMovie />
      <FantasyMovieDescription />
    </TemplateFantasyMoviePage>
  );
};

export default FantasyMoviePage;