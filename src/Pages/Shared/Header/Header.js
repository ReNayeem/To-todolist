import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='brand-name' as={Link} to="/"><img className='brand-image' src={logo} alt="" />  To-TodoList</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link className='nav-title text-center' as={Link} to="/">Home</Nav.Link> */}
                        </Nav>
                        <Nav className='navbar-link'>
                            {
                                user && <>
                                    <Nav.Link className='nav-title' as={Link} to="addToList">
                                        Add To List
                                    </Nav.Link>
                                    <Nav.Link className='nav-title' as={Link} to="myList">
                                        My List
                                    </Nav.Link>
                                </>
                            }
                            {
                                user ? <button className='border-0' onClick={handleSignOut}>Sign out</button> :
                                    <Nav.Link className='nav-title' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;