import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src={require("../../assets/logo.png")}
              width="30"
              height="30"
              className="encabezado d-inline-block align-top"
            />{" "}
            Notas
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;