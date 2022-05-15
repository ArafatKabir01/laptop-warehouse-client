import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const hendleSignOut = () => signOut(auth)
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className='text-info fs-4' href="#home">Doctor Room</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav >
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="/">Home</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="about">About Me</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="booking">Booking</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="blog">Blog</Link>
                    {
                              user ? 
                             <Button onClick={hendleSignOut} style={{marginLeft:'10px'}}>Sing Out</Button> :
                             <Link className='text-decoration-none ms-4 text-info fs-5' to="login">LogIn</Link>
                        }
                        {
                              !user ? 
                              <Link className='text-decoration-none ms-4 text-info fs-5' to="signup">SignUp</Link> : ''
                        }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;