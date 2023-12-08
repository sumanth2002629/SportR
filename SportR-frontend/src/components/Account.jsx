import {
 useNavigate
} from 'react-router-dom'



const Account = (props) => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>My Account</h1>
      <div>
        <h3>My rented items</h3>
        <h3>Change password</h3>
        <h3>Delete account</h3>
      </div>

    </div>
  );
};

export default Account;
