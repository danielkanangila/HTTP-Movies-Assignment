import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/Movies/SavedList";
import MovieList from "./components/Movies/MovieList";
import Movie from "./components/Movies/Movie";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Movies/Form";
import DeleteMovie from "./components/Movies/DeleteMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div id="app">
      <NavBar />
      <div className="container">
        <SavedList list={savedList} />
        <Route exact path="/" render={() => <MovieList /> }/>
        <Route path="/movies/:id" render={() => <Movie addToSavedList={addToSavedList} />} />
        <Route path="/add-movie" render={props => <Form {...props} />} />
        <Route path="/update-movie/:id" render={props => <Form  {...props}/>} />
        <Route path="/delete-movie/:id" component={DeleteMovie} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
