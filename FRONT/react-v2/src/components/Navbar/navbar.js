import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavBar() {
  return (
    <>
      <Navbar variant="dark" className="navBg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../../assets/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Notas
          </Navbar.Brand>
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
                <Nav.Link href="/inicio">Inicio</Nav.Link>
                <Nav.Link href="/about">Nosotros</Nav.Link>
                <Nav.Link href="/home">Agregar notas</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
