import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import MoviesPage from './components/pages/MoviesPage';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
  };

  stickOverlay = () => this.setState({ overlayFixed: true })
  unStickOverlay = () => this.setState({ overlayFixed: false })

  render() {
    return (
      <div className="App">
        
        <Header/>

        <Container text>

          <Route path='/movies' component={MoviesPage}></Route>
          <hr/>
        </Container>

        <Footer/>

       
      </div>
    );
  };
};

export default App;
