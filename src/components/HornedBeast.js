import React from 'react';

class HornedBeast extends React.Component{

    render (){

        return(
            <div>
                {this.props.titel}
                {this.props.imageUrl}
                {this.props.description}
            </div>
        )
    }
}

export default HornedBeast;