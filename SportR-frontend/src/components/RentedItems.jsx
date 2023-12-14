
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'
import React, {useEffect, useState} from 'react'

const RentedItems=(props)=>{
    return (
        <div style={{justifyContent:'center', textAlign:"center", alignItems:"center"}}>
            <h5>Quantity: {props.quantity}</h5>
            <h5>Rented on: {props.rentedOn}</h5>
            <h5>Rented till: {props.rentedOn}</h5>
        </div>
    );
}

export default RentedItems;