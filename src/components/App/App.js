import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Pane from '../Pane/Pane';
import Lower from '../Lower/Lower';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';


class App extends Component {
  render() {
    return (
      <div id="wrapper">
      
      <Header></Header>
      
      <Menu></Menu>
      
      <Pane />
      
      <div className="clear" />
      
      <Lower />
      
      <div className="clear" />
      
      <Footer />
      
      </div>

    );
  }
}

export default App;
