import React from 'react'
import ReactDOM from "react-dom";
const name = "Pratibha";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
    <>     
    <h1>hello, my name is {name}</h1>
   <p>Current date is = {currDate}</p>
   <p>Current Time is = {currTime}</p>
    </>,
  document.getElementById("root") 
     );   