
import React,{useState} from "react";
const Form1 =()=>{

const [fullName,setFullName] = useState( {
    fname : "",
    lname : "",
});


const onSubmit= (event) => {
    event.preventDefault();
    alert("form submitted");
  
};
 const inputEvent = (event) => {
     console.log(event.target.value);
     console.log(event.target.name);


const value = event.target.value;
const name = event.target.name;
    
setFullName((preValue) => {
if(name=== 'fname'){
   return {
fname : "value",
lname : "preValue.lname",
   };
}

 
  else if(name=== 'lname'){
   return {
fname : "preValue.fname",
lname : "value",
   }
 }
});
 
    return(
        <>
        <div className= "main_div">
        <form onSubmit={onSubmit}>
            <div>     
                
                <h1>hello {fullName.fname} {fullName.lname} </h1>
                <br />
                <input type="text" placeholder="Enter your Name" 
                name="fname"
                onChange={inputEvent}
                value= {fullName.fname}
                />
                </div>
                <input type="text" placeholder="Last Name" 
                name="lname"
                onChange={inputEvent}
                value= {fullName.lname} 
                />
                <br/>
                <button  type="submit">submit me</button>
        </form>
                </div>
        </>

    );
    
 }
}

export default  Form1;
