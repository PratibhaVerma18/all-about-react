import React,{useState} from "react";


const Hooks2 =() =>{
let newTime = new Date().toLocaleTimeString();
const[ctime,setCtime] = useState(newTime);

const UpdateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
    
}



    return (
    <>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>GetTime</button>
    </>

    );
}

export default Hooks2;