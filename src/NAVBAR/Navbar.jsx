import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Routing
          </Link>
          <Link to="/Form1" className="navbar-brand">
            Form1
          </Link>
          <Link to="/Empolyee" className="navbar-brand">
            Employee
          </Link>
          <Link to="/Login2" className="navbar-brand">
           Login2
          </Link>
          
          
        </nav>
      </>
    );
  }
}
export default Navbar;