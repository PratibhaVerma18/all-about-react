import React from "react";
class Login2 extends React.Component{
state={
    username:"",landmark: "",city:"", locality:"",address:"",phonenumber:"", pincode:"",state:"" ,addrestype:"",
};
updateForm=(event)=>{
this.setState({...this.state,[event.target.name]:event.target.value});
}
submitHandler=()=>{
    // event.preventDefault();
    console.log(this.state)
}
render (){
    return(
        <>
<pre>{JSON.stringify(this.state)}</pre>

<div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
<form onSubmit={this.submitHandle}>

<div className="row">
<div className="col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="userName" 
name="userName"
onchange={this.updateForm} />
    </div>
</div>


{/* <pre>{JSON.stringify(this.state)}</pre> */}
    <div className="col-md-5">
        <div className="form-group">
     <input type="text" className="form-control" placeholder="phonenumber"
     name="phonenumber"
     onchange="{this.updateForm}" />   

</div>
</div>

</div>

<div className="row">
<div className="col-md-6">
    <div className="form-group">
<input type="text" className="form-control" placeholder="city" 
name="city"
onchange={this.updateForm} />
</div>
</div>
</div>

<div className="col-md-6">
    <div className="form-group">
<input type="text" className="form-control" placeholder="landmark" 
name="landmark"
onchange={this.updateForm} />
</div>
</div>
    
<div className="col-md-6">
<div className="form-group" >
<input type="text" className="form-control" placeholder="locality" 
name="locality"
onchange={this.updateForm}/>
</div>

</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="address" 
name="address"
onchange={this.updateForm} />
</div>

<div className="form-group">
<select className="form-control" placeholder="state" 
name="state"
onchange={this.updateForm} >
    <option> -select-state--</option>
    <option> Uttar Pradesh </option>
    <option> Kolkata</option>
    <option>Delhi</option>
</select>
</div>

<div className="form-group">
<input type="number" className="form-control" placeholder="pincode" 
name="pincode"
onchange={this.updateForm} />
</div>
<div className="form-group">
<p>address Type</p>
  <input type="radio"  className="home"onChange={this.updateForm} />
 <label>Home</label>
 <input type="radio"  className="work" onChange={this.updateForm}/>
 <label >Work</label>
 </div>

    
<button onClick={this.submitHandler}className="btn btn-success">submit</button> 



<button onClick={this.submitHandler} className="btn btn-primary">cancel</button>
          </form>
    </div>
</div>
</div>

        </>
    );
}
}
export default Login2;

