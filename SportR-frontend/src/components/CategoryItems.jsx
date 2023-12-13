// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryItem from './CategoryItem';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import RentForm from './RentForm';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

 

const equipmentList = {
    "Soccer": ["Soccer Ball", "Soccer Shoes", "Goalkeeper Gloves", "Jersey", "Shin Guards"],
    "Basketball": ["Basketball", "Basketball Shoes", "Basketball Hoop", "Jersey"],
    "Tennis": ["Tennis Racket", "Tennis Balls", "Tennis Shoes", "Tennis Bag"],
    "Baseball": ["Baseball Bat", "Baseball Glove", "Baseballs", "Baseball Cap"],
    "Golf": ["Golf Clubs", "Golf Balls", "Golf Shoes", "Golf Bag", "Golf Gloves"],
    "Fitness": ["Dumbbells", "Yoga Mat", "Resistance Bands", "Jump Rope", "Exercise Ball"],
    "Cycling": ["Bicycle", "Helmet", "Bike Lock", "Cycling Shoes"],
    "Running": ["Running Shoes", "Running Shorts", "Water Bottle", "Reflective Gear"],
    "Swimming": ["Swimsuit", "Swim Goggles", "Swim Cap", "Kickboard", "Fins"],
    "Outdoor Recreation": ["Camping Tent", "Hiking Boots", "Backpack", "Sleeping Bag"]
    // Add more categories and equipment as needed
  };
function CategoryItems(props) {

    const navigate = useNavigate()


    const {category}=useParams();
    const items = equipmentList[category] || [];
    // console.log(category);
    const [isOpen, setOpen]=useState(false);
    const [selectedItem, setItem]=useState('');
    const handleRent=(item)=>{
        setItem(item);
        setOpen(true);
    };
    const [quantity, setQuantity]=useState(1);
    const [date, setDate]=useState(2);
    const onQuantityChange=(event)=>{
        setQuantity(event.target.value);
    };
    const onDateChange=(event)=>{
        setDate(event.target.value);
    };
    //   openModal = () => this.setState({ isOpen: true });
    const closeModal = () => {
        console.log("Hello");
        setOpen(false);
    }

    //************Check this************** */
    const handleSubmit = async (item) => {
        // e.preventDefault(); 
        try {
        
        const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
        const response = await axios.post("http://localhost:3001/rent/rentItem", {
            category: category,
            item: item,
            quantity: quantity,
            amount: 10,
            rentedOn: new Date(),
            rentedTill: date
        }, config)
         
        navigate("/Rent")
        } catch (exception) {
        if(exception.response.status==403)
        {
            alert("Access Forbidden!!");
            props.setLogin(false);
            // navigate("/login");
        }
        else if(exception.response.status==400)
        {
            alert("Token expired! Login again");
            props.setLogin(false);
            navigate("/login");
        }
    }
    };
    return (
        <div className="App-header" style={{}}>
            <div style={{ alignItems:"center", justifyContent:"center", paddingLeft:"2%"}}>
                
                <Row xs={1} sm={2} md={3} className="g-4" style={{alignItems:"center", justifyContent:"center"}}>
                    {(items).map((item, index) => (
                    <Col key={item}>
                        <Card className="card" data-bs-theme='dark' onClick={() => {}} style={{ cursor: 'pointer', width: "70%", height:"90%", justifyContent:"center", alignItems:"center"}}>
                        <Card.Body>
                            <Card.Title>
                                <CategoryItem key={index} index={index} item={item} handleRent={handleRent}/>
                            </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
                
                { isOpen ? <RentForm item={selectedItem} handleClose={closeModal} isOpen={isOpen} handleSubmit={handleSubmit} onQuantityChange={onQuantityChange} onDateChange={onDateChange} date={date} quantity={quantity}/>: null }
            {/* {categories.map((category, index) => (
                            <Category key={index} index={index} category={category}/>
                        ))} */}
            </div>
        </div>
    )
}

export default CategoryItems