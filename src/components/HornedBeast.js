import React from 'react';

class HornedBeast extends React.Component{

    render (){

        return(
            <div>
               <h2>{this.props.titel}</h2> 
              <img src={this.props.imageUrl} alt={this.props.titel} titel={this.props.titel} width="500px"/>
              <p>{this.props.description}</p> 

            </div>
        )
    }
}

export default HornedBeast;