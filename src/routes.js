import  MovieApp  from './pages/movie-app'
import MovieDetails from './pages/movie-details'

const routes = [
    {
        path: '/',
        component: <MovieApp />,
    },
    {
        path: '/:id',
        component: <MovieDetails />,
    }
]

export default routes
