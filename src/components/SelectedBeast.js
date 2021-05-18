import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{

    render(){
        return(
        <>
        <Modal show={this.props.show} 
        // onHide={handleClose}
        >
        <Modal.Header  >
          <Modal.Title>{this.props.element.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.element.image_url} alt={this.props.title} title={this.props.title} className="img-fluid" />
        <br></br>
        {this.props.element.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideStuff}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </>
        )
    }
}
export default SelectedBeast;