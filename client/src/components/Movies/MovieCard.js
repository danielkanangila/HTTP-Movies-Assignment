import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div className="card-action mt">
          <Link id="link" to={{pathname: `/update-movie/${id}`, state: {...props.movie}}} className="btn btn-primary small">
            <i className="fa fa-edit icon"></i>
            Update
          </Link>
          <Link to={`/delete-movie/${id}`} className="btn btn-danger small">
            <i className="fa fa-trash icon"></i>
            Delete
          </Link>
        </div>
    </div>
  );
};

export default MovieCard;
