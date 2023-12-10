import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
// import "../styles/Home.css";
import axios from 'axios';


const Login = ({ onUpdate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
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
    // Add your registration logic here
    navigate("/register")    
  };

  return (
    <div className="App-header">
      <div className="container mt-5">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
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

        <p className="mt-3">
          Do not have an account?{' '}
          <span style={{ color: 'yellow', cursor: 'pointer' }} onClick={handleRegister}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;