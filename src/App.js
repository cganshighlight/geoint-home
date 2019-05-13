import React from 'react';
import { render } from "react-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Manager, Reference, Popper } from 'react-popper';
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

class App extends React.Component{
  render(){
    return(
      
      <div className="container-fluid no-pad">
      <Header />
      <Hero />
        <section className="container">
          <Content />
          
        </section>
      <Footer />
      </div>
    );

  }
}

export default App;
