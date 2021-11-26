import React,{useState} from "react";

const Hooks = () => {
    const state = useState();
console.log(state);
// let count = 1;
const [count, setcount] = useState(6);
const IncNum = () => {
    // count++;
    // console.log('clicked');

    // setcount(100);

    setcount(count +3);
};

return(
    <>
<h1> {count} </h1>
<button onClick={IncNum} className= "btn btn-success mr-3"> Click Me </button>
    </>
)
}
export default Hooks;
