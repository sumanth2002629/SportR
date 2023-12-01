import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/Home.css"
import {useNavigate} from "react-router-dom"


const Home = ({login}) => {

  const navigate = useNavigate()

  const Rent = ()=>{
    login?navigate("/Rent"):navigate("/login")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <h1>Take any Sport equipment for Rent.</h1>
              <br></br>
              <h5>Explore a world of sports activities!</h5>
              <br></br>
              <br></br>
              <Button variant="light" onClick={Rent}>Take for Rent</Button>
            </Col>
            <Col>
              {/* You can replace the image URL with your own sports-related image */}
              <div className="background-image"></div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Home;
