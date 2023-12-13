import {
 useNavigate
} from 'react-router-dom'
import { Nav, Tab, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios'
import React from 'react'

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

  const handleRent = async(e) => {
    e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.get("http://localhost:3001/rent/rentedItems", config)
  
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

  return (
    <div className='App-header' style={{paddingTop:"2%", paddingBottom:"15%",textAlign:'center', justifyContent: "center", alignItems: "center"}}>
      <h1>My Account</h1>
      <br />
      <div className='container' style={{textAlign:'center', justifyContent: "center", alignItems: "center", height:'50%', border:'2px solid black', padding:'3%', paddingTop:"2%", boxShadow:'3px 3px 2px 3px gray', borderRadius:"5%", background:"#2b3035", color:'white'}}>
        {/* <br />
        <h3>Change personal details</h3>
        <br />
        <br />
        <div>
        <Button variant="primary" type="submit" onClick={handleRent}>
            getRentedItems
        </Button>
        <br />
        <br />
          <h3>Change password</h3>
          <br />
          <br />
          <h3>Delete account</h3>
          <br />
        </div> */}
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
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </div>
    </div>
  );
};



export default Account;
