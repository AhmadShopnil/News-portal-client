import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="ligth">
            <Container>
                <Navbar.Brand ><Link to='/'>News Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <div className='d-lg-none'>
                                    <LeftNav></LeftNav>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>

                            {/* <span className='me-2'>  {user?.displayName}</span>
                            <Button onClick={handleLogOut} variant="dark">Log Out</Button> */}

                            {
                                user?.uid ?
                                    <>
                                        <Button className='me-2' onClick={handleLogOut} variant="dark">Log Out</Button>
                                        <span >  {user?.displayName}</span>
                                    </>

                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/signup'>Sign UP</Link>
                                    </>
                            }

                        </>

                        <Nav.Link href="#deets">
                            {
                                user?.photoURLs ?
                                    <Image
                                        roundedCircle
                                        className='me-2'
                                        src={user?.photoURl}
                                        style={{ height: '35px' }}
                                    ></Image>
                                    : <FaUser></FaUser>
                            }

                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;