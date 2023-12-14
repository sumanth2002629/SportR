import {
    useNavigate
   } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function CategoryItem(props) {

    const navigate = useNavigate()

    return (
        <div className="item" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <h3 className="itemName">{props.item}</h3>

            <br />
            <h5 className='itemPrice'>Rent per day: Rs{props.price}</h5>
            <br />
            <Button varient="light" as="input" type="submit" value="Rent" onClick={()=>props.handleRent(props.item, props.price)}/>
            
        </div>
    );
}

export default CategoryItem;