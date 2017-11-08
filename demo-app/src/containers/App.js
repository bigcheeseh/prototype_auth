import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Auth from "./Auth";
import UserPage from "./UserPage";
import Footer from '../components/Footer';

class App extends Component {

  render(){

      return (
         <div>
            <BrowserRouter>
              <div>
                    <Route exact path='/' component={ Auth } />
                    <Route exact path='/:user' component={ UserPage } />
              </div>
            </BrowserRouter>
         </div>
      )
    }
  }


export default App;
