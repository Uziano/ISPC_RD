import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Inicio() {
  return (
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
            <button className="btn-black">Ver más</button>
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
            <button className="btn-black">Ver más</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
