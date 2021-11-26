import React from "react";
import ReactDOM from "react-dom";
import {add, sub, 
  div} from "./calculator/Calc";
ReactDOM.render(
  <>
  <ul>
    <li>{add(40,4)}</li>
    <li>{sub(40,4)}</li>
    <li>{div(40,4)}</li>
  </ul>
  </>,
  document.getElementById("root")
  
);