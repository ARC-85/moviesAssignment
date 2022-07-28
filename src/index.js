import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularPersonsPage from "./pages/popularPersonsPage";
import PersonDetailsPage from "./pages/personDetailsPage";
import MovieCastPage from "./pages/movieCastPage";
import PersonMoviesPage from "./pages/personMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
            <Route path="/movies/:id" element={<MovieDetailsPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/actors/popular" element={<PopularPersonsPage />} />
            <Route path="/person/:id" element={<PersonDetailsPage/>} />
            <Route path="/movies/:id/cast" element={<MovieCastPage/>} />
            <Route path="/person/:id/movie_credits" element={<PersonMoviesPage/>} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));