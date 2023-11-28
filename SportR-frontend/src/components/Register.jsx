import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

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
    navigate("/login")
  };

  return (
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
            type="text"
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
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
