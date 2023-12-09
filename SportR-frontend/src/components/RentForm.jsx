import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
function RentForm(props) {
    
    // const title="Rent "+props.item;
    return(
        <div>
            <Modal show={props.isOpen} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Rent {props.item}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Quantity: </Form.Label>
                        <Form.Control type="number"  onChange={props.onQuantityChange} value={props.quantity}/>
                        <Form.Label>Rent till: </Form.Label>
                        <Form.Control type="date"  onChange={props.onDateChange} value={props.date}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={()=>{props.handleSubmit(props.item)}}>
                    Submit 
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
  export default RentForm;