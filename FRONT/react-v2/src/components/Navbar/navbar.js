import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
  

        
function OffcanvasExample() {
    return (
    <>
        {['xxl'].map((expand) => (
        <Navbar  variant="dark"  className="navBg">
            <Container fluid>
            <Navbar.Brand href="#">NOTAS</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-`}
                aria-labelledby={`offcanvasNavbarLabel-expand-`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                    Menú
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <Nav.Link href="#action2">Agregar notas</Nav.Link>
                    <Nav.Link href="#action2">Listar notas</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </>
    );
}



export default OffcanvasExample;