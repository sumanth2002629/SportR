import {
 useNavigate
} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import axios from 'axios'



const Account = (props) => {

  const navigate = useNavigate()

  const handleRent = async(e) => {
    e.preventDefault();
    try{
          const config = {
            headers: { authorization: "Bearer "+window.localStorage.getItem('token') },
        }
  
          const res = await axios.get("http://localhost:3001/rent/rentedItems", config)
  
          console.log(res.data)
    }
    catch(e){
      if(e.response.status==403)
      {
          alert("Access Forbidden!!");
      }
      else if(e.response.status==404)
      {
          alert("No rented items!!");items
      }
      else if(e.response.status==400)
      {
          alert("Token expired! Login again");
          props.setLogin(false);
          navigate("/login");
      }
    }
  
  }

  return (
    <div>
      <h1>My Account</h1>
      <div>
      <Button variant="primary" type="submit" onClick={handleRent}>
          getRentedItems
      </Button>
        <h3>Change password</h3>
        <h3>Delete account</h3>
      </div>

    </div>
  );
};

export default Account;
