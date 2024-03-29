import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';

import '../Components/css/Navigation.css'

function NavBar() {

    return <>
        
        {['xxxl'].map((expand) => (
            <Navbar key={expand} expand={expand} fixed="top" className=" bg-light navbar w-100  text-dark ">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-dark' style={{padding:"1rem"}}><b>HEYRAM INFRASTRUCTURE</b></Navbar.Brand>
                    <Navbar.Toggle style={{color:"white"}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas style={{color:"white"}}
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header className='bg-light text-dark p-3'  closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                OUR SERVICES
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='bg-dark text-white'>
                            <Nav className="justify-content-end text-white flex-grow-1 pe-3">
                                <Nav.Link className=' text-white' href='/home' >HOME</Nav.Link>
                                <Nav.Link className='text-white' href="/genz">GEN-Z AI</Nav.Link>
                                <Nav.Link className='text-white' href="/digital-service">DIGITAL SERVICES</Nav.Link>
                                <Nav.Link className='text-white' href="/aws">CLOUD SERVICES</Nav.Link>
                                <Nav.Link className='text-white' href="#action2">CRYPTO MINING</Nav.Link>
                                <Nav.Link className='text-white' href="#action2">AGRICULTURE </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        
    </>
}

export default NavBar