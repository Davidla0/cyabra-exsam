import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../services/api";


var STORAGE_KEY = 'IMDB'

interface AppState {
    movies:  Movie[];
}

const initialState: AppState = {
    movies: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
}

export const movieReducer = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setUpMovies: (state, action: PayloadAction<any>) => {
            state.movies = action.payload
        },
    }
}) 
export const { setUpMovies} = movieReducer.actions
  
export default movieReducer.reducer

  






