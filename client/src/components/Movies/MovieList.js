import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getMovieList();
  }, []);

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
