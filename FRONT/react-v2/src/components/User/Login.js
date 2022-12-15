// DEPENDENCIAS
import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";

// COMPONENTES
import * as LoginServer from '../../server/LoginServer'; 

const Login = () =>{
    // VARIABLES DEL COMPONENTE
    const history = useNavigate();
    const params = useParams();
    // ESTADO INICIAL
    const initialState = { mail: "", password: "" };

    // HOOKS 
    const [ingreso, setIngreso] = useState(initialState);

    // GUARDA LA INFO DE LOS INPUTS
    const handleInputChange = (e) => {
        // OBSERVAR FUNCIONAMIENTO CON LOS CONSOLE.LOG()
        console.log(e.target.name);
        console.log(e.target.value);
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN INGRESO Y RENDERIZA EN EL INPUT
        setIngreso({ ...ingreso, [e.target.name]: e.target.value });
        console.log(ingreso);
    };

    useEffect(() => {
    if (params.mail) {
        setIngreso(params.mail);
    }
    // eslint-disable-next-line
    }, []);

     // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
     const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          let res;
          if (!params.mail) {
            console.log("RES: ", ingreso);
            res = await LoginServer.loginUsuario(ingreso);
             console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.mail !== '') {
              history("/");
              setIngreso(ingreso);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
      };

  return (
  <div className="col-md-6 mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <h3 className='display1 mb-3 text-left'>Sign In</h3>
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
            required="required"/>
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
            aria-describedby="passwordHelpBlock"/>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuerdame
            </label>
          </div>
        </div>
        <div className="d-grid p-4">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste tu <a href=" ">contraseña?</a>
        </p>

      </form>
    </div>
  )
  }

export default Login