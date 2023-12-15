import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from 'react-router-dom'

import Home from "./components/Home"

import Register from "./components/Register"
import Login from "./components/Login"
import Rent from "./components/Rent"

import Account from "./components/Account"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.css'
import CategoryItems from './components/CategoryItems'


function App() {
  const [login, setLogin] = useState(window.localStorage.getItem('token')?true:false);

  
  

  return (
    <Router >
        <div>
          
          <Navbar expand="lg" className='bg-body-tertiary' bg='dark' data-bs-theme='dark' style={{color:"white"}}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand className='me-auto'>
                    SportR
                </Navbar.Brand>
                <Nav className="ms-auto">
                  <Nav.Link className='navlink'><Link to="/" className="nav-link">Home</Link></Nav.Link>
                  
                  <Nav.Link className='navlink'>
                    {
                      login?<Link to="/rent" className="nav-link">Rent</Link>:<Link to="/login" className="nav-link">Login</Link>
                    }
                  </Nav.Link>
                  
                  <Nav.Link className='navlink'>
                    {
                      login?<Link to="/myaccount" className="nav-link">My Account</Link>:<></>
                    }
                  </Nav.Link>
                  <Nav.Link className='navlink'>
                    {
                      login?<Link onClick={()=>{setLogin(false); window.localStorage.removeItem('token');}} className="nav-link" to="/">Logout</Link>:<></>
                    }
                  </Nav.Link>
                </Nav>  
              </Navbar.Collapse>
            </Container>
          </Navbar>         
        </div>

        <Routes>
          <Route path="/" element={<Home login={login}/>}/>
          <Route path="/login" element={<Login onUpdate={setLogin}/>}/>
          <Route path="/rent" element={<Rent loggedin={login}/>}/>
          <Route path="/categories/:category" element={<CategoryItems loggedin={login} setLogin={setLogin}/>}/>
          <Route path="/myaccount" element={<Account loggedin={login} setLogin={setLogin}/>}/>
          <Route path="/register" element={<Register/>}/>  
          
        </Routes>
    </Router>
      
  )
}

export default App
