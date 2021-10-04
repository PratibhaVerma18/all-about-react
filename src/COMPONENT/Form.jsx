import React from 'react';  
class Form extends React.Component {  
 
   render() { 
    console.log("props",this.props) 
      return (  
         <div>  
            <form >
               <input type="text" name={this.props.fname} placeholder={this.props.placeholder} onChange={this.props.handleChange} />
               <input type="text" name={this.props.lname} placeholder={this.props.placeholder1} onChange={this.props.handleChange}  />
               <input type="text" name={this.props.mobile} placeholder={this.props.placeholder2} onChange={this.props.handleChange}  />
              <button type="submit"onClick={this.props.handleClick} className="btn btn-primary
              ">Submit</button>

            </form>
         </div>  
      );  
   }  
}  
export default Form;  