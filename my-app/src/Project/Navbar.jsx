import React from "react";

 function Navbar()=> {
return(
    <>
    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10-mx-auto">
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light"/>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      Navbar
      </a>
      <button 
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      area-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <div className="collapse navbar-collapse" 
      id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
          </li>
          </ul>
          
          </div>
          </button>
          </div>
          </div>
    
      </div>
      </div>
      <nav/>
  </>
);
 };



 export default Navbar;