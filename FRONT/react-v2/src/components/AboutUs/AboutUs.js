import React from 'react'
import { Row, Container, Col, Image} from 'react-bootstrap';

function AboutUs() {
  return (
    <main>
        <div>
            <img
                className="d-block w-100"
                src={require("../../assets/AboutUs.png")}
                alt="First slide"
                />
        </div>
        <Container>
            <Row className='px-5 my-5'>
                <Col sm={5}>
                    <div className="card shadow-sm">
                        <Col xs={6} md={6}>
                            <Image
                                className="d-block w-100 m-5"
                                src={require("../../assets/perfil.jpg")}
                                alt=""
                                roundedCircle/>
                        </Col>
                            <div className="card-body">
                                <h3 className="card-text"> María Candela Martínez</h3>
                                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <div className="card shadow-sm">
                        <Col xs={6} md={6}>
                                <Image
                                    className="d-block w-100 m-5"
                                    src={require("../../assets/perfil.jpg")}
                                    alt=""
                                    roundedCircle/>
                            </Col>
                            <div className="card-body">
                                <h2 className="card-text">Ironman</h2>
                                <p className="card-text">Iron Man es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee y el guionista Larry Lieber. Los artistas Don Heck y Jack Kirby fueron los encargados de su diseño.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <p><a href="ironman.html" className="btn123">Ver</a></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
            </Row>     
        </Container>
            
    </main>
        
    );
}

export default AboutUs;