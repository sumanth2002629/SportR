import React from "react";

function Category(props) {
    return (
        <div className="category">
            <h3 className="categoryName">{props.category}</h3>
            
        </div>
    );
}

export default Category;