import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";
import axios from 'axios';


const Login = ({ onUpdate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3001/user/login", {username,password})
      const user = response.data
      console.log(user)

      window.localStorage.setItem('token', user.token)
      
      setUsername('')
      setPassword('')

      onUpdate(true)
      navigate("/Rent")
    } catch (exception) {
      if(exception.response.status==401)
      {
        alert("Incorrect credentials, try again!!")
        setUsername('')
        setPassword('')
      }
    }
  };

  const handleRegister = () => {
    
    navigate("/register")    
  };

  return (
    <div className="App-header" style={{textAlign:"center", paddingTop:"1%"}}>
      <div className="container mt-5" style={{width:"35%", textAlign:'center', justifyContent: "center", alignItems: "center", height:'50%', border:'2px solid black', padding:'3%', paddingTop:"2%", boxShadow:'3px 3px 2px 3px gray', borderRadius:"5%", background:"#2b3035", color:'white'}}>
        <h2>Login</h2>
        <br />
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formUsername">
            {/* <Form.Label>Username:</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formPassword">
            {/* <Form.Label>Password:</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br></br>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        
      </div>
      <br />
      <p className="mt-3">
          Do not have an account?{' '}
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleRegister}>
            Register here
          </span>
        </p>
    </div>
  );
};

export default Login;