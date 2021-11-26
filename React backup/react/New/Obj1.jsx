import React from "react";
import Obj2 from './Obj2';
class Obj1 extends  React.Component{

    product={
                quality: "ten",

                lname:"singh"
            }
            
    render(
        
    ){
        console.log("product",this.product)   
        return<>
            <Obj2 x={this.product.quality}y={this.product.lname}/>

    </>
}

}
export default Obj1;