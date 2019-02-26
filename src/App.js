import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import MoviesPage from './components/pages/MoviesPage';
import { Link,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="movies">Movies</Link>
        <Route path='/movies' component={MoviesPage}></Route>
      </div>
    );
  };
};

export default App;
