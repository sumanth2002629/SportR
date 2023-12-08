import {
    useNavigate
   } from 'react-router-dom'

function CategoryItem(props) {

    const navigate = useNavigate()

    return (
        <div className="item">
            <h3 className="itemName">{props.item}</h3>
            
        </div>
    );
}

export default CategoryItem;