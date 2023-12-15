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
    "Soccer": [
      { name: "Soccer Ball", rentPrice: 75 },
      { name: "Soccer Shoes", rentPrice: 150 },
      { name: "Goalkeeper Gloves", rentPrice: 120 },
      { name: "Jersey", rentPrice: 105 },
      { name: "Shin Guards", rentPrice: 75 }
    ],
    "Basketball": [
      { name: "Basketball", rentPrice: 75 },
      { name: "Basketball Shoes", rentPrice: 150 },
      { name: "Basketball Hoop", rentPrice: 225 },
      { name: "Jersey", rentPrice: 105 }
    ],
    "Tennis": [
      { name: "Tennis Racket", rentPrice: 150 },
      { name: "Tennis Balls", rentPrice: 75 },
      { name: "Tennis Shoes", rentPrice: 180 },
      { name: "Tennis Bag", rentPrice: 120 }
    ],
    "Baseball": [
      { name: "Baseball Bat", rentPrice: 120 },
      { name: "Baseball Glove", rentPrice: 150 },
      { name: "Baseballs", rentPrice: 45 },
      { name: "Baseball Cap", rentPrice: 75 }
    ],
    "Golf": [
      { name: "Golf Clubs", rentPrice: 225 },
      { name: "Golf Balls", rentPrice: 75 },
      { name: "Golf Shoes", rentPrice: 180 },
      { name: "Golf Bag", rentPrice: 150 },
      { name: "Golf Gloves", rentPrice: 120 }
    ],
    "Fitness": [
      { name: "Dumbbells", rentPrice: 90 },
      { name: "Yoga Mat", rentPrice: 75 },
      { name: "Resistance Bands", rentPrice: 120 },
      { name: "Jump Rope", rentPrice: 60 },
      { name: "Exercise Ball", rentPrice: 105 }
    ],
    "Cycling": [
      { name: "Bicycle", rentPrice: 300 },
      { name: "Helmet", rentPrice: 75 },
      { name: "Bike Lock", rentPrice: 45 },
      { name: "Cycling Shoes", rentPrice: 150 }
    ],
    "Running": [
      { name: "Running Shoes", rentPrice: 180 },
      { name: "Running Shorts", rentPrice: 105 },
      { name: "Water Bottle", rentPrice: 30 },
      { name: "Reflective Gear", rentPrice: 75 }
    ],
    "Swimming": [
      { name: "Swimsuit", rentPrice: 120 },
      { name: "Swim Goggles", rentPrice: 75 },
      { name: "Swim Cap", rentPrice: 45 },
      { name: "Kickboard", rentPrice: 90 },
      { name: "Fins", rentPrice: 105 }
    ],
    "Outdoor Recreation": [
      { name: "Camping Tent", rentPrice: 225 },
      { name: "Hiking Boots", rentPrice: 150 },
      { name: "Backpack", rentPrice: 120 },
      { name: "Sleeping Bag", rentPrice: 180 }
    ]
    // Add more categories and equipment as needed
  };
  
function CategoryItems(props) {

    const navigate = useNavigate()


    const {category}=useParams();
    const items = equipmentList[category] || [];
    
    const [isOpen, setOpen]=useState(false);
    const [selectedItem, setItem]=useState('');
    const [price, setPrice]=useState(100);
    const [quantity, setQuantity]=useState(1);
    const [date, setDate]=useState('');
    
    const handleRent=(item, price)=>{
        setItem(item);
        setPrice(price);
        console.log(price)
        setOpen(true);
    };
    
    
    const closeModal = () => {
        // console.log("Hello");
        setOpen(false);
    }

    
    const handleSubmit = async (item, fdate, fquantity) => {
        // e.preventDefault(); 
        setDate(fdate);
        setQuantity(fquantity);
        try {
        
        const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
        const response = await axios.post("http://localhost:3001/rent/rentItem", {
            category: category,
            item: item,
            quantity: quantity,
            amount: price,
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
        <div className="App-header" style={{paddingTop:"5%"}}>
            <div style={{ alignItems:"center", justifyContent:"center", paddingLeft:"2%"}}>
                
                <Row xs={1} sm={2} md={3} className="g-4" style={{alignItems:"center", justifyContent:"center"}}>
                    {(items).map((item, index) => (
                    <Col key={index}>
                        <Card className="card" data-bs-theme='dark' onClick={() => {}} style={{ cursor: 'pointer', width: "70%", height:"90%", justifyContent:"center", alignItems:"center"}}>
                        <Card.Body>
                            <Card.Title>
                                <CategoryItem key={index} index={index} item={item.name} price={item.rentPrice} handleRent={handleRent}/>
                            </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
                
                { isOpen ? <RentForm list={items} item={selectedItem} handleClose={closeModal} isOpen={isOpen} handleSubmit={handleSubmit} setQuantity={setQuantity} setDate={setDate} date={date} quantity={quantity}/>: null }
            
            </div>
        </div>
    )
}

export default CategoryItems