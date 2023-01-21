// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default
import { configureStore } from '@reduxjs/toolkit'
import  movieReducer from './movie.reducer'

export const store = configureStore({
    reducer: {
        movieStore: movieReducer,
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
