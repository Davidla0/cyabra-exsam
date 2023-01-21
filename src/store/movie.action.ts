import { Dispatch } from 'redux';
import { setUpMovies } from "./movie.reducer";
import { Movie } from "../services/api";
import { movieService } from "../services/movie.service";

interface LoadMoviesAction {
    payload: Movie[];
    type: "movies/setUpMovies";
}

export function loadMovies(search?: any) {
    return async (dispatch: Dispatch<LoadMoviesAction>) => {
        try {
            const res = await movieService.query(search)

            dispatch(setUpMovies(res))
        } catch (err) {
            console.log('Cannot load movies', err)
        }
    }
}



