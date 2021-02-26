import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cars from './App';
import Mycar from './cars';
import Header from './header';
import Footer from './footer';


export default function App() {
  return (
    <Router>
        <div>
        <Header></Header>
        <Switch>
          <Route path="/car/:id" component={Mycar}>
          </Route>
          <Route path="/" exact component={Cars}>
          </Route>        
          </Switch>
          <Footer></Footer>
          </div>
    </Router>
  );
}
