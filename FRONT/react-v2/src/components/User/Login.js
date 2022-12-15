// DEPENDENCIAS
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// COMPONENTES
import * as LoginServer from "../../server/LoginServer";

const Login = () => {
  const history = useNavigate();
  const params = useParams();
  const initialState = { mail: "", password: "" };

  // Hooks
  const [ingreso, setIngreso] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setIngreso({ ...ingreso, [e.target.name]: e.target.value });
    //Muestra los valores ingresados
    console.log(ingreso);
  };

  useEffect(() => {
    if (params.mail) {
      setIngreso(params.mail);
    }
    // eslint-disable-next-line
  }, []);

  // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL
  //FORM que enviara el usuario al servidor para grabarlo en la base de datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (!params.mail) {
        console.log("RES: ", ingreso);
        res = await LoginServer.loginUsuario(ingreso);
        console.log("RES: ", res);
        const data = await res.json();
        console.log("Data: ", data);

        // if (data.mail !== "") {
        //   history("/");
        //   setIngreso(ingreso);
        // }
      }

      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 mx-auto p-4">
      <form onSubmit={handleSubmit}>
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
          <Nav.Link href="/registrarse">Soy Nuevo... Registrame!</Nav.Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
