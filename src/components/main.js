
import React from 'react';
import HornedBeast from './HornedBeast';
import hornedData from './HornedData.json';

class Main extends React.Component {

    render() {
        return (
            <>
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