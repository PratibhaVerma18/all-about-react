import React from "react";
import Props2 from "./Props2";
class Props1 extends React.Component{
    comp={
        sno:1,
        name:"aaa"

    }
    namel="ramhello";
    
 
    lname="bbb";
    render(){
       return <>
                 <Props2 x={this.namel}/>
                <h1>hello p1</h1> 
        </>
    }
}
export default Props1;