import React from "react"
class Ternary1 extends React.Component{
constructor(){
super();
this.state={displayBio: true};
}
render() { 
    const bio =this.state.displayBio?(
<div>
<h3>heloo</h3>
</div>
         ):null;

    return(
        <>
<h1>welcome</h1>
{bio}

        </>
    );
}
}
export default Ternary1;









export default Ternary;