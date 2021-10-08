import React,{useState} from "react";
 const Event =()=>{
     const purple = "#8e44ad";
    
     const [bg, setBg] = useState(purple);
     const [name, setName] = useState("click me");
     
     const bgChange =()=>{
        //  console.log("clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("okkk");
 };

 const bgBack =() =>{
     setBg(purple);
     setName("fine");
 }
     return (
<>
<div
 style= {{backgroundColor: bg}}>
    <button onClick = {bgChange} onDoubleClick={bgBack}>{name} </button>
</div>
</>
     );
 }
 export default Event;