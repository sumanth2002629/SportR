import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering with:', { username, whatsappNumber, password });

    if(password!=confirmPassword) 
    {
      alert("Your password doesn't match with the re-entered password.")
    }
    else
    {
      navigate("/login")
    }
    
  };

  return (
    <div className="App-header">
      <div className="container mt-5">
        <h2>Register</h2>
        <Form onSubmit={handleRegister}>
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

          <Form.Group controlId="formWhatsappNumber">
            <Form.Label>WhatsApp Number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your WhatsApp number"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
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

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Re-enter Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
