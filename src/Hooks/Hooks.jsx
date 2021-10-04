import React from "react";
let count = 1;

const IncNum = () => {
    console.log('clicked');
}
const Hooks = () => {
return(
    <>
<h1> {count} </h1>
<button onClick={IncNum}> Click Me </button>
 
 
    </>
)
}
export default Hooks;