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
            <Button varient="light" as="input" type="submit" value="Rent" onClick={()=>props.handleRent(props.item)}/>
            
        </div>
    );
}

export default CategoryItem;