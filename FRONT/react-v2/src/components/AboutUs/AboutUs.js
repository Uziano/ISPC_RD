import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Redes from "./Redes";

function AboutUs() {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <img
            className="d-block w-100"
            src={require("../../assets/AboutUs.png")}
            alt="First slide"
          />
        </div>
        <Container>
          <Row className="px-5 my-5">
            <Col sm={6}>
              <div className="card shadow-sm">
                <Col xs={6} md={6}>
                  <Image
                    className="d-block w-100 m-5"
                    src={require("../../assets/perfil.jpg")}
                    alt=""
                    roundedCircle
                  />
                </Col>
                <div className="card-body">
                  <h3 className="card-text"> María Candela Martínez</h3>
                  <p className="card-text">
                    Soy programadora full stack, cursando 3er año como Analista
                    de Sistemas y aprendiendo como manejarme en proyectos en
                    equipo
                  </p>
                  <Redes
                    link1={
                      "https://www.linkedin.com/in/mar%C3%ADa-candela-mart%C3%ADnez-21881b240/"
                    }
                    link2={"https://github.com/CandeMartt"}
                  />
                </div>
              </div>
            </Col>

            <Col sm={6}>
              <div className="card shadow-sm">
                <Col xs={6} md={6}>
                  <Image
                    className="d-block w-100 m-5"
                    src={require("../../assets/perfil_1.jpg")}
                    alt=""
                    roundedCircle
                  />
                </Col>
                <div className="card-body">
                  <h2 className="card-text">Luciano Peralta Defazio</h2>
                  <p className="card-text">
                    Soy programador full stack, me manejo mas que todo en el
                    front y estoy aprendiendo métodos nuevos para mejorar mis
                    habilidades en back.
                  </p>
                  <Redes
                    link2={"https://github.com/Uziano"}
                    link1={
                      "https://www.linkedin.com/in/luciano-nicolas-ram%C3%B3n-peralta-defazio-b04838192/"
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default AboutUs;
