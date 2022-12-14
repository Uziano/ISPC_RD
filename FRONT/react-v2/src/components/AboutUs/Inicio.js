import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Inicio() {
  return (
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
      <Container>

      </Container>
        <Row className="px-5 my-5 ">
          <h1 className="px-4 my-3 text-center">
            Organizar tus tareas, es organizar tu vida
          </h1>
          <p className="px-5 mt-3 text-center">Organizandote traeras paz a tu vida. Recuerdalo todo con tus notas.</p>
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
              <h2 className="font-weigh-light">Cumple con todas las fechas de tus tareas</h2>
              <p className="px-2 mt-4">En nuestra página podrás crear, modificar y eliminar notas, todo desde un mismo lugar
          para mantenerte al día con tus obligaciones.</p>
              
            </Col>
          </Row>
        </Container>  
    </main>
  );
}

export default Inicio;
