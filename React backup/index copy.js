import React from 'react'
import ReactDOM from "react-dom";
// import "./index.css"
const name = "Pratibha";
const img1 ="https://picsum.photos/200/300";
const img2 ="https://picsum.photos/230/300";
const img3 ="https://picsum.photos/250/300";
const img4 ="https://picsum.photos/300/300";
const links ="https://www.google.com";
// adding inline css 
 const heading = {
   color : "#fa9191",
   textTransform : "capitalize",
   
   textAlign : "center",
 }

ReactDOM.render(
<>
 <h1 style ={heading}>
my name is {name}</h1>


<div className="img_div">                                      
<img src={img1} alt="random images" />
<img src={img2} alt="random images" />
<img src={img3} alt="random images" />
<a href={links} target="-pratibha">
<img src={img4} alt="random images" />
  </a>
  </div>
  </>,
  document.getElementById("root")
);

  
  