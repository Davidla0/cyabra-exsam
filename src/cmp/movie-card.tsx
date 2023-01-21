import React from "react"
import { Link } from "react-router-dom"
import { Movie } from "../services/api"

interface Prop {
    movie: Movie
}

export const MovieCard = ({movie}: Prop) => {

    if(!movie) return <div></div>
    return <Link to={`/${movie.id}`} key={movie.id} className="movie">
            <h5 className="movie-title">{movie.title}</h5>
            <img src={movie.image} alt=""/>
            <h5>{movie.description}</h5>
         </Link>
    
}