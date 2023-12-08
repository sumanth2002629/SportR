import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()


  const handleRegister = async(e) => {
    e.preventDefault();
    // Add your registration logic here.
    if(password!=confirmPassword) 
    {
      alert("Your password doesn't match with the re-entered password.")
    }

    try {
      const response = await axios.post("http://localhost:3001/user/register", {username, whatsappNumber, password})
      setUsername('')
      setPassword('')
      setWhatsappNumber("")
      setConfirmPassword("")
      navigate("/login")
    } catch (e) {
      if(e.response.status==409) alert("User with the username "+ username+" already exists!!")
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
