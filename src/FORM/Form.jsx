import React,{useState} from "react"
const Form =()=>{
const [name,setName] = useState();
const  [fullName,setFullName] = useState();

const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
};
const onSubmit=()=>{
    setFullName(name);
}

    return(
    <>
<div>
    <h1>hello {fullName}</h1>
    <input type="text" placeholder="Enter your Name" 
    onChange={inputEvent}
value= {name}
/>
    
    <button onClick={onSubmit}>click me</button>
</div>

    </>
    );
}
export default  Form;