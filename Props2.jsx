import React from "react";
//import Props2 from "./Props2";
class Props2 extends React.Component{
 
    
    render(){
       return <>
            <pre>{JSON.stringify(this.props)}</pre>
                 <h1>-------{this.props.x}</h1>
                <h1>hello pgudg</h1> 
        </>
    }
}
export default Props2;