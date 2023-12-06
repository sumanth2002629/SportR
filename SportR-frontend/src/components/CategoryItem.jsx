import React from "react";

function CategoryItem(props) {
    return (
        <div className="item">
            <h3 className="itemName">{props.item}</h3>
            
        </div>
    );
}

export default CategoryItem;