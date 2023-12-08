// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryItem from './CategoryItem';
import { useParams, useNavigate } from 'react-router-dom';
 

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
    console.log(category);
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {(items).map((item, index) => (
                <Col key={item}>
                    <Card onClick={() => {}} style={{ cursor: 'pointer' }}>
                    <Card.Body>
                        <Card.Title>
                            <CategoryItem key={index} index={index} item={item}/>
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

export default CategoryItems