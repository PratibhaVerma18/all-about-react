// import './index.css';
import './assets/bootstrap/Flip.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./NAVBAR/Navbar";
 import Empolyee from "./Components/Empolyee";
import Login2 from "./LOGIN/Login2";
import Form1 from "./FORM/Form1";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route path="/Login2" component={Login2} /> 
            <Route path="/Empolyee" component={Empolyee} />
            <Route path="/Form1" component={Form1} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
