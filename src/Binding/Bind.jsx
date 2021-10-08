import React from "react"
class Bind extends React.Component{
constructor(x){
    super(x);
    this.state ={
msg: "hello",
    };
}
updateMessageHandeler =(newmsg,a,b,c)=> {
    console.log(c);
    this.setState({msg:newmsg});
};
render(){
    return(
        <>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.updateMessageHandeler.bind(this,"good morning")}>click</button>
        GM
        
        <button onClick={this.updateMessageHandeler.bind(this,"good noon")}>click</button>
        GA
        
        <button onClick={this.updateMessageHandeler.bind(this,"good night")}>click</button>
        GN
        </>
    );
}
}
export default Bind;
