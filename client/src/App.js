import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/Movies/SavedList";
import MovieList from "./components/Movies/MovieList";
import Movie from "./components/Movies/Movie";
import axios from 'axios';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Movies/Form";
import DeleteMovie from "./components/Movies/DeleteMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <SavedList list={savedList} />
        <Route exact path="/" render={() => <MovieList movies={movieList} /> }/>
        <Route path="/movies/:id" render={() => <Movie addToSavedList={addToSavedList} />} />
        <Route path="/update-movie/:id" render={props => <Form  {...props}/>} />
        <Route path="/delete-movie/:id" component={DeleteMovie} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
