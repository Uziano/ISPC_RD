// Dependencias
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";
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
                <p>Agrega tus notas para estar al dia desde la pestaña "Agregar notas"</p>
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
                <p>Para ver todas tus notas ve al listado donde tambien podras ver detalles adicionales </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container></Container>
        <Row className="px-5 my-5 ">
          <h1 className="titulo px-4 my-3 text-center">
            Organizar tus tareas, es organizar tu vida
          </h1>
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
      <Footer/>
    </>
  );
}

export default Inicio;
