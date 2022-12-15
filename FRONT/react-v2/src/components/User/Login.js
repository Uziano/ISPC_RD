// DEPENDENCIAS
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

// COMPONENTES
import {conectUsuario} from '../../server/LoginServer';

const Login = () => {
  const history = useNavigate();
  const initialState = { mail: "", password: "" };

  // Hooks
  const [ingreso, setIngreso] = useState(initialState);

  const handleInputChange = (e) => {
    setIngreso({ ...ingreso, [e.target.name]: e.target.value });
    //Muestra los valores ingresados
    console.log(ingreso);
  };


  // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL
  //FORM que enviara el usuario al servidor para grabarlo en la base de datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await conectUsuario(usuario);
      const data = await res.json();
      console.log(data);
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3 className="display1 mb-3 text-left">Sign In</h3>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="text"
            className="form-control"
            name="mail"
            id="mail"
            placeholder="Correo"
            value={ingreso.mail}
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
          <button type="submit" className="btn btn-secondary">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
