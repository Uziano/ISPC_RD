// Dependencias
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

// Componentes
import * as LoginServer from "../../server/LoginServer";
import NavBarLogin from "../Navbar/NavBarLogin";

const Login = () => {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [ingreso, setIngreso] = useState([initialState]);

  const handleInputChange = (e) => {
    setIngreso({ ...ingreso, [e.target.name]: e.target.value });
    // console.log(ingreso);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await LoginServer.loginUsuario(ingreso);
      const data = await res.json();
      
      //id user
      console.log(data.id);
      if (data.id){
        navigate(`/notas/${data.id}/`)
      } else {
        alert('Usuario o Contraseña Incorrectos')
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <NavBarLogin />
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
    </>
  );
};

export default Login;
