// Dependencias
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

// Componentes
import NavBarLogin from "../Navbar/NavBarLogin"

export default function LoginRegistro() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/usuario/usuario-list/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          username: username,
          mail: mail,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setUsername("");
        setMail("");
        setPassword("");
        setMessage("Usuario creado correctamente.");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <NavBarLogin />
      <div className="col-md-6 mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <h3 className="display1 mb-3 text-left">Sign In</h3>
          {/* Correo */}
          <Form.Group className="mb-3" controlId="formMail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              onChange={(e) => setMail(e.target.value)}
              type="email"
              value={mail}
              placeholder="example@gmail.com"
            />
          </Form.Group>

          {/* Usuario */}
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              placeholder="Usuario"
            />
          </Form.Group>

          {/*Contraseña*/}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Contraseña"
            />
          </Form.Group>

          <div className="d-grid p-4">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            <hr></hr>
            <Nav.Link href="/login">No soy nuevo... Logueame</Nav.Link>
          </div>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </>
  );
}
