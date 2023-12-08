// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from './Category';
import {useNavigate} from "react-router-dom"
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
    // const [selectedCategory, setSelectedCategory] = useState(null);
   

    const navigate = useNavigate();
      
    const handleCategorySelect = category => {
        navigate('/categories/'+category);
        
    };

    return (
        <div>
        <Row xs={1} md={3} className="g-4">
            {categories.map((category, index) => (
            <Col key={category}>
                <Card onClick={() => {handleCategorySelect(category)}} style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Title>
                        <Category key={index} index={index} category={category}/>
                    </Card.Title>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        {/* {categories.map((category, index) => (
                        <Category key={index} index={index} category={category}/>
                    ))} */}
        </div>
    )
}

export default Rent