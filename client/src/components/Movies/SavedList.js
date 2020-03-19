import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = ({ list }) => {
  return (
    <div className="saved-list">
      <div className="header">
        <h3>Saved Movies:</h3>
        
        <div className="btn btn-primary small">
          <Link to="/">
            <i className="fa fa-home icon"></i>
            Home
          </Link>
        </div>
      </div>
      <div className="items">
        {list.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SavedList;
