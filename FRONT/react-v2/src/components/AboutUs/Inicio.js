// Dependencias
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";

// Componentes
import NavBar from "../Navbar/NavBar";

function Inicio() {
  return (
    <>
      <NavBar />
      <main>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/Header.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/Header2.png")}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="carousel-caption text-end">
                <h1>Agregar Notas</h1>
                <p>Para agregar una nueva tarea haga click a continuación:</p>
                <button className="btn123">Ver más</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/Header3.png")}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="carousel-caption text-start">
                <h1>Listar tareas</h1>
                <p>Para agregar una nueva tarea haga click a continuación: </p>
                <button className="btn123">Ver más</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container></Container>
        <Row className="px-5 my-5 ">
          <h1 className="titulo px-4 my-3 text-center">
            Organizar tus tareas, es organizar tu vida
          </h1>
          {/* <p className="letra px-5 mt-3 text-center">
            Organizandote traeras paz a tu vida. Recuerdalo todo con tus notas desde un solo lugar.
          </p>
          <div className="col-md-6 mx-auto p-4">
            <button type="submit" className="btn123 btn-primary d-block w-100">
            <Nav.Link href="/registrarse"> Registrarse</Nav.Link>
            </button>
            <Nav.Link href="/login" className="display1 mt-3 mb-3 text-center">
              ¿Ya tienes cuenta? Inicia Sesión
            </Nav.Link>
          </div> */}
        </Row>
        <Container className="px-5 my-3">
          <Row className="px-4 my-5">
            <Col sm={6}>
              <Image
                src={require("../../assets/toDoList.jpg")}
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={6}>
              <h5 className="subtitulo font-weigh-light mt-4">
                CUMPLE CON TODAS LAS FECHAS DE TUS TAREAS
              </h5>
              <p className="px-2 mt-2">
                Crear, modificar y eliminar notas, todo desde un mismo lugar
                para mantenerte al día con tus obligaciones.
              </p>
              <hr></hr>
              <h5 className="subtitulo font-weigh-light">
                TRABAJA DESDE CUALQUIER LUGAR
              </h5>
              <p className="px-2 mt-2">
                Mantenga la información importante siempre al alcance de su mano
              </p>
              <hr></hr>
              <h5 className="subtitulo font-weigh-light">
                CONVIERTE LAS TAREAS PENDIENTES EN FINALIZADAS
              </h5>
              <p className="px-2 mt-2">
                Cambie el estado a sus notas para mantenerlas actualizadas.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Inicio;
