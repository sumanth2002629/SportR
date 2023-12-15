import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
// import DatePicker from "react-date-picker";
import { useState } from 'react';
function RentForm(props) {
    
    
    const [date, setDate] = useState(1);
    const [quantity, setQuantity] = useState('');
    return(
        <div>
            <Modal show={props.isOpen} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Rent {props.item}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Quantity: </Form.Label>
                        <Form.Control type="number"  onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}/>
                        <Form.Label>Rent till: </Form.Label>
                        <Form.Control type="date"  onChange={(e) =>
                setDate((prevDate) => {
                  new Date(e.target.value).toISOString().split('T')[0];
                })
              } value={date}/>
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={()=>{props.handleSubmit(props.item, date, quantity)}}>
                    Submit 
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
  export default RentForm;