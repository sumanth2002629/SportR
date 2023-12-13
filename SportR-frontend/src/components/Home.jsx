import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/Home.css"
import {useNavigate} from "react-router-dom"


const Home = ({login}) => {

  const navigate = useNavigate()
  const Rent = ()=>{
    login?navigate("/Rent"):navigate("/login")
  }

  return (
    <div className="App-header" style={{justifyContent:"center", alignItems:"center", textAlign:"center", paddingTop:"10%", paddingBottom:"15%"}}>
      <div className="" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Container>
          <Row>
            <Col>
              <h1>Take any Sport equipment for Rent.</h1>
              <br></br>
              <br />
              <h5>Explore a world of sports activities!</h5>
              <br></br>
              <br></br>
              <br />
              <Button variant="dark" onClick={Rent}>Take for Rent</Button>
            </Col>
            {/* <Col>
              
              <div className="background-image"></div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
