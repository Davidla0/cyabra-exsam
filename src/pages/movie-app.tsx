import React from "react";
import { MoviesList } from "../cmp/movies-list";
import { Movie } from "../services/api";
import { loadMovies } from "../store/movie.action"

import { useStoreDispatch } from "../hooks/use-store-dispatch"
import { useStoreSelector } from "../hooks/use-store-selector";
import { Loader } from "../cmp/loader";

export type AppState = {
  movies?: Movie[];
  search: string;
};

const MovieApp = () => {

  const { movies } = useStoreSelector(state => state.movieStore)
  const dispatch = useStoreDispatch()


  React.useEffect(() => {    
      dispatch(loadMovies())
  }, []);

  if(!movies) return <Loader/>
  return (
    
    <main className="grid-window">
     
      {movies ? (
        <MoviesList />
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};
export default MovieApp;