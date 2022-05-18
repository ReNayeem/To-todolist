import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='brand-name' as={Link} to="/"><img className='brand-image' src={logo} alt="" />  To-TodoList</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-title text-center' as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        <Nav className='navbar-link'>
                            <Nav.Link className='nav-title' as={Link} to="addToList">
                                Add To List
                            </Nav.Link>
                            <Nav.Link className='nav-title' as={Link} to="myList">
                                My List
                            </Nav.Link>
                            <Nav.Link className='nav-title' as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;