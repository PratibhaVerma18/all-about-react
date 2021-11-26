import React from "react";
class Login extends React.Component{
state ={
    email: "",
    password: ""
};
emailHandler=(event)=>{
console.log(event.target.value);
this.setState({email:event.target.value});
};
passwordHandler=(event)=>{
    this.setState({password:event.target.value});
};

render(){
    return(
        <>
<div>
    <h2>login components</h2>
    <pre>{JSON.stringify(this.state)}</pre>
    <form>
<label Email></label>
<input type ="text" onchange={this.emailHandler}></input><br />
<label password></label>
<form className="form-control"></form>
<input type="text" onchange={this.passwordHandler}/>

    </form>
</div>


        </>
    );
}



}
export default Login;