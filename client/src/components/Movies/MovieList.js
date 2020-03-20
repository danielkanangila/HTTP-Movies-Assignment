import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <div className="movie-item" key={movie.id} >
            <Link className="movie-link" to={`/movies/${movie.id}`} ></Link>
            <MovieCard movie={movie} />
          </div>
        ))
      }
    </div>
  );
}

export default MovieList;
