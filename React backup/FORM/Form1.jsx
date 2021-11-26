
import React,{useState} from "react"
const Form1 =()=>{

const [name,setName] = useState();


const  [lastName,setLastName] = useState("");

const  [fullName,setFullName] = useState("");

const  [lastNamenew,setLastNamenew] = useState("");

const onSubmit= (event) => {
    setFullName(name);
    setLastNamenew(lastName);
    event.preventDefault();
};
const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    
};
const inputEvents = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
};


    return(
        
        <>
        <div className= "main_div">
        <form onSubmit={onSubmit}>
            <div>     
                
                <h1>hello {fullName} {lastNamenew} </h1>
                <br />
                <input type="text" placeholder="Enter your Name" 
                onChange={inputEvent}
                value= {name}
                />
                </div>
                <input type="text" placeholder="Last Name" 
                onChange={inputEvents}
                value= {lastName} 
                />
                <br/>
                <button  type="submit">submit me</button>
        </form>
                </div>

        
        </>

    );
}

export default  Form1;
