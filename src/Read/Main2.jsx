import React   from 'react';  
class Main2 extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>jhksjljio</h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maxime officiis ad suscipit consequuntur 
                nobis dicta vel accusamus unde minus quod ipsa sapiente odio illum in soluta debitis, ea natus.</p>          
          </div>  
        );  
    }  
}  
Main2.defaultProps = {  
   name: "Ram"  
}  
export default Main2;  