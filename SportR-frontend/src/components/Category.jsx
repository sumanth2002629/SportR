import React from "react";
import {
    useNavigate
   } from 'react-router-dom'

function Category(props) {

    const navigate = useNavigate()

    return (
        <div className="category">
            <h3 className="categoryName">{props.category}</h3>
            
        </div>
    );
}

export default Category; 