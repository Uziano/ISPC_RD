// DEPENDENCIAS
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// COMPONENTES
import { conectUsuario } from "../../server/LoginServer";

const Login = () => {
  const history = useNavigate();
  const initialState = { username: "", password: "" };

  // Hooks
  const [ingreso, setIngreso] = useState([]);

  const handleInputChange = (e) => {
    setIngreso({ ...ingreso, [e.target.name]: e.target.value });
    console.log(ingreso);
  };

  // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await conectUsuario(ingreso);
      const data = await res.json();
      // console.log(data);
      if (data.id) {
        history(`/notas/${data.id}/`);
      } else {
        alert("Acesso denegado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <h3 className="display1 mb-3 text-left">Sign In</h3>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="Usuario"
            value={ingreso.username}
            onChange={handleInputChange}
            required="required"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={ingreso.password}
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div className="d-grid p-4">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
          <hr></hr>
          <Nav.Link href="/registrarse">Soy Nuevo... Registrame!</Nav.Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
