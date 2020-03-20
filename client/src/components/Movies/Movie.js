import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';
import { getApiUrl } from '../../utils';

const API_URL = getApiUrl();

const Movie = ({ addToSavedList }) => {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`${API_URL}/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard isSingle={true} movie={movie} />

      <div className='btn small save-button' onClick={saveMovie}>
        <i className="fa fa-save icon"></i>
        Save
      </div>
    </div>
  );
}

export default Movie;
