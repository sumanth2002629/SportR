import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/Home.css"
import {useNavigate} from "react-router-dom"


const Home = ({login}) => {

  const navigate = useNavigate()
  const Rent = ()=>{
    login?navigate("/Rent"):navigate("/login")
  }

  return (
    <div className="App-header" style={{justifyContent:"center", alignItems:"center", textAlign:"center", paddingTop:"5%", paddingBottom:"15%"}}>
      <div className="container mt-5" style={{width:"50%", textAlign:'center', justifyContent: "center", alignItems: "center", border:'2px solid black', boxShadow:'3px 3px 2px 3px gray', borderRadius:"5%", background:"#2b3035", color:'white', padding:"3%"}}>
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
              <Button variant="light" onClick={Rent}>Take for Rent</Button>
            </Col>
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
