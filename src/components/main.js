
import React from 'react';
import { CardColumns } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import hornedData from './HornedData.json';

class Main extends React.Component {

    render() {
        return (
            <>
                <CardColumns>
                    {this.props.beastInfo.map((item, index) => {
                        return (
                            <HornedBeast
                                titel={item.title}
                                imageUrl={item.image_url}
                                description={item.description}
                                key={index}
                                showStuff={this.props.showStuff}
                            />
                        )
                    })}
                    </CardColumns>
=======
                {hornedData.map((item, index) => {
                    return (
                        <HornedBeast
                            key={index}
                            titel={item.title}
                            imageUrl={item.image_url}
                            description={item.description} />
                    )
                })}

            </>
        )
    }
}

export default Main;