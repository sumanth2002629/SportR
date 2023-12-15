// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from './Category';
import {useNavigate} from "react-router-dom"
import "../styles/card.css"
const categories = [
    'Soccer',
    'Basketball',
    'Tennis',
    'Baseball',
    'Golf',
    'Fitness',
    'Cycling',
    'Running',
    'Swimming',
    'Outdoor Recreation',
    // Add more categories as needed
  ];
  
function Rent(props) {
    
   

    const navigate = useNavigate();
      
    const handleCategorySelect = category => {
        navigate('/categories/'+category);
        
    };

    return (
        <div className='App-header' style={{paddingTop:"5%"}}>
            <div style={{alignItems:"center", justifyContent:"center", paddingLeft:"2%"}}>
                <Row xs={1} sm={2} md={3} className="g-4" style={{alignItems:"center", justifyContent:"center"}}>
                    {categories.map((category, index) => (
                    <Col key={category} style={{}}>
                        <Card className="card" data-bs-theme="dark" onClick={() => {handleCategorySelect(category)}} style={{ cursor: 'pointer', width:"80%"}}>
                        <Card.Body>
                            <Card.Title>
                                <Category key={index} index={index} category={category}/>
                            </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </div>
        
        </div>
    )
}

export default Rent