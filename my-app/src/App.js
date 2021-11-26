// import './index.css';
import './assets/bootstrap/Flip.css';
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Project/Navbar";
import Home from "./Project/Home";
import Contact from "./Project/Contact";
import Service from "./Project/Service";
import About from "./Project/About";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route exact path="/home" component={Home} /> 
            <Route 
             path="/about" component={About} />
            <Route exact  path="/service" component={Service} />
            <Route  exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
