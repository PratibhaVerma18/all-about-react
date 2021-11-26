import React,{Component} from "react";
class Form2 extends Component{
state ={
email: "",
password:"",
};
emailHandler=(event)=>{
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({email:event.target.value});

}
passwordHandler =(event)=>{

this.setState({email:event.target.value});
};

render (){
    return(
        <>
<h2>Login components</h2>
{/* <pre>{JSON.stringify(this.state)}</pre> */}
<form>
    <label>Email</label>
    <input type="text" placeholder="click" onChang={this.emailHandler} /> <br />
    <label>password</label>
    <input type="text" placeholder="click" onChange={this.passwordHandler} />
    <br />
</form>
        </>
    );
}
}
export default Form2;