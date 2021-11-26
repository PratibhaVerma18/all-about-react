import React from "react";
class Login2 extends React.Component{
state={
    username:"",
    email: "",
    password:"",
    locality:"",
    address:"",
    phonenumber:"",
    pincode:"",
};
updateForm=(event)=>{
this.setState({...this.state,[event.target.name]:event.target.value});
}
submitHandler=()=>{
    // event.preventDefault();
}
render (){
    return(
        <>
<pre>{JSON.stringify(this.state)}</pre>
<div>
<div className="container">
    <div className="row">
        <div className="col-md-5">
<form>
    <div className="form-group">
<input type="text" className="form-control" placeholder="userName" 
name="userName"
onchange={this.updateForm} />
    </div>

<pre>{JSON.stringify(this.state)}</pre>
    <div className="container">
    <div className="row">
        <div className="col-md-5">
</div>
</div>


    <div className="form-group">
<input type="text" className="form-control" placeholder="email" 
name="email"
onchange={this.updateForm} />

</div>

    <div className="form-group">
<input type="text" className="form-control" placeholder="password" 
name="password"
onchange={this.updateForm} />
</div>


<div className="form-group">
<input type="text" className="form-control" placeholder="phonenumber" 
name="phonenumber"
onchange={this.updateForm} />
</div>

<div className="form-group" >
<input type="text" className="form-control" placeholder="locality" 
name="locality"
onchange={this.updateForm}/>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="address" 
name="address"
onchange={this.updateForm} />
</div>
</div>

<button onclick={this.submitHandler}className="btn btn-success">submit</button>
</form>            
        </div>

    </div>
</div>
</div>

        </>
    );
}
}
export default Login2;

