import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/header'
import Infoform from './components/InfoForm/infoform'
import Footer from './components/Footer/footer'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" id="above-nav">
         <Header />
         <Infoform />
         <Footer />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
