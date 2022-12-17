import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris."
                  </p>
                  <Redes />
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris."
                  </p>
                  <Redes />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default AboutUs;
