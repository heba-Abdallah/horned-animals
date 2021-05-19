import React from 'react';
import HornedBeast from './HornedBeast';
import hornedData from './HornedData.json';
import Form from 'react-bootstrap/Form'
// import { CardColumns } from 'react-bootstrap';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: hornedData
        }
    }

        updateNum = (event) => {
            let numOfHornes = parseInt(event.target.value)
            let allData = hornedData;
            let result2;
            if (numOfHornes) {
                result2 = allData.filter((element) => {
                    if (element.horns === numOfHornes) {
                        return element;
                    }
                })
            } else {
                result2 = allData;
            }
            console.log('num', numOfHornes);
            console.log('hi', allData);
            console.log('heba', result2);
            
            this.setState({
                result: result2
            })
        }
        render() {
            return (
                <>
                    <Form>
                        <fieldset>
                            <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                                <Form.Label> number of horns</Form.Label>
                                <br></br>
                                <Form.Control as="select" custom name='numOfHornes' onChange={this.updateNum}>
                                    <option value=''>ALL</option>
                                    <option value='1'>ONE</option>
                                    <option value='2'>TWO</option>
                                    <option value='3'>THREE</option>
                                    <option value='100'>ONE Hundred</option>
                                </Form.Control>
                            </Form.Group>
                        </fieldset>
                    </Form>

                    
                        {this.state.result.map((item, index) => {
                            return <HornedBeast
                                titel={item.title}
                                imageUrl={item.image_url}
                                description={item.description}
                                key={index}
                                showStuff={this.props.showStuff}
                                some={this.result}

                            />

                        })}
                    
                </>
            )
        }
    }

    export default Main;