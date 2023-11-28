import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

const Login = ({ onUpdate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { username, password });
    onUpdate(true)

    navigate("/")
  };

  const handleRegister = () => {
    // Add your registration logic here
    navigate("/register")
    console.log('Redirecting to registration page');
    
  };

  return (
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

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

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