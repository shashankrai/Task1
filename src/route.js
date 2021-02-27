import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Cars from './App';
import Mycar from './cars';
import Header from './header';
import Footer from './footer';
import Fav from './fav';
import NotFound from './notFound';



export default function App() {
  return (
    <Router>
        <div>
        <Header></Header>
        <Switch>
          <Route path="/car/:id" component={Mycar} exact/>
          <Route path="/" component={Cars} exact />
          <Route path="/favorite" component={Fav} exact/>
          <Route component={NotFound} />     
          </Switch>
          <Footer></Footer>
          </div>
    </Router>
  );
}
