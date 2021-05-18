import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClick: 0,
        }
    }
    increaseNum = () => {
        this.setState({
            numberOfClick: this.state.numberOfClick + 1,
        })
    }
    sendInfo=() =>{
        this.props.showStuff(this.props.titel);
    }
    render() {

        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.sendInfo} />
                    <Card.Body >
                        <Card.Title>{this.props.titel}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            </Card.Text>
                            <Card.Text>
                           🎠 Number Of Horne: {this.state.numberOfClick}
                        </Card.Text>
                        <Button onClick={this.increaseNum} variant="warning" size="lg" block>vote</Button>
                    </Card.Body>
                </Card>


            </div>
        )
    }
}

export default HornedBeast;

{/* <h2>{this.props.titel}</h2>
                <img src={this.props.imageUrl} alt={this.props.titel} titel={this.props.titel} width="500px" />
                <p>{this.props.description}</p> */}

                