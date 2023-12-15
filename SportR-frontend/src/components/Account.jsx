import {
 useNavigate
} from 'react-router-dom'
import { Form, Nav, Tab, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import RentedItems from './RentedItems';
import Accordion from 'react-bootstrap/Accordion';

const MyCard=(props)=>{
  return (
    <div className='container'>
      <Card className="card" data-bs-theme="light" style={{ cursor: 'pointer', color: props.color}}>
        <Card.Body>
            <Card.Title>
                {props.text}
            </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

const Account = (props) => {

  const navigate = useNavigate()
  useEffect(() => {
    handleRent();
  },[]);
  const [rentedItems, setRentedItems] = useState([]);
  const [password, setPassword] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [delPassword, setDelPassword] = useState('');

  const handleRent = async () => {
    // e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.get("http://localhost:3001/rent/rentedItems", config)
          setRentedItems(res.data)
          console.log("hello ", rentedItems)
          console.log(res.data)
    }
    catch(e){
      if(e.response.status==403)
      {
          alert("Access Forbidden!!");
      }
      else if(e.response.status==404)
      {
          alert("No rented items!!");items
      }
      else if(e.response.status==400)
      {
          alert("Token expired! Login again");
          props.setLogin(false);
          navigate("/login");
      }
    }
  
  }

  const handleChangePhone = async () => {
    // e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.post("http://localhost:3001/user/changePhone", {password: password, newPhone: newPhone}, config)
          setNewPhone("")
          setPassword("")
          console.log(res.status)
          alert("Phone number changed successfully!");
          navigate("/myaccount")
    }
    catch(e){
      if(e.response.status==401)
      {
          alert("Invalid Password!!");
      }
      else if(e.response.status==404)
      {
          alert("User not found");
      }
      else if(e.response.status==409)
      {
          alert("Something went wrong !");
          
      }
      else{
        alert("Something went wrong !!");
      }
      
    }
  
  }

  const handleChangePassword = async () => {
    // e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.post("http://localhost:3001/user/changePassword", {oldPassword: oldPassword, newPassword: newPassword}, config)
          setOldPassword("")
          setNewPassword("")
          console.log(res.status)
          alert("Password changed successfully!");
          navigate("/myaccount")
    }
    catch(e){
      if(e.response.status==401)
      {
          alert("Invalid Password!!");
      }
      else if(e.response.status==404)
      {
          alert("User not found");
      }
      else if(e.response.status==409)
      {
          alert("Something went wrong !");
          
      }
      else{
        alert("Something went wrong !!");
      }
      
    }
  
  }

  const handleDeleteAccount = async () => {
    // e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.post("http://localhost:3001/user/deleteUser", {password: delPassword}, config)
          props.setLogin(false)
          navigate("/");
          // setDelPassword("")
          
          // console.log(res.status)
          // alert("Account deleted.");
    }
    catch(e){
      if(e.response.status==401)
      {
          alert("Invalid Password!!");
      }
      else if(e.response.status==404)
      {
          alert("User not found");
      }
      else if(e.response.status==409)
      {
          alert("Something went wrong !");
          
      }
      else{
        alert("Something went wrong !!");
      }
      
    }
  
  }

  return (
    <div className='App-header' style={{paddingTop:"2%", paddingBottom:"15%",textAlign:'center', justifyContent: "center", alignItems: "center"}}>
      <h1>My Account</h1>
      <br />
      <div className='container' style={{textAlign:'center', justifyContent: "center", alignItems: "center", height:'50%', border:'2px solid black', padding:'3%', paddingTop:"2%", boxShadow:'3px 3px 2px 3px gray', borderRadius:"5%", background:"#2b3035", color:'white'}}>
        
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <MyCard text={"My rented items"} color={"black"}/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <MyCard text={"Change account details"} color={"black"}/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <MyCard text={"Change Password"} color={"black"}/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <MyCard text={"Delete account"} color={"red"}/>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  
                    
                      <div>
                        {rentedItems.length>0?
                        <Accordion>
                          {rentedItems.map((item, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                              <Accordion.Header>{item.item}</Accordion.Header>
                              <Accordion.Body> <RentedItems key={index} quantity={item.quantity} rentedTill={item.rentedTill} rentedOn={item.rentedOn}s/> </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>:<h3>No items rented yet</h3>}
                      </div>
                      
                  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Form onSubmit={()=>{handleChangePhone()}}>
                    
                    <Form.Group controlId="formWhatsappNumber">
                      {/* <Form.Label>WhatsApp Number:</Form.Label> */}
                      <Form.Control
                        type="text"
                        placeholder="New WhatsApp number"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formPassword">
                      {/* <Form.Label>Password:</Form.Label> */}
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit" style={{}}>
                      Change
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Form onSubmit={()=>{handleChangePassword()}}>
                    
                    <Form.Group controlId="OldPassword">
                      {/* <Form.Label>WhatsApp Number:</Form.Label> */}
                      <Form.Control
                        type="password"
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formPassword">
                      {/* <Form.Label>Password:</Form.Label> */}
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit" style={{}}>
                      Change
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  Are you sure you want to delete your account?
                  <br />
                  This is an irreversible action.
                  <br />
                  <Form onSubmit={()=>{rentedItems.length==0?handleDeleteAccount():alert("You have rented items. Cannot delete account")}}>
                    
                    <Form.Group controlId="DelPassword">
                      <Form.Label>Enter your password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={delPassword}
                        onChange={(e) => setDelPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    
                    <br></br>
                    <Button variant="danger" type="submit" style={{color:"white"}}>
                      Delete my account
                    </Button>
                  </Form>
                      
                      
                  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </div>
    </div>
  );
};



export default Account;
