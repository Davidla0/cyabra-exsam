import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../services/api"
import { useStoreSelector } from "../hooks/use-store-selector";
import { Loader } from "../cmp/loader";


const MovieDetails = () => {
    const [movie, setMovie] = React.useState<Movie>();
    const { movies } = useStoreSelector(state => state.movieStore)

    const params = useParams()
    const nav = useNavigate()

    React.useEffect(() => {
        async function fetchDetails() {
            setMovie(movies.find(movie => movie.id === params.id))
        }
        fetchDetails();

    }, [])


    if (!movie) return <Loader />
    return <section className="movie-details">
        <main>
            <div className="movie-img"><img src={movie.image} alt="" /></div>
            <div className="movie-description">
                <p><b>Name:</b> {movie.title} </p>
                <p><b>Description:</b> {movie.description}</p>
                <p><b>Run Time:</b>  {movie.title} </p>
                <p><b>Genres:</b> {movie.genres} </p>
                <p><b>Rating:</b> {movie.imDbRating}({movie.imDbRatingVotes}) </p>
                <p><b>Plot:</b>  {movie.plot} </p>
                <p><b>Actors:</b> {movie.stars} </p>
            </div>
        </main>
        <footer className="movie-details-footer">
            <button className="home-btn" onClick={() => nav(`/`)}>Home</button>
        </footer>
    </section>
}

export default MovieDetails